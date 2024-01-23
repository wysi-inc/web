import * as mongoose from 'mongoose';

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
        chair: String,
        camera: String,
        audio: String,
    },
    computer: {
        cpu: String,
        gpu: String,
        ram: String,
        psu: String,
        storage: String,
        motherboard: String,
        case: String,
    }
});


const rank = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    rank: {
        type: Number,
        required: true,
    }
})

const mode = new mongoose.Schema({
    global_ranks: [rank],
    country_ranks: [rank],
})

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
    language: {
        name: String,
        code: String,
    },
    modes: {
        osu: mode,
        taiko: mode,
        fruits: mode,
        mania: mode,
    },
    skins: [String],
    setup: setup,
});

userSchema.methods.toJSON = function () {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type User = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model('User', userSchema);

