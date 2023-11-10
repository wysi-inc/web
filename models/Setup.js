import mongoose, { Schema } from "mongoose";

const setupSchema = new Schema({
  userId: {
    type: Number,
    required: true,
    immutable: true,
    unique: true,
  },
  keyboard: {
    name: String,
    layout: {
      type: String,
      enum: ["k2", "k3", "k4", "k60", "k75", "ktkl", "kfull", ""],
    },
    keys: [String],
  },
  tablet: {
    name: String,
    area: {
      w: Number,
      h: Number,
    },
    position: {
      x: Number,
      y: Number,
      r: Number,
    },
    size: {
      w: Number,
      h: Number,
    },
  },
  mouse: {
    name: String,
    dpi: Number,
  },
  peripherals: {
    monitor: String,
    headphones: String,
    microphone: String,
    tablet: String,
    mouse: String,
    keyboard: String,
    keypad: String,
    mousepad: String,
    chair: String,
    camera: String,
    audio: String,
  },
  computer: {
    cpu: String,
    gpu: String,
    ram: String,
    psu: String,
    storage: String,
    motherboard: String,
    case: String,
  },
});

setupSchema.methods.toJSON = function () {
  const { __v, _id, ...setup } = this.toObject();
  return setup;
};

const model = mongoose.model("Setup", setupSchema);
export const schema = model.schema;
export default model;
