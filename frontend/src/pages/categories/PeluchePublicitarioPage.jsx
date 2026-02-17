import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function PeluchePublicitarioPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Peluches Publicitarios Personalizados en Venta | Fabricación en Guadalajara',
    'Peluches publicitarios personalizados en venta, fabricados en Guadalajara con diseño a medida y envíos a todo México. Producción propia para campañas y promociones corporativas.',
    'https://grupopmpublicidad.mx/peluches-publicitarios'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Los peluches publicitarios están en venta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, fabricamos peluches publicitarios personalizados en venta para campañas y promociones corporativas.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se pueden diseñar desde cero?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Desarrollamos peluches promocionales desde cero con personalización total en forma, colores, accesorios, bordados e impresión.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Dónde se fabrican?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fabricamos en Guadalajara con producción propia y enviamos a todo México.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuál es el precio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio depende del tamaño, el volumen, el nivel de personalización y los acabados como bordado o impresión.'
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
        Peluches Publicitarios Personalizados en Venta
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Merchandising abrazable para regalos corporativos y recordación de marca
      </h2>

      {/* GRID DE IMÁGENES PELUCHE PUBLICITARIO */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/peluche-publicitario/peluche-leopardo.jpg"
          alt="Peluche publicitario corporativo en venta para activaciones de marca"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/peluche-publicitario/peluche-pulmones.jpg"
          alt="Peluche promocional personalizado con diseño a medida"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/peluche-publicitario/peluche-scribe.jpg"
          alt="Peluche publicitario en venta para campañas de marca"
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
            Cotiza tus Peluches ahora
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
          Desarrollamos peluches publicitarios personalizados para venta directa, con producción propia en Guadalajara y control total de calidad en cada etapa del proceso.
        </p>

        <div style={{ textAlign: 'center', marginTop: '2.3rem' }}>
          <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
            ¿Cuál es el precio de un peluche publicitario?
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
            El precio depende del tamaño del peluche, el volumen de producción, el nivel de personalización, los detalles bordados o impresos y la complejidad del diseño. Escríbenos por WhatsApp con tu concepto y recibirás una cotización con tiempos estimados de producción.
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
        <strong>Los peluches publicitarios son piezas tangibles y coleccionables que generan conexión emocional.</strong>{' '}
        Desde mascotas de marca hasta personajes temáticos, funcionan como merchandising y regalo corporativo que la gente quiere conservar.
        Ideales para activaciones emocionales, programas de lealtad y obsequios donde buscas recordación cercana y amable. Un peluche bien ejecutado se convierte en una inversión estratégica de marca que prolonga la vida de tus campañas y refuerza la lealtad.
        <br /><br />
        Convierte tu marca en un objeto abrazable que tus clientes quieran guardar, compartir y recordar durante años. Complementa tu campaña con nuestros <Link to="/botargas">Botargas</Link>, <Link to="/replicas-inflables">Réplicas Inflables</Link> y <Link to="/juegos-interactivos">Juegos Interactivos</Link> para crear experiencias inmersivas.
      </p>

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre peluches publicitarios
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Los peluches publicitarios están en venta?</h3>
          <p>Sí, fabricamos peluches publicitarios personalizados en venta con producción propia para campañas corporativas.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Se pueden diseñar desde cero?</h3>
          <p>Diseñamos cada peluche desde cero con personalización total en forma, materiales, accesorios y acabados.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', lineHeight: 1.65 }}>
          <h3>¿Dónde se fabrican?</h3>
          <p>Fabricamos en nuestra planta de Guadalajara y enviamos pedidos a todo México.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio?</h3>
          <p>El costo depende del tamaño, la cantidad y el grado de personalización como bordado o impresión; cotizamos cada proyecto.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
