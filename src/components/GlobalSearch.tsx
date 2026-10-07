import { useEffect, useRef, useState } from 'react'
import { allOrders, customers, products } from '../data/mockData'

interface Props {
  onNavigate: (section: string) => void
}

type Result = { type: string; label: string; sub: string; section: string; icon: string }

function search(q: string): Result[] {
  if (!q.trim()) return []
  const lq = q.toLowerCase()
  const results: Result[] = []

  allOrders.filter(o =>
    o.id.toLowerCase().includes(lq) ||
    o.customer.toLowerCase().includes(lq) ||
    o.product.toLowerCase().includes(lq)
  ).slice(0, 3).forEach(o =>
    results.push({ type: 'Orden', label: `${o.id} · ${o.customer}`, sub: `${o.product} · $${o.amount.toLocaleString()}`, section: 'orders', icon: '📦' })
  )

  customers.filter(c =>
    c.name.toLowerCase().includes(lq) ||
    c.email.toLowerCase().includes(lq)
  ).slice(0, 3).forEach(c =>
    results.push({ type: 'Cliente', label: c.name, sub: `${c.plan} · ${c.email}`, section: 'customers', icon: '👥' })
  )

  products.filter(p =>
    p.name.toLowerCase().includes(lq)
  ).slice(0, 2).forEach(p =>
    results.push({ type: 'Producto', label: p.name, sub: `$${p.price}/${p.period} · ${p.sales} ventas`, section: 'products', icon: '🛍️' })
  )

  return results
}

export default function GlobalSearch({ onNavigate }: Props) {
  const [open, setOpen]       = useState(false)
  const [query, setQuery]     = useState('')
  const [active, setActive]   = useState(0)
  const inputRef              = useRef<HTMLInputElement>(null)
  const results               = search(query)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(o => !o)
        setQuery('')
        setActive(0)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, results.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(a => Math.max(a - 1, 0)) }
    if (e.key === 'Enter' && results[active]) { pick(results[active]) }
  }

  const pick = (r: Result) => {
    onNavigate(r.section)
    setOpen(false)
    setQuery('')
  }

  if (!open) return null

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '15vh', background: 'rgba(0,0,0,.55)', backdropFilter: 'blur(4px)' }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{ width: '100%', maxWidth: 560, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,.5)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', padding: '1rem 1.25rem', borderBottom: results.length ? '1px solid var(--border)' : 'none' }}>
          <span style={{ fontSize: '1.1rem', opacity: .5 }}>🔍</span>
          <input
            ref={inputRef}
            value={query}
            onChange={e => { setQuery(e.target.value); setActive(0) }}
            onKeyDown={handleKey}
            placeholder="Buscar órdenes, clientes, productos..."
            style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: 'var(--fg)', fontSize: '1rem' }}
          />
          <kbd style={{ fontSize: '.7rem', padding: '.15rem .4rem', border: '1px solid var(--border)', borderRadius: 4, color: 'var(--fg-muted)', background: 'var(--surface-2)' }}>Esc</kbd>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div style={{ maxHeight: 360, overflowY: 'auto' }}>
            {results.map((r, i) => (
              <button
                key={i}
                onClick={() => pick(r)}
                onMouseEnter={() => setActive(i)}
                style={{
                  width: '100%', textAlign: 'left', padding: '.75rem 1.25rem',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  background: active === i ? 'rgba(99,102,241,.1)' : 'transparent',
                  borderLeft: active === i ? '2px solid var(--accent)' : '2px solid transparent',
                  transition: 'all .1s', cursor: 'pointer', border: 'none', color: 'var(--fg)',
                }}
              >
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{r.icon}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: '.875rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.label}</div>
                  <div style={{ fontSize: '.75rem', color: 'var(--fg-muted)', marginTop: '.1rem' }}>{r.sub}</div>
                </div>
                <span style={{ fontSize: '.7rem', fontWeight: 700, color: 'var(--accent)', background: 'rgba(99,102,241,.1)', padding: '.15rem .5rem', borderRadius: 20, flexShrink: 0 }}>{r.type}</span>
              </button>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--fg-muted)', fontSize: '.875rem' }}>
            Sin resultados para <strong style={{ color: 'var(--fg)' }}>"{query}"</strong>
          </div>
        )}

        {/* Footer */}
        <div style={{ padding: '.6rem 1.25rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '1.25rem', fontSize: '.72rem', color: 'var(--fg-muted)' }}>
          {[['↑↓', 'navegar'], ['↵', 'abrir'], ['Esc', 'cerrar']].map(([k, l]) => (
            <span key={k}><kbd style={{ padding: '.1rem .35rem', border: '1px solid var(--border)', borderRadius: 4, background: 'var(--surface-2)', marginRight: '.35rem' }}>{k}</kbd>{l}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
