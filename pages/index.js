import Link from 'next/link'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <section className="container text-center py-12">
          <h2 className="text-3xl font-bold">Welcome to Zahnaz</h2>
          <p className="text-gray-400 mt-3">Premium T-shirts with style & comfort.</p>
          <Link 
            href="/shop" 
            className="inline-block mt-6 btn"
          >
            Shop Now
          </Link>
        </section>
      </main>
    </div>
  )
}
