import { logoCompanysData } from "@/data/v-data"
import Image from "next/image"

export function LogoCompanys() {
    return (
        <>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center justify-center gap-10 mt-10 lg:mt-[100px] flex-wrap max-w-[1440px] mx-auto p-8">
            {logoCompanysData.map((item, index) => {
                return (
                    <figure key={index} className="w-32 h-16 flex items-center justify-between">
                        <Image src={item.logoImg} width={400} height={400} alt="Logo" className="max-h-full max-w-full object-contain" />
                    </figure>
                )
            })}
        </div>
        </>
    )
}