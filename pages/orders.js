import { useEffect, useState } from 'react'

export default function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const raw = localStorage.getItem("z_orders")
    if (raw) setOrders(JSON.parse(raw))
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((item, i) => (
            <li key={i} className="mb-2 border-b pb-2">
              <span className="font-semibold">{item.name}</span> — PKR {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
