# Waves Portfolio Template

A config-driven developer portfolio built with Next.js 16, React 19, and Tailwind CSS 4. A short animated wave treatment behind the name is adapted from [reactbits.dev/backgrounds/waves](https://reactbits.dev/backgrounds/waves).

The page uses a serif display face for headlines and a mono face for labels. The wave effect fades out below the name, leaving a solid background for the About, experience, and project sections.

The goal is simple: edit one config file, ship a polished personal site, and avoid rewriting components every time your work history, projects, or links change.

## Features

- Config-first content in `config/config.ts`
- Animated waves behind the name that fade into a solid page background and pause when offscreen
- Sections organized with large display-type headings and hairline rules instead of boxes, badges, or chips
- Light and dark theme toggle (a plain `[DAY / NIGHT]` text switch) with local preference persistence; wave color adapts automatically
- Rich bio formatting with inline emphasis and a drop-cap opening line
- Social links that hide automatically when left blank
- Grouped experience log with expandable role details
- Project list with live and source links
- Metadata generated from your config content

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Plain HTML5 canvas for the wave background (no WebGL/graphics libraries required)
- Fraunces, Sora, and IBM Plex Mono via `next/font/google`
- pnpm for package management

## Requirements

- Node.js 20.9 or newer
- pnpm

## Quick Start

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open the local URL printed in your terminal. Next usually starts on `http://localhost:3000`, but it may choose another port if 3000 is already in use.

Build for production:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Customization

Most edits happen in [config/config.ts](config/config.ts). See that file's comments for every field.

### Identity

Update your name:

```ts
name: "Your Name",
```

This is used in the hero heading and the page metadata.

### Bio

Write your bio as an array of paragraphs:

```ts
bio: [
  "I'm a software engineer who builds products with purpose.",
  "Outside work, I like [[music]], design, and learning new tools.",
],
```

Formatting supported in bio text:

- `[[text]]` renders with wider letter spacing.

The opening line of the first paragraph gets a large drop-cap treatment automatically.

### Social Links

Set any social URL to an empty string to hide that button:

```ts
social: {
  twitter: "https://twitter.com/yourusername",
  github: "https://github.com/yourusername",
  resume: "",
  discord: "",
  linkedin: "https://linkedin.com/in/yourusername",
},
```

### Experience

Experience is grouped by company under the "Experiences" heading. Each company can contain multiple roles:

```ts
experience: [
  {
    company: "Company Name",
    photo: "/companies/company.png",
    roles: [
      {
        title: "Software Engineer",
        type: "Full-Time",
        location: "Remote",
        startDate: "Mar 2025",
        endDate: "Present",
        bullets: ["Built and shipped production features."],
        tech: ["Next.js", "TypeScript", "Postgres"],
      },
    ],
  },
],
```

Set `photo` to an image path in `public/` for a small circular logo next to the company name, or leave it blank to show just the name.

### Projects

Projects support title, tagline, tech list, and optional links, under the "Projects" heading:

```ts
projects: [
  {
    title: "Project Name",
    tagline: "A short, specific line about what it does",
    tech: ["Next.js", "TypeScript", "NeonDB"],
    links: [
      { label: "Project site", url: "https://example.com" },
      { label: "Source", url: "https://github.com/yourusername/project" },
    ],
  },
],
```

Use an empty `links` array when a project has no public links.

### The Wave Background and Palette

The waves and the color palette are not part of `config/config.ts` since they are visual, not content.

- To tune the wave effect, edit the props passed to `<Waves />` in [components/WavesBackground.tsx](components/WavesBackground.tsx): `waveAmpX` / `waveAmpY` control how tall the waves are, `waveSpeedX` / `waveSpeedY` control drift speed, `xGap` / `yGap` control line density, and `maxCursorMove` controls how far lines are pushed by your cursor.
- To change the color palette or fonts, edit the tokens in [app/globals.css](app/globals.css) (`--color-ink`, `--color-foam`, `--color-tide`, `--color-lantern`, `--color-mist`, `--color-slate`) and the font setup in [app/layout.tsx](app/layout.tsx).

## Project Structure

```txt
app/
  layout.tsx            Root layout, font setup, metadata, theme boot script, mounts the wave background
  page.tsx               Home page composition, the left-anchored content column
  globals.css             Color/type tokens and wave canvas layout rules
components/
  Waves.tsx               The reactbits wave background, ported to TypeScript
  WavesBackground.tsx      Full-viewport wrapper that adapts wave color to the active theme
  SectionHeading.tsx       Big display-type heading + hairline rule, used at the top of every section
  Bio.tsx                  Bio and social links
  Experience.tsx           Role list and expand/collapse controls
  Footer.tsx               Footer links and copyright
  PageHeader.tsx           Hero name treatment
  Projects.tsx             Project list
  ThemeToggle.tsx          Plain-text [DAY / NIGHT] theme switch
config/
  config.ts                Main content configuration
lib/
  use-dark-mode.ts          Shared hook that tracks the `dark` class on <html>
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build the site for production |
| `pnpm start` | Run the production server |
| `pnpm lint` | Run ESLint |

## Deployment

The easiest deployment target is Vercel:

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Keep the default Next.js settings.
4. Deploy.

Other platforms that support Next.js can work too, as long as they use Node.js 20.9 or newer and run `pnpm build`.

## Notes For Agent-Assisted Edits

This project includes [AGENTS.md](AGENTS.md). It asks coding agents to read the local Next.js documentation in `node_modules/next/dist/docs/` before making framework-related changes, because this project uses a newer Next.js version with breaking changes.

---

Designed by [Bruin Software Engineers](https://bseatucla.com).
