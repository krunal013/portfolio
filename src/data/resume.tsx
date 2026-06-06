import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import {
  RiReactjsLine,
  RiNextjsFill,
} from "react-icons/ri";
import { TbBrandAdobePremier, TbBrandAdobeAfterEffect} from "react-icons/tb";
import { RiSeoLine } from "react-icons/ri";
import { SiGoogleanalytics } from "react-icons/si";
import {
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiCanva,
} from "react-icons/si";

export const DATA = {
  name: "Krunal Mistry",
  initials: "KM",
  url: "https://krunalmistry.in",
  location: "Ahmedabad, India",
  locationLink: "https://www.google.com/maps/place/ahmedabad",
  description:
    "Full Stack Developer. I build scalable products, ship fast, and solve real-world problems.",
  summary:
    "Hii I'm a full stack developer with a strong focus on MERN stack and modern web technologies, currently building products and client solutions under my own startup. Over the past few years, I've worked on SaaS platforms, dashboards, billing systems, and real-world business applications. I enjoy turning complex requirements into clean, scalable systems and continuously improving performance, security, and user experience through hands-on development.",
  avatarUrl: "/mee.jpeg",
skills: [
  { name: "Next.js", icon: RiNextjsFill },
  { name: "React", icon: RiReactjsLine },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Figma", icon: SiFigma },
  { name: "Adobe After Effects", icon: TbBrandAdobeAfterEffect },
  { name: "Adobe Premiere Pro", icon: TbBrandAdobePremier },
  { name: "SEO", icon: RiSeoLine },
  { name: "Google Analytics", icon: SiGoogleanalytics },
],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "krunalmistry2510@gmail.com",
    tel: "+916353157921",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/krunal013",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://in.linkedin.com/in/krunal-mistry-21359a229",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/krunal.km/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:krunalmistry2510@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Triosphere Tech",
      href: "https://www.triospheretech.com",
      badges: [],
      location: "On-site",
      title: "Full Stack Developer",
      logoUrl: "/atomic.jpg",
      start: "Dec 2024",
      end: "Working",
      description:
        "Designing and developing full-stack web applications using MERN stack for startups and clients. Building dashboards, billing systems, authentication flows, and admin panels. Handling API development, database architecture, performance optimization, and deployment while collaborating directly with clients to deliver scalable and production-ready solutions.",
    },
  ],
  education: [
    {
      school: "Bachelor's Degree in Computer Science",
      href: "https://www.charusat.ac.in",
      degree: "Charotar University of Science and Technology",
      logoUrl: "/Charusat.webp",
      start: "2020",
      end: "2024",
    },
    {
      school: "Master of Computer Applications (MCA)",
      href: "https://www.charusat.ac.in",
      degree: "Charotar University of Science and Technology",
      logoUrl: "/Charusat.webp",
      start: "2023",
      end: "2025",
    },
  ],
projects: [
    {
      title: "InsuraIndia CRM",
      href: "https://insuraindia.com",
      dates: "2024 - Present",
      active: true,
      description:
        "SaaS CRM platform built for insurance agents in India to manage clients, track policies, automate renewal reminders, and grow their book of business — all from one intuitive dashboard.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
        "SEO",
        "Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://insuraindia.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/insuraindia.png",
      video: "",
    },
    {
      title: "Emily Mistry Wellness",
      href: "https://emilymistrywellness.com",
      dates: "2024",
      active: true,
      description:
        "Personal wellness website for Emily Mistry, a Scaravelli-inspired yoga and somatic movement practitioner based in Essex, UK. Features in-person session booking and online Human Design readings for a global audience.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "SEO",
        "Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://emilymistrywellness.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/emilymistry.png",
      video: "",
    },
    {
      title: "Triosphere Tech",
      href: "https://www.triospheretech.com",
      dates: "2024 - Present",
      active: true,
      description:
        "Corporate website for a full-service tech company based in Ahmedabad offering web development, mobile apps, DevOps, UI/UX, and digital transformation services for startups and enterprises.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "SEO",
        "Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.triospheretech.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/triosphere.png",
      video: "",
    },
    {
      title: "Trio Finserve",
      href: "https://triofinserve.com",
      dates: "2024 - Present",
      active: true,
      description:
        "Financial services platform simplifying insurance and investment for clients. Covers health, life, motor insurance, mutual funds, wealth management, and tax planning — all under one roof with a clean, trust-first UI.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "SEO",
        "Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://triofinserve.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/triofinserve.png",
      video: "",
    },
    {
      title: "Bhagvat Pipe",
      href: "https://bhagvatpipe.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Business website for a trusted CPVC, UPVC, and SWR pipes manufacturer based in Ahmedabad, Gujarat. Showcases their product range of durable, leak-proof plumbing solutions for residential, commercial, and industrial projects.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "SEO",
        "Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://bhagvatpipe.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/bhagvat.png",
      video: "",
    },
    {
      title: "CS Chintan Patel & Associates",
      href: "https://cschintanpatel.in",
      dates: "2024",
      active: true,
      description:
        "Professional firm website for Chintan I. Patel & Associates, a Practising Company Secretary firm offering corporate law compliance, SEBI advisory, secretarial audits, and governance consulting in Ahmedabad.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "SEO",
        "Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://cschintanpatel.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/cschintan.png",
      video: "",
    },
    {
      title: "Dr. Charu Garg — Dermatology",
      href: "https://drcharugarg-blue.vercel.app",
      dates: "2024",
      active: true,
      description:
        "Modern dermatology clinic website for Dr. Charu Garg featuring online appointment booking, skin & hair treatment listings, energy-based device highlights, and evidence-based practice information.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "SEO",
      ],
      links: [
        {
          type: "Website",
          href: "https://drcharugarg-blue.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/drcharu.png",
      video: "",
    },
    {
      title: "MarkAura",
      href: "https://markaura.vercel.app",
      dates: "2024 - Present",
      active: true,
      description:
        "Performance marketing agency website for MarkAura, a brand strategy and digital growth firm. Features brand identity, paid media, performance marketing, and creative services with a bold editorial design.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "SEO",
        "Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://markaura.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/markaura.png",
      video: "",
    },
    {
      title: "Bake Flavours",
      href: "https://bakeflavours.com",
      dates: "2024",
      active: true,
      description:
        "Visually rich bakery website for Bake Flavours, showcasing freshly baked goods with a warm, appetizing design. Built with performance and SEO best practices to drive local discovery and online orders.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "SEO",
        "Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://bakeflavours.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/bakeflavour.png",
      video: "",
    },
    {
      title: "Herbnova India",
      href: "https://herbnovaindia.com",
      dates: "2024",
      active: true,
      description:
        "E-commerce and brand website for an herbal wellness company selling organic Moringa, Spirulina, and Chlorella supplements. Focused on immunity, detox, and natural vitality with a modern health-product aesthetic.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "SEO",
        "Analytics",
      ],
      links: [
        {
          type: "Website",
          href: "https://herbnovaindia.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/herbnova.png",
      video: "",
    },
    {
      title: "Mantradharin Consultancy",
      href: "https://mantradharin.com",
      dates: "2024",
      active: true,
      description:
        "Professional website for Mantradharin Consultancy LLP, a corporate advisory firm offering strategic guidance, regulatory compliance, governance services, and effective business communication solutions.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "SEO",
      ],
      links: [
        {
          type: "Website",
          href: "https://mantradharin.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/mantradharin.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;