"use client";

import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="max-w-[1600px] mx-auto p-8 mt-10 lg:mt-[100px]" id="home">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center gap-8 lg:gap-0">
        <article className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:max-w-lg mt-0 lg:-mt-40">
          <div className="rounded-full px-4 py-2 bg-[#E53935]/10 text-black font-bold text-base lg:text-lg animate-bounce">
            <div className="flex items-center gap-2">
              <Star size={24} className="text-white" />
              <p className="text-black font-semibold">Pizzas, Hambúrgueres, Fast Foods</p>
              <Star size={24} className="text-white" />
            </div>
          </div>

          <h1 className="text-4xl lg:text-[70px] font-bold text-black">
            <span className="text-[#E53935]">FatFood </span>- Seu FastFood favorito em poucos cliques!
          </h1>

          <p className="text-[#323232] text-base lg:text-xl max-w-lg">
            Peça suas comidas favoritas de forma rápida, prática e segura. Hambúrgueres suculentos, 
            batatas crocantes, pizzas irresistíveis e muito mais, tudo entregue onde você estiver.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="flex items-center cursor-pointer justify-center gap-2 bg-[#E53935] text-white rounded-full px-12 py-4 text-base lg:text-lg font-semibold transition-all duration-700 hover:scale-105 hover:-translate-y-1">
              Peça agora <ArrowRight size={24} />
            </button>
            <button className="bg-transparent cursor-pointer border border-[#E53935] text-[#E53935] rounded-full px-12 py-4 text-base lg:text-lg font-semibold transition-all duration-700 hover:scale-105 hover:bg-[#E53935] hover:text-white">
              Cardápio
            </button>
          </div>
        </article>
        <figure className="w-full max-w-4xl lg:max-w-7xl relative animate-float">
          <Image
            src="/HeroCTA.svg"
            width={1400}
            height={1400}
            alt="Burguer Hero"
            className="w-full h-auto"
            priority
          />
        </figure>
      </div>
    </section>
  );
}
