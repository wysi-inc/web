import * as mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        unique: true,
    },
    access_token: {
        type: String,
        required: true,
    },
    refresh_token: {
        type: String,
        required: true,
    },
    expires_at: {
        type: Number,
        required: true,
    },
});

tokenSchema.methods.toJSON = function() {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type Token = mongoose.InferSchemaType<typeof tokenSchema>;
export const TokenModel = mongoose.model('Tokens', tokenSchema);
