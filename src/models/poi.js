import mongoose from "mongoose";

const poiSchema = new mongoose.Schema({
  name: String,

  description: String,

  category: String,

  lat: Number,

  lng: Number,

  legacyId: {
    type: String,
    unique: true,
    sparse: true,
    select: false,
  },
});

export const Poi = mongoose.model(
  "Poi",
  poiSchema
);