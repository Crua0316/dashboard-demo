import { useState } from 'react'

const faqs = [
  { q: '¿Cómo puedo exportar mis reportes?', a: 'Ve a la sección de Reportes y haz clic en "↓ Descargar" junto a cualquier reporte. También puedes generar nuevos reportes con el botón "Generar reporte".' },
  { q: '¿Cómo agrego un nuevo usuario al equipo?', a: 'Desde Ajustes > Equipo puedes invitar nuevos miembros ingresando su correo. Recibirán una invitación con instrucciones de acceso.' },
  { q: '¿Puedo cambiar mi plan en cualquier momento?', a: 'Sí. Desde Ajustes > Facturación puedes actualizar tu plan. El cambio aplica inmediatamente y se prorratea para el período actual.' },
  { q: '¿Cómo funciona el cálculo de conversión?', a: 'La tasa de conversión se calcula dividiendo el número de órdenes completadas entre el total de sesiones únicas del período seleccionado.' },
  { q: '¿Los datos se actualizan en tiempo real?', a: 'Las métricas del dashboard se actualizan cada 5 minutos. Puedes forzar una actualización con el botón de refresh en la esquina superior derecha.' },
  { q: '¿Cómo contacto al soporte técnico?', a: 'Puedes abrir un ticket desde este panel o escribirnos a soporte@nexusbi.com. El tiempo de respuesta promedio es de 2 horas en días hábiles.' },
]

export default function HelpPage() {
  const [open, setOpen] = useState<number | null>(null)
  const [ticket, setTicket] = useState({ subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const send = () => {
    if (!ticket.subject || !ticket.message) return
    setSent(true)
    setTicket({ subject: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="page-content">
      <div className="page-title-row">
        <div>
          <h1 className="page-title">Ayuda & Soporte</h1>
          <p className="page-sub">Documentación, FAQs y contacto directo</p>
        </div>
      </div>

      {/* Quick links */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
        {[
          { icon: '📚', label: 'Documentación', desc: 'Guías detalladas de uso', color: '#6366F1' },
          { icon: '🎥', label: 'Video tutoriales', desc: 'Aprende en minutos', color: '#22D3EE' },
          { icon: '💬', label: 'Chat en vivo', desc: 'Soporte inmediato', color: '#10B981' },
        ].map(l => (
          <button key={l.label} className="chart-card" style={{ textAlign: 'left', cursor: 'pointer', transition: 'border-color .15s', border: '1px solid var(--border)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = l.color}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
            <div style={{ fontSize: '1.5rem', marginBottom: '.6rem' }}>{l.icon}</div>
            <div style={{ fontWeight: 700 }}>{l.label}</div>
            <div style={{ fontSize: '.78rem', color: 'var(--fg-muted)', marginTop: '.2rem' }}>{l.desc}</div>
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'start' }}>
        {/* FAQ */}
        <div className="chart-card">
          <h3 className="chart-title" style={{ marginBottom: '1rem' }}>Preguntas frecuentes</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--border)', background: open === i ? 'var(--surface-2)' : 'transparent' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', textAlign: 'left', padding: '.75rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '.5rem', cursor: 'pointer', background: 'none', border: 'none', color: 'var(--fg)' }}>
                  <span style={{ fontWeight: 600, fontSize: '.875rem' }}>{faq.q}</span>
                  <span style={{ color: 'var(--accent)', flexShrink: 0, transition: 'transform .2s', transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                {open === i && (
                  <div style={{ padding: '0 1rem 1rem', fontSize: '.82rem', color: 'var(--fg-soft)', lineHeight: 1.6 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="chart-card">
          <h3 className="chart-title" style={{ marginBottom: '1rem' }}>Abrir ticket de soporte</h3>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#10B981' }}>
              <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>✓</div>
              <div style={{ fontWeight: 700 }}>Ticket enviado</div>
              <div style={{ fontSize: '.82rem', color: 'var(--fg-muted)', marginTop: '.3rem' }}>Te responderemos en menos de 2 horas.</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
              <div>
                <label style={{ fontSize: '.75rem', fontWeight: 600, color: 'var(--fg-muted)', display: 'block', marginBottom: '.3rem' }}>Asunto</label>
                <input
                  placeholder="¿En qué podemos ayudarte?"
                  value={ticket.subject}
                  onChange={e => setTicket(t => ({ ...t, subject: e.target.value }))}
                  style={{ width: '100%', padding: '.5rem .75rem', borderRadius: 8, background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--fg)', fontSize: '.875rem', outline: 'none' }}
                  onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'} />
              </div>
              <div>
                <label style={{ fontSize: '.75rem', fontWeight: 600, color: 'var(--fg-muted)', display: 'block', marginBottom: '.3rem' }}>Descripción</label>
                <textarea
                  rows={5}
                  placeholder="Describe tu problema con el mayor detalle posible..."
                  value={ticket.message}
                  onChange={e => setTicket(t => ({ ...t, message: e.target.value }))}
                  style={{ width: '100%', padding: '.5rem .75rem', borderRadius: 8, background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--fg)', fontSize: '.875rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}
                  onFocus={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'var(--border)'} />
              </div>
              <button className="btn-primary-sm" onClick={send} style={{ alignSelf: 'flex-start', padding: '.5rem 1.4rem', fontSize: '.875rem' }}>
                Enviar ticket
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
