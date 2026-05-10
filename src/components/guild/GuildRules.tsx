const rules = [
  "Respect every guild member.",
  "Be prepared for raids with consumables and repaired gear.",
  "Join voice chat during progression raids.",
  "Help newer players learn mechanics.",
];

export function GuildRules() {
  return (
    <section className="mt-16">
      <h2 className="heading-font text-3xl font-black text-cyan-100">
        Guild Rules
      </h2>

      <div className="mt-6 grid gap-4">
        {rules.map((rule, index) => (
          <div
            key={rule}
            className="rounded-2xl border border-cyan-300/10 bg-slate-900/60 p-5"
          >
            <span className="text-cyan-300">0{index + 1}.</span>{" "}
            <span className="text-slate-300">{rule}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
