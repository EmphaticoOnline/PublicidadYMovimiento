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

export default function PublituboPage() {
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
        PUBLITUBO
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
          Cotiza tu PUBLITUBO ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES PUBLITUBO */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/publitubo/publitubos-blanco.jpg"
          alt="Publitubo Blanco"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/publitubo/publitubos-pri.jpg"
          alt="Publitubo Primario"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/publitubo/publitubos-verde.jpg"
          alt="Publitubo Verde"
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
        <strong>El Publitubo es la solución publicitaria cilíndrica que transforma cualquier espacio en un centro de atención.</strong>{' '}
        Con su diseño tubular moderno y versátil, se adapta perfectamente a interiores y exteriores,
        ofreciendo una plataforma visual excepcional para tu marca. Ideal para puntos de venta, gasolineras,
        centros comerciales y espacios públicos que requieren una presencia publicitaria discreta pero impactante.
        <br /><br />
        Aprovecha el poder de los cilindros publicitarios y convierte cada ubicación en una oportunidad
        para comunicar tu mensaje de forma profesional y memorable.
      </p>
    </div>
  )
}
