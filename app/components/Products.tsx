import Image from "next/image";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Orange Blast",
      image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?w=500&h=500&fit=crop",
      description: "Jus jeruk segar kaya vitamin C untuk meningkatkan imunitas",
      price: "Rp 25.000",
      gradient: "from-orange-400 to-orange-600",
      color: "text-orange-500",
    },
    {
      id: 2,
      name: "Strawberry Dream",
      image: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=500&h=500&fit=crop",
      description: "Jus strawberry manis dengan antioksidan tinggi",
      price: "Rp 30.000",
      gradient: "from-red-400 to-pink-600",
      color: "text-pink-500",
    },
    {
      id: 3,
      name: "Kiwi Fresh",
      image: "https://images.pexels.com/photos/3407857/pexels-photo-3407857.jpeg?w=500&h=500&fit=crop",
      description: "Jus kiwi segar dengan rasa unik dan menyegarkan",
      price: "Rp 28.000",
      gradient: "from-green-400 to-green-600",
      color: "text-green-500",
    },
    {
      id: 4,
      name: "Watermelon Splash",
      image: "https://images.pexels.com/photos/8473563/pexels-photo-8473563.jpeg?w=500&h=500&fit=crop",
      description: "Jus semangka dingin yang super menyegarkan",
      price: "Rp 22.000",
      gradient: "from-red-500 to-red-700",
      color: "text-red-500",
    },
    {
      id: 5,
      name: "Grape Paradise",
      image: "https://images.pexels.com/photos/6002087/pexels-photo-6002087.jpeg?w=500&h=500&fit=crop",
      description: "Jus anggur manis dengan antioksidan alami",
      price: "Rp 27.000",
      gradient: "from-purple-400 to-purple-600",
      color: "text-purple-500",
    },
    {
      id: 6,
      name: "Pineapple Tropic",
      image: "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?w=500&h=500&fit=crop",
      description: "Jus nanas tropis yang manis dan menyegarkan",
      price: "Rp 26.000",
      gradient: "from-yellow-400 to-orange-500",
      color: "text-yellow-500",
    },
  ];

  return (
    <section
      id="produk"
      className="py-12 md:py-20 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=2074&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/85 md:bg-white/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 bg-linear-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          Produk Kami
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95 md:hover:scale-105"
            >
              <div className="relative h-40 sm:h-48 md:h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-6">
                <h3 className={`text-base sm:text-xl md:text-2xl font-bold ${product.color} mb-1 sm:mb-2`}>
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 md:mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">
                    {product.price}
                  </p>
                  <button className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-linear-to-r from-orange-500 to-pink-500 text-white text-xs sm:text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-200 active:scale-95">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
