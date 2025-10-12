import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

// 👇 If model already exists (Next.js hot reload fix)
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
