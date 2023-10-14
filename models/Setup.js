import mongoose, { Schema } from 'mongoose';

const setupSchema = new Schema({
    userId: {
        type: Number,
        required: true,
        immutable: true,
        unique: true
    },
    keyboard: {
        name: String,
        layout: {
            type: String,
            enum: ['k2', 'k3', 'k4', 'k60', 'k75', 'ktkl', 'kfull', '']
        },
        keys: [String]
    },
    tablet: {
        name: String,
        area: {
            w: Number,
            h: Number
        },
        position: {
            x: Number,
            y: Number,
            r: Number
        },
        size: {
            w: Number,
            h: Number
        },
    },
    mouse: {
        name: String,
        dpi: Number,
    },
    mousepad: {
        name: String,
        size: {
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


setupSchema.methods.toJSON = function() {
    const { __v, _id, ...setup  } = this.toObject();
    return setup;
}

const model = mongoose.model('Setup', setupSchema);
export const schema = model.schema;
export default model;

