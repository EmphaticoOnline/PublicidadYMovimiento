import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function BotargasPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Botargas Publicitarias en Venta | Botargas Personalizadas para Marca',
    'Botargas publicitarias en venta y botargas personalizadas para activaciones, centros comerciales y eventos. Disponibles en Guadalajara con envíos nacionales.',
    'https://grupopmpublicidad.mx/botargas'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuál es el precio de una botarga personalizada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio de una botarga personalizada se define por el tamaño, acabados, ventilación y accesorios promocionales incluidos. Cotizamos cada proyecto para asegurar que tu inversión genere impacto en activaciones y eventos.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo tarda la fabricación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El tiempo promedio de fabricación va de 3 a 5 semanas dependiendo de la complejidad del personaje y la agenda de producción. Te mantenemos informado durante todo el proceso para coordinar tu activación.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se pueden hacer personajes a medida?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, desarrollamos botargas a medida con base en tu mascota corporativa, personaje o concepto de campaña. Incluimos pruebas de color y ajustes para que la botarga represente fielmente a tu marca.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Realizan envíos a Guadalajara y otros estados?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nuestra producción se realiza en Guadalajara y coordinamos envíos asegurados a toda la República Mexicana para que recibas tu botarga lista para activarse.'
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
        Botargas Publicitarias y Personalizadas en Venta
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Convierte tu marca en un personaje que conecta y genera interacción
      </h2>
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
        Fabricamos botargas en venta totalmente personalizadas según tu marca o personaje. Cada botarga personalizada se produce en Guadalajara con envíos a toda la República Mexicana.
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
        <strong>Las botargas son personajes vivos que transforman activaciones y eventos en experiencias memorables.</strong>{' '}
        Conecta con tu público en centros comerciales, inauguraciones y eventos infantiles, generando interacción y recordación de marca con un personaje que representa tu negocio. Si buscas otras opciones de alto impacto, también puedes conocer nuestro <Link to="/sky-dancer">Sky Dancer inflable</Link>{' '}
        o nuestras <Link to="/replicas-inflables">Réplicas Inflables personalizadas</Link>.
      </p>

      <div style={{ textAlign: 'center', marginTop: '2.3rem' }}>
        <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de una botarga?
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
          El precio de una botarga depende del tamaño, nivel de detalle, sistema de ventilación y tipo de materiales. Solicita una cotización personalizada para tu proyecto.
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

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre botargas publicitarias
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio de una botarga personalizada?</h3>
          <p>Calculamos el precio según tamaño, materiales y accesorios; te guiamos para elegir la botarga que maximice tu presencia en activaciones.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuánto tiempo tarda la fabricación?</h3>
          <p>La producción tarda de 3 a 5 semanas dependiendo del personaje y los acabados especiales; coordinamos fechas para tu evento.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Se pueden hacer personajes a medida?</h3>
          <p>Desarrollamos botargas a medida basadas en tu mascota o concepto para que cada detalle represente a tu marca.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Realizan envíos a Guadalajara y otros estados?</h3>
          <p>Fabricamos en Guadalajara y enviamos a todo México con empaques seguros para que recibas tu botarga lista para activarse.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
