import { Snowfall } from "../components/effects/Snowfall";
import { HeroSection } from "../components/landing/HeroSection";
import { PageContainer } from "../components/layout/PageContainer";
import { Footer } from "../components/layout/Footer";
import { FeatureCard } from "../components/ui/FeatureCard";
import { SectionHeading } from "../components/ui/SectionHeading";
import { StatCard } from "../components/ui/StatCard";
import { homeCards, homeStats } from "../data/home";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050914] text-[#e5f4ff]">
      <Snowfall />

      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-[#050914]/80 to-[#050914]" />
      <div className="aurora absolute left-1/2 -top-50 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />

      <HeroSection />

      <PageContainer className="flex flex-col items-center px-6 py-32 text-center">
        <SectionHeading
          eyebrow="The Frozen Throne"
          title="Face the Lich King in the heart of Icecrown Citadel"
          description="Journey through Northrend, conquer legendary raids, and uncover the story behind Arthas Menethil and the rise of the Scourge."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {homeStats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </PageContainer>

      <PageContainer className="grid gap-6 px-6 pb-24 md:grid-cols-3">
        {homeCards.map((card) => (
          <FeatureCard
            key={card.title}
            label={card.label}
            title={card.title}
            text={card.text}
            href={card.href}
          />
        ))}
      </PageContainer>
      <Footer />
    </main>
  );
}
