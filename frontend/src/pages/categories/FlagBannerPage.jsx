import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function FlagBannerPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Flag Banner Publicitario en Venta | Banderolas Publicitarias Personalizadas',
    'Flag banner publicitario y banderolas publicitarias en venta para exterior y punto de venta. Personalizadas y disponibles en Guadalajara con envíos nacionales.',
    'https://grupopmpublicidad.mx/flag-banners'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuál es el precio de un flag banner publicitario?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio varía según el tamaño, la base y el nivel de personalización. Te enviamos una cotización con las configuraciones que más se ajusten a tu presupuesto.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Qué tamaños están disponibles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fabricamos flag banners en alturas para interior y exterior, desde formatos compactos hasta banderas tipo vela de gran impacto. Te asesoramos para elegir el tamaño ideal.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se pueden personalizar con mi marca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, imprimimos tus colores, logotipos y mensajes en telas resistentes al exterior para reforzar tu identidad visual en cada activación.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Realizan envíos a Guadalajara y otros estados?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Entregamos en Guadalajara y coordinamos envíos a toda la República Mexicana con empaques seguros para que tus banderolas lleguen listas para instalarse.'
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
        Flag Banner Publicitario y Banderolas Publicitarias para Negocios
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Señalización ligera y estratégica que dirige tráfico hacia tu negocio
      </h2>
      {/* GRID DE IMÁGENES FLAG BANNER */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/flag-banner/flag-repegi.jpg"
          alt="Flag banner publicitario Repegi para exterior, señalización ligera y visible"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/flag-banner/flag-subaru.jpg"
          alt="Flag banner publicitario Subaru ideal para promociones en calle y puntos de venta"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/flag-banner/flag-supercolchon.jpg"
          alt="Flag banner publicitario Supercolchón complementando inflables y dirigiendo tráfico"
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
          Cotiza tu FLAG BANNER ahora
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
        Nuestros flag banner publicitarios y banderolas publicitarias en venta están diseñados para negocios que buscan señalización ligera y efectiva. Disponibles en Guadalajara con envíos a toda la República Mexicana.
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
        <strong>Los flag banners publicitarios dan visibilidad ligera y constante en exterior, calles y puntos de venta.</strong>{' '}
        Su movimiento con el viento atrae miradas y guía a las personas hacia tu negocio, ideal para promociones, expos y como complemento de inflables grandes.
      </p>

      <div style={{ textAlign: 'center', marginTop: '2.3rem' }}>
        <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de un flag banner?
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
          El precio de un flag banner depende del tamaño, tipo de base y nivel de personalización. Solicita una cotización para conocer las opciones disponibles según tu presupuesto.
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
          Beneficios clave de los Flag Banners
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Pensados para señalización exterior y promociones rápidas que dirigen tráfico al punto de venta.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Visibilidad exterior inmediata:</strong> se mueven con el viento y destacan.</li>
          <li><strong>Ligero y fácil de instalar:</strong> montaje rápido para activaciones.</li>
          <li><strong>Ideal para promociones en calle y expos:</strong> atrae flujo peatonal y vehicular.</li>
          <li><strong>Complemento estratégico para inflables grandes:</strong> refuerza señalización y branding.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre flag banners publicitarios
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio de un flag banner publicitario?</h3>
          <p>Depende de la altura, el tipo de base y la personalización. Te guiamos para elegir la configuración más rentable.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Qué tamaños están disponibles?</h3>
          <p>Contamos con tamaños para interior y exterior, desde banderolas compactas hasta modelos altos tipo vela para máximo impacto.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Se pueden personalizar con mi marca?</h3>
          <p>Sí, imprimimos tus colores, logotipo y mensajes para que el flag banner refuerce tu identidad visual.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Realizan envíos a Guadalajara y otros estados?</h3>
          <p>Entregamos directamente en Guadalajara y coordinamos envíos a toda la República Mexicana.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
