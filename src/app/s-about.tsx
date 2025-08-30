import { aboutData } from "@/data/v-data";
import Image from "next/image";

export function About() {
    return (
        <section className="bg-[#E53935]/10">
        <div className="max-w-[1440px] mx-auto p-8 lg:p-9 mt-10 lg:mt-[100px]">
            {aboutData.map((item, index) => {
                return (
                    <div key={index} className=" p-8">
                        <div className="flex flex-col lg:flex-row justify-center lg:justify-around gap-6 items-center">
                            <figure>
                                <Image src={item.img} width={500} height={500} alt="Imagem mockup celular" priority />
                            </figure>
                            <article className="flex flex-col items-center lg:items-start justify-start gap-4">
                                <h1 className="text-6xl text-[#E53935] text-center lg:text-start font-extrabold">{item.title}</h1>
                                <p className="text-center lg:text-start max-w-[600px] text-[#323232] text-base lg:text-xl">
                                    {item.description}
                                </p>
                                <button className="bg-[#E53935] cursor-pointer text-white rounded-full px-12 py-4 text-base lg:text-xl transition-all duration-700 hover:scale-[1.1] hover:-translate-y-2">
                                    {item.btnText}      
                                </button>
                            </article>
                        </div>
                    </div>
                )
            })}
        </div>
        </section>
    )
}