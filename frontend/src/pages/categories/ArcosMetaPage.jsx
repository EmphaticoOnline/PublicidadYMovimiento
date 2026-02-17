import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function ArcosMetaPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Arcos Meta Inflables en Venta | Arco Inflable Publicitario para Eventos',
    'Arcos meta inflables y arcos inflables publicitarios en venta para carreras, activaciones de marca y eventos deportivos. Disponibles en Guadalajara con envíos nacionales.',
    'https://grupopmpublicidad.mx/arcos-meta'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuál es el precio de un arco meta inflable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio depende de la altura, la forma, la impresión y los accesorios incluidos. Cotizamos cada proyecto para alinear la inversión con tu evento o campaña.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se pueden personalizar con patrocinadores?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, imprimimos logotipos, colores y mensajes de patrocinadores para transformar el arco en un soporte publicitario que refuerza la identidad del evento.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Realizan envíos a Guadalajara y otros estados?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Entregamos en Guadalajara y coordinamos envíos al resto de la República Mexicana con embalaje seguro y seguimiento logístico.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Qué tamaños están disponibles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fabricamos arcos desde medidas compactas para plazas hasta estructuras monumentales para maratones y activaciones masivas. Te asesoramos para elegir la altura ideal.'
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
        Arcos Meta Inflables y Arcos Inflables Publicitarios para Eventos
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        El punto visual que marca la meta y eleva el impacto de tu evento
      </h2>
      {/* GRID DE IMÁGENES ARCOS META */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/arcos-meta/arco-curvo.jpg"
          alt="Arco meta inflable profesional curvo para carreras y maratones, alta visibilidad en eventos deportivos"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/arcos-meta/arco-deea.jpg"
          alt="Arco meta inflable publicitario DEEA para llegada y salida de eventos deportivos con patrocinadores"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/arcos-meta/arco-evo.jpg"
          alt="Arco meta inflable EVO resaltando la meta en maratones y activaciones de marca"
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
          Cotiza tu Arco Meta ahora
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
        Nuestros arcos meta inflables en venta también funcionan como arco inflable publicitario para activaciones de marca y eventos deportivos. Disponibles en Guadalajara con envíos a toda la República Mexicana.
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
        <strong>Los arcos meta inflables son el punto central que guía a corredores y público en carreras, maratones y eventos deportivos.</strong>{' '}
        Personalizables en tamaño, forma y diseño, ofrecen máxima visibilidad para patrocinadores y marcas, y crean un ambiente profesional y memorable. Su fácil transporte e instalación los hace ideales para marcar la salida y llegada, darle identidad a la meta y convertirla en un símbolo de logro.
      </p>

      <div style={{ textAlign: 'center', marginTop: '2.3rem' }}>
        <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de un arco inflable?
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
          El precio de un arco inflable depende del tamaño, diseño, impresión y accesorios incluidos. Contáctanos para recibir una cotización personalizada según tu evento o campaña.
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
          Beneficios clave para tus carreras y eventos
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Diseñados para carreras, maratones y activaciones deportivas donde el arco es el punto visual principal del evento.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Símbolo de meta y logro:</strong> señala claramente el inicio y la llegada.</li>
          <li><strong>Alta visibilidad para público y participantes:</strong> destaca desde lejos y guía el flujo del evento.</li>
          <li><strong>Ideal para patrocinadores y branding:</strong> superficie lista para logos y mensajes.</li>
          <li><strong>Estructura resistente y personalizable:</strong> adaptada a cada recorrido y condición.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre arcos meta inflables
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio de un arco meta inflable?</h3>
          <p>Se calcula según la medida, la forma y la personalización. Te guiamos para ajustar la inversión al alcance de tu evento.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Se pueden personalizar con patrocinadores?</h3>
          <p>Sí, imprimimos logotipos, colores y mensajes de patrocinadores para que cada arco funcione como soporte publicitario.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Realizan envíos a Guadalajara y otros estados?</h3>
          <p>Entregamos en Guadalajara y coordinamos envíos nacionales, incluyendo embalaje y seguimiento para que llegue listo para instalarse.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Qué tamaños están disponibles?</h3>
          <p>Fabricamos desde arcos compactos para plazas hasta estructuras monumentales para maratones y activaciones masivas. Te asesoramos sobre la altura idónea.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
