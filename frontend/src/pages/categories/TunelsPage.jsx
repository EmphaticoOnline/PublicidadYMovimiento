import { Link } from 'react-router-dom'

const WHATSAPP_NUMBERS = [
  '5213310949986', // Faby
  '5213331704595', // Publicidad y Movimiento
]

function openWhatsappAlternado() {
  const lastIndex = Number(localStorage.getItem('waIndex')) || 0
  const nextIndex = (lastIndex + 1) % WHATSAPP_NUMBERS.length
  localStorage.setItem('waIndex', nextIndex)
  const phone = WHATSAPP_NUMBERS[lastIndex]
  window.open(`https://wa.me/${phone}`, '_blank')
}

export default function TunelsPage() {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
        fontFamily: 'Montserrat, Segoe UI, sans-serif'
      }}
    >
      {/* TÍTULO */}
      <h1 style={{ textAlign: 'center', fontSize: '2.2rem' }}>
        TÚNELES
      </h1>

      {/* CTA PRINCIPAL */}
      <div style={{ textAlign: 'center', margin: '1.5rem 0 2.5rem' }}>
        <Link
          to="/#"
          onClick={e => {
            e.preventDefault()
            openWhatsappAlternado()
          }}
          style={{
            display: 'inline-block',
            backgroundColor: '#25D366',
            color: '#fff',
            padding: '1rem 2.4rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 600,
            boxShadow: '0 8px 20px rgba(0,0,0,0.18)'
          }}
        >
          Cotiza tus Túneles ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES TÚNELES */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/tuneles/tunel-cuadrado.jpg"
          alt="Túnel Cuadrado"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/tuneles/tunel-curvo.jpg"
          alt="Túnel Curvo"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/tuneles/tunel-uno.jpg"
          alt="Túnel Uno"
          style={{ width: '100%', borderRadius: '14px' }}
        />
      </div>

      {/* TEXTO COMERCIAL CENTRADO */}
      <p
        style={{
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        <strong>Los túneles inflables son la entrada espectacular a tu evento o activación publicitaria.</strong>{' '}
        Con formas personalizables, colores vibrantes y diseños impactantes, crean una experiencia inmersiva
        que cautiva a todos los que los atraviesan. Ideales para carreras, maratones, ferias comerciales,
        eventos deportivos y activaciones donde necesitas generar un punto de entrada memorable y fotogénico.
        <br /><br />
        Transforma el acceso a tu evento en un momento icónico que tus visitantes recordarán y compartirán.
      </p>
    </div>
  )
}
