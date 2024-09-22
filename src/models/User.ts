import * as mongoose from "mongoose";

const collectionDBSchema = new mongoose.Schema({
    name: String,
    beatmapsMd5: [String]
}, { _id: false });

collectionDBSchema.methods.toJSON = function() {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type Social =
    "github" |
    "gitlab" |
    "twitch" |
    "instagram" |
    "youtube" |
    "tiktok" |
    "pinterest" |
    "snapchat" |
    "reddit" |
    "tinder" |
    "linkedin" |
    "roblox" |
    "microsoft" |
    "soundcloud" |
    "spotify" |
    "facebook" |
    "paypal" |
    "supercell" |
    "kick" |
    "kofi" |
    "steam" |
    "riot" |
    "epic" |
    "anilist" |
    "playstation" |
    "linktree"

export const socials: Social[] = [
    "github",
    "gitlab",
    "twitch",
    "instagram",
    "youtube",
    "tiktok",
    "pinterest",
    "snapchat",
    "reddit",
    "tinder",
    "linkedin",
    "roblox",
    "microsoft",
    "soundcloud",
    "spotify",
    "facebook",
    "paypal",
    "supercell",
    "kick",
    "kofi",
    "steam",
    "riot",
    "epic",
    "anilist",
    "playstation",
    "linktree",
]

const userSocials = new mongoose.Schema({
    github: String,
    gitlab: String,
    twitch: String,
    instagram: String,
    youtube: String,
    tiktok: String,
    pinterest: String,
    snapchat: String,
    reddit: String,
    tinder: String,
    linkedin: String,
    roblox: String,
    microsoft: String,
    soundcloud: String,
    spotify: String,
    facebook: String,
    paypal: String,
    supercell: String,
    kick: String,
    kofi: String,
    steam: String,
    riot: String,
    epic: String,
    anilist: String,
    playstation: String,
    linktree: String,
}, { _id: false });

const setup = new mongoose.Schema({
    keyboard: {
        name: String,
        layout: {
            type: String,
            enum: ["k2", "k3", "k4", "k60", "k75", "ktkl", "kfull", ""],
        },
        keys: [String],
    },
    tablet: {
        name: String,
        area: {
            w: Number,
            h: Number,
        },
        position: {
            x: Number,
            y: Number,
            r: Number,
        },
        size: {
            w: Number,
            h: Number,
        },
    },
    mouse: {
        name: String,
        dpi: Number,
        mult: Number,
    },
    peripherals: {
        monitor: String,
        headphones: String,
        microphone: String,
        tablet: String,
        mouse: String,
        keyboard: String,
        keypad: String,
        mousepad: String,
        desk: String,
        chair: String,
        camera: String,
        audio: String,
    },
    computer: {
        os: String,
        cpu: String,
        gpu: String,
        ram: String,
        psu: String,
        storage: String,
        motherboard: String,
        case: String,
    }
}, { _id: false });


const rank = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    rank: {
        type: Number,
        required: true,
    }
}, { _id: false });

const modeRanks = new mongoose.Schema({
    global_ranks: {
        type: [rank],
        required: true,
    },
    country_ranks: {
        type: [rank],
        required: true,
    },
}, { _id: false });

const modes = new mongoose.Schema({
    osu: modeRanks,
    taiko: modeRanks,
    fruits: modeRanks,
    mania: modeRanks,
}, { _id: false });

// dev: Developer (only for regular devs)
// <3: Supporter
// wmt: Wysi Moderation Team
// wdc: Wysi Development Contributor (for one time contributors)
// wtc: Wysi Translations Contributor

export const DANS = ['No Dan', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', 'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta'];

const userSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        immutable: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    modes: {
        type: modes,
        required: true,
    },
    dan: {
        type: String,
        enum: DANS,
    },
    socials: userSocials,
    collections: {
        type: [collectionDBSchema],
        required: false,
    },
    skins: [String],
    setup: setup,
    wysi_badges: {
        type: [Number],
        required: false
    },
    role: {
        type: String,
        enum: ["owner", "admin"],
        required: false
    }
});

userSchema.methods.toJSON = function() {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type CollectionDB = mongoose.InferSchemaType<typeof collectionDBSchema>;
export type Rank = mongoose.InferSchemaType<typeof rank>;
export type Setup = mongoose.InferSchemaType<typeof setup>;
export type Socials = mongoose.InferSchemaType<typeof userSocials>;
export type ModeRanks = mongoose.InferSchemaType<typeof modeRanks>;
export type User = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model('User', userSchema);
