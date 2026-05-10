import Link from "next/link";
import { navigation } from "../../data/navigation";

export function Navigation() {
  return (
    <nav className="flex items-center gap-8">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm uppercase tracking-[0.3em] text-slate-300 transition hover:text-cyan-300"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
