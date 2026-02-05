export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-orange-500/40 via-pink-500/40 to-purple-500/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-8">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-4 md:mb-6 drop-shadow-xl leading-tight tracking-tight">
          <span className="uppercase">Jus Buah Rebis</span>
          <br />
          <span className="bg-linear-to-r from-yellow-300 via-orange-300 to-pink-300 text-transparent bg-clip-text font-extrabold tracking-wide">
            100% Sehat
          </span>
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-white mb-6 md:mb-8 drop-shadow-md max-w-2xl mx-auto px-4">
          Nikmati kesegaran buah-buahan pilihan dalam setiap tegukan.
          Sehat, lezat, dan penuh vitamin!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
          <a
            href="#produk"
            className="w-fit self-center px-4 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-4 bg-linear-to-r from-orange-500 to-pink-500 text-white text-sm sm:text-base font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
          >
            Lihat Produk
          </a>
          <a
            href="#kontak"
            className="w-fit self-center px-4 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-4 bg-white text-orange-500 text-sm sm:text-base font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
          >
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* Floating Fruit Icons - Hidden on small mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-20 left-5 md:left-10 text-4xl md:text-6xl animate-bounce">
          🍓
        </div>
        <div className="absolute top-40 right-10 md:right-20 text-3xl md:text-5xl animate-bounce delay-100">
          🍊
        </div>
        <div className="absolute bottom-40 left-10 md:left-20 text-5xl md:text-7xl animate-bounce delay-200">
          🍉
        </div>
        <div className="absolute bottom-20 right-5 md:right-10 text-4xl md:text-6xl animate-bounce delay-300">
          🥝
        </div>
      </div>
    </section>
  );
}
