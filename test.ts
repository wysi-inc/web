import { connect_osu } from "./src/tasks/connections";
import { api_scores_user_category } from "./src/api/score";

await connect_osu();

// console.log(await api_scores_beatmap(4644059, { mode: "osu", mods: [], type: "global" }));

const scores = await api_scores_user_category(17018032, "best", {
    mode: "osu",
    offset: 0,
    limit: 100,
});

console.log(scores);

export {};
