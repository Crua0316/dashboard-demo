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
