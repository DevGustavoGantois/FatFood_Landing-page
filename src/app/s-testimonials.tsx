"use client";
import { testimonialsData } from "@/data/v-data";
import Image from "next/image";
import { useState } from "react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const item = testimonialsData[0];

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % item.testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + item.testimonials.length) % item.testimonials.length
    );

  const testimonial = item.testimonials[currentIndex];

  return (
    <section className="max-w-[1440px] mx-auto p-8 mt-10 lg:mt-[100px]" id="depoimentos">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-black max-w-[700px]">
            {item.title} <span className="text-[#E53935]">dizendo?</span>
          </h1>
          <p className="text-base lg:text-lg text-[#898989] max-w-[400px]">
            {item.description}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="rounded-full cursor-pointer border border-[#E53935] text-[#E53935] px-6 py-3 font-semibold hover:bg-[#E53935] hover:text-white transition-all duration-700"
            >
              <item.arrow size={32} className="-rotate-180" />
            </button>
            <button
              onClick={next}
              className="rounded-full cursor-pointer border border-[#E53935] text-[#E53935] px-6 py-3 font-semibold hover:bg-[#E53935] hover:text-white transition-all duration-700"
            >
              <item.arrow size={32} />
            </button>
          </div>
        </div>
        <article className="flex flex-col gap-4 items-center lg:items-start">
          <span className="text-[#E53945]">
            <item.icon size={70} />
          </span>
          <p className="text-[#898989] text-center text-xl lg:text-2xl lg:text-start max-w-[400px]">
            {testimonial.feedback}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <Image
              width={100}
              height={100}
              src={testimonial.img}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full border-4 border-[#E53945]"
            />
            <div className="flex flex-col">
              <h3 className="text-black font-bold text-lg">{testimonial.name}</h3>
              <p className="text-[#898989] text-sm">{testimonial.role}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
