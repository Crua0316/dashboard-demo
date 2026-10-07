export const revenueData = [
  { month: 'Ene', revenue: 42000, target: 40000 },
  { month: 'Feb', revenue: 47500, target: 43000 },
  { month: 'Mar', revenue: 51200, target: 46000 },
  { month: 'Abr', revenue: 49800, target: 48000 },
  { month: 'May', revenue: 58300, target: 51000 },
  { month: 'Jun', revenue: 63100, target: 54000 },
  { month: 'Jul', revenue: 61400, target: 57000 },
  { month: 'Ago', revenue: 72800, target: 60000 },
  { month: 'Sep', revenue: 69500, target: 63000 },
  { month: 'Oct', revenue: 81200, target: 67000 },
  { month: 'Nov', revenue: 88700, target: 71000 },
  { month: 'Dic', revenue: 95400, target: 75000 },
]

export const ordersData = [
  { month: 'Ene', orders: 312 },
  { month: 'Feb', orders: 358 },
  { month: 'Mar', orders: 401 },
  { month: 'Abr', orders: 387 },
  { month: 'May', orders: 445 },
  { month: 'Jun', orders: 498 },
  { month: 'Jul', orders: 471 },
  { month: 'Ago', orders: 562 },
  { month: 'Sep', orders: 534 },
  { month: 'Oct', orders: 618 },
  { month: 'Nov', orders: 672 },
  { month: 'Dic', orders: 741 },
]

export const trafficData = [
  { name: 'Orgánico',  value: 38, color: '#6366F1' },
  { name: 'Social',    value: 27, color: '#22D3EE' },
  { name: 'Email',     value: 18, color: '#A78BFA' },
  { name: 'Directo',   value: 11, color: '#10B981' },
  { name: 'Referidos', value: 6,  color: '#F59E0B' },
]

export const transactions = [
  { id: '#TXN-8821', customer: 'Alejandro Gómez',  product: 'Plan Pro Anual',      amount: 1188, status: 'Completado', date: '07 Oct 2026' },
  { id: '#TXN-8820', customer: 'María Rodríguez',  product: 'Plan Starter',        amount: 299,  status: 'Completado', date: '07 Oct 2026' },
  { id: '#TXN-8819', customer: 'Carlos Méndez',    product: 'Add-on Analytics',    amount: 149,  status: 'Pendiente',  date: '06 Oct 2026' },
  { id: '#TXN-8818', customer: 'Laura Castillo',   product: 'Plan Pro Mensual',    amount: 99,   status: 'Completado', date: '06 Oct 2026' },
  { id: '#TXN-8817', customer: 'Felipe Herrera',   product: 'Plan Enterprise',     amount: 3499, status: 'Completado', date: '05 Oct 2026' },
  { id: '#TXN-8816', customer: 'Valentina Pérez',  product: 'Plan Starter',        amount: 299,  status: 'Fallido',    date: '05 Oct 2026' },
  { id: '#TXN-8815', customer: 'Diego Morales',    product: 'Add-on Integraciones', amount: 249, status: 'Completado', date: '04 Oct 2026' },
]

export const allOrders = [
  { id: '#ORD-8821', customer: 'Alejandro Gómez',   product: 'Plan Pro Anual',       amount: 1188, status: 'Completado', date: '07 Oct 2026', method: 'Tarjeta' },
  { id: '#ORD-8820', customer: 'María Rodríguez',   product: 'Plan Starter',          amount: 299,  status: 'Completado', date: '07 Oct 2026', method: 'PayPal'  },
  { id: '#ORD-8819', customer: 'Carlos Méndez',     product: 'Add-on Analytics',      amount: 149,  status: 'Pendiente',  date: '06 Oct 2026', method: 'Tarjeta' },
  { id: '#ORD-8818', customer: 'Laura Castillo',    product: 'Plan Pro Mensual',      amount: 99,   status: 'Completado', date: '06 Oct 2026', method: 'Tarjeta' },
  { id: '#ORD-8817', customer: 'Felipe Herrera',    product: 'Plan Enterprise',       amount: 3499, status: 'Completado', date: '05 Oct 2026', method: 'Transfer.' },
  { id: '#ORD-8816', customer: 'Valentina Pérez',   product: 'Plan Starter',          amount: 299,  status: 'Fallido',    date: '05 Oct 2026', method: 'Tarjeta' },
  { id: '#ORD-8815', customer: 'Diego Morales',     product: 'Add-on Integraciones',  amount: 249,  status: 'Completado', date: '04 Oct 2026', method: 'PayPal'  },
  { id: '#ORD-8814', customer: 'Sofía Vargas',      product: 'Plan Pro Anual',        amount: 1188, status: 'Completado', date: '04 Oct 2026', method: 'Tarjeta' },
  { id: '#ORD-8813', customer: 'Andrés Jiménez',    product: 'Plan Starter',          amount: 299,  status: 'Reembolso',  date: '03 Oct 2026', method: 'PayPal'  },
  { id: '#ORD-8812', customer: 'Camila Torres',     product: 'Plan Enterprise',       amount: 3499, status: 'Completado', date: '03 Oct 2026', method: 'Transfer.' },
  { id: '#ORD-8811', customer: 'Juan Ramírez',      product: 'Add-on Analytics',      amount: 149,  status: 'Completado', date: '02 Oct 2026', method: 'Tarjeta' },
  { id: '#ORD-8810', customer: 'Daniela Ospina',    product: 'Plan Pro Mensual',      amount: 99,   status: 'Pendiente',  date: '02 Oct 2026', method: 'Tarjeta' },
]

