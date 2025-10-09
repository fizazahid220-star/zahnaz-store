import { useEffect, useState } from "react";
import Link from "next/link";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const savedPhone = localStorage.getItem("userPhone");
    setPhone(savedPhone);

    async function fetchOrders() {
      if (!savedPhone) return;
      const res = await fetch(`/api/order?phone=${savedPhone}`);
      const data = await res.json();
      if (data.success) setOrders(data.orders);
    }

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">🛍 My Orders</h1>

        {!phone && (
          <p className="text-center text-gray-400 mb-4">
            Please place an order first to view your order history.
          </p>
        )}

        {orders.length === 0 ? (
          <p className="text-center text-gray-400">No orders yet.</p>
        ) : (
          <ul className="space-y-4">
            {orders.map((item, i) => (
              <li
                key={i}
                className="border border-gray-700 rounded-lg p-4 hover:border-gray-500 transition"
              >
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">{item.name}</span>
                  <span className="text-gray-400">PKR {item.price}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1 capitalize">
                  Method: {item.method || "COD"}
                </p>
                <p className="text-sm text-gray-500">Phone: {item.phone}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition transform duration-300"
          >
            ⬅ Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
