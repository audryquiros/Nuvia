import { useState } from 'react'
import DashboardLayout from './components/layout/DashboardLayout.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import InvoicesPage from './pages/InvoicesPage.jsx'
import SuppliersPage from './pages/SuppliersPage.jsx'
import PaymentsPage from './pages/PaymentsPage.jsx'
import CalendarPage from './pages/CalendarPage.jsx'
import ReportsPage from './pages/ReportsPage.jsx'
import AssistantPage from './pages/AssistantPage.jsx'
import ApprovalsPage from './pages/ApprovalsPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'

const pageTitles = {
  inicio: 'Inicio',
  facturas: 'Facturas',
  proveedores: 'Proveedores',
  pagos: 'Pagos',
  calendario: 'Calendario',
  reportes: 'Reportes',
  asistente: 'Asistente IA',
  aprobaciones: 'Aprobaciones',
  configuracion: 'Configuración',
}

export default function App() {
  const [activePage, setActivePage] = useState('inicio')
  const [search, setSearch] = useState('')

  const pageProps = { search, onNavigate: setActivePage }
  const renderPage = () => {
    switch (activePage) {
      case 'facturas': return <InvoicesPage {...pageProps} />
      case 'proveedores': return <SuppliersPage {...pageProps} />
      case 'pagos': return <PaymentsPage {...pageProps} />
      case 'calendario': return <CalendarPage {...pageProps} />
      case 'reportes': return <ReportsPage {...pageProps} />
      case 'asistente': return <AssistantPage {...pageProps} />
      case 'aprobaciones': return <ApprovalsPage {...pageProps} />
      case 'configuracion': return <SettingsPage {...pageProps} />
      default: return <DashboardPage {...pageProps} />
    }
  }

  return (
    <DashboardLayout activePage={activePage} onNavigate={setActivePage} search={search} onSearch={setSearch} title={pageTitles[activePage]}>
      {renderPage()}
    </DashboardLayout>
  )
}
