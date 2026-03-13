import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function BrincolinesPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Brincolines Inflables en Venta para Negocio | Fabricación en Guadalajara',
    'Brincolines inflables en venta para emprendedores, salones y organizadores de eventos. Fabricación en Guadalajara con envíos a todo México.',
    'https://grupopmpublicidad.mx/brincolines'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Los brincolines están en venta o renta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Este catálogo está enfocado en brincolines en venta para emprendedores, salones de eventos y negocios que requieren un activo propio y rentable.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuál es el precio de un brincolín inflable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio cambia según el tamaño, el diseño y la personalización. Cotizamos cada proyecto para ofrecer opciones alineadas a tu presupuesto y tipo de evento.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se pueden personalizar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, personalizamos colores, impresión y accesorios para que el brincolín represente tu marca o la temática de tu negocio.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Realizan envíos a Guadalajara y otros estados?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Entregamos en Guadalajara y coordinamos envíos a toda la República Mexicana para que recibas tu brincolín sin complicaciones.'
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
        Brincolines Inflables en Venta para Fiestas y Negocio
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Diversión garantizada que mantiene a las familias más tiempo en tu evento
      </h2>
      {/* GRID DE IMÁGENES BRINCOLINES */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/brincolines/brincolin-azul.jpg"
          alt="Brincolín inflable azul para fiestas infantiles y eventos escolares con alta seguridad"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/brincolines/brincolin-rojo.jpg"
          alt="Brincolín inflable rojo llamativo ideal para celebraciones infantiles y ferias"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/brincolines/cocodrilo.jpg"
          alt="Brincolín inflable temática cocodrilo que atrae familias y niños en eventos"
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
          Cotiza tus Brincolines ahora
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
        Nuestros brincolines inflables en venta están diseñados para emprendedores y organizadores de eventos que buscan un producto duradero y rentable. Disponibles en Guadalajara con envíos a todo México.
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
        <strong>Los brincolines inflables son la atracción que engancha a familias y niños, asegurando más tiempo en tu evento.</strong>{' '}
        Ideales para fiestas infantiles, eventos escolares y celebraciones donde la diversión segura y visible es clave. Añaden color, movimiento y un punto de encuentro para fotos y convivencia.
      </p>

      <div style={{ textAlign: 'center', marginTop: '2.3rem' }}>
        <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de un brincolín inflable?
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
          El precio de un brincolín inflable depende del tamaño, diseño y nivel de personalización. Solicita una cotización para recibir opciones según tu presupuesto y modelo de negocio.
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
          Beneficios clave de los brincolines inflables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Pensados para fiestas infantiles y eventos donde la diversión y la seguridad retienen a las familias.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Ideal para fiestas infantiles:</strong> diversión asegurada para niños.</li>
          <li><strong>Atractivo visual inmediato:</strong> colores y formas que llaman la atención.</li>
          <li><strong>Seguro y resistente:</strong> materiales pensados para uso intensivo.</li>
          <li><strong>Genera permanencia de familias:</strong> mantienen a padres e hijos más tiempo en el evento.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre brincolines en venta
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Los brincolines están en venta o renta?</h3>
          <p>Nuestro catálogo se enfoca en venta para que tengas un activo propio y puedas generar ingresos con él.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio de un brincolín inflable?</h3>
          <p>Varía según la altura, los accesorios y la personalización. Te guiamos para cotizar la opción que más rentable resulte para tu negocio.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Se pueden personalizar?</h3>
          <p>Sí, fabricamos con tus colores, logotipo o temática para reforzar tu marca y diferenciarte en cada evento.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Realizan envíos a Guadalajara y otros estados?</h3>
          <p>Entregamos en Guadalajara y coordinamos envíos a todo México, asegurando embalaje y logística para que recibas tu brincolín listo para usarse.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
