import * as mongoose from "mongoose";

const medalSchema = new mongoose.Schema({
    Medal_ID: {
        type: Number,
        required: true,
        unique: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Link: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Gamemode: {
        type: String,
        required: false,
    },
    Grouping: {
        type: String,
        required: true,
    },
    Instructions: {
        type: String,
        required: false,
    },
    Ordering: {
        type: Number,
        required: true,
    },
    Frequency: {
        type: Number,
        required: false,
    },
    Count_Achieved_By: {
        type: Number,
        required: false,
    },
    Video_URL: {
        type: String,
        required: false,
    },
    First_Achieved_Date: {
        type: Date,
        required: false,
    },
    First_Achieved_User_ID: {
        type: Number,
        required: false,
    },
    Is_Solution_Found: {
        type: Boolean,
        required: true,
    },
    Supports_Lazer: {
        type: Boolean,
        required: true,
    },
    Is_Restricted: {
        type: String,
        required: true,
    },
    Solution: {
        type: String,
        required: false,
    },
    Date_Released: {
        type: Date,
        required: false,
    },
    Supports_Stable: {
        type: Boolean,
        required: true,
    },
    Mods: {
        type: String,
        required: false,
    },
    Packs: {
        type: String,
        required: false,
    },
});

medalSchema.methods.toJSON = function () {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type Medal = mongoose.InferSchemaType<typeof medalSchema>;
export const MedalModel = mongoose.model("Medal", medalSchema);
