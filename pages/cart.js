import Header from '../components/Header'
import { useCart } from '../components/cartContext'
import Link from 'next/link'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()
  const total = cart.reduce((s, i) => s + i.price, 0)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container py-10">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="mt-6">
            <p className="text-gray-400">Cart is empty.</p>
            <Link href="/shop" className="btn mt-4 inline-block">
              Go to Shop
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {cart.map((c, idx) => (
              <div key={idx} className="flex items-center justify-between card">
                <div className="flex items-center gap-4">
                  <img src={c.image} className="w-24 h-24 object-cover rounded" />
                  <div>
                    <h4 className="font-semibold">{c.name}</h4>
                    <p className="text-gray-400">PKR {c.price}</p>
                  </div>
                </div>
                <div>
                  <button className="btn" onClick={() => removeFromCart(idx)}>Remove</button>
                </div>
              </div>
            ))}
            <div className="card flex justify-between items-center">
              <div>
                <strong>Total:</strong> PKR {total}
              </div>
              <div className="flex gap-4">
                <Link href="/checkout" className="btn">
                  Checkout
                </Link>
                <button className="btn bg-red-600" onClick={clearCart}>Clear</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
