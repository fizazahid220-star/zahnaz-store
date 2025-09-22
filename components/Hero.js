export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white h-[80vh] flex items-center justify-center">
      <img src="https://i.pinimg.com/1200x/12/c3/9e/12c39e41db13dd1d4cf60ce12b132403.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20 " />
      <div className="relative text-center">
        <h1 className="text-5xl font-bold">Zahnaz Clothing</h1>
        <p className="mt-4 text-lg text-gray-300">Premium T-Shirts | Style & Comfort</p>
        <a href="/shop" className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold">Shop Now</a>
      </div>
    </section>
  )
}
