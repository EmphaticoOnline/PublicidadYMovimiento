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

export default function DomisRellenablesPage() {
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
        DOMIS RELLENABLES
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
          Cotiza tus Domis Rellenables ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES DOMIS RELLENABLES */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/domis-rellenables/aspros-costal.jpg"
          alt="Aspros Costal"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/domis-rellenables/costal-azul.jpg"
          alt="Costal Azul"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/domis-rellenables/costal-pegaduro.jpg"
          alt="Costal Pegaduro"
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
        <strong>Los domis rellenables son la diversión creativa que tus clientes pueden personalizar.</strong>{' '}
        Desde costales publicitarios hasta figuras interactivas, permiten que tu audiencia participe activamente
        en el entretenimiento. Ideales para eventos participativos, ferias interactivas, promociones y activaciones
        donde buscas generar engagement directo y memorable con tu marca.
        <br /><br />
        Transforma tus domis rellenables en herramientas de interacción que crean experiencias únicas,
        divertidas y absolutamente memorables para tu audiencia.
      </p>
    </div>
  )
}
