import { mongoose } from 'mongoose';

const { Schema } = mongoose;

const transaction = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    amount: { type: Number, required: true },
    paymentStatus: { type: String, required: true },
  })


  const transactionSchema=mongoose.model("reservez",transaction )
  module.exports=transactionSchema;