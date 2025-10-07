export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src="https://www.shutterstock.com/image-vector/zn-techno-editable-font-logo-260nw-2627501529.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        alt="Zahnaz Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Zahnaz Clothing
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
          Elevate Your Style with Premium T-Shirts — Comfort Meets Fashion
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/shop"
            className="px-8 py-3 rounded-lg bg-white text-black font-semibold shadow-lg hover:bg-gray-200 transition"
          >
            🛒 Shop Now
          </a>
          <a
            href="/about"
            className="px-8 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
