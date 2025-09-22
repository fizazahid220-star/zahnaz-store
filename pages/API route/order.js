export default async function handler(req, res) {
  if (req.method === "POST") {
    const order = req.body;
    console.log("🛒 New Order:", order);

    // Abhi ke liye bas confirm message bhej dena
    return res.status(200).json({ success: true });
  }
  res.status(405).json({ error: "Method not allowed" });
}
