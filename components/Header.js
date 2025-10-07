import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png"; 

export default function Header() {
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
          <span className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-300">
        
          </span>
        </Link>

        {/* 🔗 Navigation */}
        <nav>
          <Link href="/" className="mr-4 text-gray-300 hover:text-blue-400 transition-colors duration-300">Home</Link>
          <Link href="/shop" className="mr-4 text-gray-300 hover:text-blue-400 transition-colors duration-300">Shop</Link>
          <Link href="/cart" className="mr-4 text-gray-300 hover:text-blue-400 transition-colors duration-300">Cart</Link>
          <Link href="/my-order" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Order</Link>
        </nav>

      </div>
    </header>
  );
}
