export function RosterFilters() {
  return (
    <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-cyan-300/10 bg-slate-900/50 p-5 backdrop-blur md:flex-row">
      <input
        className="flex-1 rounded-2xl border border-cyan-300/10 bg-slate-950/50 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
        placeholder="Search character..."
      />

      <select className="rounded-2xl border border-cyan-300/10 bg-slate-950/50 px-4 py-3 text-slate-200 outline-none focus:border-cyan-300/40">
        <option>All Roles</option>
        <option>Tank</option>
        <option>Healer</option>
        <option>DPS</option>
      </select>

      <select className="rounded-2xl border border-cyan-300/10 bg-slate-950/50 px-4 py-3 text-slate-200 outline-none focus:border-cyan-300/40">
        <option>All Classes</option>
        <option>Death Knight</option>
        <option>Priest</option>
        <option>Mage</option>
        <option>Paladin</option>
        <option>Warrior</option>
      </select>
    </div>
  );
}
