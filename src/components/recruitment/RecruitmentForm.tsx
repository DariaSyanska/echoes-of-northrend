import { ClassSelect } from "./ClassSelect";
import { RoleSelect } from "./RoleSelect";

export function RecruitmentForm() {
  return (
    <form className="mt-12 grid max-w-3xl gap-5">
      <input
        className="rounded-2xl border border-cyan-300/10 bg-slate-900/70 px-5 py-4 text-slate-200 outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
        placeholder="Character Name"
      />

      <ClassSelect />

      <RoleSelect />

      <input
        className="rounded-2xl border border-cyan-300/10 bg-slate-900/70 px-5 py-4 text-slate-200 outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
        placeholder="Item Level"
      />

      <textarea
        className="min-h-40 rounded-2xl border border-cyan-300/10 bg-slate-900/70 px-5 py-4 text-slate-200 outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
        placeholder="Tell us about your raid experience..."
      />

      <button
        type="submit"
        className="mt-4 rounded-full bg-cyan-300 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-200"
      >
        Submit Application
      </button>
    </form>
  );
}
