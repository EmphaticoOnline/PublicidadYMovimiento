import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function PublibackPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Publiback en Venta | Publiback Publicitario Personalizado | Fabricación en Guadalajara',
    'Publiback publicitario en venta fabricado en Guadalajara con personalización total y envíos a todo México. Producción propia para activaciones BTL, promociones en calle y campañas de alto impacto.',
    'https://grupopmpublicidad.mx/publiback'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿El publiback está en venta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, fabricamos publibacks publicitarios en venta como activos permanentes para activaciones en calle y promociones itinerantes.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se puede personalizar completamente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Personalizamos impresión, colores, ajustes ergonómicos y accesorios para que el publiback refleje tu marca.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Dónde se fabrica?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Producimos en Guadalajara con mano de obra especializada y materiales resistentes para uso intensivo.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Hacen envíos a todo México?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Coordinamos envíos a cualquier ciudad de México para que tu campaña arranque sin retrasos.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuál es el precio de un publiback?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio depende del tamaño, el sistema de sujeción, la impresión y el volumen solicitado; cotizamos rápidamente vía WhatsApp.'
        }
      }
    ]
  }

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
        Publiback en Venta para Activaciones y Publicidad en Calle
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Publicidad humana con alto impacto visual y contacto directo
      </h2>
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
          alt="Publiback publicitario en venta para activaciones en Guadalajara"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/publiback/publiback-capsulina.jpg"
          alt="Publiback personalizado para promociones BTL en calle"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/publiback/publiback-verde.jpg"
          alt="Publiback inflable con impresión personalizada para campañas masivas"
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
          Cotiza tu PUBLIBACK ahora
        </Link>
      </div>

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
        <strong>El Publiback es un cilindro publicitario portátil pensado para activaciones y presencia peatonal.</strong>{' '}
        Se lleva en la espalda y ofrece publicidad humana con movimiento controlado, ideal para contacto directo en calle, eventos y promociones.
        Refuerza campañas donde necesitas interacción inmediata y recordación a nivel de peatón.
      </p>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '820px',
          margin: '1rem auto 0',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        Ideal para marcas que necesitan presencia directa sin depender de estructuras fijas.
      </p>

      {/* TEXTO COMERCIAL CENTRADO */}
      <p
        style={{
          textAlign: 'center',
          maxWidth: '820px',
          margin: '1.4rem auto 0',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        Fabricamos publibacks publicitarios con producción propia en Guadalajara; no son productos de renta ni importaciones genéricas. Cada pieza se desarrolla a la medida con impresión personalizada, ajustes ergonómicos y materiales resistentes para campañas intensivas en calle.
      </p>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '820px',
          margin: '1.4rem auto 0',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        Con presencia móvil y dirigida, el Publiback ayuda a distribuir volantes, guiar flujos peatonales y sostener mensajes corporativos en recorridos. Complementa tu activación con nuestros <Link to="/cilindros-publicitarios">Cilindros Publicitarios</Link>, <Link to="/display">Displays</Link>, <Link to="/arcos-meta">Arcos Meta</Link> o <Link to="/pantallas-inflables">Pantallas Inflables</Link> para crear un circuito completo de impacto. Ideales para marcas que necesitan soluciones profesionales sin depender de importaciones genéricas.
      </p>

      <div style={{ textAlign: 'center', marginTop: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de un Publiback?
        </h2>
        <p
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            color: '#444'
          }}
        >
          El precio de un publiback depende del tamaño, sistema de sujeción, tipo de impresión y volumen requerido. Cuéntanos los detalles de tu campaña y te enviamos una cotización personalizada vía WhatsApp.
        </p>
      </div>

      {/* BENEFICIOS */}
      <section
        style={{
          maxWidth: '900px',
          margin: '2rem auto 0',
          background: '#f8f9fb',
          borderRadius: '18px',
          padding: '1.8rem 1.5rem',
          boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
          color: '#2c2c2c',
          lineHeight: 1.65
        }}
      >
        <h3 style={{ textAlign: 'center', fontSize: '1.4rem', marginBottom: '1rem' }}>
          Beneficios clave del Publiback publicitario
        </h3>
        <ul style={{ maxWidth: '820px', margin: '0 auto', paddingLeft: '1.1rem' }}>
          <li><strong>Publicidad humana móvil de alto impacto:</strong> presencia constante a nivel de peatón.</li>
          <li><strong>Ideal para promociones BTL y campañas en calle:</strong> lleva tu mensaje a zonas de gran flujo.</li>
          <li><strong>Instalación ligera y ergonómica:</strong> comodidad para el staff durante recorridos largos.</li>
          <li><strong>Personalización total con impresión de marca:</strong> refuerza identidad y mensajes clave.</li>
        </ul>
      </section>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '820px',
          margin: '1.8rem auto 0',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        Lleva tu mensaje a donde está la gente con un formato portátil, profesional y pensado para generar recuerdo inmediato.
      </p>

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre publibacks publicitarios
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿El publiback está en venta?</h3>
          <p>Sí, fabricamos publibacks en venta como activos permanentes para campañas de calle; no manejamos renta.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Se puede personalizar completamente?</h3>
          <p>Adaptamos la impresión, colores, accesorios y ergonomía para que cada publiback represente tu marca.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Dónde se fabrica?</h3>
          <p>Producimos en Guadalajara con materiales resistentes ideales para uso intensivo en calle.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Hacen envíos a todo México?</h3>
          <p>Coordinamos envíos a cualquier ciudad del país para que tu activación arranque sin demora.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio?</h3>
          <p>Depende del tamaño, sistema de sujeción e impresión; escríbenos por WhatsApp y te cotizamos rápidamente.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
