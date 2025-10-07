import { useCart } from './cartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  return (
   <div className="bg-neutral-900/80 backdrop-blur-md border border-white/10 text-white p-5 rounded-2xl shadow-[0_4px_30px_rgba(59,130,246,0.1)] hover:shadow-[0_6px_40px_rgba(59,130,246,0.25)] transition-all duration-300 transform hover:-translate-y-1">
  <div className="overflow-hidden rounded-xl">
    <img
      src={product.image}
      className="w-full h-80 object-contain bg-neutral-800/40 rounded-xl transform transition duration-500 hover:scale-105"
      alt={product.name}
    />
  </div>

  <h3 className="mt-4 text-lg font-semibold tracking-wide text-white/90">{product.name}</h3>
  <p className="text-gray-400 mt-1">PKR {product.price}</p>

  <select className="mt-3 w-full bg-neutral-800/60 border border-white/10 text-white/80 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
    <option>S</option>
    <option>M</option>
    <option>L</option>
    <option>XL</option>
  </select>

  <button
    className="mt-5 w-full bg-indigo-600/90 hover:bg-indigo-700 text-white font-medium rounded-xl py-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
    onClick={() => addToCart(product)}
  >
    Add to Cart
  </button>
</div>

  )
}
