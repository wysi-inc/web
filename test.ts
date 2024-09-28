import { connect_osu } from "./src/tasks/connections";
import { api_scores_beatmap } from "./src/api/score";

await connect_osu();

console.log(await api_scores_beatmap(4644059, { mode: "osu", mods: [], type: "global" }));


export { };
