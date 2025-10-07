import mongoose from "mongoose";
import Order from "../../lib/models/order"


async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    try {
      const order = await Order.create(req.body);
      return res.status(201).json({ success: true, order });
    } catch (err) {
      return res.status(400).json({ success: false, error: err.message });
    }
  }

  if (req.method === "GET") {
    try {
      const orders = await Order.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, orders });
    } catch (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
