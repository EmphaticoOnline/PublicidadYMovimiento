import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function FlagBannerPage() {
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
        FLAG BANNER
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
          Cotiza tu FLAG BANNER ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES FLAG BANNER */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/flag-banner/flag-repegi.jpg"
          alt="Flag Repegi"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/flag-banner/flag-subaru.jpg"
          alt="Flag Subaru"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/flag-banner/flag-supercolchon.jpg"
          alt="Flag Supercolchón"
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
        <strong>El Flag Banner es la solución publicitaria que danza con el viento y captura miradas.</strong>{' '}
        Su movimiento natural lo convierte en un elemento dinámico y cautivador que atrae atención desde
        grandes distancias. Perfectos para gasolineras, negocios en carreteras, eventos y lugares donde
        necesitas presencia visible y constante que destaque entre el tráfico y la multitud.
        <br /><br />
        Convierte el viento en tu aliado publicitario con una solución que comunica tu marca de forma efectiva,
        elegante y memorable en cualquier ubicación.
      </p>
    </div>
  )
}
