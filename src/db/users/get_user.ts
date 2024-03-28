import { v2 } from "osu-api-extended";
import type { Category, Mode } from "@/src/types/osu";
import type { User, UserList } from "@/src/types/users";
import { updateUser } from "./update_user";
import { catalans } from "@/src/libs/constants";

export async function getUser(id: string, mode: Mode | undefined): Promise<User | null> {
    try {
        let user: User = (await v2.user.details(id, mode) as User);

        if ("error" in user) return null;

        mode = user.rank_history?.mode as Mode || "osu";

        user = await updateUser(user, mode);

        if (catalans.includes(user.id)) {
            console.log("Bon dia tu!");
            user.country.code = "CAT";
            user.country.name = "Catalunya";
        }

        return user;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function getRankings(mode: Mode, category: Category, page: number): Promise<UserList | null> {
    try {
        const res: UserList = await v2.site.ranking.details(
            mode, category,
            {
                "cursor[page]": page,
                filter: "all",
            }
        );
        return res;
    } catch (err) {
        console.error(err);
        return null;
    }
}
