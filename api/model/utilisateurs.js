import { Schema, model } from "mongoose";

const utilisateur = new Schema(
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
    addressEmail: {
      type: String,
      required: true,
    },
    motDePasse: {
      type: String,
      required: true,
    },
    Compte: {
      type: Number,
      default: 450000,
    },
  },
  { timestamps: true }
);

const User = model("user", utilisateur);

export default User;


