import { CTAAppData } from "@/data/v-data";
import Image from "next/image";

export function CTAApp() {
  const item = CTAAppData[0];

  return (
    <section className="bg-gradient-to-b from-[#E53935] to-[#7F201D] w-full relative overflow-hidden mt-10 lg:mt-[100px]" id="newsletter">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={item.bgImg}
          alt="Plano de fundo com textura"
          width={1400}
          height={1400}
          className="w-full h-full object-cover opacity-10"
          priority
        />
      </div>
      <div className="relative z-10 max-w-[1740px] mx-auto px-6 lg:px-12 py-16 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <h2 className="text-white text-4xl lg:text-6xl font-bold whitespace-nowrap">
              {item.title}
            </h2>
            <p className="text-white max-w-[450px] text-base lg:text-xl">
              {item.description}
            </p>
            <div className="flex items-center gap-3 mt-4 flex-wrap justify-center lg:justify-start">
              <Image
                src={item.googleDownload}
                width={250}
                height={60}
                alt="Baixar na Google Play"
                priority
                className="w-[160px] sm:w-[250px] lg:w-[290px] h-auto"
              />
              <Image
                src={item.appleDownload}
                width={250}
                height={60}
                alt="Baixar na App Store"
                priority
                className="w-[150px] sm:w-[215px] lg:w-[250px] h-auto"
              />
            </div>
          </div>
          <div className="relative w-full flex justify-center items-center lg:block">
            <div className="hidden lg:block absolute -bottom-[530px] -left-96">
              <Image
                src={item.pizzaImg}
                width={280}
                height={500}
                alt="Pizza ilustrativa"
                className="max-w-[280px]"
                priority
              />
            </div>
            <div className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[450px] hidden lg:flex lg:absolute lg:-top-32 lg:-right-32">
              <Image
                src={item.mockupPerson}
                width={600}
                height={600}
                alt="Mockup de uma pessoa segurando smartphone com app aberto"
                className="w-full h-auto mx-auto"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
