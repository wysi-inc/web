// Import necessary modules and libraries
import { v2 } from "osu-api-extended";
import { updateUser, getSetup, updateSetup } from "../database/db-helpers.js";
import badges from "../constants/badges.js";

// Fetch user data, update database information
export const user = async (req, res) => {
  const { id, mode } = req.body;

  let data;
  if (!mode) data = await v2.user.details(id);
  else data = await v2.user.details(id, mode);

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
    setup: await getSetup(data.id),
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

// Query for user information by username
export const userSearch = async (req, res) => {
  const { username } = req.body;
  const ans = await v2.site.search({
    mode: "user",
    query: username,
    page: 0,
  });
  return res.json(ans);
};

// Query for user rankings based on mode and type
export const userList = async (req, res) => {
  const { type, mode, page } = req.body;
  const ans = await v2.site.ranking.details(mode, type, {
    cursor: {
      page: page,
    },
    filter: "all",
  });
  return res.json(ans);
};

// Update user setup information
export const userSetup = async (req, res) => {
  const id = req.id;

  // Check for user authentication
  if (!id) return res.status(401).json({ ok: false });

  const { setup } = req.body;

  // Update user setup information in the database
  updateSetup(id, setup);

  return res.json({ ok: true });
};

// Query for user beatmaps based on user ID and type
export const userBeatmaps = async (req, res) => {
  const { id, type, limit, offset } = req.body;
  const ans = await v2.user.beatmaps.category(id, type, {
    limit: limit,
    offset: offset,
  });
  return res.json(ans);
};

// Query for user scores based on user ID, type, mode, limit, and offset
export const userScores = async (req, res) => {
  const { id, type, mode, limit, offset } = req.body;
  const ans = await v2.scores.user.category(id, type, {
    include_fails: false,
    mode: mode,
    limit: limit,
    offset: offset,
  });
  return res.json(ans);
};

export const userMostPlayed = async (req, res) => {
  const { id, limit, offset } = req.body;
  const ans = await v2.user.beatmaps.most_played(id, { limit, offset });
  return res.json(ans);
};
