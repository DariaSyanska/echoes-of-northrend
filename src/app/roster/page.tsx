import { PageWrapper } from "../../components/layout/PageWrapper";
import { RosterFilters } from "../../components/roster/RosterFilters";
import { RosterGrid } from "../../components/roster/RosterGrid";

export default function RosterPage() {
  return (
    <PageWrapper>
      <p className="mb-3 text-sm uppercase tracking-[0.4em] text-cyan-300">
        Guild Roster
      </p>

      <h1 className="heading-font text-4xl font-black md:text-6xl">
        Heroes of Northrend
      </h1>

      <p className="mt-6 max-w-2xl text-slate-300">
        Explore the legendary heroes of Frozen Vanguard, their classes,
        specializations, and raid roles.
      </p>

      <RosterFilters />

      <RosterGrid />
    </PageWrapper>
  );
}
