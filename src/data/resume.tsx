import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

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
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
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
      company: "Alpha X Studio",
      badges: ["Current"],
      location: "Chennai, IN",
      title: "Co-founder",
      logoUrl: "/lime.svg",
      start: "January 2025",
      description: "",
    },
    {
      company: "Freelancing",
      badges: ["2yr"],
      location: "Remote",
      title: "Web & Blockchain Developer",
      logoUrl: "/up.png",
      start: "January 2023",
      end: "December 2024",
      description: "",
    },
    // {
    //   company: "Mzoid",
    //   badges: [],
    //   location: "Remote",
    //   title: "Chief Technical Officer",
    //   logoUrl: "/mzoid.jpg",
    //   start: "January 2023",
    //   end: "August 2023",
    //   description:
    //     "MZOID (OPC) Pvt Ltd is a forward-thinking renewable energy startup based in Tamilnadu, India, dedicated to driving sustainable progress and environmental stewardship. With a vision to create a greener and brighter future for South India, MZOID offers comprehensive Engineering, Procurement, and Construction (EPC) solutions for both domestic and industrial sectors. At MZOID, we firmly believe that the transition to renewable energy is essential to combat climate change and ensure energy security for generations to come.",
    // },
    {
      company: "Bring Back Bees",
      href: "http://www.bringbackbees.in/",
      badges: ["7mo"],
      location: "Chennai, India",
      title: "Software Developer",
      logoUrl: "/BBB.jpg",
      start: "June 2022",
      end: "December 2022",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
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
  ],
  projects: [
    {
      title: "Anypad Launchpad",
      href: "https://chatcollect.com",
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
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/anypad-min.png",
      video: "",
    },
    {
      title: "Altpoints",
      href: "https://chatcollect.com",
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
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/altpoints.png",
      video:
        "",
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
