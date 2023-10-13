import mongoose, { Schema } from 'mongoose';

const rankSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    rank: {
        type: Number,
        required: true
    }
}, { _id : false });

const modeSchama = new Schema({
    globalRankHistory: [rankSchema],
    countryRankHistory: [rankSchema]
}, { _id : false });

const userSchema = new Schema({
    userId: {
        type: Number,
        required: true,
        immutable: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    language: {
        name: String,
        code: String,
    },
    modes: {
        osu: modeSchama,
        taiko: modeSchama,
        fruits: modeSchama,
        mania: modeSchama,
    },
    skin: Number,
    setup: {
        keyboard: {
            name: String,
            formatCode: ['2', '3', '4', '60', '75', 'tkl', 'full'],
            keys: [String]
        },
        tablet: {
            name: String,
            unit: ['mm', 'in'],
            size: {
                width: Number,
                height: Number
            },
            area: {
                width: Number,
                height: Number
            },
            position: {
                x: Number,
                y: Number,
                r: Number
            }
        },
        mouse: {
            name: String,
            dpi: Number
        },
        mousepad: {
            name: String,
            size: {
                unit: ['mm', 'in'],
                with: Number,
                height: Number
            }
        },
        headphones: {
            name: String
        },
        monitor: {
            name: String,
            hz: Number,
            size: Number
        }
    },
    computer: {
        cpu: String,
        gpu: String,
        ram: String,
        psu: String,
        storage: String,
        mohterboard: String,
        case: String,
        other: String,
    }
});

const model = mongoose.model('User', userSchema);
export const schema = model.schema;
export default model;