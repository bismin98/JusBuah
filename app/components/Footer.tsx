export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-white py-8 md:py-10 pb-20 md:pb-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-3 md:mb-4">
          <span className="text-2xl md:text-3xl">🍊</span>
          <span className="text-xl md:text-2xl font-bold">Fresh Juice</span>
        </div>
        <p className="text-white/90 mb-4 text-sm md:text-base">
          Kesegaran Alami dalam Setiap Tegukan
        </p>
        <div className="flex justify-center space-x-6 md:space-x-8 mb-4">
          <a href="#" className="hover:scale-110 transition-transform active:scale-95">
            <span className="text-xl md:text-2xl">📘</span>
          </a>
          <a href="#" className="hover:scale-110 transition-transform active:scale-95">
            <span className="text-xl md:text-2xl">📸</span>
          </a>
          <a href="#" className="hover:scale-110 transition-transform active:scale-95">
            <span className="text-xl md:text-2xl">🐦</span>
          </a>
        </div>
        <p className="text-white/80 text-xs md:text-sm">
          © 2026 Fresh Juice. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
