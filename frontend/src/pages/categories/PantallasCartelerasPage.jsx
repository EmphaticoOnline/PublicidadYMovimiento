import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function PantallasCartelerasPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Pantallas Inflables en Venta | Carteleras Inflables Gigantes | Fabricación en Guadalajara',
    'Pantallas inflables en venta y carteleras inflables gigantes fabricadas en Guadalajara. Producción propia, personalización total y envíos a todo México para proyección profesional y eventos masivos.',
    'https://grupopmpublicidad.mx/pantallas-inflables'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Las pantallas inflables están en venta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, fabricamos pantallas y carteleras inflables en venta como solución permanente, no de renta, para conciertos, festivales y eventos masivos.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Sirven para proyección profesional?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Diseñamos pantallas inflables para proyección profesional, con superficies tensadas y refuerzos que permiten cine al aire libre, mapping y anuncios de alto impacto.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Dónde se fabrican?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fabricamos con producción propia en Guadalajara y coordinamos envíos a todo México.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se pueden personalizar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Personalizamos tamaño, color, branding e integración de sistemas de tensión para que la pantalla se adapte a tu proyecto.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuál es el precio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio depende de dimensiones, sistema de tensión, tipo de proyección y refuerzos; cotizamos rápidamente vía WhatsApp según tus especificaciones.'
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
        Pantallas Inflables en Venta para Proyección y Eventos Masivos
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Carteleras inflables gigantes para conciertos, cine al aire libre y eventos corporativos
      </h2>


      {/* GRID DE IMÁGENES PANTALLAS Y CARTELERAS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/pantallas-carteleras/oxxo.jpg"
          alt="Pantalla inflable gigante en venta para conciertos y eventos masivos"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/pantallas-carteleras/pantalla-negra.jpg"
          alt="Cartelera inflable publicitaria fabricada en Guadalajara para promociones"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/pantallas-carteleras/pantalla-roja.jpg"
          alt="Pantalla inflable profesional para cine al aire libre y festivales"
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
            Cotiza tus Pantallas ahora
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
          Fabricamos pantallas inflables y carteleras gigantes en venta con producción propia en Guadalajara; no son productos de renta, sino soluciones permanentes con personalización total y envíos a todo México. Ideales para marcas e instituciones que necesitan soluciones profesionales sin depender de importaciones genéricas. Si tu proyecto requiere una pantalla inflable profesional como activo permanente para tu empresa, aquí la fabricamos a la medida.
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
        <strong>Las pantallas y carteleras inflables de gran formato te dan exposición masiva en eventos y promociones.</strong>{' '}
        Desde una pantalla inflable gigante para conciertos hasta formatos medianos para activaciones itinerantes, funcionan como lienzos para tu marca en ferias y activaciones, reforzando presencia y mensajes clave ante grandes audiencias.
        <br /><br />
        Amplía tu circuito de impacto con nuestros <Link to="/displays">Displays Publicitarios</Link>, <Link to="/arcos-meta">Arcos Meta</Link>, <Link to="/cilindros-publicitarios">Cilindros Inflables</Link> y <Link to="/replicas-inflables">Réplicas Inflables</Link> para acompañar cada punto de contacto.
      </p>

      <div style={{ textAlign: 'center', marginTop: '2.3rem' }}>
        <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de una pantalla inflable?
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
          La inversión varía según el tamaño de la pantalla, el sistema de tensión, el tipo de proyección, los refuerzos estructurales y si se utilizará en interior o exterior. Comparte los detalles de tu evento y te cotizamos por WhatsApp con una propuesta hecha a la medida.
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
          Beneficios clave de pantallas y carteleras inflables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Pensadas para escenarios, eventos masivos y campañas que requieren gran formato visible.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Gran formato para máxima exposición:</strong> mensajes que destacan a distancia.</li>
          <li><strong>Ideal para escenarios y eventos masivos:</strong> soporte visual principal.</li>
          <li><strong>Refuerza presencia de marca:</strong> espacio amplio para logos y anuncios.</li>
          <li><strong>Perfecto para conciertos y espectáculos:</strong> impacta al público desde cualquier ángulo.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre pantallas inflables
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Las pantallas inflables están en venta?</h3>
          <p>Todo lo fabricamos en venta como solución permanente, no manejamos renta de pantallas inflables.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Sirven para proyección profesional?</h3>
          <p>Sí, diseñamos superficies tensadas y refuerzos para cine al aire libre, mapping y anuncios de gran formato.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Dónde se fabrican?</h3>
          <p>Fabricamos con producción propia en Guadalajara y hacemos envíos a todo México.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Se pueden personalizar?</h3>
          <p>Personalizamos medidas, colores, branding e integración de equipos de proyección para que se adapte a tu evento.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio?</h3>
          <p>Depende de tamaño, sistema de tensión y refuerzos; escríbenos por WhatsApp y te damos una cotización rápida.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
