const bosses = [
  "Lord Marrowgar",
  "Lady Deathwhisper",
  "Gunship Battle",
  "Deathbringer Saurfang",
  "Festergut",
  "Rotface",
  "Professor Putricide",
  "Sindragosa",
  "The Lich King",
];

export function BossList() {
  return (
    <section className="mt-16">
      <h2 className="heading-font text-4xl font-black text-cyan-100">
        Icecrown Bosses
      </h2>

      <div className="mt-8 grid gap-4">
        {bosses.map((boss, index) => (
          <div
            key={boss}
            className="flex items-center justify-between rounded-2xl border border-cyan-300/10 bg-slate-900/60 px-5 py-4"
          >
            <span className="text-slate-200">
              {index + 1}. {boss}
            </span>

            <span className="text-cyan-300">Defeated</span>
          </div>
        ))}
      </div>
    </section>
  );
}
