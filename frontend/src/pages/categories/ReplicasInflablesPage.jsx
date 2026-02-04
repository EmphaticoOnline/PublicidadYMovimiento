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

export default function ReplicasInflablesPage() {
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
        RÉPLICAS INFLABLES
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
          Cotiza tus Réplicas Inflables ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES RÉPLICAS INFLABLES */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/replicas-inflables/replica-cordoba.jpg"
          alt="Réplica Inflable Córdoba"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/replicas-inflables/replica-pemex.jpg"
          alt="Réplica Inflable Pemex"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/replicas-inflables/replica-tostadas.jpg"
          alt="Réplica Inflable Tostadas"
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
        <strong>Las réplicas inflables son una herramienta publicitaria de alto impacto visual.</strong>{' '}
        Permiten reproducir productos, envases o íconos de marca a gran escala, logrando que
        sean visibles desde largas distancias y se conviertan en un punto inmediato de atención.
        Son ideales para lanzamientos, eventos, puntos de venta y activaciones de marca donde
        se busca destacar de forma clara, llamativa y memorable.
      </p>
    </div>
  )
}
