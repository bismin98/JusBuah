"use client";

import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section id="kontak" className="py-12 md:py-20 bg-linear-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 bg-linear-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Hubungi Kami
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <div className="order-2 md:order-1 bg-white p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center md:text-left">
              Informasi Kontak
            </h3>
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-start space-x-3 md:space-x-4 pb-4 border-b border-gray-100">
                <MapPinIcon className="w-6 md:w-7 h-6 md:h-7 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1">
                    Alamat
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Jl. Buah Segar No. 123
                    <br />
                    Balikpapan, Kalimantan Timur
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 pb-4 border-b border-gray-100">
                <PhoneIcon className="w-6 md:w-7 h-6 md:h-7 text-pink-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1">
                    Telepon
                  </h4>
                  <a href="tel:+6281234567890" className="text-sm md:text-base text-gray-600 hover:text-orange-500">
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 pb-4 border-b border-gray-100">
                <EnvelopeIcon className="w-6 md:w-7 h-6 md:h-7 text-purple-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1">
                    Email
                  </h4>
                  <a href="mailto:info@freshjuice.com" className="text-sm md:text-base text-gray-600 hover:text-orange-500">
                    info@freshjuice.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <ClockIcon className="w-6 md:w-7 h-6 md:h-7 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1">
                    Jam Operasional
                  </h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Senin - Jumat: 08.00 - 20.00
                    <br />
                    Sabtu - Minggu: 09.00 - 18.00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl order-1 md:order-2">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                  Nama
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm md:text-base"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base resize-none"
                  placeholder="Tulis pesan Anda..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-linear-to-r from-orange-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 active:scale-95 text-sm md:text-base"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
