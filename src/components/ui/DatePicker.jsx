import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CalendarDays, ChevronLeft, ChevronRight, X } from 'lucide-react'

const WEEKDAYS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do']
const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
const toIso = (date) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`
const fromIso = (value) => {
  if (!value) return null
  const [year, month, day] = value.split('-').map(Number)
  const date = new Date(year, month - 1, day)
  return Number.isNaN(date.getTime()) ? null : date
}
const displayDate = (value) => {
  const date = fromIso(value)
  return date ? `${String(date.getDate()).padStart(2,'0')}/${String(date.getMonth()+1).padStart(2,'0')}/${date.getFullYear()}` : ''
}

export default function DatePicker({ value = '', onChange, required = false, disabled = false, className = 'field', min, max, ariaLabel = 'Seleccionar fecha' }) {
  const [open, setOpen] = useState(false)
  const selected = fromIso(value)
  const [view, setView] = useState(() => {
    const initial = selected || new Date()
    return new Date(initial.getFullYear(), initial.getMonth(), 1)
  })
  const rootRef = useRef(null)
  const popoverRef = useRef(null)
  const inputRef = useRef(null)
  const [popoverStyle, setPopoverStyle] = useState({ top: 0, left: 0 })

  useEffect(() => {
    if (selected) setView(new Date(selected.getFullYear(), selected.getMonth(), 1))
  }, [value])

  useEffect(() => {
    const close = (event) => { if (rootRef.current && !rootRef.current.contains(event.target) && popoverRef.current && !popoverRef.current.contains(event.target)) setOpen(false) }
    const keydown = (event) => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', keydown)
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', keydown) }
  }, [])

  useEffect(() => {
    if (!open) return
    const positionPopover = () => {
      const anchor = inputRef.current
      if (!anchor) return
      const rect = anchor.getBoundingClientRect()
      const width = Math.min(320, window.innerWidth - 24)
      const estimatedHeight = 360
      const spaceBelow = window.innerHeight - rect.bottom
      const top = spaceBelow >= estimatedHeight || spaceBelow >= rect.top
        ? Math.min(rect.bottom + 8, window.innerHeight - estimatedHeight - 12)
        : Math.max(12, rect.top - estimatedHeight - 8)
      const left = Math.max(12, Math.min(rect.left, window.innerWidth - width - 12))
      setPopoverStyle({ top, left, width })
    }
    positionPopover()
    window.addEventListener('resize', positionPopover)
    window.addEventListener('scroll', positionPopover, true)
    return () => {
      window.removeEventListener('resize', positionPopover)
      window.removeEventListener('scroll', positionPopover, true)
    }
  }, [open, view])

  const days = useMemo(() => {
    const first = new Date(view.getFullYear(), view.getMonth(), 1)
    const offset = (first.getDay() + 6) % 7
    const start = new Date(first)
    start.setDate(1 - offset)
    return Array.from({ length: 42 }, (_, index) => {
      const day = new Date(start)
      day.setDate(start.getDate() + index)
      return day
    })
  }, [view])

  const today = toIso(new Date())
  const isDisabled = (date) => (min && toIso(date) < min) || (max && toIso(date) > max)
  const selectDate = (date) => {
    if (isDisabled(date)) return
    onChange?.(toIso(date))
    setOpen(false)
  }

  return <div className="nuvia-date-picker relative" ref={rootRef}>
    <div className="relative">
      <input ref={inputRef} type="text" readOnly required={required} disabled={disabled} aria-label={ariaLabel} aria-expanded={open} placeholder="dd/mm/aaaa" value={displayDate(value)} onClick={() => setOpen(v => !v)} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setOpen(v => !v) } }} className={`${className} cursor-pointer pr-10 ${value ? 'text-[#21134F]' : 'text-slate-400'}`} />
      <button type="button" disabled={disabled} aria-label={ariaLabel} onClick={() => setOpen(v => !v)} className="absolute inset-y-0 right-0 flex w-10 items-center justify-center rounded-r-xl text-violet-600 hover:bg-violet-50 disabled:opacity-50"><CalendarDays size={17} /></button>
    </div>
    {open && createPortal(<div ref={popoverRef} style={{ position: 'fixed', top: popoverStyle.top, left: popoverStyle.left, width: popoverStyle.width || 320, zIndex: 10000 }} className="nuvia-date-popover rounded-2xl border border-violet-100 bg-white p-3 shadow-xl shadow-violet-950/15">
      <div className="mb-3 flex items-center justify-between gap-2">
        <button type="button" className="nuvia-calendar-nav" aria-label="Mes anterior" onClick={() => setView(new Date(view.getFullYear(), view.getMonth()-1, 1))}><ChevronLeft size={18}/></button>
        <p className="text-sm font-bold capitalize text-[#21134F]">{MONTHS[view.getMonth()]} {view.getFullYear()}</p>
        <button type="button" className="nuvia-calendar-nav" aria-label="Mes siguiente" onClick={() => setView(new Date(view.getFullYear(), view.getMonth()+1, 1))}><ChevronRight size={18}/></button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {WEEKDAYS.map(day => <span key={day} className="py-1 text-center text-[11px] font-bold text-slate-400">{day}</span>)}
        {days.map((day, index) => {
          const iso = toIso(day)
          const outside = day.getMonth() !== view.getMonth()
          const active = iso === value
          const isToday = iso === today
          return <button key={`${iso}-${index}`} type="button" disabled={isDisabled(day)} onClick={() => selectDate(day)} className={`h-9 rounded-xl text-xs transition ${active ? 'bg-violet-600 font-bold text-white shadow-sm' : isToday ? 'border border-violet-300 font-bold text-violet-700' : outside ? 'text-slate-300 hover:bg-violet-50' : 'text-[#21134F] hover:bg-violet-100'} disabled:cursor-not-allowed disabled:opacity-30`}>{day.getDate()}</button>
        })}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-violet-50 pt-2">
        <button type="button" onClick={() => { onChange?.(''); setOpen(false) }} className="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-50">Borrar</button>
        <button type="button" onClick={() => selectDate(new Date())} className="rounded-lg px-3 py-1.5 text-xs font-bold text-violet-700 hover:bg-violet-50">Hoy</button>
      </div>
    </div>, document.body)}
  </div>
}
