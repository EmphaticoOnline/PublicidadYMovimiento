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

export default function GlobosAerostaticosPage() {
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
        GLOBOS AEROSTÁTICOS
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
          Cotiza tus Globos Aerostáticos ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES GLOBOS AEROSTÁTICOS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/globos-aerostaticos/globo-centenario.jpg"
          alt="Globo Centenario"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/globos-aerostaticos/globo-delarosa.jpg"
          alt="Globo De la Rosa"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/globos-aerostaticos/globo-motors.jpg"
          alt="Globo Motors"
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
        <strong>Los globos aerostáticos son la publicidad que literalmente vuela alto.</strong>{' '}
        Visibles desde kilómetros de distancia, crean un impacto visual extraordinario que se ve desde cualquier ángulo
        y lugar. Ideales para lanzamientos de producto, eventos corporativos, festivales y activaciones donde tu marca
        necesita ocupar el cielo y generar recordación masiva de forma espectacular y profesional.
        <br /><br />
        Eleva tu presencia publicitaria a nuevas alturas con globos aerostáticos que dominan la vista y la imaginación
        de tu audiencia.
      </p>
    </div>
  )
}
