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

export default function CilindrosPublicitariosPage() {
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
        CILINDROS PUBLICITARIOS
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
          Cotiza tus Cilindros ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES CILINDROS PUBLICITARIOS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/cilindros-publicitarios/cilindro-cartepillar.jpg"
          alt="Cilindro Caterpillar"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/cilindros-publicitarios/cilindro-efilea.jpg"
          alt="Cilindro Efilea"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/cilindros-publicitarios/cilindro-presnillo.jpg"
          alt="Cilindro Presnillo"
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
        <strong>Los cilindros publicitarios son la solución ideal para envolver tu marca en movimiento.</strong>{' '}
        Estos elementos cilíndricos giratorios o estáticos ofrecen una cobertura de 360 grados que garantiza
        visibilidad total desde cualquier ángulo. Perfectos para puntos de venta, gasolineras, centros comerciales
        y eventos, los cilindros multiplican el impacto de tu mensaje publicitario de forma innovadora y profesional.
        <br /><br />
        Convierte espacios ordinarios en lienzos publicitarios extraordinarios con una solución que captura
        la atención y comunica tu marca de manera efectiva y duradera.
      </p>
    </div>
  )
}