export const customers = [
  { id: 'C-001', name: 'Alejandro Gómez',  email: 'agomez@email.com',    plan: 'Enterprise', spent: 8490,  orders: 7,  joined: 'Ene 2025', status: 'Activo'   },
  { id: 'C-002', name: 'María Rodríguez',  email: 'mrodriguez@email.com', plan: 'Pro',        spent: 2376,  orders: 8,  joined: 'Mar 2025', status: 'Activo'   },
  { id: 'C-003', name: 'Carlos Méndez',    email: 'cmendez@email.com',    plan: 'Starter',    spent: 896,   orders: 12, joined: 'Jun 2025', status: 'Activo'   },
  { id: 'C-004', name: 'Laura Castillo',   email: 'lcastillo@email.com',  plan: 'Pro',        spent: 1188,  orders: 4,  joined: 'Feb 2025', status: 'Inactivo' },
  { id: 'C-005', name: 'Felipe Herrera',   email: 'fherrera@email.com',   plan: 'Enterprise', spent: 13996, orders: 4,  joined: 'Dic 2024', status: 'Activo'   },
  { id: 'C-006', name: 'Valentina Pérez',  email: 'vperez@email.com',     plan: 'Starter',    spent: 299,   orders: 1,  joined: 'Sep 2026', status: 'Activo'   },
  { id: 'C-007', name: 'Diego Morales',    email: 'dmorales@email.com',   plan: 'Pro',        spent: 3564,  orders: 9,  joined: 'May 2025', status: 'Activo'   },
  { id: 'C-008', name: 'Sofía Vargas',     email: 'svargas@email.com',    plan: 'Enterprise', spent: 6996,  orders: 2,  joined: 'Abr 2025', status: 'Activo'   },
  { id: 'C-009', name: 'Andrés Jiménez',   email: 'ajimenez@email.com',   plan: 'Starter',    spent: 0,     orders: 2,  joined: 'Oct 2026', status: 'Inactivo' },
  { id: 'C-010', name: 'Camila Torres',    email: 'ctorres@email.com',    plan: 'Enterprise', spent: 10497, orders: 3,  joined: 'Jul 2025', status: 'Activo'   },
]

export const products = [
  { id: 'P-01', name: 'Plan Starter',        price: 299,  period: 'año',   users: '1-5',    sales: 184, revenue: 54916, status: 'Activo' },
  { id: 'P-02', name: 'Plan Pro Mensual',    price: 99,   period: 'mes',   users: '1-15',   sales: 312, revenue: 30888, status: 'Activo' },
  { id: 'P-03', name: 'Plan Pro Anual',      price: 1188, period: 'año',   users: '1-15',   sales: 97,  revenue: 115236, status: 'Activo' },
  { id: 'P-04', name: 'Plan Enterprise',     price: 3499, period: 'mes',   users: 'Ilimit.',sales: 42,  revenue: 146958, status: 'Activo' },
  { id: 'P-05', name: 'Add-on Analytics',    price: 149,  period: 'mes',   users: 'por plan',sales: 78, revenue: 11622,  status: 'Activo' },
  { id: 'P-06', name: 'Add-on Integraciones',price: 249,  period: 'mes',   users: 'por plan',sales: 56, revenue: 13944,  status: 'Activo' },
  { id: 'P-07', name: 'Consultoría 1:1',     price: 199,  period: 'sesión',users: '—',      sales: 23,  revenue: 4577,   status: 'Pausado' },
]

export const reports = [
  { id: 'R-01', name: 'Reporte de Ingresos — Oct 2026',    type: 'Financiero',   size: '2.4 MB', date: '01 Oct 2026', icon: '💰' },
  { id: 'R-02', name: 'Análisis de Clientes Q3 2026',      type: 'Clientes',     size: '1.8 MB', date: '30 Sep 2026', icon: '👥' },
  { id: 'R-03', name: 'Reporte de Órdenes — Sep 2026',     type: 'Ventas',       size: '3.1 MB', date: '30 Sep 2026', icon: '📦' },
  { id: 'R-04', name: 'Métricas de Conversión Q3 2026',    type: 'Marketing',    size: '900 KB', date: '28 Sep 2026', icon: '📈' },
  { id: 'R-05', name: 'Reporte de Tráfico — Sep 2026',     type: 'Marketing',    size: '1.2 MB', date: '27 Sep 2026', icon: '🌐' },
  { id: 'R-06', name: 'Estado Financiero — Ago 2026',      type: 'Financiero',   size: '2.1 MB', date: '01 Sep 2026', icon: '📋' },
]

export const kpis = [
  {
    label: 'Ingresos totales',
    value: '$95,400',
    change: '+12.4%',
    positive: true,
    sub: 'vs mes anterior',
    icon: '💰',
    color: '#6366F1',
  },
  {
    label: 'Usuarios activos',
    value: '14,830',
    change: '+8.1%',
    positive: true,
    sub: 'últimos 30 días',
    icon: '👥',
    color: '#22D3EE',
  },
  {
    label: 'Órdenes',
    value: '741',
    change: '+10.2%',
    positive: true,
    sub: 'este mes',
    icon: '📦',
    color: '#A78BFA',
  },
  {
    label: 'Conversión',
    value: '4.98%',
    change: '-0.3%',
    positive: false,
    sub: 'tasa de conversión',
    icon: '📈',
    color: '#10B981',
  },
]
