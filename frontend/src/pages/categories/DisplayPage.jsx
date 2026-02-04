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

export default function DisplayPage() {
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
        DISPLAY
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
          Cotiza tu DISPLAY ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES DISPLAY */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/display/demo-mr.jpg"
          alt="Display Mr"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/display/demo-perron.jpg"
          alt="Display Perrón"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/display/demo-zimalta.jpg"
          alt="Display Zimalta"
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
        <strong>Los displays son la presentación elegante y profesional de tu marca.</strong>{' '}
        Desde expositores puntuales hasta estructuras modulables, transforman cualquier espacio en
        una galería de tus productos. Ideales para puntos de venta, tiendas, ferias comerciales y eventos
        corporativos donde necesitas presentar tu marca con impacto visual, orden y profesionalismo.
        <br /><br />
        Convierte cada punto de venta en una experiencia visual memorable que guía a tus clientes
        y amplifica la presencia de tu marca en el espacio.
      </p>
    </div>
  )
}
