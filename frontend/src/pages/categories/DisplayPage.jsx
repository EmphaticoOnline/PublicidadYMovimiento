import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function DisplayPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Displays Publicitarios para Punto de Venta y Expos | Fabricación en Guadalajara',
    'Displays publicitarios inflables y mostradores portátiles para punto de venta, expos y promociones. Fabricación en Guadalajara con envío a todo México.',
    'https://grupopmpublicidad.mx/display'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Los displays publicitarios están en venta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, fabricamos displays publicitarios inflables y mostradores portátiles en venta para punto de venta, expos y activaciones.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se pueden personalizar completamente?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Personalizamos cada display en forma, dimensiones, impresión 360° e iluminación para que refleje tu marca.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Dónde se fabrican?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fabricamos con producción propia en Guadalajara y enviamos a todo México.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuál es el precio de un display publicitario?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio depende del tamaño, la estructura, los acabados y el volumen requerido. Cotizamos cada proyecto según tus especificaciones.'
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
        Displays Publicitarios en Venta para Punto de Venta y Expos
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Mostradores publicitarios y stands portátiles con instalación inmediata
      </h2>
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
          alt="Display publicitario inflable en venta para activaciones de marca"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/display/demo-perron.jpg"
          alt="Mostrador publicitario portátil personalizado para punto de venta"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/display/demo-zimalta.jpg"
          alt="Stand promocional inflable fabricado en Guadalajara para expos"
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
          Cotiza tu DISPLAY ahora
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
        Fabricamos displays publicitarios en venta, desde estructuras inflables de gran formato hasta mostradores y stands portátiles para punto de venta, con producción propia en Guadalajara. Desarrollamos cada pieza a la medida con personalización total en impresión, iluminación y accesorios, y enviamos a todo México con entregas confiables. Ideales para marcas que necesitan soluciones profesionales sin depender de importaciones genéricas.
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
        <strong>Los displays publicitarios combinan impacto visual con portabilidad para que tu marca destaque en interiores, ferias y centros comerciales.</strong>{' '}
        Se instalan en minutos, integran gráficos intercambiables y funcionan tanto como estructura inflable de gran altura como mostrador portátil para degustaciones y lanzamientos.
        <br /><br />
        Integra tu campaña con nuestros <Link to="/cilindros-publicitarios">Cilindros Publicitarios</Link>, <Link to="/arcos-meta">Arcos Meta</Link> o <Link to="/replicas-inflables">Réplicas Inflables</Link> para lograr un circuito completo de activación.
      </p>

      <div style={{ textAlign: 'center', marginTop: '2.3rem' }}>
        <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de un display publicitario?
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
          El precio depende del tamaño del display, la estructura interna, la tecnología de impresión, los acabados especiales y el volumen de producción requerido. Cuéntanos tu activación y te enviaremos una cotización personalizada.
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
          Beneficios clave de los displays inflables publicitarios
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

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre displays publicitarios
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Los displays publicitarios están en venta?</h3>
          <p>Sí, fabricamos displays publicitarios inflables y mostradores portátiles en venta para punto de venta, expos y campañas BTL.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Se pueden personalizar completamente?</h3>
          <p>Personalizamos forma, dimensiones, impresión 360°, iluminación y accesorios para que tu display sea único.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Dónde se fabrican?</h3>
          <p>Producción propia en Guadalajara con envíos coordinados a cualquier ciudad de México.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio?</h3>
          <p>Calculamos el costo según tamaño, estructura y acabados; agenda una breve llamada o mensaje por WhatsApp y te cotizamos rápidamente.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
