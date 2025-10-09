import Header from "../components/Header";
import { useCart } from "../components/cartContext";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    method: "cod",
  });
  const total = cart.reduce((s, i) => s + i.price, 0);

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          address: form.address,
          method: form.method,
          items: cart,
          price: total,
        }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("userPhone", form.phone); // save phone for filtering
        alert("✅ Order placed successfully!");
        clearCart();
        router.push("/my-order");
      } else {
        alert("❌ Error placing order: " + data.error);
      }
    } catch (err) {
      console.error("⚠️ Something went wrong:", err);
      alert("⚠️ " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>
        <form
          className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg space-y-4"
          onSubmit={submit}
        >
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-2 rounded bg-gray-800"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full p-2 rounded bg-gray-800"
              placeholder="03XXXXXXXXX"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Address</label>
            <textarea
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full p-2 rounded bg-gray-800"
              placeholder="House No., Street, City"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Payment Method</label>
            <select
              value={form.method}
              onChange={(e) => setForm({ ...form, method: e.target.value })}
              className="w-full p-2 rounded bg-gray-800"
            >
              <option value="cod">Cash on Delivery</option>
              <option value="easypaisa">Easypaisa</option>
              <option value="jazzcash">JazzCash</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold py-3 rounded hover:bg-yellow-400 transition"
          >
            Place Order - PKR {total}
          </button>
        </form>
      </main>
    </div>
  );
}
