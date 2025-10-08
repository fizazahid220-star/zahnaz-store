import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Schema
const OrderSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    address: String,
    method: String,
    items: Array,
    price: Number,
  },
  { timestamps: true }
);

// Model (reuse if exists)
const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

// API Handler
export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const order = await Order.create(req.body);
      return res.status(201).json({ success: true, order });
    } catch (err) {
      console.error("Order Error:", err);
      return res.status(400).json({ success: false, error: err.message });
    }
  }

  if (req.method === "GET") {
    try {
      const orders = await Order.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, orders });
    } catch (err) {
      console.error("Get Orders Error:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  return res.status(405).json({ success: false, error: "Method not allowed" });
}
