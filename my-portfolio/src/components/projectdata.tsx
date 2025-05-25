export interface Project {
    id: number;
    name: string;
    logo: string;
    screenshot: string;
    description: string;
    tech: string[];
    live: string;
    github: string;
    info: string;
  }
  
export const projects: Project[] = [
    {
        id: 1,
        name: "This portfolio",
        logo: "/support/logo.webp",
        screenshot: "/support/ssportfolio.webp",
        description: "An portfolio concept using Next.js and Tailwind.",
        tech: ["Next.js", "Tailwind CSS"],
        live: "https://toko-edi-ya.vercel.app/",
        github: "https://github.com/Erradzan/Portfolio",
        info: "update 1.0"
    },
    {
        id: 2,
        name: "Toko Edi Ya??",
        logo: "/support/tokoediya.webp",
        screenshot: "/support/sstokoediya.webp",
        description: "An e-commerce concept using React, Tailwind adn API.",
        tech: ["React.js", "Tailwind CSS"],
        live: "https://toko-edi-ya.vercel.app/",
        github: "https://github.com/Erradzan/toko-edi-ya",
        info: "currently, there is a problem with the backend."
    },
    {
        id: 3,
        name: "Buka Apa !?",
        logo: "/support/bukaapa.webp",
        screenshot: "/support/ssbukaapa.webp",
        description: "An e-commerce concept using React, Tailwind and API.",
        tech: ["React.js", "Tailwind CSS"],
        live: "https://buka-apa.vercel.app/",
        github: "https://github.com/Erradzan/BukaApa",
        info: "email: john@mail.com password: changeme"
    },
    {
        id: 4,
        name: "Wakanda Academy",
        logo: "/support/wakanda.webp",
        screenshot: "/support/sswakanda.webp",
        description: "A company profile concept using HTML, CSS, and JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "https://wakandaacademy.vercel.app/",
        github: "https://github.com/Erradzan/Wakanda",
        info: "update 0.6"
    },
    {
        id: 5,
        name: "JCX",
        logo: "/support/jcx.webp",
        screenshot: "/support/ssjcx.webp",
        description: "A music web concept using HTML, CSS, and JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "https://jcx.vercel.app/",
        github: "https://github.com/Erradzan/JCX",
        info: "update 0.3"
    },
    {
        id: 6,
        name: "Pos Warung Makan",
        logo: "/support/jcx.webp",
        screenshot: "/support/sspos.webp",
        description: "A restaurant system web concept, using Next.js, Tailwind and API.",
        tech: ["HTML", "CSS", "JavaScript"],
        live: "https://pos-project-revou.vercel.app/login",
        github: "https://github.com/revou-next-project/Pos-WarungMakan-Frontend",
        info: "username: mamad password: ThisiPassowrd"
    },
];