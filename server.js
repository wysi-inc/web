import { fastify as f } from "fastify";
import cors from "@fastify/cors";
import session from "@fastify/session";
import cookie from "@fastify/cookie";
import { v2, auth } from "osu-api-extended";
import mino from "beatsify";
import mysql from "mysql-commands";
import fetch from "node-fetch";
import badges from "./constants/badges.js";
import cache from "./constants/cache.js";
import "dotenv/config";

import jwt from "jsonwebtoken"

(async () => {
  const fastify = f({ logger: true });

  fastify.register(cors, {
    methods: ["GET", "POST"],
    origin: process.env.ORIGIN,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  });

  fastify.register(cookie);
  fastify.register(session, {
    cookieName: "cookiezi",
    secret: process.env.CLIENT_SECRET,
    cookie: {
      secure: process.env.SECURE_COOKIE,
    },
    expires: 1000 * 60 * 60 * 24 * 30,
  });

  const database = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });
  console.log("Connected to the database");

  await auth.login(process.env.CLIENT_ID, process.env.CLIENT_SECRET, [
    "public",
  ]);
  console.log("Logged into Application");

  setInterval(async () => {
    await auth.login(process.env.CLIENT_ID, process.env.CLIENT_SECRET, [
      "public",
    ]);
  }, 1000 * 60 * 60 * 24);

  fastify.get("/", async () => "Server is up");

  fastify.post("/login", async (req, res) => {
    const user = await getOwnData(await validateCode(req.body.code));
    if (user.authentication) return user;
    const jwtUser = {
      id: user.id,
      name: user.username,
      pfp: user.avatar_url
    };
    req.session.set("user", user.id);
    return { user, jwtUser: jwt.sign(jwtUser, process.env.CLIENT_SECRET) };
  });

  fastify.post("/logout", async (req) => {
    req.session.destroy();
    return { message: "Logged out successfully" };
  });

  fastify.post("/isLogged", async (req) => {
    if (!Boolean(req.session.get("user"))) return { logged: false };
    const user = await v2.user.details(req.session.get("user"));
    return {
      logged: true,
      jwtUser: jwt.sign({ id: user.id, name: user.username, pfp: user.avatar_url }, process.env.CLIENT_SECRET),
    };
  });

  fastify.post("/getMedals", async () =>
    await (await fetch("https://osekai.net/medals/api/medals.php")).json());

  fastify.post("/userQuery", async (req) =>
    await v2.site.search({ mode: "user", query: req.body.username, page: 0, }));

  fastify.post("/user", async (req) => {
    const user_id = req.body.id;
    const mode = req.body.mode;
    const data =
      mode === "default"
        ? await v2.user.details(user_id)
        : await v2.user.details(user_id, mode);
    if (data.error === null) return data;

    data.db_info = await updateUser(
      data.id,
      data.username,
      data.rank_history?.data,
      data.statistics.country_rank,
      data.rank_history?.mode
    );

    // catalans
    data.customBadges = {};
    if (badges.catalan.includes(data.id)) {
      data.country.code = "CAT";
      data.country.name = "Catalunya";
    }

    // developers
    // translators
    for (let badge of ["developer", "translator"])
      if (badges[badge].includes(data.id)) data.customBadges[badge] = true;
    return data;
  });

  fastify.post("/users", async (req) =>
    await v2.site.ranking.details(req.body.mode, req.body.type, {
      cursor: {
        page: req.body.page,
      },
      filter: "all",
    })
  );

  fastify.post("/userbeatmaps", async (req) =>
    await v2.user.beatmaps.category(
      req.body.id,
      req.body.type,
      {
        limit: req.body.limit,
        offset: req.body.offset,
      })
  );

  fastify.post(
    "/userscores",
    async (req) =>
      await v2.scores.user.category(req.body.id, req.body.type, {
        include_fails: false,
        mode: req.body.mode,
        limit: req.body.limit,
        offset: req.body.offset,
      })
  );

  fastify.post("/beatmapset", async (req) => await mino.v2.set(req.body.setId));

  fastify.post("/beatmapsets", async (req) =>
    await mino.v2.search({
      query: req.body.query,
      filter: req.body.filter,
      mode: req.body.mode,
      ranked: req.body.status,
      limit: req.body.limit,
      offset: req.body.offset,
      sort: req.body.sort,
    })
  );

  fastify.post("/beatmapscores", async (req) => await v2.scores.beatmap(req.body.id, { mode: req.body.mode, type: "global", }));

  async function validateCode(code) {
    const d = await (
      await fetch("https://osu.ppy.sh/oauth/token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET
          }&code=${code}&grant_type=${"authorization_code"}&redirect_uri=${process.env.CLIENT_REDIRECT
          }`,
      })
    ).json();
    return d.access_token;
  }

  async function getOwnData(token) {
    return await (
      await fetch("https://osu.ppy.sh/api/v2/me/osu", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
    ).json();
  }

  async function updateUser(userId, username, userRanks, countryRank, mode) {
    const c = await database.select("ranks", {
      values: ["time"],
      condition: `id = ${userId} AND ${mode} IS NOT NULL AND type = "global"`,
    });

    const response = {
      global_rank: [],
      country_rank: [],
    };

    const time = new Date();
    time.setHours(0, 0, 0, 0);

    await database.insert("ranks", {
      object: {
        id: userId,
        time: time.getTime() / 1000,
        [mode]: countryRank,
        type: "country",
      },
      updateOnDuplicate: true,
    });

    for (let i = userRanks.length - 1; i >= 0; i--) {
      time.setDate(time.getDate() - 1);
      const check = c.filter((v) => v.time == time.getTime() / 1000)[0];
      if (check) continue;
      delete cache[userId];
      await database.insert("ranks", {
        //TODO: multi insert
        object: {
          id: userId,
          time: time.getTime() / 1000,
          [mode]: userRanks[i],
          type: "global",
        },
        updateOnDuplicate: true,
      });
    }

    if (cache[userId]) return cache[userId];

    await database.insert("users", {
      object: {
        id: userId,
        username: username,
      },
      updateOnDuplicate: true,
    });

    const ranks = await database.request(`
            SELECT r.time, r.${mode}, r.type
            FROM ranks r
            JOIN users u
            ON r.id = u.id
            WHERE r.id = ${userId}
            AND r.${mode} IS NOT NULL
        `);

    const globalRanks = ranks.filter((v) => v.type == "global");
    const countryRanks = ranks.filter((v) => v.type == "country");

    response.global_rank = globalRanks.map((v) => ({
      rank: v[mode],
      time: v.time,
    }));
    response.country_rank = countryRanks.map((v) => ({
      rank: v[mode],
      time: v.time,
    }));

    cache[userId] = response;

    return response;
  }

  fastify.listen({ host: "0.0.0.0", port: process.env.PORT });
})();
