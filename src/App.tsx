import { useState, useEffect, useCallback } from 'react'
import Sidebar from './components/Sidebar'
import GlobalSearch from './components/GlobalSearch'
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

const LABELS: Record<string, string> = {
  dashboard: 'Dashboard', analytics: 'Analíticas', orders: 'Órdenes',
  customers: 'Clientes', products: 'Productos', reports: 'Reportes',
  settings: 'Ajustes', help: 'Ayuda',
}

function getInitialTheme(): 'dark' | 'light' {
  try { return (localStorage.getItem('nb-theme') as 'dark' | 'light') || 'dark' } catch { return 'dark' }
}

export default function App() {
  const [theme, setTheme]         = useState<'dark' | 'light'>(getInitialTheme)
  const [collapsed, setCollapsed] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [active, setActive]       = useState('dashboard')
  const [pageKey, setPageKey]     = useState(0)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try { localStorage.setItem('nb-theme', next) } catch {}
  }

  const navigate = useCallback((section: string) => {
    setActive(section)
    setPageKey(k => k + 1)
    setSidebarOpen(false)
  }, [])

  return (
    <div className="layout">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <Sidebar
        collapsed={collapsed}
        active={active}
        onNav={navigate}
        mobileOpen={sidebarOpen}
      />

      <div className="main-wrap">
        {/* Header */}
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="collapse-btn"
              onClick={() => { setCollapsed(c => !c); setSidebarOpen(o => !o) }}
              aria-label="toggle sidebar"
            >
              <span /><span /><span />
            </button>
            <div className="breadcrumb">
              <span className="bc-root">NexusBI</span>
              <span className="bc-sep">›</span>
              <span className="bc-active">{LABELS[active]}</span>
            </div>
          </div>
          <div className="topbar-right">
            <button
              className="search-box search-btn"
              onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true, bubbles: true }))}
            >
              <span>🔍</span>
              <span style={{ color: 'var(--fg-muted)', fontSize: '.875rem' }}>Buscar...</span>
              <kbd style={{ fontSize: '.7rem', padding: '.1rem .35rem', border: '1px solid var(--border)', borderRadius: 4, color: 'var(--fg-muted)', background: 'var(--surface-2)', marginLeft: '.5rem' }}>Ctrl K</kbd>
            </button>
            <button className="icon-btn" onClick={toggleTheme} title="Cambiar tema">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className="icon-btn">🔔</button>
            <div className="topbar-avatar">CR</div>
          </div>
        </header>

        {/* Page */}
        <main className="page">
          <div key={pageKey}>
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
          </div>
        </main>
      </div>

      <GlobalSearch onNavigate={navigate} />
    </div>
  )
}
