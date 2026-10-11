import { config } from "@/config/config";

export function PageHeader() {
  const { name } = config;

  return (
    <header className="-mb-2">
      <h1 className="font-display text-6xl font-medium leading-[0.95] tracking-tight text-ink sm:text-7xl dark:text-foam">
        {name}
      </h1>
    </header>
  );
}
