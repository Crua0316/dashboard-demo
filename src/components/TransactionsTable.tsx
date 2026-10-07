import { transactions } from '../data/mockData'

const statusStyle: Record<string, React.CSSProperties> = {
  'Completado': { background: 'rgba(16,185,129,.12)', color: '#10B981' },
  'Pendiente':  { background: 'rgba(245,158,11,.12)',  color: '#F59E0B' },
  'Fallido':    { background: 'rgba(239,68,68,.12)',   color: '#EF4444' },
}

export default function TransactionsTable() {
  return (
    <div className="chart-card table-card">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Transacciones Recientes</h3>
          <p className="chart-sub">{transactions.length} operaciones</p>
        </div>
        <button className="btn-outline">Ver todas</button>
      </div>
      <div className="table-wrap">
        <table className="tx-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Monto</th>
              <th>Estado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(tx => (
              <tr key={tx.id}>
                <td className="tx-id">{tx.id}</td>
                <td className="tx-customer">
                  <div className="tx-avatar">{tx.customer.charAt(0)}</div>
                  {tx.customer}
                </td>
                <td className="tx-product">{tx.product}</td>
                <td className="tx-amount">${tx.amount.toLocaleString()}</td>
                <td>
                  <span className="tx-status" style={statusStyle[tx.status]}>
                    {tx.status}
                  </span>
                </td>
                <td className="tx-date">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
