type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <>
      <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300">
          {description}
        </p>
      )}
    </>
  );
}
