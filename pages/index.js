import Header from "../components/Header"
import ProductCard from "../components/ProductCard"
import { useCart } from "../components/cartContext"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function Home() {
  const products = [
    { id: 1, name: "Classic White Tee", price: "Rs.1500", img: "https://i.pinimg.com/1200x/69/b9/c6/69b9c68885458baf82d195ef7bf4a840.jpg" },
    { id: 2, name: "Black Logo Tee", price: "Rs.1800", img: "https://i.pinimg.com/736x/d1/2b/24/d12b24ed2c5080e3456300d4e8f77f44.jpg" },
    { id: 3, name: "Blue Oversized Tee", price: "Rs.1700", img: "https://i.pinimg.com/1200x/b8/57/18/b85718dd8f67d09c0dc89593ea721259.jpg" },
    { id: 4, name: "Printed Graphic Tee", price: "Rs.2000", img: "https://i.pinimg.com/1200x/40/1c/f7/401cf77079a9d823afd71f63e05c51ba.jpg" },
  ];

  return (
    <div className="bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center">
        <img
          src="https://i.pinimg.com/1200x/60/ae/f2/60aef24f78d090efdc838cd459ee5151.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
            Zahnaz Clothing
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Premium T-Shirts & Hoodies — Style Meets Comfort
          </p>
          <a
            href="/shop"
            className="mt-8 inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            🛒 Shop Now
          </a>
        </div>
      </section>

      {/* Featured Categories */}


      {/* ✅ Gallery Slider */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured T-Shirts
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
 <div className="bg-neutral-900 text-white rounded-3xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden group border border-white/10">
  <div className="relative">
    <img
      src={item.img}
      alt={item.name}
      className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
  </div>

  <div className="text-center p-6 bg-white/5 backdrop-blur-sm">
    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
      {item.name}
    </h3>
    <p className="text-gray-400 mt-2">{item.price}</p>
  </div>
</div>

            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Zahnaz?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold">✔ Premium Quality</h3>
            <p className="text-gray-400 mt-2">Best fabrics and prints.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🚚 Fast Delivery</h3>
            <p className="text-gray-400 mt-2">Get products on time.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">💳 COD Available</h3>
            <p className="text-gray-400 mt-2">Cash on Delivery for Pakistan.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
   <footer className="bg-neutral-900/80 backdrop-blur-md border-t border-white/10 py-6 text-center text-gray-400">
  <p>
    © 2025 <span className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">
      Zahnaz Clothing
    </span>. All rights reserved.
  </p>
</footer>


    </div>
  )
}
