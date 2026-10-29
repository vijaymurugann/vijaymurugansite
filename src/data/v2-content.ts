export type Lang = "en" | "jp";

export interface V2Translation {
  name: string;
  headline: string;
  location: string;
  v1Label: string;
  v2Label: string;
  skillsTitle: string;
  skills: {
    label: string;
    value: string;
  }[];
  expTitle: string;
  jobs: {
    title: string;
    meta: string;
    desc: string;
  }[];
  projectsTitle: string;
  projects: {
    name: string;
    href: string;
    desc: string;
  }[];
  certTitle: string;
  certifications: {
    text: string;
    href: string;
  }[];
  eduTitle: string;
  education: {
    degree: string;
    school: string;
    period: string;
    href: string;
  }[];
  hackTitle: string;
  hackathons: {
    title: string;
    award?: string;
    location: string;
    desc: string;
    href?: string;
  }[];
  connectTitle: string;
  connectLead: string;
  connectCta: string;
  connectMid: string;
  connectTail: string;
  footerCopy: string;
}

export const V2_CONTENT: Record<Lang, V2Translation> = {
  en: {
    name: "Vijay Murugan",
    headline: "Full-Stack Engineer, Web3 Specialist, and AI Builder",
    location: "Chennai, India",
    v1Label: "v1 portfolio",
    v2Label: "v2 (anand style)",
    skillsTitle: "Skills",
    skills: [
      {
        label: "Languages",
        value: "JavaScript/TypeScript, Solidity, Python, HTML/CSS, SQL",
      },
      {
        label: "Frontend",
        value: "React, Next.js, React Native, Tailwind CSS, Spline 3D, Hero UI",
      },
      {
        label: "Backend",
        value: "Node.js, Express.js, REST APIs, Microservices, Authentication",
      },
      {
        label: "Web3 / Blockchain",
        value: "Ether.js, Wagmi, Hardhat, Smart Contracts, BSC, EVM Protocols",
      },
      {
        label: "Databases",
        value: "MongoDB, PostgreSQL, Redis",
      },
      {
        label: "Tools & DevOps",
        value: "Git & GitHub, Figma, Cursor, Docker, Vercel, CI/CD",
      },
    ],
    expTitle: "Experience",
    jobs: [
      {
        title: "Full Stack Engineer - Calpyte Technologies",
        meta: "Mar 2025 - Mar 2026 · Chennai, IN",
        desc: "Architected and engineered full-stack web platforms and client dashboards. Developed dynamic, high-performance user interfaces using Next.js and Tailwind CSS backed by scalable Node.js services and MongoDB. Optimized database queries, streamlined API throughput, and delivered client-facing features ahead of schedule.",
      },
      {
        title: "Software Developer - Seerakku",
        meta: "Feb 2024 - Mar 2025 · Chennai, IN",
        desc: "Spearheaded frontend and core software development for production web applications, optimizing component reusability and client responsiveness. Integrated third-party APIs and state management solutions, maintaining high code quality through rigorous reviews and automated testing.",
      },
      {
        title: "Junior Blockchain Developer - Mzoid",
        meta: "Jul 2022 - Feb 2024 · Chennai, IN",
        desc: "Engineered Web3 decentralized applications for a renewable energy startup providing EPC solutions across South India. Integrated smart contract interaction workflows using Ether.js and Wagmi on EVM-compatible chains. Built real-time monitoring dashboards for renewable assets and procurement logistics.",
      },
      {
        title: "Freelance Software Consultant",
        meta: "2022 - Present · Remote / Worldwide",
        desc: "Delivered 25+ software and Web3 client projects for teams across Canada, UK, Singapore, and Dubai. Designed and launched decentralized platforms, high-converting landing pages with interactive Spline 3D animations, and custom API integrations with a consistent 100% on-time milestone delivery track record.",
      },
    ],
    projectsTitle: "Projects",
    projects: [
      {
        name: "Anypad Launchpad",
        href: "https://launchpad.anypad.io/",
        desc: "Multi-chain crypto launchpad with whitelist, KYC, and token distribution built on Binance Smart Chain using Next.js, TypeScript, MongoDB, Ether.js, and Wagmi.",
      },
      {
        name: "Altpoints App",
        href: "https://altpoints.vercel.app/",
        desc: "Community campaign platform for crypto launchpad token allocations and user engagement, integrated with Twitter/X API and MongoDB.",
      },
      {
        name: "AltForge Website",
        href: "https://www.altforge.io/",
        desc: "Decentralized fundraising and KOL advisory launchpad website featuring interactive Spline 3D graphics, Hero UI, and custom CSS animations.",
      },
      {
        name: "Anypad Landing Page",
        href: "https://anypad.io/",
        desc: "High-performance Web3 multi-chain investment launchpad landing page built with Next.js, Magic UI, and Tailwind CSS.",
      },
    ],
    certTitle: "Certifications",
    certifications: [
      {
        text: "AI Agent Fundamentals - Databricks",
        href: "https://credentials.databricks.com/",
      },
      {
        text: "Generative AI Fundamentals - Databricks",
        href: "https://credentials.databricks.com/",
      },
      {
        text: "Introduction to Generative AI - Google",
        href: "https://www.cloudskillsboost.google/course_templates/536",
      },
      {
        text: "Vibe Coding 101 with Replit - DeepLearning.AI",
        href: "https://www.coursera.org/account/accomplishments/verify/0904c27c-ff38-4450-a23b-864a03a6cd60",
      },
    ],
    eduTitle: "Education",
    education: [
      {
        degree: "Master's Degree in Business Administration (MBA)",
        school: "University of Madras",
        period: "2024 - 2026",
        href: "https://www.unom.ac.in/",
      },
      {
        degree: "Bachelor's Degree in Computer Science",
        school: "SRM University",
        period: "2019 - 2022",
        href: "https://www.srmist.edu.in/",
      },
      {
        degree: "High School",
        school: "Sunshine Academy",
        period: "2017 - 2019",
        href: "#",
      },
    ],
    hackTitle: "Hackathons & Honors",
    hackathons: [
      {
        title: "HackDavis",
        award: "Best Data Hack Winner",
        location: "Davis, California",
        desc: "Developed a mobile application which allocates daily carbon emission allowances to users to foster sustainable habits.",
        href: "https://devpost.com/software/my6footprint",
      },
      {
        title: "DeveloperWeek Hackathon",
        location: "San Francisco, California",
        desc: "Developed a web application aggregating social media data regarding cryptocurrencies to predict market sentiment and trends.",
        href: "https://github.com/cryptotrends/cryptotrends",
      },
      {
        title: "Hack Western 5",
        location: "London, Ontario",
        desc: "Developed an augmented reality mobile application delivering interactive bedtime stories to children.",
      },
    ],
    connectTitle: "Connect",
    connectLead: "Open to interesting projects and conversations.",
    connectCta: "Schedule a call",
    connectMid: "or",
    connectTail: "just say hi.",
    footerCopy: "© 2026 Vijay Murugan",
  },
  jp: {
    name: "Vijay Murugan",
    headline: "フルスタックエンジニア・Web3スペシャリスト・AIビルダー",
    location: "インド・チェンナイ",
    v1Label: "v1ポートフォリオ",
    v2Label: "v2 (anand スタイル)",
    skillsTitle: "スキル",
    skills: [
      {
        label: "言語",
        value: "JavaScript/TypeScript, Solidity, Python, HTML/CSS, SQL",
      },
      {
        label: "フロントエンド",
        value: "React, Next.js, React Native, Tailwind CSS, Spline 3D, Hero UI",
      },
      {
        label: "バックエンド",
        value: "Node.js, Express.js, REST APIs, マイクロサービス, 認証基盤",
      },
      {
        label: "Web3 / ブロックチェーン",
        value: "Ether.js, Wagmi, Hardhat, スマートコントラクト, BSC, EVMプロトコル",
      },
      {
        label: "データベース",
        value: "MongoDB, PostgreSQL, Redis",
      },
      {
        label: "ツール & DevOps",
        value: "Git & GitHub, Figma, Cursor, Docker, Vercel, CI/CD",
      },
    ],
    expTitle: "経歴",
    jobs: [
      {
        title: "フルスタックエンジニア - Calpyte Technologies",
        meta: "2025年3月 - 2026年3月 · インド・チェンナイ",
        desc: "フルスタックWebプラットフォームおよびクライアント向けダッシュボードの設計・開発を担当。Next.jsとTailwind CSSを用いた動的UIの開発、スケーラブルなNode.jsおよびMongoDBバックエンドの構築を主導。APIスループットの最適化やビルド自動化を実施し、主要機能の納期短縮を実現しました。",
      },
      {
        title: "ソフトウェア開発者 - Seerakku",
        meta: "2024年2月 - 2025年3月 · インド・チェンナイ",
        desc: "商用Webアプリケーションのフロントエンドおよびコアソフトウェア開発を推進。コンポーネントの再利用性とレスポンス向上を実現。サードパーティAPIと状態管理の統合、厳格なコードレビューと自動テストを通じて高品質なコードベースを維持しました。",
      },
      {
        title: "ジュニアブロックチェーン開発者 - Mzoid",
        meta: "2022年7月 - 2024年2月 · インド・チェンナイ",
        desc: "南インド全域にEPCソリューションを展開する再生可能エネルギーのスタートアップにてWeb3分散型アプリを開発。EVM互換チェーン上でEther.jsとWagmiを用いたスマートコントラクト連携を実装。エネルギー設備や調達物流のリアルタイム監視ダッシュボードを構築しました。",
      },
      {
        title: "フリーランス ソフトウェアコンサルタント",
        meta: "2022年 - 現在 · リモート / グローバル",
        desc: "カナダ、イギリス、シンガポール、ドバイのクライアント向けに25件以上のソフトウェアおよびWeb3プロジェクトを納品。Spline 3Dアニメーションを活用した高コンバージョンLP、分散型ローンチパッド、カスタムAPI連携を構築し、100%の納期遵守率を達成しています。",
      },
    ],
    projectsTitle: "プロジェクト",
    projects: [
      {
        name: "Anypad Launchpad",
        href: "https://launchpad.anypad.io/",
        desc: "ホワイトリスト、KYC、トークン配布機能を備えたマルチチェーン暗号資産ローンチパッド。Binance Smart Chain上でNext.js、TypeScript、MongoDB、Ether.js、Wagmiを用いて構築。",
      },
      {
        name: "Altpoints App",
        href: "https://altpoints.vercel.app/",
        desc: "ローンチパッドのトークン割り当てとエンゲージメント獲得のためのコミュニティキャンペーンプラットフォーム。Twitter/X APIおよびMongoDBと連携。",
      },
      {
        name: "AltForge Website",
        href: "https://www.altforge.io/",
        desc: "インタラクティブなSpline 3Dモデル、Hero UI、カスタムCSSアニメーションを導入した分散型資金調達＆KOLアドバイザリー向けWebサイト。",
      },
      {
        name: "Anypad Landing Page",
        href: "https://anypad.io/",
        desc: "Next.js、Magic UI、Tailwind CSSで構築された、Web3マルチチェーン投資ローンチパッド向けの高パフォーマンスランディングページ。",
      },
    ],
    certTitle: "資格・認定",
    certifications: [
      {
        text: "AI Agent Fundamentals - Databricks（2025年12月）",
        href: "https://credentials.databricks.com/",
      },
      {
        text: "Generative AI Fundamentals - Databricks（2025年12月）",
        href: "https://credentials.databricks.com/",
      },
      {
        text: "Introduction to Generative AI - Google（2025年12月）",
        href: "https://www.cloudskillsboost.google/course_templates/536",
      },
      {
        text: "Vibe Coding 101 with Replit - DeepLearning.AI（2025年11月）",
        href: "https://www.coursera.org/account/accomplishments/verify/0904c27c-ff38-4450-a23b-864a03a6cd60",
      },
    ],
    eduTitle: "学歴",
    education: [
      {
        degree: "経営学修士（MBA）",
        school: "マドラス大学",
        period: "2024 - 2026年",
        href: "https://www.unom.ac.in/",
      },
      {
        degree: "コンピュータサイエンス学士",
        school: "SRM大学",
        period: "2019 - 2022年",
        href: "https://www.srmist.edu.in/",
      },
      {
        degree: "高等教育",
        school: "Sunshine Academy",
        period: "2017 - 2019年",
        href: "#",
      },
    ],
    hackTitle: "ハッカソン & 受賞歴",
    hackathons: [
      {
        title: "HackDavis",
        award: "Best Data Hack受賞",
        location: "米カリフォルニア州デービス",
        desc: "利用者に日々の二酸化炭素排出枠を割り当てて環境配慮の習慣を促すモバイルアプリを開発。",
        href: "https://devpost.com/software/my6footprint",
      },
      {
        title: "DeveloperWeek Hackathon",
        location: "米サンフランシスコ",
        desc: "暗号資産に関するソーシャルメディアデータを集約し、市場センチメントと価格動向を予測するWebアプリを開発。",
        href: "https://github.com/cryptotrends/cryptotrends",
      },
      {
        title: "Hack Western 5",
        location: "カナダ・オンタリオ州ロンドン",
        desc: "AR（拡張現実）技術を用いて子ども向けに就寝前の物語をインタラクティブに届けるモバイルアプリを開発。",
      },
    ],
    connectTitle: "連絡先",
    connectLead: "興味深いプロジェクトのご相談や意見交換を歓迎しています。",
    connectCta: "ミーティングを予約",
    connectMid: "または",
    connectTail: "お気軽にメッセージしてください。",
    footerCopy: "© 2026 Vijay Murugan",
  },
};
