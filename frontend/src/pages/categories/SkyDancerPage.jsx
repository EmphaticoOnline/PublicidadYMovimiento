import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa6'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function SkyDancerPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Sky Dancer Publicitario Inflable | Precio y Venta en Guadalajara',
    'Sky Dancer publicitario inflable para negocios. Disponible en Guadalajara y con envíos a todo México. Conoce modelos, alturas y solicita cotización.',
    'https://grupopmpublicidad.mx/sky-dancer'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuál es el precio de un Sky Dancer publicitario?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio se determina según la altura, el diseño y la personalización requerida para tu marca. Agenda una cotización para recibir una propuesta enfocada en tus necesidades comerciales.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Qué altura tiene un Sky Dancer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Los Sky Dancers suelen fabricarse entre 4 y 8 metros para maximizar la visibilidad. Podemos orientarte sobre la altura ideal según el punto de instalación y el objetivo de tu campaña.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuánto dura un Sky Dancer inflable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Con uso y mantenimiento adecuados, un Sky Dancer puede operar en múltiples campañas. Utilizamos telas resistentes y turbinas preparadas para largas jornadas promocionales.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se puede personalizar con mi marca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, personalizamos color, impresión y mensajes para que el inflable funcione como un anuncio en movimiento que refuerza tu identidad visual en Guadalajara y el resto de México.'
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
      <h1 style={{ textAlign: 'center', fontSize: '2.3rem', lineHeight: 1.25 }}>
        Sky Dancer Publicitario Inflable para Negocios
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Publicidad en movimiento que atrae tráfico y clientes desde lejos
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
          src="/images/categories/sky-dancer/sky-amarillo.jpg"
          alt="Sky Dancer inflable publicitario alto amarillo en uso para negocio o evento, máxima visibilidad exterior"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/sky-dancer/sky-dancer.jpg"
          alt="Sky Dancer inflable publicitario alto multicolor animando evento promocional, ideal para atraer clientes"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/sky-dancer/sky-tiraloca.jpg"
          alt="Sky Dancer inflable publicitario alto tiraloca destacando en inauguración o promoción de negocio"
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
          <FaWhatsapp size={20} />
          Cotiza tu SKY DANCER ahora
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
        El Sky Dancer publicitario es uno de los inflables más visibles para atraer clientes desde lejos. Disponible en Guadalajara y con envíos a todo México, es ideal para negocios que buscan impacto inmediato.
      </p>

      {/* BLOQUE 3 – TEXTO COMERCIAL PRINCIPAL */}
      <p
        style={{
          textAlign: 'center',
          maxWidth: '840px',
          margin: '0 auto',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        <strong>El Sky Dancer es la pieza inflable publicitaria que más llama la atención en exterior.</strong>{' '}
        Su altura y movimiento constante generan publicidad en movimiento, captan miradas de peatones y tráfico vehicular y convierten tu punto de venta en un referente visible desde lejos.
        Ideal para inauguraciones, promociones, lanzamientos y campañas donde necesitas atraer flujo inmediato.
      </p>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '840px',
          margin: '1.3rem auto 0',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        Colores vibrantes, bailes visibles y fabricación robusta se combinan para ofrecer un inflable bailarín que funciona como faro visual. <span style={{ color: '#1a7f37', fontWeight: 600 }}>Envíos a toda la República Mexicana.</span>
      </p>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de un Sky Dancer publicitario?
        </h2>
        <p
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            color: '#444'
          }}
        >
          El precio de un Sky Dancer depende de la altura, el diseño y la personalización. Contáctanos para recibir una cotización personalizada según las necesidades de tu negocio.
        </p>
      </div>

      {/* BLOQUE 4 – BENEFICIOS */}
      <h2 style={{ textAlign: 'center', fontSize: '1.6rem', marginTop: '2.4rem', color: '#222' }}>
        ¿Por qué elegir un Sky Dancer inflable?
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
        <li><strong>Visibilidad a distancia:</strong> destaca por encima de autos, toldos y marquesinas.</li>
        <li><strong>Publicidad en movimiento:</strong> el baile constante atrae miradas en segundos.</li>
        <li><strong>Ideal para tráfico vehicular:</strong> guía a los clientes hacia tu punto de venta.</li>
        <li><strong>Recordación inmediata:</strong> colores vibrantes que refuerzan la marca en exteriores.</li>
        <li><strong>Montaje rápido:</strong> listo para operar con turbina incluida.</li>
        <li><strong>Durabilidad:</strong> materiales resistentes para uso repetido en campañas.</li>
      </ul>

      {/* BLOQUE 5 – IDEALES PARA */}
      <h2 style={{ textAlign: 'center', fontSize: '1.6rem', marginTop: '2.4rem', color: '#222' }}>
        Ideal para:
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
        <li>Inauguraciones y promociones donde se requiere captar atención inmediata.</li>
        <li>Tiendas, gasolineras y restaurantes en avenidas con tráfico vehicular.</li>
        <li>Eventos y activaciones al aire libre que necesitan un punto visual dominante.</li>
        <li>Campañas temporales con inflable bailarín que anuncia ofertas y lanzamientos.</li>
        <li>Ferias y plazas donde la altura ayuda a localizar tu stand rápidamente.</li>
        <li>Promociones continuas que buscan mantener flujo constante de clientes.</li>
      </ul>

      {/* BLOQUE – OTROS INFLABLES */}
      <section style={{ maxWidth: '900px', margin: '0 auto 2.4rem' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#222', marginBottom: '1rem', textAlign: 'center' }}>
          Otros inflables publicitarios que pueden interesarte
        </h2>
        <ul style={{ lineHeight: 1.65, color: '#2c2c2c', paddingLeft: '1.1rem' }}>
          <li>
            <Link to="/inflable-publicitario-con-movimiento">Inflable publicitario con movimiento (Tomi)</Link>
          </li>
          <li>
            <Link to="/botargas">Botargas</Link>
          </li>
          <li>
            <Link to="/arcos-inflables">Arcos inflables</Link>
          </li>
          <li>
            <Link to="/display">Display</Link>
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre el Sky Dancer publicitario
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio de un Sky Dancer publicitario?</h3>
          <p>El costo se define por la altura, los materiales y la personalización. Solicita una cotización y te asesoramos para elegir la configuración ideal.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Qué altura tiene un Sky Dancer?</h3>
          <p>Fabricamos Sky Dancers desde 4 hasta 8 metros para asegurar visibilidad en avenidas, plazas y eventos. Te ayudamos a definir la medida más efectiva.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuánto dura un Sky Dancer inflable?</h3>
          <p>Con el mantenimiento correcto, soporta campañas prolongadas gracias a telas reforzadas y turbinas diseñadas para trabajo continuo.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Se puede personalizar con mi marca?</h3>
          <p>Sí, imprimimos tus colores, logotipo y mensajes para que el inflable refuerce tu identidad y mantenga coherencia con tu estrategia comercial.</p>
        </div>
      </section>

      {/* BLOQUE 6 – CTA FINAL */}
      <div style={{ textAlign: 'center', margin: '0 0 0.7rem' }}>
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
          <FaWhatsapp size={20} />
          Cotiza tu SKY DANCER ahora
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
