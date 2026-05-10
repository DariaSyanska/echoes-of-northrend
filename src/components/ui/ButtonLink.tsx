import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={
        variant === "primary"
          ? "inline-flex rounded-full bg-cyan-300 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-200"
          : "inline-flex rounded-full border border-cyan-300/30 px-8 py-4 text-cyan-100 transition hover:bg-cyan-300/10"
      }
    >
      {children}
    </Link>
  );
}
