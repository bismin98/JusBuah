"use client";

import { useState, useEffect } from "react";
import { HomeIcon, InformationCircleIcon, ShoppingBagIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { HomeIcon as HomeIconSolid, InformationCircleIcon as InfoIconSolid, ShoppingBagIcon as ShoppingIconSolid, PhoneIcon as PhoneIconSolid } from "@heroicons/react/24/solid";

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["tentang", "produk", "kontak"];
      const scrollPosition = window.scrollY + 200;

      if (scrollPosition < 500) {
        setActiveSection("home");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { 
      id: "home", 
      label: "Home", 
      icon: HomeIcon,
      iconSolid: HomeIconSolid,
      href: "#" 
    },
    { 
      id: "tentang", 
      label: "Tentang", 
      icon: InformationCircleIcon,
      iconSolid: InfoIconSolid,
      href: "#tentang" 
    },
    { 
      id: "produk", 
      label: "Produk", 
      icon: ShoppingBagIcon,
      iconSolid: ShoppingIconSolid,
      href: "#produk" 
    },
    { 
      id: "kontak", 
      label: "Kontak", 
      icon: PhoneIcon,
      iconSolid: PhoneIconSolid,
      href: "#kontak" 
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl md:hidden z-50 border-t border-gray-200">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = activeSection === item.id ? item.iconSolid : item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? "text-orange-500 scale-110"
                  : "text-gray-600"
              }`}
            >
              <Icon className="w-6 h-6 mb-0.5" />
              <span className="text-xs font-semibold">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
