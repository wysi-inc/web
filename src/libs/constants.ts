import { Profanity } from "@2toad/profanity";
import type { Mode } from "../types/osu";

export const RATELIMIT = 120;

export const STR_MAX_LEN = {
    LONG: 100,
    MID: 50,
    SHORT: 25,
}

export const RESULT_LIMIT = {
    USER: {
        SEARCH: 5,
        SCORES: 20,
        BEATMAPS: 20,
        MOST: 20
    },
    BEATMAPS: {
        SEARCH: 50
    }
};

export const profanity = new Profanity({
    languages: ['de', 'en', 'es', 'fr'],
    wholeWord: true,
    grawlix: "*****",
    grawlixChar: "$",
})

export const CATALANS = [
    17018032, // M4rti_
    17897192, // Siirius
    13817790, // -Yasai-
    20661304, // Japii
];


export const MODES: { name: string, code: Mode }[] = [
    {
        name: "osu!",
        code: "osu",
    },
    {
        name: "osu!taiko",
        code: "taiko",
    },
    {
        name: "osu!catch",
        code: "fruits",
    },
    {
        name: "osu!mania",
        code: "mania",
    }
];
