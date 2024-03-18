import { v2 } from "osu-api-extended";
import { updateUser } from "@/src/db/users";
import { catalans } from "@/src/resources/constants";
import type { Category, Mode } from "@/src/types/osu";
import type { User, UserList } from "@/src/types/users";

export async function getUser(id: string, mode: Mode | undefined): Promise<User | null> {
    let user: User = (await v2.user.details(id, mode) as User);

    if ("error" in user) return null;

    mode = user.rank_history?.mode as Mode || "osu";

    user = await updateUser(user, mode);

    if (catalans.includes(user.id)) {
        console.log("Bon dia tu!");
        user.country.code = "CAT";
        user.country.name = "Catalunya";
    }

    console.log(user);
    return user;
}

export async function getRankings(mode: Mode, category: Category, page: number): Promise<UserList> {

    const res: UserList = await v2.site.ranking.details(
        mode, category,
        {
            "cursor[page]": page,
            filter: "all",
        }
    );

    return res;

}
