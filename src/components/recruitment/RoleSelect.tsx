const roles = ["Tank", "Healer", "Melee DPS", "Ranged DPS"];

export function RoleSelect() {
  return (
    <select className="rounded-2xl border border-cyan-300/10 bg-slate-900/70 px-5 py-4 text-slate-200 outline-none transition focus:border-cyan-300/40">
      <option>Select Role</option>

      {roles.map((role) => (
        <option key={role}>{role}</option>
      ))}
    </select>
  );
}
