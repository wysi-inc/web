import mino from "beatsify";
import { v2 } from "osu-api-extended";

export async function getBeatmap(req) {
  const { id } = req.params;
  return (await mino.v2.set(id)).json();
}

export async function getBeatmapScores(req) {
  const { id, mode } = req.params;
  return await v2.scores.beatmap(id, { mode, type: "global" });
}
