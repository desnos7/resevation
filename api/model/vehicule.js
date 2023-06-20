import mongoose from "mongoose";

const { Schema } = mongoose;
const vehicule = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      require: true,
    },
    eype: {
      type: String,
      require: true,
    },
    prixjournee: {
      type: Number,
      require: true,
    },
    imageurls: [],
    reservationencours: [],
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const voiture = mongoose.model("Vehicules", vehicule);

export default voiture;
