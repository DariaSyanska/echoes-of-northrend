import { ButtonLink } from "../ui/ButtonLink";

export function JoinCallToAction() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-cyan-300/10 bg-slate-900/60 px-8 py-20 text-center backdrop-blur">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative z-10">
        <p className="text-sm uppercase tracking-[0.5em] text-cyan-300">
          Join the Adventure
        </p>

        <h2 className="heading-font mt-6 text-4xl font-black text-cyan-100 md:text-6xl">
          Become a Hero of Northrend
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Join our guild, conquer legendary raids, and stand against the Lich
          King in Icecrown Citadel.
        </p>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/recruitment">Apply for Recruitment</ButtonLink>
        </div>
      </div>
    </section>
  );
}
