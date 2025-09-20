import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-900/60 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Zahnaz</h1>
        <nav>
          <Link href="/" className="mr-4 text-gray-300 hover:text-white">Home</Link>
          <Link href="/shop" className="mr-4 text-gray-300 hover:text-white">Shop</Link>
          <Link href="/cart" className="text-gray-300 hover:text-white">Cart</Link>
        </nav>
      </div>
    </header>
  )
}
