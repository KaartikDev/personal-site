import { PageHeader } from "@/components/PageHeader";
import { Bio } from "@/components/Bio";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative z-0 min-h-screen">
      <div className="absolute right-6 top-6 z-30 sm:right-10 sm:top-10">
        <ThemeToggle />
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-6 pb-16 pt-8 sm:px-10 sm:pb-24 sm:pt-14 lg:px-0">
        <PageHeader />
        <main className="plain-content relative isolate z-10 flex flex-col gap-16">
          <Bio />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}
