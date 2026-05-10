import { FrostPanel } from "../ui/FrostPanel";

const bosses = [
  "Lord Marrowgar",
  "Lady Deathwhisper",
  "Sindragosa",
  "The Lich King",
];

export function RaidProgressPreview() {
  return (
    <FrostPanel className="p-10">
      <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
        Raid Progress
      </p>

      <h2 className="heading-font mt-4 text-4xl font-black text-cyan-100">
        Icecrown Citadel
      </h2>

      <div className="mt-8 grid gap-4">
        {bosses.map((boss, index) => (
          <div
            key={boss}
            className="flex items-center justify-between rounded-2xl border border-cyan-300/10 bg-slate-900/50 px-5 py-4"
          >
            <span className="text-slate-200">
              {index + 1}. {boss}
            </span>

            <span className="text-cyan-300">Defeated</span>
          </div>
        ))}
      </div>
    </FrostPanel>
  );
}
