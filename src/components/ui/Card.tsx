type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-cyan-300/10 bg-slate-900/60 backdrop-blur transition duration-500 hover:border-cyan-300/30 hover:shadow-2xl hover:shadow-cyan-500/10 ${className}`}
    >
      {children}
    </div>
  );
}
