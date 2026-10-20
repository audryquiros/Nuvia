import BrandMark from '../components/BrandMark.jsx'

const capabilities = [
  { number: '01', title: 'Facturas bajo control', description: 'Centraliza la revisión y organización de tus facturas.' },
  { number: '02', title: 'Decisiones más claras', description: 'Consulta la información importante desde un mismo lugar.' },
  { number: '03', title: 'Seguimiento oportuno', description: 'Prepara vencimientos y recordatorios para no perder de vista las fechas.' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9ff] text-nuvia-ink">
      <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-nuvia-lavender/80 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-[28rem] h-72 w-72 rounded-full bg-purple-100/80 blur-3xl" />

      <header className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <a href="/" className="flex items-center gap-3" aria-label="Nuvia, inicio">
          <BrandMark />
          <span className="font-heading text-2xl font-semibold tracking-tight text-nuvia-deep">nuvia</span>
        </a>
        <span className="rounded-full border border-purple-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-nuvia-purple">
          Nuvia Pulse
        </span>
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-12 sm:px-10 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:pb-28">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white/80 px-4 py-2 text-sm font-semibold text-nuvia-deep shadow-sm">
            <span className="h-2 w-2 rounded-full bg-nuvia-purple" />
            Una forma más inteligente de trabajar
          </div>
          <h1 className="font-heading text-5xl font-semibold leading-[1.06] tracking-tight text-nuvia-ink sm:text-6xl lg:text-7xl">
            Tu negocio,
            <span className="mt-1 block bg-gradient-to-r from-nuvia-purple to-violet-400 bg-clip-text text-transparent">más inteligente.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Menos tareas dispersas. Más claridad para organizar tus facturas, dar seguimiento a tus pagos y enfocarte en tu negocio.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#vision" className="inline-flex items-center gap-2 rounded-xl bg-nuvia-purple px-6 py-3.5 font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-nuvia-deep">
              Conoce Nuvia <span aria-hidden="true">↗</span>
            </a>
            <span className="text-sm font-medium text-slate-500">Una herramienta pensada para tu día a día</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-5 rounded-[2.5rem] bg-gradient-to-br from-purple-200 via-violet-100 to-white blur-2xl" />
          <div className="relative rounded-[2rem] border border-white bg-white/90 p-5 shadow-[0_24px_80px_-32px_rgba(91,33,182,0.35)] backdrop-blur sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div>
                <p className="text-sm font-semibold text-slate-500">Tu espacio de trabajo</p>
                <h2 className="mt-1 font-heading text-xl font-semibold">Todo en perspectiva</h2>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-nuvia-lavender text-xl">✳</div>
            </div>
            <div className="mt-5 rounded-2xl bg-gradient-to-br from-nuvia-deep to-nuvia-purple p-5 text-white">
              <p className="text-sm font-semibold text-purple-100">Nuvia te acompaña</p>
              <p className="mt-2 font-heading text-2xl font-semibold leading-tight">Información clara.<br />Próximos pasos claros.</p>
              <div className="mt-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-200" />
                <span className="text-xs font-medium text-purple-100">Asistencia inteligente, con supervisión humana</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-nuvia-purple">▤</div>
                <p className="text-sm font-semibold">Facturas</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">Revisión organizada</p>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700">◷</div>
                <p className="text-sm font-semibold">Seguimiento</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">Fechas y recordatorios</p>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">Vista conceptual · Los datos reales se conectarán más adelante</p>
          </div>
          <div className="absolute -right-3 top-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white text-xl shadow-lg sm:-right-5">✦</div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-lg sm:-left-5">
            <p className="text-xs font-semibold text-slate-500">Tu negocio, a tu ritmo</p>
            <p className="mt-1 text-sm font-bold text-nuvia-deep">Claro · Cercano · Inteligente</p>
          </div>
        </div>
      </section>

      <section id="vision" className="relative border-t border-purple-100/80 bg-white/70 px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-nuvia-purple">La idea de Nuvia</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Menos complejidad. Más control.</h2>
            <p className="mt-4 leading-7 text-slate-600">Un punto de partida para una gestión más ordenada, con automatización donde aporta valor y decisiones importantes bajo tu control.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {capabilities.map((item) => (
              <article key={item.number} className="rounded-2xl border border-purple-100/80 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/60">
                <span className="font-heading text-sm font-bold tracking-widest text-nuvia-lilac">{item.number}</span>
                <h3 className="mt-5 font-heading text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative flex flex-col items-center justify-between gap-3 px-6 py-7 text-sm text-slate-500 sm:flex-row sm:px-10 lg:px-14">
        <span className="font-heading font-semibold text-nuvia-deep">nuvia</span>
        <span>Tu negocio, más inteligente.</span>
      </footer>
    </main>
  )
}
