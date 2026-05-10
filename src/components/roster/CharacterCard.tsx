import Image from "next/image";
import { RoleBadge } from "./RoleBadge";

type CharacterCardProps = {
  name: string;
  className: string;
  role: string;
  level: number;
  status: string;
  image: string;
};

export function CharacterCard({
  name,
  className,
  role,
  level,
  status,
  image,
}: CharacterCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-slate-900/60 p-6 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

      <div className="overflow-hidden rounded-2xl">
        <div className="relative h-56 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="relative z-10 mt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="heading-font text-2xl font-black text-cyan-100">
              {name}
            </h2>
            <p className="mt-2 text-slate-400">{className}</p>
          </div>

          <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            {status}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <RoleBadge role={role} />
          <span className="text-sm text-slate-400">Level {level}</span>
        </div>
      </div>
    </article>
  );
}
