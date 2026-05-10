type PageWrapperProps = {
  children: React.ReactNode;
};

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050914] px-6 pt-32 text-[#e5f4ff]">
      <div className="pointer-events-none absolute left-1/2 -top-50 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 bg-radial-[at_top] from-cyan-300/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">{children}</div>
    </main>
  );
}
