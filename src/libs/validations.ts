import { profanity } from "@2toad/profanity";
import type { Res } from "../types/users";

export function validString(txt: string, max_length = 100): Res {
    if (profanity.exists(txt)) return {
        error: true,
        msg: "Profanity found!",
        code: 406
    };
    if (txt.length > max_length) return {
        error: true,
        msg: "100 character limit exceeded!",
        code: 413
    };
    return {
        error: false,
        msg: "All good",
        code: 200
    }
}
