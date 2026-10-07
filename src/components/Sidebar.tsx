interface SidebarProps {
  collapsed: boolean
  active: string
  onNav: (s: string) => void
}

const navItems = [
  { id: 'dashboard', icon: '⊞', label: 'Dashboard' },
  { id: 'analytics', icon: '📊', label: 'Analíticas' },
  { id: 'orders',    icon: '📦', label: 'Órdenes' },
  { id: 'customers', icon: '👥', label: 'Clientes' },
  { id: 'products',  icon: '🛍️', label: 'Productos' },
  { id: 'reports',   icon: '📋', label: 'Reportes' },
]

const bottomItems = [
  { id: 'settings', icon: '⚙️', label: 'Ajustes' },
  { id: 'help',     icon: '❓', label: 'Ayuda' },
]

export default function Sidebar({ collapsed, active, onNav }: SidebarProps) {
  return (
    <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>
      <div className="sidebar-logo">
        <div className="logo-icon">N</div>
        {!collapsed && <span className="logo-text">NexusBI</span>}
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">{!collapsed && 'MENÚ'}</div>
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nav-item${active === item.id ? ' active' : ''}`}
            onClick={() => onNav(item.id)}
            title={collapsed ? item.label : undefined}
          >
            <span className="nav-icon">{item.icon}</span>
            {!collapsed && <span className="nav-label">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        {bottomItems.map(item => (
          <button
            key={item.id}
            className="nav-item"
            title={collapsed ? item.label : undefined}
          >
            <span className="nav-icon">{item.icon}</span>
            {!collapsed && <span className="nav-label">{item.label}</span>}
          </button>
        ))}
        {!collapsed && (
          <div className="sidebar-user">
            <div className="user-avatar">CR</div>
            <div className="user-info">
              <div className="user-name">Cristian Rua</div>
              <div className="user-role">Admin</div>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
