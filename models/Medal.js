import mongoose, { Schema } from "mongoose";

const medalSchema = new Schema({
  MedalID: Number,
  Name: String,
  Link: String,
  Description: String,
  Restriction: String,
  Grouping: String,
  Instructions: String,
  SolutionFound: Boolean,
  Solution: String,
  Mods: String,
  Locked: Boolean,
  Video: String,
  Date: Date,
  PackID: Number,
  FirstAchievedDate: Date,
  FirstAchievedBy: String,
  ModeOrder: Number,
  Ordering: Number,
  Rarity: Number,
});

medalSchema.methods.toJSON = function () {
  const { __v, _id, ...user } = this.toObject();
  return user;
};
const model = mongoose.model("Medal", medalSchema);

export const schema = model.schema;
export default model;
