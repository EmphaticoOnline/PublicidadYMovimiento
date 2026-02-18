import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function CarpasToldosPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Carpas Publicitarias Personalizadas en Venta | Carpas Inflables y Toldos',
    'Carpas publicitarias personalizadas, carpas inflables y toldos personalizados en venta. Disponibles en Guadalajara con envíos nacionales para eventos y activaciones.',
    'https://grupopmpublicidad.mx/carpas-toldos'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuál es el precio de una carpa publicitaria?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio cambia según el tamaño, el tipo de estructura, la impresión y el nivel de personalización. Cotizamos cada carpa para alinear la propuesta con tu evento y presupuesto.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Qué tamaños están disponibles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fabricamos carpas en medidas estándar y especiales; adaptamos altura y laterales para cubrir desde módulos compactos hasta pabellones para ferias.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se pueden personalizar con mi marca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, imprimimos logotipos, gráficos y mensajes en todas las caras de la carpa o toldo para asegurar visibilidad en activaciones y puntos de venta.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Realizan envíos a Guadalajara y otros estados?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Producimos en Guadalajara y coordinamos envíos asegurados a toda la República Mexicana para que recibas tu carpa lista para instalar.'
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
      {/* BLOQUE 1 – HERO */}
        <h1 style={{ textAlign: 'center', fontSize: '2.2rem' }}>
          Carpas Publicitarias Personalizadas y Toldos en Venta
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Cobertura con marca para ferias, activaciones al aire libre y eventos corporativos
      </h2>
      {/* BLOQUE 2 – GRID DE IMÁGENES */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/carpas-toldos/toldo-inflable.jpg"
          alt="Carpa inflable publicitaria con cobertura de marca para activaciones"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/carpas-toldos/toldo-mission.jpg"
          alt="Carpa personalizada tipo mission con impresión para eventos"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/carpas-toldos/toldo-selgamex.jpg"
          alt="Toldo publicitario personalizado con logotipo Selgamex"
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
          Cotiza tus Carpas y Toldos ahora
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
          Fabricamos carpas personalizadas y carpas inflables publicitarias para eventos, activaciones y puntos de venta. Nuestra producción se realiza en Guadalajara con envíos a toda la República Mexicana y contamos con carpas publicitarias en venta listas para impulsar tus campañas.
        </p>

      <div style={{ textAlign: 'center', marginTop: '0.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de una carpa publicitaria?
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
          El precio de una carpa publicitaria depende del tamaño, tipo de estructura, impresión y nivel de personalización. Solicita una cotización para recibir una propuesta alineada a tu evento.
        </p>
      </div>

      {/* BLOQUE 3 – TEXTO COMERCIAL PRINCIPAL */}
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
        <strong>Nuestras carpas publicitarias y toldos personalizados combinan protección contra sol y lluvia con presencia de marca memorable.</strong>{' '}
        Ideales para ferias comerciales, activaciones al aire libre y eventos corporativos, brindan sombra cómoda, visibilidad y un espacio para carpas promocionales con impresión de alta calidad; estas carpas publicitarias personalizadas refuerzan cada contacto con tu público.
        Ofrecemos personalización completa en tamaños, colores y gráficas, con carpas impresas con logotipo que se adaptan a cada campaña sin perder la estética corporativa. Si necesitas más opciones de alto impacto, conoce también nuestro <Link to="/sky-dancer">Sky Dancer inflable</Link>{' '}
        o nuestras <Link to="/replicas-inflables">Réplicas Inflables personalizadas</Link>.
      </p>

      {/* BLOQUE 4 – ¿Por qué elegir...? */}
      <h2 style={{ textAlign: 'center', fontSize: '1.6rem', marginTop: '2.4rem', color: '#222' }}>
        ¿Por qué elegir nuestras Carpas y Toldos?
      </h2>
      <ul
        style={{
          maxWidth: '900px',
          margin: '1.4rem auto 2rem',
          paddingLeft: '1.1rem',
          color: '#2c2c2c',
          lineHeight: 1.65
        }}
      >
        <li><strong>Estructuras resistentes:</strong> diseñadas para uso intensivo en interior y exterior.</li>
        <li><strong>Impresión de alta calidad:</strong> gráficas nítidas para toldos personalizados y carpas corporativas.</li>
        <li><strong>Montaje rápido:</strong> armados ágiles para equipos en ferias y activaciones.</li>
        <li><strong>Tamaños personalizados:</strong> adaptamos la medida de cada carpa para eventos según tu espacio.</li>
        <li><strong>Laterales desmontables:</strong> flexibilidad para aperturas, sombra y flujo de personas.</li>
        <li><strong>Uso interior y exterior:</strong> soluciones estables para climas variables y estructuras para activaciones.</li>
      </ul>

      {/* BLOQUE 5 – IDEALES PARA */}
      <h2 style={{ textAlign: 'center', fontSize: '1.6rem', marginTop: '2.4rem', color: '#222' }}>
        Ideales para:
      </h2>
      <ul
        style={{
          maxWidth: '900px',
          margin: '1.4rem auto 2.2rem',
          paddingLeft: '1.1rem',
          color: '#2c2c2c',
          lineHeight: 1.65
        }}
      >
        <li>Ferias y exposiciones donde necesitas carpas para eventos con imagen de marca.</li>
        <li>Activaciones de marca y carpas promocionales en exteriores.</li>
        <li>Eventos deportivos con zonas de sombra y carpas corporativas.</li>
        <li>Promociones en retail con toldos personalizados y módulos vistosos.</li>
        <li>Campañas gubernamentales que requieren estructuras para activaciones informativas.</li>
        <li>Eventos escolares y comunitarios con carpas impresas con logotipo.</li>
      </ul>

      {/* BLOQUE 6 – CTA FINAL */}
      <div style={{ textAlign: 'center', margin: '0 0 0.5rem' }}>
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
            padding: '1.05rem 2.6rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '1.12rem',
            fontWeight: 700,
            boxShadow: '0 10px 24px rgba(0,0,0,0.18)'
          }}
        >
          Cotiza tus Carpas y Toldos ahora
        </Link>
      </div>

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre carpas publicitarias
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio de una carpa publicitaria?</h3>
          <p>Depende del tamaño, la estructura y la impresión; cotizamos cada proyecto para ajustarlo a tu presupuesto y objetivos de marca.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Qué tamaños están disponibles?</h3>
          <p>Contamos con medidas estándar y fabricaciones especiales para cubrir desde módulos compactos hasta pabellones completos.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Se pueden personalizar con mi marca?</h3>
          <p>Sí, imprimimos logotipos y gráficos en laterales, techos y faldones para asegurar visibilidad en activaciones.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Realizan envíos a Guadalajara y otros estados?</h3>
          <p>Fabricamos en Guadalajara y enviamos a cualquier estado de la República Mexicana con logística asegurada.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
