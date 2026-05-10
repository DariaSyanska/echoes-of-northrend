import { ButtonLink } from "../ui/ButtonLink";
import { FrostPanel } from "../ui/FrostPanel";

export function LorePreview() {
  return (
    <FrostPanel className="p-10">
      <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Lore</p>

      <h2 className="heading-font mt-4 text-4xl font-black text-cyan-100">
        The Fall of Arthas
      </h2>

      <p className="mt-6 max-w-2xl text-slate-300">
        Explore the tragic story of Arthas Menethil, Frostmourne, and the rise
        of the Lich King.
      </p>

      <div className="mt-8">
        <ButtonLink href="/lore" variant="secondary">
          Explore Lore
        </ButtonLink>
      </div>
    </FrostPanel>
  );
}
