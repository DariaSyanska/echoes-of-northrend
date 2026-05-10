import { PageWrapper } from "../../components/layout/PageWrapper";
import { BossList } from "../../components/raids/BossList";
import { RaidCard } from "../../components/raids/RaidCard";
import { RaidSchedule } from "../../components/raids/RaidSchedule";
import { raids } from "../../data/raids";

export default function RaidsPage() {
  return (
    <PageWrapper>
      <div className="relative mb-16 overflow-hidden rounded-[40px]">
        <img
          src="/images/hero/dragon.jpg"
          alt="Dragon"
          className="h-95 w-full object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-10 left-10 z-10">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
            Raid Progress
          </p>

          <h1 className="heading-font mt-4 text-5xl font-black text-white md:text-7xl">
            Conquest of Northrend
          </h1>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
        Track guild progression through the deadliest raids of Wrath of the Lich
        King, from Naxxramas to Icecrown Citadel.
      </p>

      <div className="mt-14 grid gap-6">
        {raids.map((raid) => {
          const progress = Math.round(
            (raid.bossesDefeated / raid.totalBosses) * 100,
          );

          return (
            <RaidCard
              key={raid.name}
              title={raid.name}
              difficulty={raid.difficulty}
              progress={progress}
              image={raid.image}
            />
          );
        })}
      </div>

      <RaidSchedule />

      <BossList />
    </PageWrapper>
  );
}
