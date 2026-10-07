import { useState } from 'react'

export default function SettingsPage() {
  const [notifEmail, setNotifEmail]   = useState(true)
  const [notifPush, setNotifPush]     = useState(false)
  const [notifOrders, setNotifOrders] = useState(true)
  const [lang, setLang]               = useState('es')
  const [currency, setCurrency]       = useState('USD')
  const [saved, setSaved]             = useState(false)

  const save = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <h1 className="page-title">Ajustes</h1>
          <p className="page-sub">Configura tu cuenta y preferencias</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'start' }}>

        {/* Profile */}
        <div className="chart-card">
          <h3 className="chart-title" style={{ marginBottom: '1.25rem' }}>Perfil</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg,#6366F1,#A78BFA)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>CR</div>
            <div>
              <div style={{ fontWeight: 700 }}>Cristian Rua Giraldo</div>
              <div style={{ fontSize: '.8rem', color: 'var(--fg-muted)' }}>Administrador · Plan Enterprise</div>
              <button className="btn-outline" style={{ marginTop: '.4rem', fontSize: '.72rem', padding: '.2rem .65rem' }}>Cambiar foto</button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
            {[
              { label: 'Nombre completo', value: 'Cristian Rua Giraldo' },
              { label: 'Correo electrónico', value: 'cristian@nexusbi.com' },
              { label: 'Cargo', value: 'Full Stack Developer' },
              { label: 'Empresa', value: 'NexusBI Solutions' },
            ].map(f => (
              <div key={f.label}>
                <label style={{ fontSize: '.75rem', fontWeight: 600, color: 'var(--fg-muted)', display: 'block', marginBottom: '.3rem' }}>{f.label}</label>
                <input defaultValue={f.value} style={{
                  width: '100%', padding: '.5rem .75rem', borderRadius: 8,
                  background: 'var(--surface-2)', border: '1px solid var(--border)',
                  color: 'var(--fg)', fontSize: '.875rem', outline: 'none',
                }} onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                   onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'} />
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* Notifications */}
          <div className="chart-card">
            <h3 className="chart-title" style={{ marginBottom: '1.25rem' }}>Notificaciones</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
              {[
                { label: 'Notificaciones por email', sub: 'Recibe resúmenes diarios', val: notifEmail, set: setNotifEmail },
                { label: 'Notificaciones push', sub: 'Alertas en tiempo real', val: notifPush, set: setNotifPush },
                { label: 'Alertas de órdenes', sub: 'Nueva venta o fallo de pago', val: notifOrders, set: setNotifOrders },
              ].map(n => (
                <div key={n.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '.875rem' }}>{n.label}</div>
                    <div style={{ fontSize: '.75rem', color: 'var(--fg-muted)' }}>{n.sub}</div>
                  </div>
                  <button
                    onClick={() => n.set(!n.val)}
                    style={{
                      width: 44, height: 24, borderRadius: 12,
                      background: n.val ? 'var(--accent)' : 'var(--surface-2)',
                      border: '1px solid', borderColor: n.val ? 'var(--accent)' : 'var(--border)',
                      position: 'relative', transition: 'all .2s', cursor: 'pointer', flexShrink: 0,
                    }}>
                    <span style={{
                      position: 'absolute', top: 2, left: n.val ? 20 : 2,
                      width: 18, height: 18, borderRadius: '50%', background: '#fff',
                      transition: 'left .2s', display: 'block',
                    }} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="chart-card">
            <h3 className="chart-title" style={{ marginBottom: '1.25rem' }}>Preferencias</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
              {[
                { label: 'Idioma', val: lang, set: setLang, opts: [{ v: 'es', l: 'Español' }, { v: 'en', l: 'English' }] },
                { label: 'Moneda', val: currency, set: setCurrency, opts: [{ v: 'USD', l: 'USD ($)' }, { v: 'EUR', l: 'EUR (€)' }, { v: 'COP', l: 'COP ($)' }] },
              ].map(s => (
                <div key={s.label}>
                  <label style={{ fontSize: '.75rem', fontWeight: 600, color: 'var(--fg-muted)', display: 'block', marginBottom: '.3rem' }}>{s.label}</label>
                  <select value={s.val} onChange={e => s.set(e.target.value)} style={{
                    width: '100%', padding: '.5rem .75rem', borderRadius: 8,
                    background: 'var(--surface-2)', border: '1px solid var(--border)',
                    color: 'var(--fg)', fontSize: '.875rem', outline: 'none', cursor: 'pointer',
                  }}>
                    {s.opts.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Save */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '.75rem' }}>
        <button className="btn-ghost-sm">Cancelar</button>
        <button className="btn-primary-sm" onClick={save} style={{ padding: '.5rem 1.5rem', fontSize: '.875rem' }}>
          {saved ? '✓ Guardado' : 'Guardar cambios'}
        </button>
      </div>
    </div>
  )
}
