import { footerData } from "@/data/v-data";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#E53935] to-[#7F201D]/80 py-10 mt-20 lg:mt-[100px] rounded-t-3xl">
      {footerData.map((item, index) => (
        <div key={index} className="px-6">
          <div className="flex flex-col gap-6 items-center justify-center text-center">
            <Image
              src={item.logo}
              width={150}
              height={75}
              alt="Logo"
              priority
            />
            <p className="text-white text-center max-w-[600px]">
              {item.description}
            </p>
            <div className="flex gap-4">
              {item.socialMedia.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white p-2 transition-all duration-300 hover:-translate-y-2 hover:scale-110"
                >
                  <social.icon
                    size={28}
                    className="text-[#E53935] transition-colors duration-300"
                  />
                </Link>
              ))}
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-8 border-t border-gray-300/20 pt-6 w-full">
              {item.navigationLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-white text-lg font-normal transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="border-t border-gray-200/20 w-full pt-4 flex flex-col lg:flex-row items-center justify-between gap-2">
              <div className="max-w-[1440px] mx-auto flex items-center justify-between w-full">
                <p className="text-white text-sm">{item.copyright}</p>
                <p className="text-white text-sm">{item.footerCopy}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </footer>
  );
}
