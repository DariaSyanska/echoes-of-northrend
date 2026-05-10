import Image from "next/image";
import { RaidProgressBar } from "./RaidProgressBar";

type RaidCardProps = {
  title: string;
  difficulty: string;
  progress: number;
  image: string;
};

export function RaidCard({
  title,
  difficulty,
  progress,
  image,
}: RaidCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-cyan-300/10 bg-slate-900/60 backdrop-blur transition duration-500 hover:border-cyan-300/30 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="relative h-72 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80"
        />
      </div>

      <div className="p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          {difficulty}
        </p>

        <h2 className="heading-font mt-4 text-3xl font-black text-cyan-100">
          {title}
        </h2>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-slate-400">Progress</span>
          <span className="font-semibold text-cyan-200">{progress}%</span>
        </div>

        <RaidProgressBar value={progress} />
      </div>
    </article>
  );
}
