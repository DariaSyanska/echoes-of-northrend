import { PageWrapper } from "../../components/layout/PageWrapper";

const dashboardCards = [
  { label: "Guild Members", value: "25" },
  { label: "ICC Progress", value: "10/12" },
  { label: "Open Roles", value: "3" },
  { label: "Weekly Raids", value: "3" },
];

export default function DashboardPage() {
  return (
    <PageWrapper>
      <p className="mb-3 text-sm uppercase tracking-[0.4em] text-cyan-300">
        Guild Dashboard
      </p>

      <h1 className="heading-font text-4xl font-black md:text-6xl">
        Command Center
      </h1>

      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {dashboardCards.map((card) => (
          <article
            key={card.label}
            className="rounded-3xl border border-cyan-300/10 bg-slate-900/60 p-6 backdrop-blur"
          >
            <h2 className="heading-font text-4xl font-black text-cyan-100">
              {card.value}
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">
              {card.label}
            </p>
          </article>
        ))}
      </div>
    </PageWrapper>
  );
}
