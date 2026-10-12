export const config = {
  name: "Kaartik Tejwani",
  bio: [
    "I'm a CS student at UCLA who loves building things. I started Bruin Software Engineers to help students adapt as generative AI changes software engineering, build real projects, and connect with working engineers. Recently, my team won two challenges at LA Hacks (1,000+ hackers) with Accent, an accessibility assistant for elderly users and non-English speakers built with Gemini 3.1.",
  ],
  cta: "Email me if you'd like to work together.",
  social: {
    email: "mailto:ktejwani81@ucla.edu",
    twitter: "",
    github: "https://github.com/KaartikDev",
    resume: "/Kaartik_Tejwani_Resume.pdf",
    discord: "",
    linkedin: "https://www.linkedin.com/in/kaartik-tejwani/",
  },
  experience: [
    {
      company: "Abridge",
      website: "",
      links: [],
      photo: "",
      roles: [{
        title: "Member of Technical Staff, Intern (Incoming)",
        type: "Upcoming internship",
        location: "San Francisco, CA",
        startDate: "Jan 2027",
        endDate: "Mar 2027",
        bullets: ["Selected to work on production LLM systems for clinical workflows."],
        tech: [],
      }],
    },
    {
      company: "Bruin Software Engineers",
      website: "",
      impactReportUrl: "https://drive.google.com/file/d/1soANLZ5IHQ46Sx1Og5H5oTQErv9WpRSm/view",
      links: [
        { label: "BSE GitHub", url: "https://github.com/bse-at-ucla" },
        { label: "Terminal Trails", url: "https://termtrails.vercel.app/" },
      ],
      photo: "",
      roles: [{
        title: "Founder & President",
        type: "Student organization",
        location: "Los Angeles, CA",
        startDate: "Sep 2025",
        endDate: "Present",
        bullets: [
          "Grew BSE to 200+ members, raised $13K from Google, Jane Street, and others, and hosted a hackathon at Google.",
        ],
        tech: [],
      }],
    },
    {
      company: "Arive",
      website: "",
      links: [],
      photo: "",
      roles: [{
        title: "Software Engineering Intern",
        type: "Internship",
        location: "San Ramon, CA",
        startDate: "Jun 2025",
        endDate: "Sep 2025",
        bullets: [
          "Built an internal RAG assistant over documents so developers could quickly find policy answers.",
        ],
        tech: ["RAG", "Vector databases", "Cloud"],
      }],
    },
    {
      company: "Tanius Technology",
      website: "",
      links: [],
      photo: "",
      roles: [{
        title: "Quantitative Developer Intern",
        type: "Internship",
        location: "Danville, CA",
        startDate: "Jun 2023",
        endDate: "Aug 2023",
        bullets: [
          "Built a futures backtesting system for 1B+ data points and cut parameter-search runtime 10x with JIT compilation.",
        ],
        tech: ["Python", "JIT compilation", "Time-series data"],
      }],
    },
  ],
  projects: [
    {
      title: "Accent",
      tagline: "Accent is a macOS assistant that turns voice commands into on-screen actions for elderly users and non-English speakers. My team and I built it at LA Hacks 2026, where we won two tracks among 1,000+ hackers.",
      tech: ["Swift", "Python", "PyTorch", "ElevenLabs", "Gemini"],
      links: [
        { label: "Demo video", url: "https://www.youtube.com/watch?v=XmlBhFCtorw" },
        { label: "Award coverage", url: "https://americas.aramco.com/en/news-media/news/2026/la-hacks" },
        { label: "Devpost", url: "https://devpost.com/software/accent-cdw2qi" },
      ],
    },
    {
      title: "JAX Transformer Training",
      tagline: "Implemented and trained a roughly 10-million-parameter Transformer on synthetic addition data, using a free Colab TPU to study model size and training tradeoffs.",
      tech: ["JAX", "Python", "TPU"],
      links: [],
    },
    {
      title: "Skiing Web App",
      tagline: "Built APIs for lift, trail, and resort status. Redis caching reduces repeated MongoDB reads; protected update endpoints use bearer-token authentication and rate limiting.",
      tech: ["Node.js", "Express", "tRPC", "Redis", "MongoDB"],
      links: [],
    },
  ],
};
