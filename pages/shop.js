import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";
import logo from "../public/images/logo.png";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (data.success) setProducts(data.products);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }
    loadProducts();
  }, []);

  const filtered =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white px-6 py-8">
      {/* 🖤 Header with Logo + Cart Icon */}
      <div className="flex items-center justify-between max-w-6xl mx-auto mb-10">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Zahnaz Logo" width={55} height={45} />
          <span className="text-2xl font-semibold text-gray-100 tracking-wide">
       
          </span>
        </Link>

        <Link
          href="/cart"
          className="relative bg-gray-800 border border-gray-600 p-3 rounded-full hover:bg-gray-700 transition"
        >
          <FaShoppingBag className="text-gray-300 w-6 h-6" />
        </Link>
      </div>

      {/* 🔘 Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        {["All", "Men", "Women", "Hoodies"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              category === cat
                ? "bg-gray-200 text-black font-semibold"
                : "border-gray-500 text-gray-300 hover:bg-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🛍 Product Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 col-span-3">
            No products found for this category.
          </p>
        ) : (
          filtered.map((p) => (
            <Link
              key={p._id}
              href={`/product/${p._id}`}
              className="group bg-neutral-900 border border-gray-700 p-5 rounded-2xl shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:shadow-[0_6px_30px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-72 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-gray-300 transition">
                {p.name}
              </h2>
              <p className="text-gray-400">PKR {p.price}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
