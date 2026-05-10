const stats = [
  { value: "25", label: "Raid Members" },
  { value: "3", label: "Raid Days" },
  { value: "12/12", label: "ICC Progress" },
];

export function GuildStats() {
  return (
    <section className="mt-12 grid gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <article
          key={stat.label}
          className="rounded-3xl border border-cyan-300/10 bg-slate-900/60 p-6 backdrop-blur"
        >
          <h3 className="heading-font text-4xl font-black text-cyan-100">
            {stat.value}
          </h3>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">
            {stat.label}
          </p>
        </article>
      ))}
    </section>
  );
}
