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

      <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16 sm:mx-0 sm:ml-[10vw] sm:max-w-xl sm:px-0 sm:py-24 lg:ml-[12vw] lg:max-w-2xl">
        <PageHeader />
        <Bio />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
