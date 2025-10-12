import mongoose from "mongoose";
import Product from "../../lib/models/Product.js";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

export default async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  try {
    if (id) {
      // Single product
      const product = await Product.findById(id);
      return res.status(200).json({ success: true, product });
    } else {
      // All products
      const products = await Product.find();
      return res.status(200).json({ success: true, products });
    }
  } catch (err) {
    console.error("❌ Error fetching products:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
