import { contactData } from "@/data/v-data";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contato"
      className="max-w-[1440px] mx-auto p-8 mt-10 lg:mt-[100px] flex flex-col lg:flex-row items-center justify-center gap-12"
    >
      <div className="flex-1 flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
        {contactData.map((item, index) => (
          <div key={index} className="w-full flex flex-col gap-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-black">
              {item.title}
            </h1>
            <p className="max-w-[475px] text-base lg:text-lg text-[#808080]">
              {item.description}
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
              {item.socialMedia.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#E53935] text-white transition-all duration-300 hover:scale-110 hover:bg-[#c62828]"
                >
                  <social.icon size={28} />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-white rounded-3xl p-8 lg:p-12 shadow-md w-full max-w-[800px]">
        <form
          action=""
          className="flex flex-col justify-center items-center gap-4 w-full"
        >
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name" className="text-base text-black">
              Nome completo
            </label>
            <input
              id="name"
              name="name"
              placeholder="John Doe"
              type="text"
              className="w-full border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#E53935] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email" className="text-base text-black">
              E-mail
            </label>
            <input
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              type="email"
              className="w-full border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#E53935] transition-all duration-300"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="phone" className="text-base text-black">
              Telefone
            </label>
            <input
              id="phone"
              name="phone"
              placeholder="+XX (XX) XXXX-XXXX"
              type="tel"
              className="w-full border border-gray-300 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#E53935] transition-all duration-300"
            />
          </div>

          <div className="flex items-center gap-2 w-full">
            <input
              id="notify"
              name="notify"
              type="checkbox"
              className="w-4 h-4 accent-[#E53935]"
            />
            <label htmlFor="notify" className="text-gray-600 text-sm">
              Enviar notificações para o seu e-mail
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#E53935] cursor-pointer text-white rounded-full px-8 py-3 text-lg mt-4 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
