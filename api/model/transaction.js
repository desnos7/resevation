import { Schema, model } from 'mongoose';


const transaction = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user" ,required: true },
  product: { type: Schema.Types.ObjectId, ref: "Vehicules" ,required:true},
  amount: { type: Number, required: true },
  paymentStatus: { type: String, required: true },
});

export default  model("reservez", transaction);

