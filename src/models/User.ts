import * as mongoose from "mongoose";
import { SOCIALS } from "../components/user/u_panels/UserSocial";

const collectionDBSchema = new mongoose.Schema({
    name: String,
    beatmapsMd5: [String]
}, { _id: false });

collectionDBSchema.methods.toJSON = function() {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

const userSocial = new mongoose.Schema({
    platform: {
        type: String,
        enum: SOCIALS,
        required: true
    },
    username: {
        type: String,
        required: true
    }
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
export type UserSocialType = mongoose.InferSchemaType<typeof userSocial>;
export type ModeRanks = mongoose.InferSchemaType<typeof modeRanks>;
export type User = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model('User', userSchema);
