const tones = { purple: 'bg-violet-100 text-violet-700', pink: 'bg-rose-100 text-rose-700', blue: 'bg-blue-100 text-blue-700', green: 'bg-emerald-100 text-emerald-700' }
export default function StatCard({ label, value, detail, icon, tone = 'purple' }) {
  return <article className="rounded-2xl border border-violet-100/80 bg-white p-5 shadow-sm shadow-violet-100/40"><div className="flex items-start justify-between gap-3"><p className="text-sm font-semibold text-slate-500">{label}</p><span className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg ${tones[tone]}`}>{icon}</span></div><p className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#17104B]">{value}</p><p className="mt-2 text-xs text-slate-500">{detail}</p></article>
}
