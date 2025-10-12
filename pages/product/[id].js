import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useCart } from "../../components/cartContext"
import Link from "next/link"

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [size, setSize] = useState("M")
  const [color, setColor] = useState("Black")

  useEffect(() => {
    if (!id) return
    async function fetchProduct() {
      const res = await fetch(`/api/products`)
      const data = await res.json()
      if (data.success) {
        const found = data.products.find((p) => p._id === id)
        setProduct(found)
      }
    }
    fetchProduct()
  }, [id])

  if (!product) return <p className="text-center text-gray-400 mt-20">Loading product...</p>

  const handleAdd = () => {
    addToCart({ ...product, size, color })
    router.push("/cart")
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img src={product.image} alt={product.name} className="rounded-2xl w-full h-[500px] object-cover shadow-lg" />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-yellow-400 text-xl mb-4">PKR {product.price}</p>
          <p className="text-gray-400 mb-6">{product.description || "No description available."}</p>

          <div className="flex space-x-4 mb-6">
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="bg-neutral-800 border border-gray-700 rounded-lg p-2"
            >
              {["S", "M", "L", "XL"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="bg-neutral-800 border border-gray-700 rounded-lg p-2"
            >
              {["Black", "White", "Gray", "Navy"].map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAdd}
            className="w-full bg-yellow-500 text-black font-semibold rounded-lg py-3 hover:bg-yellow-400 transition"
          >
            Add to Cart
          </button>

          <Link href="/shop" className="block text-center text-gray-400 mt-4 hover:text-yellow-400 transition">
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  )
}
