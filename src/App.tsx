import { useState } from 'react'
import Sidebar from './components/Sidebar'
import KPICard from './components/KPICard'
import RevenueChart from './components/RevenueChart'
import OrdersChart from './components/OrdersChart'
import TrafficChart from './components/TrafficChart'
import TransactionsTable from './components/TransactionsTable'
import AnalyticsPage from './pages/AnalyticsPage'
import OrdersPage from './pages/OrdersPage'
import CustomersPage from './pages/CustomersPage'
import ProductsPage from './pages/ProductsPage'
import ReportsPage from './pages/ReportsPage'
import SettingsPage from './pages/SettingsPage'
import HelpPage from './pages/HelpPage'
import { kpis } from './data/mockData'
import './App.css'

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState('dashboard')

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <div className="layout">
      <Sidebar collapsed={collapsed} active={active} onNav={setActive} />

      <div className="main-wrap">
        {/* Header */}
        <header className="topbar">
          <div className="topbar-left">
            <button className="collapse-btn" onClick={() => setCollapsed(c => !c)} aria-label="toggle sidebar">
              <span /><span /><span />
            </button>
            <div className="breadcrumb">
              <span className="bc-root">NexusBI</span>
              <span className="bc-sep">›</span>
              <span className="bc-active" style={{ textTransform: 'capitalize' }}>
                {{ dashboard: 'Dashboard', analytics: 'Analíticas', orders: 'Órdenes', customers: 'Clientes', products: 'Productos', reports: 'Reportes', settings: 'Ajustes', help: 'Ayuda' }[active]}
              </span>
            </div>
          </div>
          <div className="topbar-right">
            <div className="search-box">
              <span>🔍</span>
              <input placeholder="Buscar..." />
            </div>
            <button className="icon-btn" onClick={toggleTheme} title="Cambiar tema">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className="icon-btn">🔔</button>
            <div className="topbar-avatar">CR</div>
          </div>
        </header>

        {/* Page content */}
        <main className="page">
          {active === 'dashboard' && (
            <div className="page-content">
              <div className="page-title-row">
                <div>
                  <h1 className="page-title">Dashboard</h1>
                  <p className="page-sub">Bienvenido de nuevo, Cristian — aquí está el resumen de hoy.</p>
                </div>
                <div className="page-actions">
                  <button className="btn-ghost-sm">📅 Oct 2026</button>
                  <button className="btn-primary-sm">+ Nuevo reporte</button>
                </div>
              </div>
              <div className="kpi-grid">
                {kpis.map(kpi => <KPICard key={kpi.label} {...kpi} />)}
              </div>
              <div className="charts-row">
                <div className="chart-wide"><RevenueChart /></div>
                <div className="chart-narrow"><TrafficChart /></div>
              </div>
              <div className="charts-row">
                <div className="chart-narrow"><OrdersChart /></div>
                <div className="chart-wide"><TransactionsTable /></div>
              </div>
            </div>
          )}
          {active === 'analytics' && <AnalyticsPage />}
          {active === 'orders'    && <OrdersPage />}
          {active === 'customers' && <CustomersPage />}
          {active === 'products'  && <ProductsPage />}
          {active === 'reports'   && <ReportsPage />}
          {active === 'settings'  && <SettingsPage />}
          {active === 'help'      && <HelpPage />}
        </main>
      </div>
    </div>
  )
}
