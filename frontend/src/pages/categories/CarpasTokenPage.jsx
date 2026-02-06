import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function CarpasTokenPage() {
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
        CARPAS Y TOLDOS
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
          Cotiza tus Carpas y Toldos ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES CARPAS Y TOLDOS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/carpas-toldos/toldo-inflable.jpg"
          alt="Toldo Inflable"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/carpas-toldos/toldo-mission.jpg"
          alt="Toldo Mission"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/carpas-toldos/toldo-selgamex.jpg"
          alt="Toldo Selgamex"
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
        <strong>Las carpas y toldos son la solución perfecta para proteger y promocionar tu marca en cualquier evento.</strong>{' '}
        Desde ferias comerciales hasta activaciones al aire libre, proporcionan cobertura, sombra y un espacio estratégico
        para exhibir tu presencia publicitaria. Personalizables en tamaño, color y diseño, se adaptan a cualquier necesidad
        corporativa, comercial o de entretenimiento, garantizando máxima visibilidad y comodidad.
        <br /><br />
        Crea espacios memorables bajo tus carpas y toldos, convirtiendo cada evento en una oportunidad de conexión
        directa con tu audiencia.
      </p>
    </div>
  )
}
