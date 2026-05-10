export function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyan-300/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Echoes of Northrend
        </p>

        <p className="text-sm text-slate-500">
          Wrath of the Lich King inspired fan project
        </p>
      </div>
    </footer>
  );
}
