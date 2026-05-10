"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "../../data/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-cyan-300/10 bg-slate-950/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-black tracking-wide text-cyan-100 transition hover:text-cyan-300"
        >
          Echoes of Northrend
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative text-sm uppercase tracking-[0.2em] transition duration-300 ${
                pathname === item.href
                  ? "text-cyan-300"
                  : "text-slate-300 hover:text-cyan-200"
              }`}
            >
              <span className="relative z-10">{item.label}</span>

              <span
                className={`absolute inset-x-0 -bottom-1.5 h-px bg-cyan-300 transition duration-300 group-hover:scale-x-100 ${
                  pathname === item.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-cyan-300/20 px-4 py-2 text-sm text-cyan-100 md:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-cyan-300/10 bg-slate-950/95 px-6 py-6">
          <nav className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm uppercase tracking-[0.3em] transition ${
                  pathname === item.href
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-cyan-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
