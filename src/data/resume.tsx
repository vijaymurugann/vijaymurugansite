import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export type ProjectCategory = "web3" | "landingPages" | "aiApps" | "saas";

export const PROJECT_SECTIONS: { category: ProjectCategory; title: string }[] =
  [
    { category: "web3", title: "Web3" },
    { category: "landingPages", title: "Landing pages" },
    { category: "aiApps", title: "AI Apps" },
    { category: "saas", title: "SaaS" },
  ];

export const DATA = {
  name: "Vijay Murugan",
  initials: "M",
  url: "https://vijaymurugansite.vercel.app",
  location: "Chennai, IN",
  description: "Self Taught Software Developer",
  summary:
    "I'm a software developer based in India who worked for Canada, UK, Singapore & Dubai clients.I began my tech journey at 16, teaching myself to code and building applications. later pursuing a BSc in computer science. My path led me to freelancing in software development, where I've delivered more than 25+ successful projects, spoken at meetups, and found a little interest in Economics and Numbers following that I pursuing an MBA in Distances Education.",
  avatarUrl: "/me.png",
  skills: [
    "Javascript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & Github",
    "React Native",
    "Figma",
    "spline 3d",
    "cursor",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mailtovijaymurugan@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vijaymurugann",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vijay-murugan-sde/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/vijaymurugannn",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@VijayAlpha",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "vijaymurugan177@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Calpyet Technologies",
      badges: [],
      location: "Chennai, IN",
      title: "Full Stack Engineer",
      logoUrl: "/calpyte.png",
      start: "Mar 25",
      end: "Mar 26",
      href: "#",
      description: "",
    },
    {
      company: "Seerakku",
      badges: ["Current"],
      location: "Chennai, IN",
      title: "Software Developer",
      logoUrl: "/Seerakku.svg",
      start: "Feb 2024",
      end: "Mar 2025",
      href: "#",

      description: "",
    },
    {
      company: "Mzoid",
      badges: ["2yr"],
      location: "Chennai, IN",
      title: "Junior Blockchain Developer",
      logoUrl: "/mzoid.jpg",
      start: "July 2022",
      end: "Feb 2024",
      href: "#",
      description:
        "MZOID (OPC) Pvt Ltd is a forward-thinking renewable energy startup based in Tamilnadu, India, dedicated to driving sustainable progress and environmental stewardship. With a vision to create a greener and brighter future for South India, MZOID offers comprehensive Engineering, Procurement, and Construction (EPC) solutions for both domestic and industrial sectors. At MZOID, we firmly believe that the transition to renewable energy is essential to combat climate change and ensure energy security for generations to come.",
    },

    // {
    //   company: "Bring Back Bees",
    //   href: "http://www.bringbackbees.in/",
    //   badges: ["7mo"],
    //   location: "Chennai, India",
    //   title: "Software Developer",
    //   logoUrl: "/BBB.jpg",
    //   start: "June 2022",
    //   end: "December 2022",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "University of Madras",
      href: "https://www.unom.ac.in/",
      degree: "Master's Degree in Business Administration",
      logoUrl: "/UOM.png",
      start: "2024",
      end: "2026",
    },
    {
      school: "SRM University",
      href: "https://www.srmist.edu.in/",
      degree: "Bachelor's Degree in Computer Science",
      logoUrl: "/SRM.png",
      start: "2019",
      end: "2022",
    },
    {
      school: "Sunshine Academy",
      degree: "High School",
      logoUrl: "/sunshineacademy-logo.jpeg",
      start: "2017",
      end: "2019",
    },
  ],
  certificates: [
    {
      name: "AI Agent Fundamentals",
      issuer: "Databricks",
      image: "/cert-databricks.svg",
      received: "Dec 2025",
      href: "https://credentials.databricks.com/",
    },
    {
      name: "Gen AI Fundamentals",
      issuer: "Databricks",
      image: "/cert-databricks.svg",
      received: "Dec 2025",
      href: "https://credentials.databricks.com/",
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google",
      image: "/cert-google.svg",
      received: "Dec 2025",
      href: "https://www.cloudskillsboost.google/course_templates/536",
    },
    {
      name: "Vibe Coding 101 with Replit",
      issuer: "DeepLearning.AI",
      image: "/cert-deeplearning.svg",
      received: "Nov 2025",
      href: "https://www.coursera.org/account/accomplishments/verify/0904c27c-ff38-4450-a23b-864a03a6cd60",
    },
  ],
  projects: [
    {
      category: "landingPages" as const,
      title: "Anypad Landing Page",
      href: "https://anypad.io/",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "The launchpad to invest in the future of Web3 A cutting-edge multi-chain launchpad designed to connect forward-thinking investors with groundbreaking crypto projects seeking value add and support",
      technologies: ["Next.js", "Magic UI", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://anypad.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/anypad-landing-page.png",
      video: "",
    },
    {
      category: "web3" as const,
      title: "Anypad Launchpad",
      href: "https://launchpad.anypad.io/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A crypto launch pad with whitelist, KYC, and token distribution features. The platform is built on top of the Binance Smart Chain and uses the Ether.js & Wagmi library to interact with the blockchain.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Ether.js",
        "Hero UI",
        "Wagmi",
        "Solidity",
        "Hardhat",
      ],
      links: [
        {
          type: "Website",
          href: "https://launchpad.anypad.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/anypad-min.png",
      video: "",
    },
    {
      category: "web3" as const,
      title: "Altpoints App",
      href: "https://altpoints.vercel.app/",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "Crypto Launchpad's campaigns for users to gain a special allocation of token distribution & for projects to get a traction on there socials and products.",
      technologies: [
        "Next.js",
        "Javascript",
        "MongoDB",
        "TailwindCSS",
        "Hero UI",
        "Twitter API",
      ],
      links: [
        {
          type: "Website",
          href: "https://altpoints.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/altpoints.png",
      video: "",
    },
    {
      category: "landingPages" as const,
      title: "AltForge Website",
      href: "https://www.altforge.io/",
      dates: "Jan 2025",
      active: true,
      description:
        "A decentralised launchpad connecting investors with the projects they seek, while providing fundraising, KOLs, and advisory support both pre and post-launch.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "Hero UI",
        "Custom CSS",
        "Spline 3D",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.altforge.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/altforge-landing.png",
      video: "",
    },
    {
      category: "web3" as const,
      title: "Mock NFT Marketplace",
      href: "https://example.com",
      dates: "2025",
      active: true,
      description:
        "Placeholder multi-chain listings and royalties UI — swap for a real project when ready.",
      technologies: ["Next.js", "Wagmi", "Solidity"],
      links: [
        {
          type: "Demo",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cert-google.svg",
      video: "",
    },
    {
      category: "landingPages" as const,
      title: "Mock SaaS Landing",
      href: "https://example.com",
      dates: "2025",
      active: true,
      description:
        "Placeholder hero, pricing, and FAQ sections — replace with shipped work.",
      technologies: ["Next.js", "TailwindCSS", "Figma"],
      links: [
        {
          type: "Demo",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/calpyte.png",
      video: "",
    },
    {
      category: "aiApps" as const,
      title: "Mock RAG Assistant",
      href: "https://example.com",
      dates: "2025",
      active: true,
      description:
        "Placeholder chat over documents — swap link and copy when you ship the real app.",
      technologies: ["Next.js", "OpenAI", "PostgreSQL"],
      links: [
        {
          type: "Demo",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cert-google.svg",
      video: "",
    },
    {
      category: "aiApps" as const,
      title: "Mock Image Lab",
      href: "https://example.com",
      dates: "2025",
      active: true,
      description:
        "Placeholder image generation flows for portfolio grid only.",
      technologies: ["React", "API Routes", "Zod"],
      links: [
        {
          type: "Demo",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/calpyte.png",
      video: "",
    },
    {
      category: "saas" as const,
      title: "Mock CRM Lite",
      href: "https://example.com",
      dates: "2025",
      active: true,
      description:
        "Placeholder pipelines and contacts dashboard — illustrative only.",
      technologies: ["Next.js", "Prisma", "Stripe"],
      links: [
        {
          type: "Demo",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cert-google.svg",
      video: "",
    },
    {
      category: "saas" as const,
      title: "Mock Invoice Hub",
      href: "https://example.com",
      dates: "2025",
      active: true,
      description:
        "Placeholder invoicing and client portal — swap URLs later.",
      technologies: ["Next.js", "TailwindCSS", "Resend"],
      links: [
        {
          type: "Demo",
          href: "https://example.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/calpyte.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
  ],
} as const;
