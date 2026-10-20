import BrandMark from '../BrandMark.jsx'

const navGroups = [
  [{ id: 'inicio', label: 'Inicio', icon: '⌂' }, { id: 'facturas', label: 'Facturas', icon: '▤', badge: '24' }, { id: 'proveedores', label: 'Proveedores', icon: '♧' }, { id: 'pagos', label: 'Pagos', icon: '◈' }],
  [{ id: 'calendario', label: 'Calendario', icon: '▦' }, { id: 'reportes', label: 'Reportes', icon: '▥' }],
  [{ id: 'asistente', label: 'Asistente IA', icon: '✳' }, { id: 'aprobaciones', label: 'Aprobaciones', icon: '✓', badge: '2' }],
]

export default function DashboardLayout({ activePage, onNavigate, search, onSearch, title, children }) {
  return (
    <div className="min-h-screen bg-[#F7F6FC] text-[#1F2937]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[248px] flex-col border-r border-violet-100 bg-white px-4 py-6 lg:flex">
        <button onClick={() => onNavigate('inicio')} className="mb-9 flex items-center gap-3 px-3 text-left">
          <BrandMark /><span className="font-heading text-2xl font-bold tracking-tight text-[#17104B]">Nuvia</span>
        </button>
        <div className="space-y-6">
          {navGroups.map((group, index) => (
            <div key={index} className="space-y-1">
              {group.map((item) => (
                <button key={item.id} onClick={() => onNavigate(item.id)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition ${activePage === item.id ? 'bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white shadow-md shadow-violet-200' : 'text-slate-600 hover:bg-violet-50 hover:text-violet-800'}`}>
                  <span className="flex h-5 w-5 items-center justify-center text-lg">{item.icon}</span>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && <span className={`rounded-full px-2 py-0.5 text-[10px] ${activePage === item.id ? 'bg-white/20 text-white' : 'bg-violet-50 text-violet-700'}`}>{item.badge}</span>}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <div className="rounded-2xl bg-gradient-to-br from-[#201052] to-[#6D28D9] p-4 text-white">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">✦</div>
            <p className="font-heading text-sm font-bold">Tu negocio, más inteligente.</p>
            <p className="mt-1 text-xs leading-5 text-violet-100">Todo conectado en un solo lugar.</p>
          </div>
          <button onClick={() => onNavigate('configuracion')} className={`mt-4 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${activePage === 'configuracion' ? 'bg-violet-50 text-violet-800' : 'text-slate-500 hover:bg-slate-50'}`}><span>⚙</span> Configuración</button>
          <div className="mt-3 flex items-center gap-3 border-t border-slate-100 px-2 pt-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-800">NL</div>
            <div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">Nuvia Local</p><p className="text-xs text-slate-500">Espacio de trabajo</p></div>
            <span className="text-slate-400">⌄</span>
          </div>
        </div>
      </aside>

      <div className="lg:pl-[248px]">
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-violet-100/80 bg-white/90 px-5 backdrop-blur-md sm:px-8 lg:px-10">
          <div><p className="text-xs font-semibold text-slate-400">Nuvia / {title}</p><h1 className="font-heading text-xl font-bold text-[#17104B]">{title}</h1></div>
          <div className="flex items-center gap-3">
            <label className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex"><span className="text-slate-400">⌕</span><input value={search} onChange={(e) => onSearch(e.target.value)} placeholder="Buscar..." className="w-40 bg-transparent text-sm outline-none placeholder:text-slate-400 lg:w-56" /></label>
            <button onClick={() => onNavigate('aprobaciones')} className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-violet-50" aria-label="Notificaciones">♧<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-fuchsia-500 ring-2 ring-white" /></button>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#21134F] text-xs font-bold text-white">NL</div>
          </div>
        </header>
        <main className="mx-auto max-w-[1600px] p-5 sm:p-8 lg:p-10">{children}</main>
        <footer className="flex items-center justify-between border-t border-violet-100 bg-white/70 px-6 py-4 text-xs text-slate-400 sm:px-10"><span className="font-heading font-bold text-violet-800">Nuvia</span><span>Tu negocio, más inteligente.</span></footer>
      </div>
      <nav className="fixed inset-x-0 bottom-0 z-40 flex justify-around border-t border-violet-100 bg-white/95 px-2 py-2 backdrop-blur lg:hidden">
        {[['inicio','⌂'],['facturas','▤'],['pagos','◈'],['asistente','✳'],['configuracion','⚙']].map(([id, icon]) => <button key={id} onClick={() => onNavigate(id)} className={`flex min-w-12 flex-col items-center gap-1 rounded-lg px-2 py-1 text-[10px] font-bold ${activePage === id ? 'text-violet-700' : 'text-slate-400'}`}><span className="text-lg">{icon}</span>{id[0].toUpperCase()+id.slice(1)}</button>)}
      </nav>
    </div>
  )
}
