import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
export default function Shop(){
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <section className="container py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p=> <ProductCard key={p.id} product={p} />)}
      </section>
    </div>
  )
}
