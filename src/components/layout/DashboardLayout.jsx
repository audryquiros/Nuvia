
import BrandMark from '../BrandMark.jsx'
import {
  Home,
  FileText,
  Users,
  Wallet,
  CalendarDays,
  ChartNoAxesColumn,
  Sparkles,
  CheckCheck,
  Settings,
  Search,
  Bell,
} from 'lucide-react'

const navGroups = [
  [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'facturas', label: 'Facturas', icon: FileText, badge: '24' },
    { id: 'proveedores', label: 'Proveedores', icon: Users },
    { id: 'pagos', label: 'Pagos', icon: Wallet },
  ],
  [
    { id: 'calendario', label: 'Calendario', icon: CalendarDays },
    { id: 'reportes', label: 'Reportes', icon: ChartNoAxesColumn },
  ],
  [
    { id: 'asistente', label: 'Asistente IA', icon: Sparkles },
    {
      id: 'aprobaciones',
      label: 'Aprobaciones',
      icon: CheckCheck,
      badge: '2',
    },
  ],
]

export default function DashboardLayout({
  activePage,
  onNavigate,
  search,
  onSearch,
  title,
  children,
}) {
  return (
    <div className="min-h-screen bg-[#F5F3FF] text-[#17134B]">
      {/* Barra lateral */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[224px] flex-col overflow-y-auto bg-gradient-to-b from-[#17104A] via-[#21105D] to-[#110B39] px-3 py-5 text-white lg:flex">
        <button
          onClick={() => onNavigate('inicio')}
          className="mb-8 flex items-center gap-3 px-3 text-left"
          aria-label="Ir al inicio de Nuvia Pulse"
        >
          <BrandMark size="lg" />
          <span>
            <span className="block font-heading text-xl font-bold tracking-tight">
              Nuvia
            </span>
            <span className="-mt-1 block text-xs font-medium tracking-wide text-violet-300">
              Pulse
            </span>
          </span>
        </button>

        <div className="space-y-6">
          {navGroups.map((group, index) => (
            <div key={index} className="space-y-1">
              {group.map((item) => {
                const Icon = item.icon

                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                      activePage === item.id
                        ? 'bg-gradient-to-r from-[#7C3AED] to-[#6528E8] text-white shadow-lg shadow-violet-950/30'
                        : 'text-violet-100/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.9}
                      className="shrink-0"
                    />

                    <span className="flex-1 text-left">
                      {item.label}
                    </span>

                    {item.badge && (
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] ${
                          activePage === item.id
                            ? 'bg-white/20 text-white'
                            : 'bg-violet-400/15 text-violet-200'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-violet-700 text-xs font-extrabold">
                NL
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-bold">Nuvia Lite</p>
                <p className="text-[11px] text-violet-200/70">
                  Empresa Demo
                </p>
              </div>

              <button
                onClick={() => onNavigate('configuracion')}
                className="ml-auto text-violet-200 hover:text-white"
                aria-label="Configuración"
              >
                <Settings size={16} />
              </button>
            </div>
          </div>

          <button
            onClick={() => onNavigate('configuracion')}
            className={`mt-3 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold ${
              activePage === 'configuracion'
                ? 'bg-white/10 text-white'
                : 'text-violet-100/80 hover:bg-white/10'
            }`}
          >
            <Settings size={17} />
            Configuración
          </button>

          <div className="mt-4 border-t border-white/10 pt-4 text-[10px] leading-5 text-violet-200/50">
            TU NEGOCIO, MÁS INTELIGENTE.
          </div>
        </div>
      </aside>

      {/* Área principal */}
      <div className="flex min-h-screen flex-col lg:pl-[224px]">
        <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between gap-3 border-b border-violet-100/80 bg-white/85 px-4 backdrop-blur-xl sm:px-7 lg:px-9">
          <div className="flex items-center gap-3">
            <div className="lg:hidden">
              <BrandMark size="md" />
            </div>

            <div>
              <p className="hidden text-[10px] font-extrabold uppercase tracking-[0.17em] text-violet-500 sm:block">
                NUVIA PULSE
              </p>

              <h1 className="font-heading text-lg font-bold text-[#17104B] sm:text-xl">
                {title === 'Inicio' ? 'Nuvia Pulse' : title}
              </h1>

              <p className="hidden text-xs text-slate-500 sm:block">
                {title === 'Inicio'
                  ? 'Tu negocio en movimiento'
                  : 'Tu negocio, más inteligente.'}
              </p>
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-2 sm:gap-4">
            <label className="flex min-w-0 items-center gap-2 rounded-full border border-violet-100 bg-[#F8F6FF] px-3 py-2.5 shadow-inner shadow-white sm:px-4">
              <Search
                size={17}
                className="shrink-0 text-violet-700"
              />

              <input
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Buscar facturas, proveedores, pagos..."
                aria-label="Buscar en Nuvia"
                className="w-28 min-w-0 bg-transparent text-xs outline-none placeholder:text-slate-400 sm:w-52 lg:w-72"
              />
            </label>

            <button
              onClick={() => onNavigate('aprobaciones')}
              className="relative hidden h-10 w-10 items-center justify-center rounded-full text-[#17104B] hover:bg-violet-50 sm:flex"
              aria-label="Notificaciones"
            >
              <Bell size={18} />
              <span className="absolute right-2 top-1.5 h-2 w-2 rounded-full bg-violet-500 ring-2 ring-white" />
            </button>

            <button
              onClick={() => onNavigate('configuracion')}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-violet-800 text-xs font-extrabold text-white shadow-md shadow-violet-200"
              aria-label="Abrir configuración del perfil"
            >
              NL
            </button>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1700px] flex-1 p-4 pb-20 sm:p-6 sm:pb-20 lg:p-8 lg:pb-8">
          {children}
        </main>

        <footer className="flex items-center justify-between border-t border-violet-100 bg-white/60 px-6 py-4 text-[11px] text-slate-400 sm:px-10">
          <span className="flex items-center gap-2 font-heading font-bold text-violet-800">
            <BrandMark size="sm" />
            Nuvia Pulse
          </span>

          <span>Tu negocio, más inteligente.</span>
        </footer>
      </div>

      {/* Navegación móvil */}
      <nav className="fixed inset-x-0 bottom-0 z-40 flex justify-around border-t border-violet-100 bg-white/95 px-1 py-2 backdrop-blur lg:hidden">
        {[
          ['inicio', Home],
          ['facturas', FileText],
          ['pagos', Wallet],
          ['asistente', Sparkles],
          ['configuracion', Settings],
        ].map(([id, Icon]) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`flex min-w-12 flex-col items-center gap-1 rounded-lg px-2 py-1 text-[10px] font-bold ${
              activePage === id
                ? 'text-violet-700'
                : 'text-slate-400'
            }`}
          >
            <Icon size={19} />
            {id === 'inicio'
              ? 'Inicio'
              : id === 'asistente'
                ? 'Asistente'
                : id[0].toUpperCase() + id.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  )
}
