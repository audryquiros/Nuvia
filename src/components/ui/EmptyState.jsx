export default function EmptyState({ icon = '✳', title, description }) {
  return <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-violet-200 bg-white px-6 py-14 text-center"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-2xl text-violet-700">{icon}</span><h3 className="mt-4 font-heading text-lg font-bold text-[#17104B]">{title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">{description}</p></div>
}
