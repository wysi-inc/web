import { api_auth_user } from "../api/auth";
import { api_me_details } from "../api/user";
import { TokenModel } from "../models/Tokens";
import { UserModel } from "../models/User";
import type { Jwt, UserAuth } from "../types/api";
import type { UserCookie } from "../types/users";

export async function userAuthData(code: string) {
    const res = await api_auth_user(code);
    if (!res) return;
    const user = await api_me_details(res.access_token);
    if (!user) return;
    await save_user_token(user.id, res);
    const user_role = await UserModel.findOne({ user_id: user.id });
    return { data: user, role: user_role?.role };
}

export async function verifyUser(jwt: Jwt, cookie?: any): Promise<UserCookie | null> {
    if (!cookie?.auth?.value) return null;
    return await jwt.verify(cookie.auth.value);
}

export async function save_user_token(user_id: number, token: UserAuth) {
    let tokenObject = await TokenModel.findOne({ user_id });
    if (!tokenObject) tokenObject = new TokenModel();
    tokenObject.user_id = user_id;
    tokenObject.access_token = token.access_token;
    tokenObject.refresh_token = token.refresh_token;
    tokenObject.expires_at = Math.floor(Date.now() / 1000) + token.expires_in;
    await tokenObject.save();
}
