import Image from "next/image";
import Link from "next/link";
import { NavbarMobile } from "./c-navbar-mobile";

const navbarData = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Sobre",
    href: "#sobre-nos"
  },
  {
    name: "Serviços",
    href: "#servicos"
  },
  {
    name: "Newsletter",
    href: "#newsletter"
  },
  {
    name: "Depoimentos",
    href: "#depoimentos"
  },
];

export function Navbar() {
  return (
    <header>
      <nav className="w-full hidden lg:flex items-center justify-between px-10 py-6">
        <Link href="/">
          <Image 
            src="/Logo.svg" 
            width={180} 
            height={60} 
            alt="Logo" 
            priority 
          />
        </Link>
        <ul className="flex items-center gap-12">
          {navbarData.map((item, index) => (
            <li
              key={index}
              className="text-gray-600 font-normal text-lg transition-all duration-300 hover:text-[#E53935] hover:-translate-y-1"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contato"
          className="rounded-[48px] bg-[#E53935] px-6 py-2 text-white font-medium text-lg transition-all duration-300 hover:scale-105"
        >
          Contato
        </Link>
      </nav>
      <div className="flex lg:hidden">
        <NavbarMobile />
      </div>
    </header>
  );
}
