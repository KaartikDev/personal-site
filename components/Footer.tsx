import { config } from "@/config/config";

export function Footer() {
  const { name } = config;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-tide/15 pt-6 font-mono text-[11px] tracking-wide text-slate dark:text-mist">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p>
          © {year} {name}
        </p>
        <div className="flex items-center gap-4">
          <a href="/rss.xml" className="transition-colors hover:text-tide">
            RSS
          </a>
          <a href="/sitemap.xml" className="transition-colors hover:text-tide">
            Sitemap
          </a>
        </div>
      </div>
      <p className="mt-3">
        Designed by{" "}
        <a
          href="https://bseatucla.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-tide"
        >
          Bruin Software Engineers
        </a>
      </p>
    </footer>
  );
}
