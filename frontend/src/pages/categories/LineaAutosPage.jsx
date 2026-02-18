import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function LineaAutosPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Fundas Publicitarias para Auto en Venta | Cubierta 100% Opaca | Fabricación en Guadalajara',
    'Fundas publicitarias para auto en venta, 100% opacas y con bloqueo total del sol. Cubiertas personalizadas fabricadas en Guadalajara con impresión a la medida y envíos a todo México.',
    'https://grupopmpublicidad.mx/linea-autos'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿La funda bloquea completamente el sol?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, la cubierta personalizada para automóvil está diseñada para ofrecer protección solar total para autos estacionados gracias a su tela 100% opaca.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Es realmente 100% opaca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es 100% NO traslúcida y bloquea por completo los rayos UV, evitando que la luz atraviese la funda.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se puede imprimir con cualquier diseño?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fabricamos en Guadalajara y personalizamos totalmente la funda para coche personalizada en venta con tu diseño, logotipos y colores corporativos.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se fabrican en Guadalajara?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Toda la línea se fabrica en nuestro taller de Guadalajara para mantener control de calidad y tiempos de entrega.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuál es el precio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio de una funda publicitaria depende del modelo del vehículo, el nivel de personalización, el volumen y los acabados finales. Cotiza por WhatsApp para recibir una propuesta exacta.'
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
        Fundas Publicitarias para Auto en Venta con Bloqueo Solar Total
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Branding vehicular fijo de alto impacto visual
      </h2>


      {/* GRID DE IMÁGENES LÍNEA PARA AUTOS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/linea-autos/autos-cubierta.jpg"
          alt="Funda publicitaria para auto en venta con cubierta automotriz 100% opaca"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/linea-autos/autos-funda.jpg"
          alt="Cubierta personalizada fabricada en Guadalajara para protección solar total"
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
            Cotiza tu Línea para Autos ahora
          </Link>
        </div>

        <p
          style={{
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0.9rem auto 2rem',
            fontSize: '1.1rem',
            lineHeight: 1.75,
            color: '#2c2c2c'
          }}
        >
          Nuestra funda publicitaria para auto en venta es 100% NO traslúcida, bloquea completamente el sol y protege el interior del vehículo mejor que cualquier funda convencional.
          A diferencia de fundas traslúcidas que dejan pasar luz y calor, esta cubierta personalizada para automóvil es realmente opaca y ofrece protección solar total para autos estacionados.
          Fabricamos en Guadalajara una solución permanente, no de renta, con personalización total para campañas que necesitan presencia fija y cuidado real de pintura e interiores.
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
        <strong>Las fundas y cubiertas impresas exhiben tu marca cuando el vehículo está estacionado.</strong>{' '}
        Ideales para agencias, exposiciones y flotillas detenidas, combinan protección contra sol e intemperie con presencia visual fija y elegante.
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
        Perfectas para exhibiciones en sala, patios de agencia y estacionamientos donde requieres branding estático creíble y profesional, sin hablar de circulación ni mensajeros rodantes.
      </p>

      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto 2.8rem',
          padding: '1.5rem',
          borderRadius: '18px',
          backgroundColor: '#f7f7f7',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '1.6rem', color: '#1f1f1f', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de una funda publicitaria para auto?
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#333', marginBottom: '1rem' }}>
          El precio de una funda publicitaria depende del modelo del vehículo, el nivel de personalización, el volumen y los acabados especiales que requiera tu cubierta automotriz Guadalajara.
        </p>
        <ul
          style={{
            textAlign: 'left',
            display: 'inline-block',
            margin: '0 auto 1.4rem',
            fontSize: '1rem',
            color: '#333',
            lineHeight: 1.7
          }}
        >
          <li>Modelo específico de la unidad (sedán, SUV, pick-up, etc.).</li>
          <li>Nivel de personalización e impresión a todo color.</li>
          <li>Volumen de fundas solicitadas para tu flotilla.</li>
          <li>Acabados y refuerzos adicionales según la exposición.</li>
        </ul>
        <Link
          to="/#"
          onClick={e => {
            e.preventDefault()
            handleWhatsappClick()
          }}
          style={{
            display: 'inline-block',
            color: '#fff',
            backgroundColor: '#25D366',
            padding: '0.9rem 2rem',
            borderRadius: '999px',
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow: '0 8px 20px rgba(0,0,0,0.12)'
          }}
        >
          Cotiza por WhatsApp y conoce tu precio
        </Link>
      </div>

      <ul
        style={{
          maxWidth: '840px',
          margin: '1.8rem auto',
          paddingLeft: '1.1rem',
          color: '#2c2c2c',
          lineHeight: 1.65
        }}
      >
        <li><strong>Branding para autos estacionados:</strong> visibilidad en agencias y exhibiciones.</li>
        <li><strong>Protección contra sol e intemperie:</strong> cuida la unidad mientras muestra tu marca.</li>
        <li><strong>Imagen elegante y fija:</strong> presencia profesional sin prometer movilidad.</li>
        <li><strong>Flotillas detenidas:</strong> unifica la presentación de múltiples vehículos.</li>
      </ul>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        Usa tus autos estacionados como soporte de branding fijo y consistente, reforzando la imagen corporativa donde más se ve.
        Integra esta funda para coche personalizada en venta con soluciones como
        {' '}
        <Link to="/display" style={{ color: '#c00', fontWeight: 600 }}>
          Displays promocionales
        </Link>
        ,
        {' '}
        <Link to="/publiback" style={{ color: '#c00', fontWeight: 600 }}>
          Publiback de alto formato
        </Link>
        ,
        {' '}
        <Link to="/cilindros-publicitarios" style={{ color: '#c00', fontWeight: 600 }}>
          cilindros inflables
        </Link>
        {' '}
        y
        {' '}
        <Link to="/pantallas-carteleras" style={{ color: '#c00', fontWeight: 600 }}>
          pantallas inflables
        </Link>
        {' '}
        para dominar cada punto fijo de exhibición.
      </p>

      <div
        style={{
          maxWidth: '900px',
          margin: '2.8rem auto 0',
          padding: '2rem 1.5rem',
          border: '1px solid #ececec',
          borderRadius: '16px',
          backgroundColor: '#fff'
        }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '1.2rem', color: '#1a1a1a' }}>
          Preguntas frecuentes sobre fundas publicitarias para auto
        </h2>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#111' }}>¿La funda bloquea completamente el sol?</h3>
          <p style={{ lineHeight: 1.7, color: '#333' }}>
            Sí, ofrecemos protección solar total para autos estacionados, evitando que los rayos UV toquen la carrocería o el interior.
          </p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#111' }}>¿Es realmente 100% opaca?</h3>
          <p style={{ lineHeight: 1.7, color: '#333' }}>
            Es una cubierta 100% NO traslúcida, ideal para campañas que requieren bloqueos totales y mensajes visibles día y noche.
          </p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#111' }}>¿Se puede imprimir con cualquier diseño?</h3>
          <p style={{ lineHeight: 1.7, color: '#333' }}>
            Personalizamos por completo la funda publicitaria, desde ilustraciones full color hasta branding minimalista, manteniendo calidad fotográfica.
          </p>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#111' }}>¿Se fabrican en Guadalajara?</h3>
          <p style={{ lineHeight: 1.7, color: '#333' }}>
            Sí, controlamos la fabricación propia en Guadalajara para entregar fundas consistentes y listas para enviar a todo México.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: '1.2rem', color: '#111' }}>¿Cuál es el precio?</h3>
          <p style={{ lineHeight: 1.7, color: '#333' }}>
            El precio funda publicitaria se determina según modelo, personalización, volumen y acabados; solicita tu cotización para recibir la propuesta exacta.
          </p>
        </div>
      </div>

      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </div>
  )
}
