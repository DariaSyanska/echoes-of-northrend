import { PageWrapper } from "../../components/layout/PageWrapper";
import { loreEvents } from "../../data/lore";

export default function LorePage() {
  return (
    <PageWrapper>
      <div className="relative mb-16 overflow-hidden rounded-[40px]">
        <img
          src="/images/lore/arthas.jpg"
          alt="Arthas"
          className="h-105 w-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-10 z-10">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
            Lore Archive
          </p>

          <h1 className="heading-font mt-4 text-5xl font-black text-white md:text-7xl">
            The Fall of Arthas
          </h1>
        </div>
      </div>

      <p className="mt-6 max-w-2xl text-slate-300">
        Follow the story of a fallen prince, Frostmourne, and the rise of the
        Lich King.
      </p>

      <div className="mt-12 space-y-6">
        {loreEvents.map((event, index) => (
          <article
            key={event.title}
            className="relative rounded-2xl border border-cyan-300/10 bg-slate-900/70 p-6"
          >
            <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/30 text-cyan-200">
              {index + 1}
            </span>

            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
              {event.era}
            </p>

            <h2 className="mt-3 text-2xl font-bold text-cyan-100">
              {event.title}
            </h2>

            <p className="mt-3 text-slate-300">{event.description}</p>
          </article>
        ))}
      </div>
    </PageWrapper>
  );
}
