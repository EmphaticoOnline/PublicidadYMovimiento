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

export default function LineaAutosPage() {
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
        LÍNEA PARA AUTOS
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
          Cotiza tu Línea para Autos ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES LÍNEA PARA AUTOS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/linea-autos/autos-cubierta.jpg"
          alt="Línea para Autos - Cubierta"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/linea-autos/autos-funda.jpg"
          alt="Línea para Autos - Funda"
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
        <strong>La línea para autos lleva tu publicidad a todas partes donde se mueven tus clientes.</strong>{' '}
        Desde cubiertas personalizadas hasta fundas protectoras, transforma cada vehículo en una plataforma
        móvil de visibilidad. Ideales para flotas corporativas, promociones logísticas, eventos de movilidad
        y cualquier contexto donde necesites que tu marca circule constantemente por la ciudad.
        <br /><br />
        Convierte los vehículos en mensajeros rodantes de tu marca, garantizando visibilidad continua
        y alcance masivo en movimiento.
      </p>
    </div>
  )
}
