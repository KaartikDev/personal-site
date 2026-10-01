// ======================================================
// SITE CONFIG - Edit everything in this file!
// ======================================================
// This is the only file you need to touch. Fill in your
// personal info below, and the site updates automatically.

export const config = {

  // -- Identity
  name: "Your Name",

  // -- Bio -----
  // Write your bio as an array of paragraphs.
  // [[text]] --> spaced-out letter tracking (e.g. [[hello]] renders as h e l l o)
  bio: [
    "I'm a software engineer who builds products with a designer's eye for detail.",
    "Over the past few months I've shipped 5+ freelance projects, working with clients across different industries.",
    "Beyond work, I like to play badminton and watch soccer.",
  ],

  // CTA line shown after your bio
  cta: "Got a project in mind? Let's bring it to life!",

  // -- Social Links
  // Leave a field as "" to hide that button.
  social: {
    twitter:  "https://twitter.com/yourusername",
    github:   "https://github.com/yourusername",
    resume:   "",   // Link to your resume (PDF, Google Drive, etc.)
    discord:  "",   // Discord profile URL or server invite link
    linkedin: "https://linkedin.com/in/yourusername",
  },

  // -- Experience
  // Group roles by company. Multiple roles at the same company become nested entries.
  // photo: path to an image in /public (e.g. "/companies/acme.png"), or leave "" for initial avatar
  // bullets: list of accomplishments shown when the role is expanded
  // tech: tools used - rendered as icon chips when expanded
  experience: [
    {
      company:   "Freelance",
      photo:     "",
      roles: [
        {
          title:     "Software Engineer",
          type:      "Full-Time",
          location:  "Remote",
          startDate: "Mar 2025",
          endDate:   "Present",
          bullets: [
            "Led end-to-end development of 5+ client projects from design to deployment.",
            "Built and shipped responsive web apps with tight deadlines and changing requirements.",
          ],
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres"],
        },
      ],
    },
    {
      company:   "Company Name",
      photo:     "",
      roles: [
        {
          title:     "Lead Frontend Developer",
          type:      "Full-Time",
          location:  "City, Country",
          startDate: "Sep 2024",
          endDate:   "Feb 2025",
          bullets: [
            "Built and managed solely many internal websites including dashboards as front-end lead.",
            "Collaborated with back-end team and explored software tools like Docker, DBeaver, etc.",
            "Deployed projects on Vercel, Netlify, and Azure Static Web Apps.",
          ],
          tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Docker", "Vercel"],
        },
        {
          title:     "Frontend Developer",
          type:      "Internship",
          location:  "City, Country",
          startDate: "Jul 2024",
          endDate:   "Sep 2024",
          bullets: [],
          tech:    [],
        },
      ],
    },
  ],

  // -- Projects
  // Featured projects shown on your portfolio.
  // Leave liveUrl or githubUrl as "" to hide that button.
  projects: [
    {
      title:     "Project Name",
      tagline:   "Find your favourite components in seconds",
      tech:      ["Next.js", "TypeScript", "BetterAuth", "NeonDB", "Motion"],
      liveUrl:   "https://yourproject.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title:     "Another Project",
      tagline:   "Make open-source contributions and rank among developers globally",
      tech:      ["Next.js", "Tailwind CSS", "Drizzle", "TypeScript", "NeonDB"],
      liveUrl:   "https://anotherproject.com",
      githubUrl: "https://github.com/yourusername/another",
    },
  ],
};
