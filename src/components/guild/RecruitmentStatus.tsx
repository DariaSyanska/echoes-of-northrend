import Link from "next/link";

export function RecruitmentStatus() {
  return (
    <section className="mt-16 rounded-3xl border border-cyan-300/10 bg-slate-900/60 p-8 backdrop-blur">
      <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
        Recruitment
      </p>

      <h2 className="heading-font mt-4 text-3xl font-black text-cyan-100">
        Open for Heroes
      </h2>

      <p className="mt-4 max-w-2xl text-slate-300">
        We are currently recruiting tanks, healers, and damage dealers for
        Icecrown Citadel progression.
      </p>

      <Link
        href="/recruitment"
        className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-200"
      >
        Apply Now
      </Link>
    </section>
  );
}
