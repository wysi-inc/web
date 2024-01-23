import { v2 } from "osu-api-extended";
import { User } from "../models/user";

type Mode = "osu" | "taiko" | "fruits" | "mania";
type Rank = { rank: number, date: Date };

export async function getUser(id: number | string, mode: Mode = "osu") {
    const user = await v2.user.details(id, mode);
    user.db_info = await updateUser(user.id, user.username, user.rank_history.data, user.statistics.country_rank, user.rank_history.mode as Mode);
    return user;
}

async function updateUser(user_id: number, username: string, global_ranks: number[], country_rank: number, mode: Mode = "osu"): {
    global_ranks: Rank[],
    country_ranks: Rank[]
} {
    const res = {global_ranks: [], country_ranks: []};
    if (!country_rank) return res;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const new_country_ranks = [{rank: country_rank, date: today}];
    const new_global_ranks = global_ranks.map((rank, i) => ({rank, date: today - i}));

    try {
        let user = await User.findOne({user_id});
        if (user) {
            user.username = username;
            if (user.modes[mode]) {
                user.modes[mode].global_ranks = filter_ranks(user.modes[mode].global_ranks, new_global_ranks);
                user.modes[mode].country_ranks = filter_ranks(user.modes[mode].country_ranks, new_country_ranks);
            } else {
                user.modes[mode] = {
                    global_ranks: new_global_ranks,
                    country_ranks: new_country_ranks
                }
            }
            // update response
            res.global_ranks = user.modes[mode].global_ranks;
            res.country_ranks = user.modes[mode].country_ranks;
        } else {
            user = new User({
                user_id,
                username,
                modes: {[mode]: {
                    global_ranks: new_global_ranks,
                    country_ranks: new_country_ranks
                }}
            });
            // update response
            res.global_ranks = new_global_ranks;
            res.country_ranks = new_country_ranks;
        }
        user.save();
    } catch (e) {
        console.error(e);
    }
    return res;
}

function filter_ranks(olds: Rank[], news: Rank[]): Rank[] {
    return news.filter(new_rank => !olds.find(old_rank => old_rank.date === new_rank.date));
}

export async function searchUser(username: string) {
    return await v2.site.search({
        mode: "user",
        query: username,
        page: 0,
    });

}
