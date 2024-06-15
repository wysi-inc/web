import * as mongoose from 'mongoose';

const collectionDBSchema = new mongoose.Schema({
    user_id: {
        required: true,
        type: Number
    },
    collections: [{
        name: String,
        beatmapsMd5: [String]
    }]
});

collectionDBSchema.methods.toJSON = function() {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type CollectionDB = mongoose.InferSchemaType<typeof collectionDBSchema>;
export const CollectionDBModel = mongoose.model('CollectionDB', collectionDBSchema);
