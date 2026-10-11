import { PageHeader } from "@/components/PageHeader";
import { Bio } from "@/components/Bio";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="relative z-0 min-h-screen">
      <div className="fixed right-6 top-6 z-30 sm:right-10 sm:top-10">
        <ThemeToggle />
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-6 py-16 sm:px-10 sm:py-24 lg:px-0">
        <PageHeader />
        <Bio />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
