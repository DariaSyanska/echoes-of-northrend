import Link from "next/link";

type FeatureCardProps = {
  label: string;
  title: string;
  text: string;
  href: string;
};

export function FeatureCard({ label, title, text, href }: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-slate-900/70 p-6 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          {label}
        </p>

        <h2 className="heading-font mt-4 text-2xl font-black text-cyan-100">
          {title}
        </h2>

        <p className="mt-3 leading-relaxed text-slate-300">{text}</p>

        <div className="mt-6 text-sm font-semibold text-cyan-200 transition group-hover:translate-x-1">
          Explore →
        </div>
      </div>
    </Link>
  );
}
