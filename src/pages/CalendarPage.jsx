import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, CalendarDays, CircleDollarSign } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader.jsx'
import { useApiResource } from '../hooks/useApiResource.js'
import { formatCurrency, formatDate, supplierName } from '../utils/format.js'

const MONTHS = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
const WEEKDAYS = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom']
const toKey = (date) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`

export default function CalendarPage(){
  const {items:invoices,loading,error}=useApiResource('facturas')
  const {items:suppliers}=useApiResource('proveedores')
  const [month,setMonth]=useState(()=>new Date(new Date().getFullYear(),new Date().getMonth(),1))
  const [selectedDate,setSelectedDate]=useState(()=>toKey(new Date()))
  const events=useMemo(()=>invoices.filter(i=>i.fechaVencimiento&&i.estado!=='pagada'&&i.estado!=='anulada').sort((a,b)=>a.fechaVencimiento.localeCompare(b.fechaVencimiento)),[invoices])
  const eventsByDate=useMemo(()=>events.reduce((map,event)=>{(map[event.fechaVencimiento] ||= []).push(event);return map},{}),[events])
  const firstDay=(month.getDay()+6)%7
  const daysInMonth=new Date(month.getFullYear(),month.getMonth()+1,0).getDate()
  const cells=[...Array(firstDay).fill(null),...Array.from({length:daysInMonth},(_,i)=>i+1)]
  while(cells.length%7)cells.push(null)
  const selectedEvents=eventsByDate[selectedDate]||[]
  const moveMonth=(offset)=>setMonth(current=>new Date(current.getFullYear(),current.getMonth()+offset,1))
  const chooseDay=(day)=>setSelectedDate(toKey(new Date(month.getFullYear(),month.getMonth(),day)))
  const todayKey=toKey(new Date())
  return <div>
    <PageHeader eyebrow="PLANIFICACIÓN" title="Calendario" description="Consulta vencimientos y organiza los próximos compromisos de tu negocio."/>
    {error&&<p className="mb-4 rounded-xl bg-rose-50 p-3 text-sm text-rose-700">No pudimos cargar el calendario. Intenta de nuevo cuando la conexión esté disponible.</p>}
    <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.25fr)_minmax(320px,.75fr)]">
      <section className="rounded-2xl border border-violet-100 bg-white p-4 shadow-sm sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-violet-600">Agenda mensual</p><h3 className="mt-1 font-heading text-xl font-bold capitalize text-[#17104B]">{MONTHS[month.getMonth()]} {month.getFullYear()}</h3></div>
          <div className="flex items-center gap-2"><button onClick={()=>{setMonth(new Date());setSelectedDate(todayKey)}} className="rounded-xl border border-violet-100 px-3 py-2 text-xs font-bold text-violet-700 hover:bg-violet-50">Hoy</button><button aria-label="Mes anterior" onClick={()=>moveMonth(-1)} className="icon-button"><ChevronLeft size={18}/></button><button aria-label="Mes siguiente" onClick={()=>moveMonth(1)} className="icon-button"><ChevronRight size={18}/></button></div>
        </div>
        <div className="grid grid-cols-7 gap-1">{WEEKDAYS.map(day=><div key={day} className="py-2 text-center text-xs font-bold text-slate-400">{day}</div>)}
          {cells.map((day,index)=>{if(!day)return <div key={`blank-${index}`} className="min-h-16 rounded-xl sm:min-h-20"/>;const key=toKey(new Date(month.getFullYear(),month.getMonth(),day));const hasEvents=Boolean(eventsByDate[key]?.length);const selected=key===selectedDate;const today=key===todayKey;return <button key={key} onClick={()=>chooseDay(day)} aria-pressed={selected} className={`relative flex min-h-16 flex-col items-center rounded-xl border p-2 transition sm:min-h-20 ${selected?'border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-200':today?'border-violet-300 bg-violet-50 text-violet-800':'border-transparent text-slate-700 hover:border-violet-100 hover:bg-violet-50'}`}><span className={`text-sm font-semibold ${today&&!selected?'text-violet-800':''}`}>{day}</span>{hasEvents&&<span className={`mt-2 h-2 w-2 rounded-full ${selected?'bg-white':'bg-violet-500'}`} title={`${eventsByDate[key].length} vencimiento(s)`}/>}</button>})}
        </div>
        <div className="mt-5 flex flex-wrap gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500"><span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-violet-500"/>Día con vencimientos</span><span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full border border-violet-400 bg-violet-50"/>Hoy</span></div>
      </section>
      <section className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700"><CalendarDays size={20}/></div><div><h3 className="font-heading text-lg font-bold text-[#17104B]">Agenda del día</h3><p className="text-sm capitalize text-slate-500">{new Date(`${selectedDate}T12:00:00`).toLocaleDateString('es-CR',{weekday:'long',day:'numeric',month:'long'})}</p></div></div>
        <div className="mt-5 space-y-3">{loading?<p className="py-6 text-sm text-slate-500">Cargando agenda…</p>:selectedEvents.length?selectedEvents.map(event=><article key={event.id} className="rounded-xl border border-violet-100 p-4"><div className="flex items-start gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-700"><CircleDollarSign size={18}/></div><div className="min-w-0 flex-1"><p className="font-bold text-[#17104B]">{event.numero||'Factura'}</p><p className="mt-1 text-sm text-slate-500">{supplierName(event.proveedorId,suppliers)}</p><div className="mt-3 flex items-center justify-between gap-2"><span className="text-xs text-slate-400">Vencimiento · {formatDate(event.fechaVencimiento)}</span><span className="text-sm font-extrabold text-[#17104B]">{formatCurrency(event.total,event.moneda||'CRC')}</span></div></div></div></article>):<div className="rounded-xl border border-dashed border-violet-200 bg-violet-50/40 px-4 py-8 text-center"><CalendarDays className="mx-auto text-violet-400" size={26}/><p className="mt-3 font-bold text-[#17104B]">Día libre</p><p className="mt-1 text-sm text-slate-500">No hay vencimientos registrados para esta fecha.</p></div>}</div>
        <div className="mt-5 rounded-xl bg-violet-50 px-4 py-3"><p className="text-xs font-bold text-violet-900">{events.length} vencimientos pendientes</p><p className="mt-1 text-xs text-violet-700">Selecciona un día del calendario para consultar sus facturas.</p></div>
      </section>
    </div>
  </div>
}
