export type NavItem = {
  label: string;
  href: string;
  sectionId: string;
};

export type QuestCategory = "All" | "AI" | "Web" | "Systems";
export type QuestDifficulty = "MEDIUM" | "HARD" | "BOSS";

export type QuestProject = {
  id: string;
  code: string;
  title: string;
  categories: Exclude<QuestCategory, "All">[];
  difficulty: QuestDifficulty;
  description: string;
  tech: string[];
  repoUrl: string;
};

export type SkillItem = {
  name: string;
  level: number;
};

export type SkillLoadoutGroup = {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
};

export type CertificationItem = {
  title: string;
  issuer: string;
  date: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  current?: boolean;
};

export type ServicePack = {
  id: "Basic" | "Standard" | "Premium";
  code: string;
  name: "Basic" | "Standard" | "Premium";
  tagline: string;
  popular?: boolean;
  features: string[];
};

export type InterestedOption =
  | "Not sure"
  | "Basic"
  | "Standard"
  | "Premium"
  | "Collaboration"
  | "Job opportunity";

export const SITE_CONTENT = {
  meta: {
    siteName: "Muneeb Gulistan — Web Developer & AI Learner",
    title: "Muneeb Gulistan | Web Developer & AI Learner",
    description:
      "Portfolio of Muneeb Gulistan — Web Developer, AI Learner (BS Artificial Intelligence at Pak Austria Institute), Next.js & React builder, and founding member of ARMAAS Solutions & Feedify Organization.",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://portfolio-eta-lemon-13.vercel.app",
    email: "muneegulistan@gmail.com",
    location: "Pakistan",
    resumeHref: "/resume.docx",
    profileImage: "/muneeb-profile.jpg",
  },
  nav: {
    logo: "<MG/>",
    statusText: "ONLINE",
    ctaLabel: "Hire me",
    ctaHref: "#contact",
    links: [
      { label: "Player", href: "#player", sectionId: "player" },
      { label: "Quests", href: "#quests", sectionId: "quests" },
      { label: "Loadout", href: "#loadout", sectionId: "loadout" },
      {
        label: "Achievements",
        href: "#achievements",
        sectionId: "achievements",
      },
      { label: "Packs", href: "#packs", sectionId: "packs" },
      { label: "Contact", href: "#contact", sectionId: "contact" },
    ] satisfies NavItem[],
  },
  hero: {
    eyebrow: "// PLAYER ONE · AVAILABLE FOR NEW PROJECTS",
    firstName: "MUNEEB",
    lastName: "GULISTAN",
    typingRoles: [
      "Web Developer",
      "AI Learner",
      "Next.js & React Builder",
      "Prompt Engineer",
      "Competitive Gamer",
    ],
    lead: "Building fast, modern web applications and practical AI tools while pursuing a BS in Artificial Intelligence at Pak Austria Institute.",
    ctas: {
      quests: "View quests",
      resume: "Download résumé",
      copyEmail: "Copy email",
    },
    playerCard: {
      badge: "HUD // UNIT-01",
      level: "LVL 2",
      initials: "MG",
      stats: [
        { label: "Class", value: "Full-Stack Dev" },
        { label: "Spec", value: "AI Apprentice" },
        { label: "Guilds", value: "ARMAAS · Feedify" },
        { label: "Base", value: "Pakistan" },
      ],
      xp: {
        label: "BS AI · Sem 2 / 8",
        percent: 25,
      },
    },
  },
  marquee: [
    "NEXT.JS",
    "REACT",
    "TAILWIND",
    "PYTHON",
    "C++",
    "CLAUDE API",
    "NODE.JS",
    "MONGODB",
    "PROMPT ENGINEERING",
  ],
  about: {
    eyebrow: "01 // PLAYER PROFILE",
    heading: "Developer by craft. Gamer by instinct.",
    paragraphs: [
      "I’m Muneeb Gulistan, a Web Developer and AI learner currently pursuing a BS in Artificial Intelligence (Semester 2) at Pak Austria Institute. I build responsive web applications, AI-powered utilities, and systems projects across academic and personal work.",
      "Beyond writing code, I share tech and AI content on Instagram, compete in strategy and team-based games, and serve as a founding member of ARMAAS Solutions and Feedify Organization — collaborating on software initiatives and community-driven tech projects.",
    ],
    highlights: [
      {
        tag: "GUILD 01",
        title: "ARMAAS Solutions",
        role: "Founding Member",
        detail: "Co-founding and contributing to strategic tech solutions and software builds.",
      },
      {
        tag: "GUILD 02",
        title: "Feedify Organization",
        role: "Founding Member",
        detail: "Driving community-focused technology initiatives and collaborative projects.",
      },
    ],
    counters: [
      { value: 5, suffix: "", label: "Quests shipped", code: "STAT // 01" },
      { value: 4, suffix: "", label: "Certifications", code: "STAT // 02" },
      { value: 2, suffix: "", label: "Guilds founded", code: "STAT // 03" },
    ],
  },
  projects: {
    eyebrow: "02 // QUEST LOG",
    heading: "Completed & active missions",
    subheading:
      "Real academic and personal builds spanning AI integrations, full-stack web apps, and C++ systems.",
    filters: ["All", "AI", "Web", "Systems"] satisfies QuestCategory[],
    items: [
      {
        id: "ai-resume-forge",
        code: "QUEST 01",
        title: "AI Resume Forge",
        categories: ["AI", "Web"],
        difficulty: "HARD",
        description:
          "AI builds and optimizes resumes from your skills, generating multiple formats.",
        tech: ["Next.js", "Claude API", "Tailwind"],
        repoUrl: "https://github.com/Muneebgulistan/ai-resume-forge",
      },
      {
        id: "medic-website",
        code: "QUEST 02",
        title: "Medic Website",
        categories: ["Web"],
        difficulty: "MEDIUM",
        description:
          "Platform connecting patients with doctors for appointments.",
        tech: ["React", "Node.js", "MongoDB"],
        repoUrl: "https://github.com/Muneebgulistan",
      },
      {
        id: "ai-quiz-app",
        code: "QUEST 03",
        title: "AI Quiz App",
        categories: ["AI"],
        difficulty: "MEDIUM",
        description:
          "Console quiz that adapts difficulty to performance.",
        tech: ["Python", "AI logic"],
        repoUrl: "https://github.com/Muneebgulistan",
      },
      {
        id: "undo-redo-engine",
        code: "QUEST 04",
        title: "Undo Redo Engine",
        categories: ["Systems"],
        difficulty: "HARD",
        description:
          "Command-pattern engine in C++ with unlimited undo/redo.",
        tech: ["C++", "Data structures"],
        repoUrl: "https://github.com/Muneebgulistan",
      },
      {
        id: "console-mini-os",
        code: "QUEST 05",
        title: "Console Mini OS",
        categories: ["Systems"],
        difficulty: "BOSS",
        description: "Terminal-based OS simulator in C++.",
        tech: ["C++", "Systems Programming", "Terminal UI"],
        repoUrl: "https://github.com/Muneebgulistan/console-mini-os",
      },
    ] satisfies QuestProject[],
  },
  skills: {
    eyebrow: "03 // LOADOUT",
    heading: "Equipped tech & skill trees",
    subheading:
      "Core languages, AI workflows, and media tools leveled through hands-on project builds.",
    groups: [
      {
        id: "development",
        code: "TREE 01 // CODE",
        title: "Development",
        subtitle: "Frontend, backend & systems fundamentals",
        skills: [
          { name: "HTML/CSS/Tailwind", level: 95 },
          { name: "React/Next.js", level: 85 },
          { name: "Python", level: 80 },
          { name: "C++", level: 70 },
        ],
      },
      {
        id: "ai-tools",
        code: "TREE 02 // NEURAL",
        title: "AI & Tools",
        subtitle: "LLM workflows, prompting & API integration",
        skills: [
          { name: "Claude/Gemini/ChatGPT", level: 95 },
          { name: "Prompt Engineering", level: 90 },
          { name: "Google AI Studio", level: 85 },
          { name: "AI Integrations", level: 75 },
        ],
      },
      {
        id: "media-productivity",
        code: "TREE 03 // CREATIVE",
        title: "Media & Productivity",
        subtitle: "Video production, visual design & docs",
        skills: [
          { name: "MS Office", level: 95 },
          { name: "CapCut & InShot", level: 90 },
          { name: "Canva", level: 85 },
          { name: "Content Creation", level: 85 },
        ],
      },
    ] satisfies SkillLoadoutGroup[],
  },
  achievements: {
    eyebrow: "04 // ACHIEVEMENTS UNLOCKED",
    heading: "Certifications & academic log",
    certifications: [
      {
        title: "Introduction to AI",
        issuer: "Coursera / IBM",
        date: "Dec 2025",
      },
      {
        title: "Advanced React and Next.js",
        issuer: "Udemy",
        date: "Oct 2025",
      },
      {
        title: "Python for Data Science",
        issuer: "DataCamp",
        date: "Aug 2025",
      },
      {
        title: "Prompt Engineering for Developers",
        issuer: "DeepLearning.AI",
        date: "Jun 2025",
      },
    ] satisfies CertificationItem[],
    education: [
      {
        degree: "BS Artificial Intelligence (Sem 2)",
        institution: "Pak Austria Institute",
        location: "Haripur",
        period: "Present",
        current: true,
      },
      {
        degree: "FSc Pre-Engineering",
        institution: "Modernage Public School",
        location: "Abbottabad",
        period: "2022–2024",
      },
      {
        degree: "Matriculation, Science",
        institution: "Tameeriwattan Public School",
        location: "Abbottabad",
        period: "2020–2022",
      },
    ] satisfies EducationItem[],
  },
  services: {
    eyebrow: "05 // SERVICES",
    heading: "Pick your pack",
    subheading:
      "Clear deliverables for landing pages, full-stack web platforms, and custom AI integrations.",
    packs: [
      {
        id: "Basic",
        code: "PACK 01 // STARTER",
        name: "Basic",
        tagline: "Fast, clean web presence for personal brands or landing pages.",
        features: [
          "Responsive design",
          "Up to 3 pages",
          "Basic SEO",
          "1 revision",
          "Source code",
        ],
      },
      {
        id: "Standard",
        code: "PACK 02 // RECOMMENDED",
        name: "Standard",
        tagline: "Dynamic multi-page sites with CMS and polished interactions.",
        popular: true,
        features: [
          "Everything in Basic",
          "Up to 8 pages",
          "CMS Sanity/Strapi",
          "Advanced animations",
          "3 revisions",
          "1 month support",
        ],
      },
      {
        id: "Premium",
        code: "PACK 03 // FULL-STACK AI",
        name: "Premium",
        tagline: "Complete AI-integrated web applications with custom backend.",
        features: [
          "Everything in Standard",
          "Unlimited pages",
          "Custom AI with OpenAI/Claude",
          "Database and API setup",
          "Unlimited revisions",
          "3 months support",
        ],
      },
    ] satisfies ServicePack[],
  },
  contact: {
    eyebrow: "06 // JOIN THE PARTY",
    heading: "Start a new mission together",
    lead: "Available for freelance builds, AI web integrations, collaborations, and developer opportunities. Send a transmission below or reach out directly.",
    email: "muneegulistan@gmail.com",
    socials: [
      {
        label: "GitHub",
        handle: "github.com/Muneebgulistan",
        href: "https://github.com/Muneebgulistan",
        code: "GH",
      },
      {
        label: "LinkedIn",
        handle: "linkedin.com/in/muneeb-gulistan",
        href: "https://www.linkedin.com/in/muneeb-gulistan/",
        code: "IN",
      },
      {
        label: "Instagram",
        handle: "instagram.com/muneebgulistan",
        href: "https://www.instagram.com/muneebgulistan/",
        code: "IG",
      },
    ],
    interestedOptions: [
      "Not sure",
      "Basic",
      "Standard",
      "Premium",
      "Collaboration",
      "Job opportunity",
    ] satisfies InterestedOption[],
  },
  footer: {
    copyright: "© 2026 Muneeb Gulistan",
    status: "ALL SYSTEMS OPERATIONAL",
    backToTop: "BACK TO TOP ↑",
  },
} as const;
