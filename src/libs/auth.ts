import type { Jwt } from "../types/osu";
import type { UserCookie } from "../types/users";
import { UserModel } from "../models/User";
import { api_auth_user } from "../api/auth";
import { api_me_details } from "../api/user";
import { TokenModel } from "../models/Tokens";

export async function userAuthData(code: string) {
    const res = await api_auth_user(code);
    if (!res) return;
    const user = await api_me_details(res.access_token);
    if (!user) return;
    const user_role = await UserModel.findOne({ user_id: user.id });
    let tokenObject = await TokenModel.findOne({ user_id: user.id });
    if (!tokenObject) {
        tokenObject = new TokenModel();
        tokenObject.user_id = user.id;
        tokenObject.access_token = res.access_token;
        tokenObject.refresh_token = res.refresh_token;
        tokenObject.expires_at = Date.now() + (res.expires_in * 1000);
        await tokenObject.save();
    }
    return { data: user, role: user_role?.role };
}

export async function verifyUser(jwt: Jwt, cookie?: any): Promise<UserCookie | null> {
    if (!cookie?.auth?.value) return null;
    return await jwt.verify(cookie.auth.value);
}
