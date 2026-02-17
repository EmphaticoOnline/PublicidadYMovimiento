import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function JuegosInteractivosPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Juegos Interactivos Inflables en Venta | Juegos Inflables Personalizados',
    'Fabricamos juegos interactivos inflables personalizados para activaciones y eventos corporativos. Producción propia en Guadalajara con envíos nacionales.',
    'https://grupopmpublicidad.mx/juegos-interactivos'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuánto cuesta un juego inflable personalizado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El costo se define según dimensiones, complejidad del juego, sistemas de seguridad y nivel de personalización; cotizamos cada proyecto para alinearlo con tu activación.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se pueden fabricar a medida?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, diseñamos juegos interactivos inflables totalmente a medida para campañas específicas, integrando colores y mecánicas propias de tu marca.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Realizan envíos a todo México?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fabricamos en Guadalajara y enviamos a cualquier estado de la República Mexicana con logística asegurada para tu evento.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Son juegos para empresas o también para escuelas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Atendemos proyectos corporativos, agencias, gobiernos y escuelas; adaptamos la dinámica del juego para cada público.'
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
        Juegos Interactivos Inflables Personalizados en Venta
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Genera experiencia, interacción y recordación de marca
      </h2>
      {/* GRID DE IMÁGENES JUEGOS INTERACTIVOS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/juegos-interactivos/interactivo-amarillo.jpg"
          alt="Juego inflable interactivo personalizado para activaciones con alto engagement"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/juegos-interactivos/interactivo-basquet.jpg"
          alt="Juego inflable corporativo estilo básquet ideal para eventos y ferias"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/juegos-interactivos/interactivo-verde.jpg"
          alt="Juego inflable para activación de marca que genera participación y fotos para redes"
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
          Cotiza tus Juegos Interactivos ahora
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
        Fabricamos juegos inflables personalizados y juegos interactivos corporativos con diseño a medida, producción propia en Guadalajara y entregas nacionales para marcas que buscan experiencias memorables.
        Los desarrollamos en nuestras propias instalaciones con diseño estructural especializado y pruebas de resistencia para garantizar uso intensivo en activaciones corporativas.
        A diferencia de opciones genéricas importadas, nuestros juegos se diseñan específicamente para tu campaña.
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
        <strong>Los juegos interactivos inflables convierten tus activaciones en experiencias que la gente quiere vivir y compartir.</strong>{' '}
        Aumentan el tiempo de permanencia, generan participación y crean contenido para redes en eventos corporativos, ferias y promociones. También puedes complementar tu activación con nuestras <Link to="/replicas-inflables">Réplicas Inflables personalizadas</Link>,{' '}
        <Link to="/brincolines">Brincolines promocionales</Link> o <Link to="/arcos-meta">Arcos Meta inflables</Link>.
      </p>

      <div style={{ textAlign: 'center', marginTop: '2.3rem' }}>
        <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de un juego interactivo inflable?
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
          El precio de un juego inflable depende del tamaño, la complejidad de la dinámica, los sistemas de seguridad y el nivel de personalización. Solicita una cotización para recibir una propuesta alineada a tu evento.
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
          Beneficios clave de los juegos interactivos inflables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Diseñados para activaciones donde la interacción y el tiempo de permanencia son esenciales.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Aumenta el tiempo de permanencia del público:</strong> la gente se queda a jugar.</li>
          <li><strong>Ideal para activaciones de marca:</strong> participación directa con tu identidad.</li>
          <li><strong>Perfecto para eventos corporativos y ferias:</strong> dinamiza el flujo de visitantes.</li>
          <li><strong>Alto engagement y contenido para redes sociales:</strong> fotos y videos orgánicos.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre juegos interactivos inflables
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuánto cuesta un juego inflable personalizado?</h3>
          <p>Depende del tamaño, la mecánica y los acabados; cotizamos cada juego para que la inversión responda a tus objetivos de activación.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Se pueden fabricar a medida?</h3>
          <p>Sí, desarrollamos juegos interactivos inflables totalmente a medida, desde la estructura hasta los gráficos.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Realizan envíos a todo México?</h3>
          <p>Fabricamos en Guadalajara y enviamos a cualquier estado con acompañamiento logístico.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Son juegos para empresas o también para escuelas?</h3>
          <p>Trabajamos con empresas, agencias y escuelas, adaptando la experiencia al público de cada proyecto.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
