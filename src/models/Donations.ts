import * as mongoose from "mongoose";

const donationDBSchema = new mongoose.Schema({
    from_name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    message: String,
    is_public: {
        type: Boolean,
        required: true,
    },
    timestamp: {
        required: true,
        type: Date,
    },
});

donationDBSchema.methods.toJSON = function () {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type Donation = mongoose.InferSchemaType<typeof donationDBSchema>;
export const DonationModel = mongoose.model("Donations", donationDBSchema);
