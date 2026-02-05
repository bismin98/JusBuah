"use client";

import { useState } from "react";
import Image from "next/image";
import { InformationCircleIcon, ShoppingBagIcon, PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-32 md:h-10 md:w-40">
                <Image
                  src="/images/logojus2.png"
                  alt="Fresh Juice"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <a
                  href="#tentang"
                  className="text-gray-700 hover:text-orange-500 font-semibold transition-colors duration-300"
                >
                  Tentang
                </a>
              </li>
              <li>
                <a
                  href="#produk"
                  className="text-gray-700 hover:text-pink-500 font-semibold transition-colors duration-300"
                >
                  Produk
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  className="text-gray-700 hover:text-purple-500 font-semibold transition-colors duration-300"
                >
                  Kontak
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          ></div>
          <div className="fixed top-16 left-0 right-0 bg-white z-40 md:hidden shadow-lg animate-slide-down">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-1">
                <li>
                  <a
                    href="#tentang"
                    onClick={closeMenu}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg font-semibold transition-all duration-200"
                  >
                    <InformationCircleIcon className="w-6 h-6" />
                    <span>Tentang</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#produk"
                    onClick={closeMenu}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-500 rounded-lg font-semibold transition-all duration-200"
                  >
                    <ShoppingBagIcon className="w-6 h-6" />
                    <span>Produk</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#kontak"
                    onClick={closeMenu}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-500 rounded-lg font-semibold transition-all duration-200"
                  >
                    <PhoneIcon className="w-6 h-6" />
                    <span>Kontak</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
