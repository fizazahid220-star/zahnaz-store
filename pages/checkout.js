import Header from "../components/Header"
import { useCart } from "../components/cartContext"
import { useState } from "react"
import { useRouter } from "next/router"

export default function Checkout() {
  const { cart, clearCart } = useCart()
  const router = useRouter()
  const [form, setForm] = useState({ name: "", phone: "", address: "", method: "cod" })
  const total = cart.reduce((s, i) => s + i.price, 0)

  const submit = async (e) => {
    e.preventDefault()

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
      })

      const text = await res.text()

      // 🧠 check if response is HTML (means not a valid API response)
      if (text.startsWith("<!DOCTYPE")) {
        throw new Error("API route not found (HTML page returned instead of JSON)")
      }

      const data = JSON.parse(text)

      if (data.success) {
        alert("✅ Order placed successfully!")
        clearCart()
        router.push("/my-order")
      } else {
        alert("❌ Error placing order: " + (data.error || "Unknown error"))
      }
    } catch (err) {
      console.error("⚠️ Order placement failed:", err)
      alert("⚠️ Something went wrong: " + err.message)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container py-10">
        <h2 className="text-2xl font-bold">Checkout</h2>
        <form className="mt-6 space-y-4" onSubmit={submit}>
          <div>
            <label className="block text-sm">Full name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-2 rounded bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm">Phone</label>
            <input
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full p-2 rounded bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm">Address</label>
            <textarea
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full p-2 rounded bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm">Payment method</label>
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
          <div>
            <button className="btn" type="submit">
              Place Order - PKR {total}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
