import * as mongoose from 'mongoose';

const medalSchema = new mongoose.Schema({
  medal_id: Number,
  name: String,
  link: String,
  description: String,
  category: String,
  mode_order: Number,
  ordering: Number,
  rarity: Number,
});

medalSchema.methods.toJSON = function () {
    const { __v, _id, ...user } = this.toObject();
    return user;
};

export type Medal = mongoose.InferSchemaType<typeof medalSchema>;
export const Medal = mongoose.model('Medal', medalSchema);

