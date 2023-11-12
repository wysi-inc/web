import mino from "beatsify";
import { v2 } from "osu-api-extended";

// asynchronous function for a single beatmap set request
export const beatmapset = async (req, res) => {
  const { setId } = req.body;
  const ans = await mino.v2.set(setId);
  return res.json(ans); // return result as json
};

// to fetch for a specific beatmap based on the provdided 'id'
export const beatmapscores = async (req, res) => {
  const { id, mode } = req.body;
  const type = "global";
  const ans = await v2.scores.beatmap(id, { mode, type });
  return res.json(ans);
};
