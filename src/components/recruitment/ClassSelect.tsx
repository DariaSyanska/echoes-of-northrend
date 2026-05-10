const classes = [
  "Death Knight",
  "Paladin",
  "Warrior",
  "Mage",
  "Warlock",
  "Hunter",
  "Priest",
  "Rogue",
  "Druid",
  "Shaman",
];

export function ClassSelect() {
  return (
    <select className="rounded-2xl border border-cyan-300/10 bg-slate-900/70 px-5 py-4 text-slate-200 outline-none transition focus:border-cyan-300/40">
      <option>Select Class</option>

      {classes.map((className) => (
        <option key={className}>{className}</option>
      ))}
    </select>
  );
}
