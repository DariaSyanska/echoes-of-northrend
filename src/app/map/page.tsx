import { PageWrapper } from "../../components/layout/PageWrapper";
import { NorthrendMap } from "../../components/map/NorthrendMap";

export default function MapPage() {
  return (
    <PageWrapper>
      <p className="mb-3 text-sm uppercase tracking-[0.4em] text-cyan-300">
        Northrend Map
      </p>

      <h1 className="heading-font text-4xl font-black md:text-6xl">
        Frozen Lands of Northrend
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
        Explore the icy regions of Northrend, uncover forgotten titan ruins, and
        journey toward Icecrown Citadel.
      </p>

      <NorthrendMap />
    </PageWrapper>
  );
}
