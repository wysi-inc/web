import { User } from "../models/User";
import type { Mode } from "../types/osu";

type Rank = {
    rank: number;
    date: Date;
};

type RankHistory = {
    global_rank_history: Rank[];
    country_rank_history: Rank[];
};

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
            user = new User({
                user_id,
                username,
                modes: {
                    [mode]: {
                        global_rank_history: new_global,
                        country_rank_history: new_country,
                    },
                },
            });
            response.global_rank_history = new_global;
            response.country_rank_history = new_country;
        } else {
            user.username = username;
            user.modes[mode].globalRankHistory = addRanks(
                user.modes[mode].globalRankHistory,
                new_global
            );
            user.modes[mode]?.country_ranks = addRanks(
                user.modes[mode]?.country_ranks
                new_country
            );
            response.global_rank_history = user.modes[mode].global_rank_history;
            response.country_rank_history = user.modes[mode].country_rank_history;
        }
        await user.save();
    } catch (err) {
        console.error(err);
    } finally {
        return response;
    }
};

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
