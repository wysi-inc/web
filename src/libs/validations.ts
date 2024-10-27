import { profanity } from "@2toad/profanity";
import type { Res } from "../types/users";
import { STR_MAX_LEN } from "./constants";

export function validString(txt: string, max_length = STR_MAX_LEN.LONG): Res<string> {
    if (profanity.exists(txt))
        return {
            error: true,
            data: "Profanity found!",
            code: 406,
        };
    if (txt.length > max_length)
        return {
            error: true,
            data: `${max_length} character limit exceeded!`,
            code: 413,
        };
    return {
        error: false,
        data: "All good",
        code: 200,
    };
}
