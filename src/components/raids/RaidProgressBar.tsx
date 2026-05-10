type RaidProgressBarProps = {
  value: number;
};

export function RaidProgressBar({ value }: RaidProgressBarProps) {
  return (
    <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
      <div
        className="h-full rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.5)]"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
