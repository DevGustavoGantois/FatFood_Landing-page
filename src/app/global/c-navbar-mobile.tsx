"use client";
import { navbarData } from "@/data/v-data";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function NavbarMobile() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  return (
    <nav className="relative w-full">
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <Image src="/Logo.svg" width={100} height={50} alt="Logo" priority />
        </Link>
        <button onClick={() => setOpenMenuMobile(true)}>
          <Menu size={32} className="text-[#E53935] cursor-pointer" />
        </button>
      </div>
      {openMenuMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpenMenuMobile(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white z-50 rounded-l-3xl p-6 flex flex-col items-center gap-8 transform transition-transform duration-500 ${
          openMenuMobile ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 left-4"
          onClick={() => setOpenMenuMobile(false)}
        >
          <X className="text-[#E53935] cursor-pointer" size={24} />
        </button>
        <ul className="flex flex-col items-center gap-6 mt-12">
          {navbarData.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="transition-all duration-300 text-[#323232] text-lg hover:text-[#E53935] hover:-translate-y-1"
                onClick={() => setOpenMenuMobile(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contato"
          className="px-12 py-2 mt-6 rounded-[48px] bg-[#E53935] text-white font-medium text-lg transition-all duration-300 hover:scale-105"
        >
          Contato
        </Link>
      </div>
    </nav>
  );
}
