import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function PublibackPage() {
  const { handleWhatsappClick, loading } = useWhatsappLead()
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
        PUBLIBACK
      </h1>

      {/* CTA PRINCIPAL */}
      <div style={{ textAlign: 'center', margin: '1.5rem 0 2.5rem' }}>
        <Link
          to="/#"
          onClick={e => {
            e.preventDefault()
            handleWhatsappClick()
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
          Cotiza tu PUBLIBACK ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES PUBLIBACK */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/publiback/publiback-azul.jpg"
          alt="Publiback Azul"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/publiback/publiback-capsulina.jpg"
          alt="Publiback Capsulina"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/publiback/publiback-verde.jpg"
          alt="Publiback Verde"
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
        <strong>El Publiback es la herramienta publicitaria perfecta para cautivar el movimiento en la calle.</strong>{' '}
        Con su diseño innovador y colores vibrantes, logra captar la atención de peatones y conductores
        desde cualquier ángulo. Su versatilidad lo hace ideal para puntos de venta, eventos, activaciones
        de marca y cualquier espacio donde necesites crear un impacto visual duradero y memorable.
        <br /><br />
        Convierte cada ubicación en un punto de promoción efectivo con una solución que combina visibilidad,
        durabilidad y presencia profesional.
      </p>
    </div>
  )
}
