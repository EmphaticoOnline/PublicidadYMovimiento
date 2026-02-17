import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function TunelsPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Túneles Inflables en Venta | Túneles Publicitarios Personalizados',
    'Túneles inflables en venta y túneles personalizados para metas y entradas impactantes. Fabricación propia en Guadalajara con envíos nacionales.',
    'https://grupopmpublicidad.mx/tuneles'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuál es el precio de un túnel inflable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio depende del tamaño, el tipo de estructura (cuadrado, curvo o arco), la impresión y los refuerzos estructurales; cotizamos cada proyecto para ajustar la inversión a tu evento.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Fabrican túneles inflables personalizados?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, diseñamos túneles inflables personalizados con estructuras y gráficos a medida para reforzar la identidad de tu activación.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo tarda la fabricación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El tiempo de fabricación promedio oscila entre 3 y 5 semanas dependiendo de la complejidad del diseño y el volumen de producción.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Realizan envíos a Guadalajara y otros estados?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Producimos en Guadalajara y coordinamos envíos asegurados a toda la República Mexicana para que recibas tu túnel listo para instalar.'
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
        Túneles Inflables Publicitarios para Metas y Entradas
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Metas espectaculares para carreras, eventos deportivos y activaciones
      </h2>

      {/* GRID DE IMÁGENES TÚNELES */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/tuneles/tunel-cuadrado.jpg"
          alt="Túnel inflable personalizado cuadrado para meta de carrera"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/tuneles/tunel-curvo.jpg"
          alt="Túnel inflable curvo publicitario para eventos deportivos"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/tuneles/tunel-uno.jpg"
          alt="Túnel inflable en venta con impresión corporativa"
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
            Cotiza tus Túneles ahora
          </Link>
        </div>

        <p
          style={{
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0 auto',
            fontSize: '1.05rem',
            color: '#444',
            lineHeight: 1.6
          }}
        >
          Ofrecemos túneles inflables en venta con fabricación propia, diseño estructural personalizado y producción en Guadalajara para entregar piezas listas para activaciones corporativas y deportivas.
        </p>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
            ¿Cuál es el precio de un túnel inflable?
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
            El precio de un túnel inflable depende del tamaño, el tipo de estructura (cuadrado, curvo o arco), la impresión y los refuerzos estructurales, así como del nivel de personalización requerido para tu evento.
          </p>
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
        <strong>Los túneles inflables crean una entrada o meta espectacular para tus eventos.</strong>{' '}
        Perfectos para carreras, maratones y activaciones deportivas donde necesitas visibilidad aérea y presencia de marca contundente.
        Generan fotografías memorables y guían el flujo de asistentes hacia tu evento. No son estructuras importadas genéricas; son túneles diseñados estructuralmente para uso intensivo, fabricados en Guadalajara bajo estándares profesionales para campañas que exigen durabilidad y alto desempeño.
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
          Beneficios clave de los túneles inflables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Diseñados para carreras, eventos deportivos y activaciones con entrada memorable.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Entrada o meta espectacular:</strong> crea el momento clave del evento.</li>
          <li><strong>Branding de alto impacto:</strong> gran superficie para logos y mensajes.</li>
          <li><strong>Visibilidad aérea:</strong> destacan en tomas y fotografías desde lejos.</li>
          <li><strong>Ideal para maratones y eventos deportivos:</strong> guía y recibe a los participantes.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre túneles inflables
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio de un túnel inflable?</h3>
          <p>Depende del tamaño, la estructura, la impresión y los refuerzos; cotizamos cada pieza según tu evento.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Fabrican túneles inflables personalizados?</h3>
          <p>Sí, diseñamos túneles inflables personalizados con estructuras y gráficos alineados a tu marca.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuánto tiempo tarda la fabricación?</h3>
          <p>El tiempo estimado de fabricación es de 3 a 5 semanas dependiendo de la complejidad del diseño.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Realizan envíos a Guadalajara y otros estados?</h3>
          <p>Producimos en Guadalajara y enviamos a toda la República Mexicana con logística asegurada.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
