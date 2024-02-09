import * as mongoose from 'mongoose';

const medalSchema = new mongoose.Schema({
    medal_id: {
        type: Number,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    mode_order: {
        type: Number,
        required: true,
    },
    ordering: {
        type: Number,
        required: true,
    },
    rarity: {
        type: Number,
        required: true,
    },
});

medalSchema.methods.toJSON = function() {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type Medal = mongoose.InferSchemaType<typeof medalSchema>;
export const Medal = mongoose.model('Medal', medalSchema);
