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

export const logoCompanysData = [
    {
        logoImg: '/Logo1.svg',
    },
    {
        logoImg: '/Logo2.svg',
    },
    {
        logoImg: '/Logo3.svg',
    },
    {
        logoImg: '/Logo4.svg',
    },
    {
        logoImg: '/Logo5.svg',
    },
]

export const aboutData = [
    {
        img: "/PhoneMockup.svg",
        title: "🍟 Sobre o FatFood",
        description: "O FatFood nasceu para transformar a forma como você pede comida. Nosso objetivo é unir praticidade, rapidez e sabor em um só aplicativo. Com apenas alguns cliques, você tem acesso aos melhores restaurantes, combos exclusivos e promoções irresistíveis. Porque pedir comida deve ser tão gostoso quanto comer!",
        btnText: "Saiba mais"
    }
];

export const CTAAppData = [
    {
        bgImg: "/CTABackground.svg",
        pizzaImg: "/pizza.svg",
        mockupPerson: "/mockupPerson.svg",
        appleDownload: "/AppleDownload.svg",
        googleDownload: "/GoogleDownload.svg",
        title: "Conheça o FatFood",
        description: "Peça seus pratos favoritos de forma rápida, prática e com muito sabor. Baixe agora e descubra o jeito mais fácil de matar a fome.",
    }
];

export const servicesData = [
    {
        title: "Serviços",
        btnText: "Saiba mais",
        cards: [
            {
                img: "/Service1.svg",
                title: "Hambúrgueres Artesanais",
                description: "Suculentos, preparados com ingredientes frescos e combinações únicas que só o FatFood oferece."
            },
            {
                img: "/Service2.svg",
                title: "Batatas Fritas Irresistíveis",
                description: "Porções generosas, crocantes por fora e macias por dentro, perfeitas para qualquer pedido.."
            },
            {
                img: "/Service3.svg",
                title: "Lasanha Suculenta",
                description: "As lasanhas são suculentas, preparados com ingredientes frescos e combinações únicas que só o FatFood oferece.."
            },
            {
                img: "/Service4.svg",
                title: "Frango Crocante",
                description: "Empanado no ponto certo, temperado com nosso sabor especial e sempre quentinho."
            },
        ],
    },
];

export const contactData = [
    {
        title: "Entre em contato",
        description: "Entre em contato conosco e fique por dentro das atualizações e novidades que surgirão no nosso aplicativo!",
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
    }
]

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