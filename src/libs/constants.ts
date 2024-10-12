import { Profanity } from "@2toad/profanity";

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
