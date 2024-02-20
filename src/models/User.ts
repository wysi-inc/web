import * as mongoose from "mongoose";

const setup = new mongoose.Schema({
    keyboard: {
        name: {
            type: String,
            required: true,
        },
        layout: {
            type: String,
            enum: ["k2", "k3", "k4", "k60", "k75", "ktkl", "kfull", ""],
            required: true,
        },
        keys: {
            type: [String],
            required: true,
        },
    },
    tablet: {
        name: {
            type: String,
            required: true,
        },
        area: {
            w: {
                type: Number,
                required: true,
            },
            h: {
                type: Number,
                required: true,
            },
        },
        position: {
            x: {
                type: Number,
                required: true,
            },
            y: {
                type: Number,
                required: true,
            },
            z: {
                type: Number,
                required: true,
            },
        },
        size: {
            w: {
                type: Number,
                required: true,
            },
            h: {
                type: Number,
                required: true,
            },
        },
    },
    mouse: {
        name: {
            type: String,
            required: true,
        },
        dpi: {
            type: Number,
            required: true,
        },
    },
    peripherals: {
        monitor: {
            type: String,
            required: true,
        },
        headphones: {
            type: String,
            required: true,
        },
        microphone: {
            type: String,
            required: true,
        },
        tablet: {
            type: String,
            required: true,
        },
        mouse: {
            type: String,
            required: true,
        },
        keyboard: {
            type: String,
            required: true,
        },
        keypad: {
            type: String,
            required: true,
        },
        mousepad: {
            type: String,
            required: true,
        },
        chair: {
            type: String,
            required: true,
        },
        camera: {
            type: String,
            required: true,
        },
        audio: {
            type: String,
            required: true,
        },
    },
    computer: {
        cpu: {
            type: String,
            required: true,
        },
        gpu: {
            type: String,
            required: true,
        },
        ram: {
            type: String,
            required: true,
        },
        psu: {
            type: String,
            required: true,
        },
        storage: {
            type: String,
            required: true,
        },
        motherboard: {
            type: String,
            required: true,
        },
        case: {
            type: String,
            required: true,
        },
    }
}, { _id: false })


const rank = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    rank: {
        type: Number,
        required: true,
    }
}, { _id: false })

const modeRanks = new mongoose.Schema({
    global_ranks: {
        type: [rank],
        required: true,
    },
    country_ranks: {
        type: [rank],
        required: true,
    },
}, { _id: false })

const modes = new mongoose.Schema({
    osu: modeRanks,
    taiko: modeRanks,
    fruits: modeRanks,
    mania: modeRanks,
}, { _id: false })

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
    skins: [String],
    setup: setup,
});

userSchema.methods.toJSON = function() {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type Rank = mongoose.InferSchemaType<typeof rank>;
export type ModeRanks = mongoose.InferSchemaType<typeof modeRanks>;
export type Setup = mongoose.InferSchemaType<typeof setup>;
export type User = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model('User', userSchema);
