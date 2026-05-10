type MapZoneCardProps = {
  title: string;
  description: string;
};

export function MapZoneCard({ title, description }: MapZoneCardProps) {
  return (
    <article className="rounded-3xl border border-cyan-300/10 bg-slate-900/60 p-6 backdrop-blur transition duration-500 hover:border-cyan-300/30 hover:shadow-lg hover:shadow-cyan-500/10">
      <h2 className="heading-font text-2xl font-black text-cyan-100">
        {title}
      </h2>

      <p className="mt-4 leading-relaxed text-slate-300">{description}</p>
    </article>
  );
}
