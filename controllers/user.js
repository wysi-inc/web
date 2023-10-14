import { v2 } from "osu-api-extended";
import { updateUser, getSetup, updateSetup } from "../database/db-helpers.js";
import badges from "../constants/badges.js";

export const userQuery = async (req, res) => {
  const ans = await v2.site.search({
    mode: "user",
    query: req.body.username,
    page: 0,
  });
  return res.json(ans);
};

export const userPost = async (req, res) => {
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
    setup: await getSetup(user_id),
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
  return res.json(data);
};

export const setup = async (req, res) => {
  const id = req.id;
  if (!id) return res.status(401).json({ ok: false });

  const { setup } = req.body;
  updateSetup(id, setup);

  return res.json({ ok: true });
};

export const users = async (req, res) => {
  const ans = await v2.site.ranking.details(req.body.mode, req.body.type, {
    cursor: {
      page: req.body.page,
    },
    filter: "all",
  });
  return res.json(ans);
};

export const userBeatmaps = async (req, res) => {
  const ans = await v2.user.beatmaps.category(req.body.id, req.body.type, {
    limit: req.body.limit,
    offset: req.body.offset,
  });
  return res.json(ans);
};

export const userScores = async (req, res) => {
  const ans = await v2.scores.user.category(req.body.id, req.body.type, {
    include_fails: false,
    mode: req.body.mode,
    limit: req.body.limit,
    offset: req.body.offset,
  });
  return res.json(ans);
};
