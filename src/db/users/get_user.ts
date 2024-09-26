import { v2 } from "osu-api-extended";
import type { Category, Mode } from "@/src/types/osu";
import type { User, UserList } from "@/src/types/users";
import { updateUser } from "./update_user";
import { CATALANS } from "@/src/libs/countries";
import { log } from "@/src/tasks/logs";

export async function getUser(id: string, mode?: Mode): Promise<User | null> {
    try {
        //@ts-ignore
        let user: User = await v2.user.details(id, mode);

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
        const obj: any = {
            "cursor[page]": page,
            filter: "all",
        };
        if (country && category !== "score") {
            obj.country = country.toUpperCase();
        }
        //@ts-ignore
        const res: UserList = await v2.site.ranking.details(mode, category, obj);
        if ("error" in res) {
            log.error("Error getting rankings", res.error);
            return null;
        }
        return res;
    } catch (err) {
        log.error("Error getting rankings", err);
        return null;
    }
}
