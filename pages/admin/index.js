import { useEffect, useState } from "react"

export default function Admin() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    // backend se orders laa raha hai
    const fetchOrders = async () => {
      const res = await fetch("/api/order")
      const data = await res.json()
      if (data.success) {
        setOrders(data.orders)
      }
    }
    fetchOrders()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-6">📦 Admin Dashboard</h1>

      {/* Agar koi order nahi hai */}
      {orders.length === 0 && <p>No orders found</p>}

      {/* Orders list */}
      {orders.map((o) => (
        <div key={o._id} className="border border-gray-700 p-4 mb-4 rounded">
          <h2 className="font-bold text-lg">Order by: {o.name}</h2>
          <p>📞 Phone: {o.phone}</p>
          <p>🏠 Address: {o.address}</p>
          <p>💳 Method: {o.method}</p>
          <p>💰 Price: PKR {o.price}</p>
          <p>🕒 Date: {new Date(o.createdAt).toLocaleString()}</p>

          <h3 className="mt-2 font-semibold">🛒 Items:</h3>
          <ul className="list-disc ml-6">
            {o.items.map((i, idx) => (
              <li key={idx}>
                {i.name} - PKR {i.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
