import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function DisplayPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Displays Inflables Publicitarios | Punto de Venta y Expos | Envíos Nacionales',
    'Displays inflables publicitarios ligeros y portátiles, ideales para punto de venta y expos. Branding directo y fácil instalación. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/display'
  )
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
      <h1 style={{ textAlign: 'center', fontSize: '2.35rem', lineHeight: 1.25 }}>
        Displays Inflables Publicitarios para Punto de Venta y Expos
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Ligeros, portátiles y listos para instalar con tu branding
      </h2>

      {/* CTA PRINCIPAL */}
      <div style={{ textAlign: 'center', margin: '1.5rem 0 2.5rem' }}>
        <Link
          className="whatsapp-btn"
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
        <strong>Los displays inflables son ligeros, portátiles y se instalan rápido en punto de venta y expos.</strong>{' '}
        Ideales para interiores donde buscas branding directo con montaje sencillo y presentación profesional.
      </p>

      {/* SECCIÓN DE BENEFICIOS ESTRATÉGICOS */}
      <section
        style={{
          maxWidth: '900px',
          margin: '2.5rem auto 0',
          background: '#f8f9fb',
          borderRadius: '18px',
          padding: '1.8rem 1.5rem',
          boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
          color: '#2c2c2c',
          lineHeight: 1.65
        }}
      >
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', textAlign: 'center' }}>
          Beneficios clave de los displays inflables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Pensados para punto de venta y expos con montaje rápido.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Ligero y portátil:</strong> fácil de transportar y colocar.</li>
          <li><strong>Branding directo:</strong> mensaje claro y visible.</li>
          <li><strong>Ideal para interiores:</strong> perfecto para tiendas y stands.</li>
          <li><strong>Fácil instalación:</strong> listo en minutos sin complicaciones.</li>
        </ul>
      </section>
    </div>
  )
}
