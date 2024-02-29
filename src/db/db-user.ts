import type { Mode } from "../types/osu";
import { v2 } from "osu-api-extended";
import { updateUser } from "@/src/resources/db-user";
import { catalans } from "@/src/resources/constants";
import type { Mode } from "@/src/types/osu";
import type { User } from "@/src/types/users";

export async function getUser(id: string, mode: Mode): User | null {
    const user: User = (await v2.user.details(id, mode) as User);

    if ("error" in user) return null;

    const m = user.rank_history?.mode as Mode || "osu";
    const defaultCategory = user.scores_pinned_count > 0 ? "pinned" : "best";

    user.db_ranks = await updateUser(
        user.id,
        user.username,
        user?.rank_history?.data || [],
        user?.statistics?.country_rank,
        m
    );

    if (catalans.includes(user.id)) {
        console.log("Bon dia tu!");
        user.country.code = "CAT";
        user.country.name = "Catalunya";
    }

    return user;
}

export async function getRankings(mode: Mode, category: Category, page: number): v2UserList {

    const res = await v2.site.ranking.details(
        mode, category, {
            cursor: { page },
            filter: "all",
        }
    );

    return res.ranking;

}
