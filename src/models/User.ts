import * as mongoose from "mongoose";
import { SOCIALS } from "../components/user/u_panels/UserSocial";
import { STR_MAX_LEN } from "../libs/constants";

const collectionDBSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: STR_MAX_LEN.LONG,
        required: true
    },
    beatmapsMd5: [String]
}, { _id: false });

collectionDBSchema.methods.toJSON = function () {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

const userSocial = new mongoose.Schema({
    platform: {
        type: String,
        maxLength: STR_MAX_LEN.SHORT,
        required: true,
        enum: SOCIALS,
    },
    username: {
        type: String,
        maxLength: STR_MAX_LEN.MID,
        required: true,
    }
}, { _id: false });

const setup = new mongoose.Schema({
    keyboard: {
        name: {
            type: String,
            maxLength: STR_MAX_LEN.MID,
        },
        layout: {
            type: String,
            enum: ["k2", "k3", "k4", "k60", "k75", "ktkl", "kfull", ""],
        },
        keys: [String],
        actuation: Number,
        rt: Boolean,
        release: Number,
        press: Number,
    },
    tablet: {
        name: {
            type: String,
            maxLength: STR_MAX_LEN.MID,
        },
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
        name: {
            type: String,
            maxLength: STR_MAX_LEN.MID,
        },
        dpi: Number,
        mult: Number,
    },
    peripherals: {
        monitor: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        headphones: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        microphone: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        tablet: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        mouse: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        keyboard: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        keypad: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        mousepad: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        desk: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        chair: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        camera: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        audio: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
    },
    computer: {
        os: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        cpu: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        gpu: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        ram: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        psu: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        storage: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        motherboard: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
        case: {
            type: String,
            maxLength: STR_MAX_LEN.LONG,
        },
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
    socials: [userSocial],
    collections: [collectionDBSchema],
    skins: [String],
    setup: setup,
    wysi_badges: [Number],
    role: {
        type: String,
        enum: ["owner", "admin"],
        required: false
    }
});

userSchema.methods.toJSON = function () {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type CollectionDB = mongoose.InferSchemaType<typeof collectionDBSchema>;
export type Rank = mongoose.InferSchemaType<typeof rank>;
export type Setup = mongoose.InferSchemaType<typeof setup>;
export type UserSocialType = mongoose.InferSchemaType<typeof userSocial>;
export type ModeRanks = mongoose.InferSchemaType<typeof modeRanks>;
export type UserDB = mongoose.InferSchemaType<typeof userSchema>;
export const UserModel = mongoose.model('User', userSchema);
