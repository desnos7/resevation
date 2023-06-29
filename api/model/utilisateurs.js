import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const utilisateur = new Schema(
  {
    firstname: {
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
      unique: true,
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

//bcript utlisation de .pre pour crypter avant sauvegarde ('save')
// utilisateur.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }
//   this.motDePasse = await bcrypt.hash(this.motDePasse, 12);
// });
export default model("user", utilisateur);


