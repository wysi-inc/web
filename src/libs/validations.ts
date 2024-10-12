import { profanity } from "@2toad/profanity";
import type { Res } from "../types/users";
import { STR_MAX_LEN } from "./constants";

export function validString(txt: string, max_length = STR_MAX_LEN.LONG): Res {
    if (profanity.exists(txt)) return {
        error: true,
        msg: "Profanity found!",
        code: 406
    };
    if (txt.length > max_length) return {
        error: true,
        msg: `${max_length} character limit exceeded!`,
        code: 413
    };
    return {
        error: false,
        msg: "All good",
        code: 200
    }
}
