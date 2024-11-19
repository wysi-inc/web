import * as mongoose from "mongoose";

const tabletSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    w: {
        type: Number,
        required: true,
    },
    h: {
        type: Number,
        required: true,
    },
});

tabletSchema.methods.toJSON = function () {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type Tablet = mongoose.InferSchemaType<typeof tabletSchema>;
export const TabletModel = mongoose.model("Tablet", tabletSchema);
