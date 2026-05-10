type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-slate-900/60 p-8 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <h3 className="heading-font text-5xl font-black text-cyan-100">
          {value}
        </h3>

        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-400">
          {label}
        </p>
      </div>
    </div>
  );
}
