const schedule = [
  ["Wednesday", "19:00 Server Time"],
  ["Friday", "20:00 Server Time"],
  ["Sunday", "18:00 Server Time"],
];

export function RaidSchedule() {
  return (
    <section className="mt-16 rounded-3xl border border-cyan-300/10 bg-slate-900/60 p-8 backdrop-blur">
      <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
        Raid Schedule
      </p>

      <h2 className="heading-font mt-4 text-4xl font-black text-cyan-100">
        Weekly Raids
      </h2>

      <div className="mt-8 grid gap-4">
        {schedule.map(([day, time]) => (
          <div
            key={day}
            className="flex items-center justify-between rounded-2xl border border-cyan-300/10 bg-slate-950/40 px-5 py-4"
          >
            <span className="font-semibold text-slate-200">{day}</span>

            <span className="text-cyan-300">{time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
