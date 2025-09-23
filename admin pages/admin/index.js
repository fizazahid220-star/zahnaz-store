import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/admin/login");
      return;
    }

    fetch("/api/order")
      .then((res) => res.json())
      .then((data) => setOrders(data.orders || []));
  }, []);

  return (
    <div style={{ maxWidth: 800, margin: "50px auto" }}>
      <h1>📦 Admin Dashboard</h1>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <strong>Order ID:</strong> {order.id} |{" "}
              <strong>Data:</strong> {JSON.stringify(order)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
