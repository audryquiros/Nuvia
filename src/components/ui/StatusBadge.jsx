const styles = {
  pendiente_revision: 'bg-amber-50 text-amber-700 ring-amber-200',
  pendiente_aprobacion: 'bg-violet-50 text-violet-700 ring-violet-200',
  aprobada: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  pagada: 'bg-blue-50 text-blue-700 ring-blue-200',
  vencida: 'bg-rose-50 text-rose-700 ring-rose-200',
  programado: 'bg-violet-50 text-violet-700 ring-violet-200',
  completado: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  pendiente: 'bg-amber-50 text-amber-700 ring-amber-200',
}
const labels = { pendiente_revision: 'Por revisar', pendiente_aprobacion: 'Por aprobar', aprobada: 'Aprobada', pagada: 'Pagada', vencida: 'Vencida', programado: 'Programado', completado: 'Completado', pendiente: 'Pendiente' }
export default function StatusBadge({ status }) {
  return <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${styles[status] || 'bg-slate-50 text-slate-600 ring-slate-200'}`}>{labels[status] || status || 'Sin estado'}</span>
}
