import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function CilindrosPublicitariosPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Cilindros Publicitarios Inflables en Venta | Cilindros Personalizados',
    'Cilindros publicitarios inflables en venta, totalmente personalizados y fabricados en Guadalajara. Producción propia y envíos a todo México para eventos y activaciones.',
    'https://grupopmpublicidad.mx/cilindros-publicitarios'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Los cilindros inflables están en venta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, fabricamos cilindros inflables en venta para campañas, eventos y activaciones profesionales.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se pueden personalizar completamente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Diseñamos cilindros publicitarios personalizados en altura, diámetro, colores e impresión 360° según tu marca.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Dónde se fabrican?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fabricamos en Guadalajara bajo estándares profesionales y enviamos a todo México.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuál es el precio de un cilindro publicitario?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio depende del tamaño, la estructura y la impresión. Cotizamos cada proyecto de forma personalizada.'
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
      <h1 style={{ textAlign: 'center', fontSize: '2.35rem', lineHeight: 1.25 }}>
        Cilindros Publicitarios Inflables en Venta de Alta Visibilidad
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Ideal para destacar tu marca en puntos de venta, ferias y promociones
      </h2>
      {/* GRID DE IMÁGENES CILINDROS */}
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
          alt="Cilindro publicitario inflable vertical personalizado para activaciones en Guadalajara"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/cilindros-publicitarios/cilindro-efilea.jpg"
          alt="Cilindro inflable corporativo con impresión 360° para eventos deportivos"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/cilindros-publicitarios/cilindro-presnillo.jpg"
          alt="Cilindro publicitario inflable personalizado en venta para campañas promocionales"
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
          Cotiza tus Cilindros ahora
        </Link>
      </div>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '860px',
          margin: '1rem auto 0',
          fontSize: '1.05rem',
          color: '#444',
          lineHeight: 1.6
        }}
      >
        Fabricamos cilindros inflables en venta totalmente personalizados para eventos, activaciones y campañas de alto impacto. Cada cilindro publicitario es producido en Guadalajara bajo estándares profesionales, con estructura reforzada para uso intensivo y envíos a todo México. No revendemos productos importados genéricos; somos fabricantes directos con control total de calidad y acabados premium.
      </p>

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
        <strong>Los cilindros publicitarios inflables ofrecen visibilidad 360° para tu marca en cualquier evento.</strong>{' '}
        Destacan en accesos, entradas y puntos de venta gracias a su altura y diseño personalizable, logrando impacto inmediato y recordación.
        Son fáciles de instalar y se adaptan a ferias, promociones y activaciones donde necesitas que te vean primero. También puedes complementar tu evento con nuestros <Link to="/tuneles">Túneles Inflables</Link>, <Link to="/arcos-meta">Arcos Meta</Link> o <Link to="/replicas-inflables">Réplicas Inflables Personalizadas</Link>.
      </p>

      <div style={{ textAlign: 'center', marginTop: '2.3rem' }}>
        <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de un cilindro inflable?
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
          El precio de un cilindro publicitario inflable depende de la altura, diámetro, tipo de impresión, refuerzos estructurales y sistema de anclaje. Solicita una cotización personalizada para tu campaña o evento.
        </p>
      </div>

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
          Beneficios clave de los cilindros inflables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Pensados para maximizar tu presencia en accesos, ferias y puntos de venta con impacto inmediato.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Visibilidad 360°:</strong> se ve desde cualquier ángulo.</li>
          <li><strong>Perfecto para entradas y accesos:</strong> guía el flujo hacia tu marca.</li>
          <li><strong>Personalización total:</strong> branding completo con tus colores y logotipo.</li>
          <li><strong>Fácil instalación y gran impacto visual:</strong> listo para usar en minutos.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre cilindros publicitarios
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Los cilindros inflables están en venta?</h3>
          <p>Sí, fabricamos cilindros inflables en venta para campañas, eventos y activaciones profesionales.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Se pueden personalizar completamente?</h3>
          <p>Diseñamos cilindros publicitarios personalizados en altura, diámetro, colores e impresión 360° según tu marca.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Dónde se fabrican?</h3>
          <p>Fabricamos en Guadalajara bajo estándares profesionales y enviamos a todo México.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio de un cilindro publicitario?</h3>
          <p>El precio depende del tamaño, estructura e impresión. Cotizamos cada proyecto de forma personalizada; escríbenos por WhatsApp para una cotización rápida.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
