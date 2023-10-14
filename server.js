import { fastify as f } from "fastify";
import cors from "@fastify/cors";
import session from "@fastify/session";
import cookie from "@fastify/cookie";
import { v2, auth } from "osu-api-extended";
import mino from "beatsify";
import fetch from "node-fetch";
import badges from "./constants/badges.js";
import cache from "./constants/cache.js";
import mongoose from "mongoose";
import "dotenv/config";
import User from "./models/User.js";
import Setup from "./models/Setup.js"

import jwt from "jsonwebtoken";
import verifyToken from "./middlewares/verifyToken.js";

(async () => {
  const fastify = f({ logger: true });

  fastify.register(cors, {
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: process.env.ORIGIN,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "x-token"],
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

  console.log(process.env.DATABASE_URI);


  mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = mongoose.connection;
  db.on('error', () => console.error("Error connecting to the database"));
  db.once('open', () => console.log("Connected to the database"));

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

  fastify.post("/login", async (req) => {
    const user = await getOwnData(await validateCode(req.body.code));
    if (user.authentication) return user;
    const jwtUser = {
      id: user.id,
      ip: req.ip,
    };
    return {
      user,
      jwtUser: jwt.sign(jwtUser, process.env.CLIENT_SECRET, {
        expiresIn: "7d",
      }),
    };
  });

  fastify.post("/logout", async (req) => {
    req.session.destroy();
    return { message: "Logged out successfully" };
  });

  fastify.post("/isLogged", async (req) => {
    const { token } = req.body;
    jwt.verify(token, process.env.CLIENT_SECRET);
    const dUser = jwt.decode(token);
    // if IPs dont match
    if (dUser.ip !== req.ip) return { logged: false };
    // look for updated user details
    const user = await v2.user.details(dUser.id);
    return {
      logged: true,
      user: {
        name: user.username,
        pfp: user.avatar_url,
        id: user.id,
      },
    };
  });

  fastify.get("/getMedals", async () =>
    await (await fetch("https://osekai.net/medals/api/medals.php")).json()
  );

  fastify.post("/userQuery", async (req) =>
    await v2.site.search({ mode: "user", query: req.body.username, page: 0 })
  );

  fastify.post("/user", async (req) => {
    const user_id = req.body.id;
    const mode = req.body.mode;
    const data =
      mode === "default"
        ? await v2.user.details(user_id)
        : await v2.user.details(user_id, mode);
    if (data.error === null) return data;
    data.db_info = {
      ranks: await updateUser(
        data.id,
        data.username,
        data.rank_history?.data,
        data.statistics.country_rank,
        data.rank_history?.mode
      ),
      setup: await getSetup(user_id)
    };

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


  fastify.put('/setup', async (req) => {
    const id = verifyToken(req);
    console.log(id);
    if (!id) return { ok: false };

    const { setup } = req.body;
    updateSetup(id, setup);

    return {
      ok: true
    }
  })

  fastify.post("/users", async (req) =>
    await v2.site.ranking.details(req.body.mode, req.body.type, {
      cursor: {
        page: req.body.page,
      },
      filter: "all",
    })
  );

  fastify.post("/userbeatmaps", async (req) =>
    await v2.user.beatmaps.category(req.body.id, req.body.type, {
      limit: req.body.limit,
      offset: req.body.offset,
    })
  );

  fastify.post("/userscores", async (req) =>
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

  fastify.post("/beatmapscores", async (req) =>
    await v2.scores.beatmap(req.body.id, {
      mode: req.body.mode,
      type: "global",
    })
  );

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
    const response = {
      global_rank: [],
      country_rank: [],
    };
    if (!countryRank) return response;
    try {
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      const newGlobal = userRanks.map((number, index) => {
        const date = new Date(currentDate);
        date.setDate(date.getDate() - (userRanks.length - 1 - index));
        return { rank: number, date };
      });
      const newCountry = [{
        date: currentDate,
        rank: countryRank
      }];

      if (await User.exists({ userId })) {
        const user = await User.findOne({ userId });
        user.username = username;
        user.modes[mode].globalRankHistory = addRanks(user.modes[mode].globalRankHistory, newGlobal);
        user.modes[mode].countryRankHistory = addRanks(user.modes[mode].countryRankHistory, newCountry);
        response.global_rank = user.modes[mode].globalRankHistory;
        response.country_rank = user.modes[mode].countryRankHistory;
        await user.save();
      } else {
        const userOsu = new User({
          userId: userId,
          username: username,
          modes: {
            [mode]: {
              globalRankHistory: newGlobal,
              countryRankHistory: newCountry
            }
          }
        })
        await userOsu.save();
        response.global_rank = newGlobal;
        response.country_rank = newCountry;
      }
    } catch (err) {}
    return response;
  }


  async function updateSetup(userId, setup) {
    console.log(setup);
    let res = { ok: false };
    try {
      if (await Setup.exists({ userId })) {
        const setupDB = await Setup.findOne({ userId });
        setupDB.keyboard = setup.keyboard;
        setupDB.tablet = setup.tablet;
        await setupDB.save();
        res = { ok: true };
      } else {
        const setupDB = new Setup({
          userId,
          ...setup
        });
        await setupDB.save();
        res = { ok: true };
      }
    } catch (err) {
      res = { ok: false };
    }
    return res;
  }

  async function getSetup(userId) {
    if (await Setup.exists({ userId })) {
      return await Setup.findOne({ userId });
    }
    return null;
  }

  function addRanks(r_old, r_new) {
    const r_final = [...r_old];
    for (const r of r_new) {
      const exists = r_final.some(o => o.date.getTime() === r.date.getTime());
      if (!exists) r_final.push(r);
    }
    return r_final;
  }

  fastify.listen({ host: "0.0.0.0", port: process.env.PORT });
})();
