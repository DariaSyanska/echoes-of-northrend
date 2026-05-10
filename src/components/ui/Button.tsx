type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-200">
      {children}
    </button>
  );
}
