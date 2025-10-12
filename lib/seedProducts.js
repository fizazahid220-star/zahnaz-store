import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config({ path: ".env.local" });

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

const products = [
  {
    name: "Men's Classic Tee",
    price: 1200,
    image: "https://i.pinimg.com/1200x/6f/e1/2e/6fe12efbf0a43b6ca2879cc7659a1e23.jpg",
    category: "Men",
    description: "Soft cotton T-shirt for men.",
  },
  {
    name: "Women's Black Tee",
    price: 1300,
    image: "https://i.pinimg.com/1200x/6a/b6/74/6ab674ce01cd12af5a95fb099735e309.jpg",
    category: "Women",
    description: "Stylish black T-shirt for women.",
  },
  {
    name: "Hoodie Premium",
    price: 2200,
    image: "https://i.pinimg.com/1200x/29/7f/28/297f284dfc41d4799a8802bf3e6b620b.jpg",
    category: "Hoodies",
    description: "Warm and trendy hoodie.",
  },
];

const seed = async () => {
  try {
    await connectDB();
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("✅ Products seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
};

seed();
