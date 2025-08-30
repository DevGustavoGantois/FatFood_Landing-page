import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const navbarData = [
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

export const footerData = [
    {
        logo: "/LogoWhite.svg",
        description: "A FatFood é uma empresa dedicada a fornecer refeições deliciosas e saudáveis diretamente na sua porta. Nossa missão é tornar a alimentação saudável acessível e conveniente para todos.",
        socialMedia: [
            {
                icon: Instagram,
                href: "#"
            },
            {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/gustavo-gantois-2839b5168/"
            },
            {
                icon: Twitter,
                href: "#"
            },
            {
                icon: Facebook,
                href: "#"
            },
        ],
        navigationLinks: [
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
            ],
         copyright: "© 2025 FatFood. Todos os direitos reservados.",
        footerCopy: "Desenvolvido por @devgustavogantois_"
    }
]