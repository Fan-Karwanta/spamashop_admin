import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    userId: String,
    price: String,
    payment_status: String,
    delivery_status: String,
    date: String,
    shopName: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model(
  "Transaction",
  TransactionSchema,
  "customerorders"
);
export default Transaction;
