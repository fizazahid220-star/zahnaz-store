import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    items: Array,
    phone: String,
    address: String,
    method: String,
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
