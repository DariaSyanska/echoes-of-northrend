type ZoneModalProps = {
  title: string;
  description: string;
  onClose?: () => void;
};

export function ZoneModal({ title, description, onClose }: ZoneModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur">
      <div className="w-full max-w-2xl rounded-3xl border border-cyan-300/10 bg-slate-950 p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
              Northrend Zone
            </p>

            <h2 className="heading-font mt-4 text-4xl font-black text-cyan-100">
              {title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-500 transition hover:text-cyan-300"
          >
            ✕
          </button>
        </div>

        <p className="mt-8 leading-relaxed text-slate-300">{description}</p>
      </div>
    </div>
  );
}
