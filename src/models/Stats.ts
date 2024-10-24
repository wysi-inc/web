import * as mongoose from "mongoose";

const statsSchema = new mongoose.Schema({
    users: {
        type: Number,
        required: true,
    },
    profiles: {
        type: Number,
        required: true,
    },
    setups: {
        type: Number,
        required: true,
    },
    collections: {
        type: Number,
        required: true,
    },
    updated_at: {
        type: Date,
        required: true,
    },
});

statsSchema.methods.toJSON = function () {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type Stats = mongoose.InferSchemaType<typeof statsSchema>;
export const StatsModel = mongoose.model("Stats", statsSchema);
