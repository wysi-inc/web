import type { Category, Mode } from "@/src/types/osu";
import type { User, UserList } from "@/src/types/users";
import { updateUser } from "./update_user";
import { CATALANS } from "@/src/libs/countries";
import { log } from "@/src/tasks/logs";
import { api_user_details } from "@/src/api/user";
import { api_ranking } from "@/src/api/ranking";

export async function getUser(id: string, mode?: Mode): Promise<User | null> {
    try {
        let user: User = await api_user_details(id, mode);

        if ("error" in user) {
            log.error("Error getting user", user.error);
            return null;
        }
        mode = user.rank_history?.mode as Mode || "osu";
        user = await updateUser(user, mode);
        if (CATALANS.includes(user.id)) {
            (user.country as any).cat = true;
        }
        return user;
    } catch (err) {
        log.error("Error getting user", err);
        return null;
    }
}

export async function getRankings(
    mode: Mode,
    category: Category,
    page: number,
    country?: string
): Promise<UserList | null> {
    try {
        let obj: any = {
            "cursor[page]": page,
            filter: "all",
        };
        if (country && category !== "score") {
            obj.country = country.toUpperCase();
        }
        return await api_ranking(mode, category, obj);
    } catch (err) {
        log.error("Error getting rankings", err);
        return null;
    }
}
