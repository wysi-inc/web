// Import the 'mino' and 'v2' module
import mino from "beatsify";
import { v2 } from "osu-api-extended";

// asynchronous function for a single beatmap set request
export const beatmapset = async (req, res) => {
  const ans = await mino.v2.set(req.body.setId);
  return res.json(ans); // return result as json
};

// asynchronous function for handling beatmap set search
export const beatmapsets = async (req, res) => {
  const ans = await mino.v2.search({
    query: req.body.query,
    filter: req.body.filter,
    mode: req.body.mode,
    ranked: req.body.status,
    limit: req.body.limit,
    offset: req.body.offset,
    sort: req.body.sort,
  });
  // return search results as JSON
  return res.json(ans);
};

// define asynchronous function for retrieving beatmap scores.
export const beatmapscores = async (req, res) => {
  // use 'v2.scores.beatmap' to fetch for a specific beatmap based on the provdided 'id'
  const ans = await v2.scores.beatmap(req.body.id, {
    mode: req.body.mode,
    type: "global",
  });
  // return the scores as JSON
  return res.json(ans);
};
