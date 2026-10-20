export default function BrandMark({ light = false }) {
  return (
    <span className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9857FF] via-[#7C3AED] to-[#4C1D95] shadow-md shadow-violet-200 ${light ? 'ring-1 ring-white/30' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none">
        <path d="M8 25 16 12l6 10 10-13" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="25" r="3.2" fill="#DDD6FE" /><circle cx="16" cy="12" r="3.2" fill="white" /><circle cx="22" cy="22" r="3.2" fill="#DDD6FE" /><circle cx="32" cy="9" r="3.2" fill="white" />
      </svg>
    </span>
  )
}
