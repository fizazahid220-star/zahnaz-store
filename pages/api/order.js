import mongoose from "mongoose";
import Order from "../../lib/models/order";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

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
      const { phone } = req.query; // phone ke basis pe orders filter
      let query = {};
      if (phone) query.phone = phone;

      const orders = await Order.find(query).sort({ createdAt: -1 });
      return res.status(200).json({ success: true, orders });
    } catch (err) {
      console.error("Get Orders Error:", err);
      return res.status(500).json({ success: false, error: err.message });
    }
  }

  return res.status(405).json({ success: false, error: "Method not allowed" });
}
