import * as mongoose from "mongoose";

export const REPORT_CATEGORIES = ["Slurs / Violence", "Linking inapropiate content", "Disruptive profile", "Other"];

const reportSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    author: {
        type: Number,
        required: true,
    },
    target: {
        type: Number,
        required: true,
    },
    category: {
        required: true,
        type: String,
        enum: REPORT_CATEGORIES,
    },
    description: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
    },
});

reportSchema.methods.toJSON = function () {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type Report = mongoose.InferSchemaType<typeof reportSchema>;
export const ReportModel = mongoose.model("Reports", reportSchema);
