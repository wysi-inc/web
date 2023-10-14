import mino from "beatsify";
import { v2 } from "osu-api-extended";

export const beatmapset = async (req, res) => {
  const ans = await mino.v2.set(req.body.setId);
  return res.json(ans);
};

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
  return res.json(ans);
};

export const beatmapscores = async (req, res) => {
  const ans = await v2.scores.beatmap(req.body.id, {
    mode: req.body.mode,
    type: "global",
  });
  return res.json(ans);
};
