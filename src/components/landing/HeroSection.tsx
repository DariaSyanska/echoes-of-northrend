import Image from "next/image";
import { ButtonLink } from "../ui/ButtonLink";

export function HeroSection() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
      <Image
        src="/images/hero/lich-king.jpg"
        alt="Lich King"
        fill
        priority
        className="object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-[#050914] to-transparent" />

      <div className="absolute z-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-cyan-300">
          Wrath of the Lich King
        </p>

        <h1 className="hero-title heading-font max-w-5xl text-5xl font-black leading-tight md:text-8xl">
          Echoes of Northrend
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
          A cinematic guild portal inspired by the frozen kingdom of the Lich
          King, legendary raids, and the heroes of Northrend.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/guild">Enter the Guild</ButtonLink>

          <ButtonLink href="/lore" variant="secondary">
            Explore Lore
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
