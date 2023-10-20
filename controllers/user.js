// Import necessary modules and libraries
import { v2 } from "osu-api-extended";
import { updateUser, getSetup, updateSetup } from "../database/db-helpers.js";
import badges from "../constants/badges.js";

// Query for user information by username
export const userQuery = async (req, res) => {
  const ans = await v2.site.search({
    mode: "user",
    query: req.body.username,
    page: 0,
  });
  return res.json(ans);
};

// Fetch and post user data, update database information
export const userPost = async (req, res) => {
  const user_id = req.body.id;
  const mode = req.body.mode;
  const data =
    mode === "default"
      ? await v2.user.details(user_id)
      : await v2.user.details(user_id, mode);

  // Check for errors in the data and proceed accordingly
  if (data.error === null) return data;

  // Update user information in the database
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

  // Add custom badges based on specific conditions
  data.customBadges = {};

  // For users in the Catalan group
  if (badges.catalan.includes(data.id)) {
    data.country.code = "CAT";
    data.country.name = "Catalunya";
  }

  // For developers and translators
  for (let badge of ["developer", "translator"]) {
    if (badges[badge].includes(data.id)) {
      data.customBadges[badge] = true;
    }
  }

  return res.json(data);
};

// Update user setup information
export const setup = async (req, res) => {
  const id = req.id;

  // Check for user authentication
  if (!id) return res.status(401).json({ ok: false });

  const { setup } = req.body;

  // Update user setup information in the database
  updateSetup(id, setup);

  return res.json({ ok: true });
};

// Query for user rankings based on mode and type
export const users = async (req, res) => {
  const ans = await v2.site.ranking.details(req.body.mode, req.body.type, {
    cursor: {
      page: req.body.page,
    },
    filter: "all",
  });
  return res.json(ans);
};

// Query for user beatmaps based on user ID and type
export const userBeatmaps = async (req, res) => {
  const ans = await v2.user.beatmaps.category(req.body.id, req.body.type, {
    limit: req.body.limit,
    offset: req.body.offset,
  });
  return res.json(ans);
};

// Query for user scores based on user ID, type, mode, limit, and offset
export const userScores = async (req, res) => {
  const ans = await v2.scores.user.category(req.body.id, req.body.type, {
    include_fails: false,
    mode: req.body.mode,
    limit: req.body.limit,
    offset: req.body.offset,
  });
  return res.json(ans);
};
