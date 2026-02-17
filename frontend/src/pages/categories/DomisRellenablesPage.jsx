import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function DomisRellenablesPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Domis Rellenables Inflables | Activaciones y Promociones | Envíos Nacionales',
    'Domis rellenables inflables personalizables para activaciones, promociones y ferias. Branding 360° con alto impacto visual y recordación fotográfica. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/domis-rellenables'
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
        Domis Rellenables Inflables Personalizables
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Activaciones, promociones y ferias con impacto visual inmersivo
      </h2>

      {/* GRID DE IMÁGENES DOMIS RELLENABLES */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/domis-rellenables/aspros-costal.jpg"
          alt="Aspros Costal"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/domis-rellenables/costal-azul.jpg"
          alt="Costal Azul"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/domis-rellenables/costal-pegaduro.jpg"
          alt="Costal Pegaduro"
          style={{ width: '100%', borderRadius: '14px' }}
        />
      </div>

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
          Cotiza tus Domis Rellenables ahora
        </Link>
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
        <strong>Los domis rellenables son piezas interactivas que tu público puede personalizar y usar.</strong>{' '}
        Ideales para activaciones, promociones y ferias donde buscas branding 360° y participación directa.
        Generan recordación fotográfica y experiencias inmersivas que conectan a la audiencia con tu marca.
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
          Beneficios clave de los domis rellenables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Pensados para activaciones, promociones y ferias con alto impacto de marca.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Impacto visual inmersivo:</strong> piezas grandes y vistosas que atraen miradas.</li>
          <li><strong>Branding 360°:</strong> superficie completa para logos, colores y mensajes.</li>
          <li><strong>Ideal para plazas y eventos masivos:</strong> destacan en espacios concurridos.</li>
          <li><strong>Alta recordación fotográfica:</strong> generan fotos y contenido orgánico.</li>
        </ul>
      </section>
    </div>
  )
}
