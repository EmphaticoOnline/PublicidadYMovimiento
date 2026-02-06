import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function SkyDancerPage() {
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
        SKY DANCER
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
          Cotiza tu SKY DANCER ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES SKY DANCER */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/sky-dancer/sky-amarillo.jpg"
          alt="Sky Dancer Amarillo"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/sky-dancer/sky-dancer.jpg"
          alt="Sky Dancer"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/sky-dancer/sky-tiraloca.jpg"
          alt="Sky Dancer Tiraloca"
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
        <strong>El Sky Dancer es el rey de la visibilidad en exteriores.</strong>{' '}
        Su movimiento constante y llamativo atrae miradas desde grandes distancias,
        creando un ambiente dinámico y festivo alrededor de tu negocio o evento.
        Es imposible ignorarlo: su altura y colores vibrantes lo convierten en un
        imán visual que destaca entre la multitud y el tráfico.
        <br /><br />
        Si buscas captar la atención de quienes pasan cerca y generar recordación de marca
        de inmediato, el Sky Dancer es la herramienta ideal para aumentar el flujo de personas
        y dar vida a cualquier espacio.
      </p>
    </div>
  )
}
