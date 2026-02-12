import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";

export const DATA = {
  name: "Krunal Mistry",
  initials: "KM",
  url: "https://krunal.io",
  location: "Ahmedabad, India",
  locationLink: "https://www.google.com/maps/place/ahmedabad",
  description:
    "Full Stack Developer. I build scalable products, ship fast, and solve real-world problems.",
  summary:
    "Hii I’m a full stack developer with a strong focus on MERN stack and modern web technologies, currently building products and client solutions under my own startup. Over the past few years, I’ve worked on SaaS platforms, dashboards, billing systems, and real-world business applications. I enjoy turning complex requirements into clean, scalable systems and continuously improving performance, security, and user experience through hands-on development.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Figma", icon: ReactLight },
    { name: "Canva", icon: ReactLight },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "krunalmistry2510@gmail.com",
    tel: "+91XXXXXXXXXX",
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
      title: "Billing & Invoice Management System",
      href: "#",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Developed a complete billing and invoice management system for professionals, featuring company management, invoice generation, payment tracking, analytics dashboard, and automated email reminders.",
      technologies: [
        "React",
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Company Management Dashboard",
      href: "#",
      dates: "Aug 2023 - Dec 2023",
      active: true,
      description:
        "Built a full-featured admin dashboard for managing companies, invoices, payments, and insights with role-based access and real-time data updates.",
      technologies: [
        "React",
        "Typescript",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/krunalmistry",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Client Business Websites",
      href: "#",
      dates: "2022 - Present",
      active: true,
      description:
        "Designed and developed responsive business websites for multiple clients with modern UI, SEO optimization, and performance-focused architecture.",
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Node.js",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Real-time Chat Application",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Implemented a real-time chat system using Socket.io with authentication, premium access control, and group chat functionality.",
      technologies: [
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Express",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/krunalmistry",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
