import type { Mode } from "@/src/types/osu";
import { updateUser } from "./update_user";
import { api_user_details } from "@/src/api/user";
import type { Res, UserCookie, UserExtended } from "@/src/types/users";
import { CATALANS } from "@/src/libs/constants";

export async function getUser(id: string, mode?: Mode, logged?: UserCookie | null): Promise<Res<UserExtended>> {
    const res = await api_user_details(id, mode, logged);
    if (res.error) return res;
    let user = res.data;
    mode = (user.rank_history?.mode as Mode) || "osu";
    user = await updateUser(user, mode);
    if (CATALANS.includes(user.id)) {
        (user.country as any).cat = true;
    }
    return {
        error: false,
        code: 200,
        data: user,
    };
}
