type FrostPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function FrostPanel({ children, className = "" }: FrostPanelProps) {
  return (
    <div
      className={`rounded-3xl border border-cyan-300/10 bg-slate-950/40 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
