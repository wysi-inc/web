import { User, type Rank, type ModeRanks } from "../models/User";
import type { Mode } from "../types/osu";
import type { RankHistory } from "../types/users";

export async function updateUser(user_id: number, username: string, global_ranks: number[], country_rank: number, mode: Mode): Promise<RankHistory> {
    const response: RankHistory = {
        global_rank_history: [],
        country_rank_history: [],
    };
    if (!country_rank) return response;
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const new_global = global_ranks.map((number, index) => {
            const date = new Date(today);
            date.setDate(date.getDate() - (global_ranks.length - 1 - index));
            return { rank: number, date };
        });
        const new_country = [{ date: today, rank: country_rank }];
        let user = await User.findOne({ user_id });
        if (!user) {
            console.log("Creating new user")
            user = new User({
                user_id,
                username,
                modes: {
                    [mode]: {
                        global_ranks: new_global,
                        country_ranks: new_country,
                    },
                },
            });
            response.global_rank_history = new_global;
            response.country_rank_history = new_country;
        } else {
            console.log("Updating existing user")
            user.username = username;
            if (!user.modes[mode]) {
                console.log("Creating new mode")
                user.modes[mode] = {
                    global_ranks: new_global as any,
                    country_ranks: new_country as any,
                };
                response.global_rank_history = new_global;
                response.country_rank_history = new_country;
                await user.save();
                return response;
            }
            console.log("Updating existing mode")
            const new_global_ranks = addRanks((user.modes[mode] as ModeRanks).global_ranks, new_global);
            const new_country_ranks = addRanks((user.modes[mode] as ModeRanks).country_ranks, new_country);
            (user.modes[mode] as ModeRanks).global_ranks = new_global_ranks as any;
            (user.modes[mode] as ModeRanks).country_ranks = new_country_ranks as any;
            response.global_rank_history = new_global_ranks;
            response.country_rank_history = new_country_ranks;
        }
        await user.save();
    } catch (err) {
        console.error(err);
    } finally {
        return response;
    }
}

function addRanks(r_old: Rank[], r_new: Rank[]) {
    const rankMap = new Map(r_old.map(entry => [entry.date.getTime(), entry]));
    for (const r of r_new) {
        const existingEntry = rankMap.get(r.date.getTime());
        if (existingEntry) {
            existingEntry.rank = r.rank;
        } else {
            rankMap.set(r.date.getTime(), { date: r.date, rank: r.rank });
        }
    }
    return Array.from(rankMap.values());
}
