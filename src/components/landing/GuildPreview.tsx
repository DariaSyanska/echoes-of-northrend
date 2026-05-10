import { ButtonLink } from "../ui/ButtonLink";
import { FrostPanel } from "../ui/FrostPanel";

export function GuildPreview() {
  return (
    <FrostPanel className="p-10">
      <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">Guild</p>

      <h2 className="heading-font mt-4 text-4xl font-black text-cyan-100">
        Frozen Vanguard
      </h2>

      <p className="mt-6 max-w-2xl text-slate-300">
        A heroic raiding guild fighting through the frozen lands of Northrend
        and preparing for Icecrown Citadel progression.
      </p>

      <div className="mt-8">
        <ButtonLink href="/guild">View Guild</ButtonLink>
      </div>
    </FrostPanel>
  );
}
