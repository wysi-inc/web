import { v2 } from "osu-api-extended";
import { Mode, ModeRanks, Rank, User } from "../models/user";
import { response as v2User } from "osu-api-extended/dist/types/v2_user_details";
import { response as v2UserList } from "osu-api-extended/dist/types/v2_site_ranking_details";
import mongoose from "mongoose";

export type UserResponse = v2User & { db_info: ModeRanks };

export async function searchUser(req: any) {
    const { query } = req;
    return await v2.site.search({
        mode: "user",
        query,
        page: 0,
    });
}

export async function getUserList(req: any) {
    const { mode, type, page } = req.params;
    const res: v2UserList = await v2.site.ranking.details(
        mode, type, {
            cursor: { page },
            filter: "all",
        } as any
    );
    return res;
}

export async function getUser(req: any): Promise<UserResponse | null> {
    const { id, mode } = req.query;
    const user: v2User = await v2.user.details(id, mode);
    if (!user) return null;
    return {
        ...user, db_info: await updateUser(
            user.id,
            user.username,
            user.rank_history.data,
            user.statistics.country_rank,
            user.rank_history.mode as Mode
        )
    };
}

async function updateUser(user_id: number, username: string, global_ranks: number[], country_rank: number, mode: Mode = "osu"): Promise<ModeRanks> {
    let res: ModeRanks = {
        global_ranks: new mongoose.Types.DocumentArray([]),
        country_ranks: new mongoose.Types.DocumentArray([])
    };
    if (!country_rank) return res;
    const today: Date = new Date()
    today.setHours(0, 0, 0, 0);

    const new_country_ranks: Rank[] = [{ rank: country_rank, date: today }];
    const new_global_ranks: Rank[] = global_ranks.map((rank, i) => ({ rank, date: new Date(today as any - i) }));

    let user = await User.findOne({ user_id });
    if (user) {
        user.username = username;
        if (!user.modes) user.modes = {};
        if (!user.modes[mode]) user.modes[mode] = res;
        user.modes[mode]!.global_ranks = new mongoose.Types.DocumentArray(
            filter_ranks(user.modes[mode]!.global_ranks, new_global_ranks)
        );
        user.modes[mode]!.country_ranks = new mongoose.Types.DocumentArray(
            filter_ranks(user.modes[mode]!.country_ranks, new_country_ranks)
        );
        res = user.modes[mode]!;
    } else {
        res.global_ranks.push(new_global_ranks);
        res.country_ranks.push(new_country_ranks);
        user = new User({
            user_id,
            username,
            modes: {
                [mode]: {
                    global_ranks: res.global_ranks,
                    country_ranks: res.country_ranks,
                }
            }
        });
    }
    user.save();
    return res;
}

export async function getUserBeatmaps(req: any) {
    const { id, type, limit, offset } = req.params;
    return await v2.user.beatmaps.category(id, type, {
        limit: limit,
        offset: offset,
    });
}

export async function getUserScores(req: any) {
    const { id, type, mode, limit, offset } = req.body;
    return await v2.scores.user.category(id, type, {
        include_fails: false,
        mode: mode,
        limit: limit,
        offset: offset,
    });
}

export async function getUserMostPlayed(req: any) {
    const { id, limit, offset } = req.params;
    return await v2.user.beatmaps.most_played(id, { limit, offset });
}

function filter_ranks(olds: Rank[], news: Rank[]): Rank[] {
    return news.filter(new_rank => !olds.find(
        old_rank => old_rank.date === new_rank.date
    ));
}
