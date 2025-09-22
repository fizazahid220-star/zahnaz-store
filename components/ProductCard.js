import { useCart } from './cartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  return (
    <div className="card bg-gray-900 p-4 rounded-2xl shadow hover:shadow-lg transition">
      <div className="overflow-hidden rounded-xl">
        <img
          src={product.image}
          className="w-full h-80 object-contain bg-white rounded-xl transform transition duration-300 hover:scale-105"
          alt={product.name}
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-400">PKR {product.price}</p>
      <select className="mt-2 w-full bg-gray-800 p-2 rounded">
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>
      <button
        className="btn mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl p-2 transition"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}
