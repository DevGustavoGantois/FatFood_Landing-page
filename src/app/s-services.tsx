import { servicesData } from "@/data/v-data";
import Image from "next/image";

export function Services() {
  return (
    <section className="max-w-[1440px] mx-auto p-8 lg:p-0 mt-10 lg:mt-[100px]">
      {servicesData.map((item, index) => (
        <main key={index} className="flex flex-col gap-[16px]">
          {/* título e botão */}
          <article className="flex flex-col items-center gap-4 justify-center lg:flex-row lg:justify-between">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#E53935]">
              {item.title}
            </h1>
            <button className="rounded-full border border-[#E53935] py-3 px-6 text-[#E53935] cursor-pointer hover:bg-[#E53935] hover:text-white transition">
              {item.btnText}
            </button>
          </article>

          {/* layout dos cards */}
          <div className="flex flex-col lg:flex-row items-start justify-center gap-6">
            <div className="flex-1 w-full h-full">
              <div className="rounded-2xl overflow-hidden h-full flex flex-1 flex-col">
                <Image
                  src={item.cards[0].img}
                  width={500}
                  height={400}
                  alt={item.cards[0].title}
                  className="w-full h-[350px] object-cover"
                />
                <div className="p-6 text-left">
                  <h2 className="font-bold text-2xl text-black mb-2">
                    {item.cards[0].title}
                  </h2>
                  <p className="text-[#898989]">{item.cards[0].description}</p>
                </div>
              </div>
            </div>

            {/* cards menores à direita */}
            <div className="flex flex-col gap-6 flex-1 w-full">
              {item.cards.slice(1).map((card, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl soverflow-hidden flex items-center gap-4 p-4"
                >
                  <Image
                    src={card.img}
                    width={200}
                    height={100}
                    alt={card.title}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-bold text-xl text-black mb-1">
                      {card.title}
                    </h3>
                    <p className="text-[#898989] text-sm max-w-[300px]">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      ))}
    </section>
  );
}
