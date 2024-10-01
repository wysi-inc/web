import type { Mode } from "@/src/types/osu";
import { updateUser } from "./update_user";
import { CATALANS } from "@/src/libs/countries";
import { log } from "@/src/tasks/logs";
import { api_user_details } from "@/src/api/user";
import type { UserCookie, UserExtended } from "@/src/types/users";

export async function getUser(id: string, mode?: Mode, logged?: UserCookie | null): Promise<UserExtended | null> {
    try {
        let user = await api_user_details(id, mode, logged);
        if (!user) return null;
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
