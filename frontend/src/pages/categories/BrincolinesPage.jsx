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

export default function BrincolinesPage() {
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
        BRINCOLINES
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
          Cotiza tus Brincolines ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES BRINCOLINES */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/brincolines/brincolin-azul.jpg"
          alt="Brincolin Azul"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/brincolines/brincolin-rojo.jpg"
          alt="Brincolin Rojo"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/brincolines/cocodrilo.jpg"
          alt="Brincolin Cocodrilo"
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
        <strong>Los brincolines son la alegría hecha inflable que conquista a toda la familia.</strong>{' '}
        Desde niños hasta adultos, generan diversión infinita y memorable en cualquier evento.
        Ideales para fiestas infantiles, eventos corporativos, ferias, activaciones y cualquier ocasión
        donde necesites crear un ambiente festivo, seguro y lleno de entretenimiento de calidad.
        <br /><br />
        Convierte tu evento en un parque de diversiones portátil donde cada momento es una sonrisa
        y cada salto refuerza la conexión con tu marca.
      </p>
    </div>
  )
}
