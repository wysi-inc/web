import * as mongoose from 'mongoose';

const collectionDBSchema = new mongoose.Schema({
    name: String,
    beatmapsMd5: [String]
}, { _id: false });

const collectionsDBSchema = new mongoose.Schema({
    user_id: {
        required: true,
        type: Number
    },
    collections: [collectionDBSchema]
});

collectionDBSchema.methods.toJSON = function() {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type CollectionDB = mongoose.InferSchemaType<typeof collectionDBSchema>;
export type CollectionsDB = mongoose.InferSchemaType<typeof collectionsDBSchema>;
export const CollectionsDBModel = mongoose.model('CollectionsDB', collectionsDBSchema);
