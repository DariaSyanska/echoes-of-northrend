import { PageWrapper } from "../../components/layout/PageWrapper";
import { RecruitmentForm } from "../../components/recruitment/RecruitmentForm";

export default function RecruitmentPage() {
  return (
    <PageWrapper>
      <div className="relative overflow-hidden rounded-[40px] border border-cyan-300/10 bg-slate-900/50 px-8 py-20 backdrop-blur">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
            Recruitment
          </p>

          <h1 className="heading-font mt-6 text-4xl font-black md:text-6xl">
            Join Frozen Vanguard
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            We are searching for brave heroes willing to stand against the
            Scourge, conquer Icecrown Citadel, and fight beside the champions of
            Northrend.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              Tanks Needed
            </span>

            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              Healers Open
            </span>

            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              DPS Welcome
            </span>
          </div>

          <RecruitmentForm />
        </div>
      </div>
    </PageWrapper>
  );
}
