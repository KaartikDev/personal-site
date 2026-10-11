import { config } from "@/config/config";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  const { projects } = config;

  return (
    <section>
      <SectionHeading>Projects</SectionHeading>
      <div className="space-y-14">
        {projects.map((project, i) => (
          <div key={i}>
            <h3 className="font-display text-xl font-medium text-ink dark:text-foam">
              {project.title}
            </h3>
            <p className="mt-2 text-sm italic leading-relaxed text-slate dark:text-mist">
              {project.tagline}
            </p>
            {project.tech.length > 0 && (
              <p className="mt-3 font-mono text-xs tracking-wide text-slate dark:text-mist">
                {project.tech.join("  /  ")}
              </p>
            )}
            {project.links.length > 0 && (
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs tracking-wide">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkIndex === 0
                      ? "text-lantern underline decoration-lantern/30 underline-offset-4 hover:decoration-lantern"
                      : "text-slate underline decoration-tide/30 underline-offset-4 hover:text-tide dark:text-mist"}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
