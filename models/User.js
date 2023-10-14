import mongoose, { Schema } from "mongoose";

const rankSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    rank: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const modeSchama = new Schema(
  {
    globalRankHistory: [rankSchema],
    countryRankHistory: [rankSchema],
  },
  { _id: false }
);

const userSchema = new Schema({
  userId: {
    type: Number,
    required: true,
    immutable: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  language: {
    name: String,
    code: String,
  },
  modes: {
    osu: modeSchama,
    taiko: modeSchama,
    fruits: modeSchama,
    mania: modeSchama,
  },
  skin: Number,
});

userSchema.methods.toJSON = function () {
  const { __v, _id, ...user } = this.toObject();
  return user;
};
const model = mongoose.model("User", userSchema);

export const schema = model.schema;
export default model;
