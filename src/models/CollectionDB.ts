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

export type CollectionDB2 = mongoose.InferSchemaType<typeof collectionDBSchema>;
export type CollectionsDB2 = mongoose.InferSchemaType<typeof collectionsDBSchema>;
export const CollectionsDB2Model = mongoose.model('CollectionsDB', collectionsDBSchema);
