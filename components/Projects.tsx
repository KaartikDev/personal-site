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
            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-4 flex items-center gap-5 font-mono text-xs tracking-wide">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lantern underline decoration-lantern/30 underline-offset-4 hover:decoration-lantern"
                  >
                    Live ↗
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate underline decoration-tide/30 underline-offset-4 hover:text-tide dark:text-mist"
                  >
                    Source ↗
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
