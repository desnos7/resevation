import mongoose from "mongoose";

const { Schema } = mongoose;

const transaction = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicules" },
  amount: { type: Number, required: true },
  paymentStatus: { type: String, required: true },
});

const transactione = mongoose.model("reservez", transaction);
export default transactione;
