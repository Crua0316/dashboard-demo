interface PaginationProps {
  page: number
  totalPages: number
  total: number
  pageSize: number
  onGoTo: (p: number) => void
}

export default function Pagination({ page, totalPages, total, pageSize, onGoTo }: PaginationProps) {
  if (totalPages <= 1) return null

  const from = (page - 1) * pageSize + 1
  const to   = Math.min(page * pageSize, total)

  const pages: (number | '…')[] = []
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    pages.push(1)
    if (page > 3) pages.push('…')
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) pages.push(i)
    if (page < totalPages - 2) pages.push('…')
    pages.push(totalPages)
  }

  const btn = (label: string | number, target: number, active = false, disabled = false) => (
    <button
      key={`${label}-${target}`}
      onClick={() => !disabled && onGoTo(target)}
      disabled={disabled}
      style={{
        padding: '.2rem .6rem', borderRadius: 6, fontSize: '.78rem', fontWeight: active ? 700 : 500,
        border: '1px solid', cursor: disabled ? 'default' : 'pointer', transition: 'all .15s',
        borderColor: active ? 'var(--accent)' : 'var(--border)',
        background: active ? 'rgba(99,102,241,.14)' : 'transparent',
        color: active ? 'var(--accent)' : disabled ? 'var(--fg-muted)' : 'var(--fg-soft)',
        opacity: disabled ? .5 : 1,
      }}
    >{label}</button>
  )

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.75rem 0 0', fontSize: '.78rem', color: 'var(--fg-muted)' }}>
      <span>{from}–{to} de {total}</span>
      <div style={{ display: 'flex', gap: '.3rem', alignItems: 'center' }}>
        {btn('‹', page - 1, false, page === 1)}
        {pages.map((p, i) =>
          p === '…'
            ? <span key={`dots-${i}`} style={{ padding: '0 .3rem', color: 'var(--fg-muted)' }}>…</span>
            : btn(p, p as number, p === page)
        )}
        {btn('›', page + 1, false, page === totalPages)}
      </div>
    </div>
  )
}
