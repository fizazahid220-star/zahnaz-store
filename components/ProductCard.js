import { useCart } from './cartContext'
export default function ProductCard({product}){
  const { addToCart } = useCart()
  return (
    <div className="card">
      <img src={product.image} className="w-full h-64 object-cover rounded" />
      <h3 className="mt-3 font-semibold">{product.name}</h3>
      <p className="text-gray-400">PKR {product.price}</p>
      <select className="mt-2 w-full bg-gray-800 p-2 rounded">
        <option>S</option><option>M</option><option>L</option><option>XL</option>
      </select>
      <button className="btn mt-4 w-full" onClick={()=> addToCart(product)}>Add to Cart</button>
    </div>
  )
}
