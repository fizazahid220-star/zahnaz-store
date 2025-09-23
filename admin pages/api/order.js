import { addOrder, getOrders } from "@/lib/orders";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const order = req.body;
    addOrder(order);
    return res.status(200).json({ success: true, order });
  }

  if (req.method === "GET") {
    const orders = getOrders();
    return res.status(200).json({ success: true, orders });
  }

  res.status(405).json({ error: "Method not allowed" });
}
