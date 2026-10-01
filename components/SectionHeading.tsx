export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-7 flex items-baseline gap-5">
      <h2 className="font-display text-3xl font-light tracking-tight text-ink sm:text-4xl dark:text-foam">
        {children}
      </h2>
      <div className="h-px flex-1 bg-tide/25" />
    </div>
  );
}
