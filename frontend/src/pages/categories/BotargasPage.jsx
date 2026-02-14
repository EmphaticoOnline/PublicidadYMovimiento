import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function BotargasPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Botargas Publicitarias Personalizadas | Personajes Corporativos y Eventos',
    'Botargas publicitarias personalizadas para activaciones, centros comerciales y eventos infantiles. Conecta emocionalmente con tu público y genera recordación de marca.',
    'https://grupopmpublicidad.mx/botargas'
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
        Botargas Publicitarias Personalizadas para Activaciones y Eventos
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Convierte tu marca en un personaje que conecta y genera interacción
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
          Cotiza tus BOTARGAS ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES BOTARGAS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/botargas/botarga-elote.jpg"
          alt="Botarga publicitaria personalizada tipo elote para activaciones en centros comerciales y eventos"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/botargas/botarga-tres.jpg"
          alt="Botarga publicitaria personalizada personaje corporativo para interacción con público"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/botargas/botarga-zgas.jpg"
          alt="Botarga publicitaria ZGAS ideal para activaciones y eventos infantiles"
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
        <strong>Las botargas son personajes vivos que transforman activaciones y eventos en experiencias memorables.</strong>{' '}
        Conecta con tu público en centros comerciales, inauguraciones y eventos infantiles, generando interacción y recordación de marca con un personaje que representa tu negocio.
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
          Beneficios clave de las botargas personalizadas
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Personajes que generan interacción directa y refuerzan tu marca en activaciones y eventos.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Interacción directa con el público:</strong> invita a fotos y conversaciones.</li>
          <li><strong>Ideal para centros comerciales y activaciones:</strong> atrae flujo de gente.</li>
          <li><strong>Perfectas para eventos infantiles:</strong> conectan emocionalmente con familias.</li>
          <li><strong>Alta recordación en fotos y redes sociales:</strong> tu personaje se viraliza.</li>
        </ul>
      </section>
    </div>
  )
}
