export default function About() {
  return (
    <section id="tentang" className="py-12 md:py-20 bg-linear-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 bg-linear-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          Tentang Kami
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-0">
          <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
            Fresh Juice adalah penyedia jus buah segar terpercaya yang
            berkomitmen menghadirkan minuman sehat dari buah-buahan pilihan
            berkualitas tinggi.
          </p>
          <p className="text-base md:text-lg text-gray-700">
            Setiap produk kami dibuat dengan penuh cinta dan tanpa bahan
            pengawet, memberikan kesegaran alami yang Anda butuhkan setiap
            hari.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 mt-8 md:mt-16">
          <div className="text-center p-3 md:p-6 bg-white rounded-lg md:rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-3xl md:text-5xl mb-2 md:mb-4">🍎</div>
            <h3 className="text-sm md:text-xl font-bold text-orange-500 mb-1 md:mb-2">
              100% Alami
            </h3>
            <p className="text-xs md:text-base text-gray-600 leading-tight md:leading-normal">
              Tanpa pengawet, tanpa pewarna buatan, hanya buah segar pilihan
            </p>
          </div>
          <div className="text-center p-3 md:p-6 bg-white rounded-lg md:rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-3xl md:text-5xl mb-2 md:mb-4">💪</div>
            <h3 className="text-sm md:text-xl font-bold text-pink-500 mb-1 md:mb-2">
              Penuh Vitamin
            </h3>
            <p className="text-xs md:text-base text-gray-600 leading-tight md:leading-normal">
              Kaya nutrisi dan vitamin untuk menjaga kesehatan tubuh Anda
            </p>
          </div>
          <div className="text-center p-3 md:p-6 bg-white rounded-lg md:rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-3xl md:text-5xl mb-2 md:mb-4">😋</div>
            <h3 className="text-sm md:text-xl font-bold text-purple-500 mb-1 md:mb-2">
              Rasa Lezat
            </h3>
            <p className="text-xs md:text-base text-gray-600 leading-tight md:leading-normal">
              Kombinasi rasa yang sempurna untuk memanjakan lidah Anda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
