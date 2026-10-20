import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'

export default function StyledSelect({ value, onChange, options, className = '', ariaLabel, disabled = false }) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const rootRef = useRef(null)
  const selectedIndex = Math.max(0, options.findIndex(option => option.value === value))
  useEffect(() => setActiveIndex(selectedIndex), [selectedIndex])
  useEffect(() => {
    const close = (event) => { if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false) }
    const keydown = (event) => {
      if (!open) return
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'ArrowDown') { event.preventDefault(); setActiveIndex(i => Math.min(options.length - 1, i + 1)) }
      if (event.key === 'ArrowUp') { event.preventDefault(); setActiveIndex(i => Math.max(0, i - 1)) }
      if (event.key === 'Enter') { event.preventDefault(); if (options[activeIndex]) onChange(options[activeIndex].value); setOpen(false) }
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', keydown)
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', keydown) }
  }, [open, options, activeIndex, onChange])
  const selected = options[selectedIndex]
  return <div className={`nuvia-select-wrap relative ${className}`} ref={rootRef}>
    <button type="button" disabled={disabled} aria-label={ariaLabel} aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(v => !v)} className="nuvia-select flex w-full items-center justify-between gap-3 text-left disabled:opacity-60">
      <span className="truncate">{selected?.label || 'Seleccionar'}</span><ChevronDown size={16} className={`shrink-0 text-violet-600 transition-transform ${open ? 'rotate-180' : ''}`}/>
    </button>
    {open && <div role="listbox" aria-label={ariaLabel} className="nuvia-select-menu absolute left-0 top-[calc(100%+6px)] z-[70] w-full overflow-hidden rounded-xl border border-violet-100 bg-white p-1.5 shadow-xl shadow-violet-950/15">
      {options.map((option, index) => <button key={option.value} type="button" role="option" aria-selected={option.value === value} onMouseEnter={() => setActiveIndex(index)} onClick={() => { onChange(option.value); setOpen(false) }} className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${option.value === value ? 'bg-violet-100 font-bold text-violet-800' : 'text-[#21134F] hover:bg-violet-50'} ${activeIndex === index ? 'ring-1 ring-inset ring-violet-200' : ''}`}>
        <span>{option.label}</span>{option.value === value && <Check size={15} className="text-violet-600"/>}
      </button>)}
    </div>}
    <input type="hidden" value={value} readOnly />
  </div>
}
