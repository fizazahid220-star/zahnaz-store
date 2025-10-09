import Image from "next/image"
import Link from "next/link"
import { useCart } from "./cartContext"
import { useEffect, useState } from "react"
import logo from "../public/images/logo.png"

export default function Header() {
  const { cart } = useCart()
  const [shake, setShake] = useState(false)

  // 🌀 Shake animation trigger when cart updates
  useEffect(() => {
    if (cart.length > 0) {
      setShake(true)
      const timer = setTimeout(() => setShake(false), 500)
      return () => clearTimeout(timer)
    }
  }, [cart])

  return (
    <header className="bg-neutral-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50 shadow-[0_4px_30px_rgba(59,130,246,0.15)]">
      <div className="container flex items-center justify-between py-4 px-6">
        {/* 🧿 Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Zahnaz Logo"
            width={55}
            height={45}
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* 🔗 Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-300 hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/shop" className="text-gray-300 hover:text-blue-400 transition">
            Shop
          </Link>

          {/* 🛍 Cart Icon with live counter */}
          <Link href="/cart" className="relative">
            <span
              className={`text-2xl transition-transform ${
              shake ? "animate-cart" : ""

              }`}
            >
              🛒
            </span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-400 text-black text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                {cart.length}
              </span>
            )}
          </Link>

          <Link href="/my-order" className="text-gray-300 hover:text-blue-400 transition">
            Orders
          </Link>
        </nav>
      </div>
    </header>
  )
}
