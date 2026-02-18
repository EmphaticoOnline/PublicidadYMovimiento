import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function GlobosAerostaticosPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Globo Aerostático Publicitario | Inflable Gigante Aéreo | Envíos Nacionales',
    'Globo aerostático publicitario inflable ideal para máxima visibilidad aérea en eventos y activaciones. Impacto visual a gran distancia. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/globos-aerostaticos'
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
        Globo Aerostático Publicitario Inflable de Gran Altura
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Máxima visibilidad aérea para eventos, ferias y activaciones masivas
      </h2>

      {/* GRID DE IMÁGENES GLOBOS AEROSTÁTICOS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/globos-aerostaticos/globo-centenario.jpg"
          alt="Globo aerostático publicitario inflable visible a gran distancia en eventos"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/globos-aerostaticos/globo-delarosa.jpg"
          alt="Globo aerostático inflable publicitario para activaciones masivas"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/globos-aerostaticos/globo-motors.jpg"
          alt="Globo aerostático publicitario personalizado con marca para ferias"
          loading="lazy"
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
          Cotiza tus Globos Aerostáticos ahora
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
        <strong>Los globos aerostáticos publicitarios ponen tu marca en el cielo con visibilidad extrema.</strong>{' '}
        Ideales para eventos masivos, ferias y activaciones donde necesitas impacto memorable y cobertura visual a larga distancia.
        Su altura y tamaño los convierten en un referente desde cualquier punto, generando fotos, conversación y recordación en redes.
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
          Beneficios clave de los globos aerostáticos publicitarios
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Pensados para máxima visibilidad aérea en lanzamientos, ferias y activaciones con gran afluencia.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Visibilidad extrema desde largas distancias:</strong> tu marca domina el horizonte.</li>
          <li><strong>Ideal para eventos masivos:</strong> atrae público y medios con un ícono aéreo.</li>
          <li><strong>Impacto memorable en redes sociales:</strong> fotos espectaculares que se comparten.</li>
          <li><strong>Personalización completa de marca:</strong> diseña colores, logos y mensajes.</li>
        </ul>
      </section>
    </div>
  )
}
