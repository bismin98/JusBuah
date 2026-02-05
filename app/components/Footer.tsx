export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-white py-8 md:py-10 pb-20 md:pb-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-3 md:mb-4">
          <div className="relative h-8 w-32 md:h-10 md:w-40">
            <img
              src="/images/logojus.png"
              alt="Fresh Juice"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-white/90 mb-4 text-sm md:text-base">
          Kesegaran Alami dalam Setiap Tegukan
        </p>
        <p className="text-white/80 text-xs md:text-sm">
          © 2026 Fresh Juice. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
