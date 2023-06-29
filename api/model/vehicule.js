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
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    prixjournee: {
      type: Number,
      required: true,
    },
    imageurls: [],
    description: {
      type: String,
      required: true,
    },
    paidTransaction: { type: mongoose.Schema.Types.ObjectId, ref: 'reservez' }
  },
  { timestamps: true }
);
const voiture = mongoose.model("Vehicules", vehicule);

export default voiture;
