import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa6'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function ReplicasInflablesPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Réplicas Inflables Publicitarias Personalizadas | Inflables Gigantes en Venta',
    'Réplicas inflables publicitarias y réplicas inflables personalizadas en venta. Diseños gigantes a medida para marcas y activaciones. Disponibles en Guadalajara con envíos nacionales.',
    'https://grupopmpublicidad.mx/replicas-inflables'
  )

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuál es el precio de una réplica inflable personalizada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El precio depende del tamaño, el nivel de detalle y la impresión requerida. Cotizamos cada réplica inflable para alinearla con el presupuesto y los objetivos de tu marca.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuánto tiempo tarda la fabricación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El tiempo de producción varía según la complejidad, pero en promedio se programa entre 2 y 4 semanas. Confirmamos fechas con tu equipo para asegurar la entrega a tiempo.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Se pueden hacer figuras de cualquier producto?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, reproducimos botellas, empaques, personajes, mascotas y cualquier forma que represente a tu marca. Ajustamos proporciones y acabados para que se vea realista.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Realizan envíos a Guadalajara y otros estados?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Entregamos en Guadalajara y coordinamos envíos al resto de la República Mexicana con embalaje seguro y seguimiento hasta tu evento.'
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
        Réplicas Inflables Publicitarias y Personalizadas Hechas a Medida
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Convierte tu producto en un imán visual para eventos, promociones y puntos de venta
      </h2>
      {/* GRID DE IMÁGENES RÉPLICAS INFLABLES */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/replicas-inflables/replica-cordoba.jpg"
          alt="Réplica inflable publicitaria gigante de producto Córdoba, ideal para eventos y puntos de venta"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/replicas-inflables/replica-pemex.jpg"
          alt="Réplica inflable publicitaria gigante estilo Pemex para promociones y activaciones de marca"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/replicas-inflables/replica-tostadas.jpg"
          alt="Réplica inflable publicitaria gigante de tostadas para ferias, lanzamientos y tráfico peatonal"
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
          Cotiza tus Réplicas Inflables ahora
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
        Fabricamos cada réplica inflable personalizada según tu producto, personaje o marca. Nuestros inflables gigantes personalizados están disponibles en Guadalajara con envíos a toda la República Mexicana.
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
        <strong>Las réplicas inflables publicitarias convierten tu producto o personaje en un imán visual inmediato.</strong>{' '}
        Permiten reproducir envases, botellas, latas, mascotas o íconos de marca a gran escala para que destaquen desde lejos.
        Son ideales para lanzamientos, activaciones, ferias y puntos de venta donde necesitas captar la atención y generar recordación.
        Envíos a toda la República Mexicana para que tu campaña llegue a tiempo y con impacto.
      </p>

      <div style={{ textAlign: 'center', marginTop: '2.3rem' }}>
        <h2 style={{ fontSize: '1.55rem', color: '#222', marginBottom: '0.8rem' }}>
          ¿Cuál es el precio de una réplica inflable?
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
          El precio de una réplica inflable depende del tamaño, nivel de detalle, impresión y complejidad del diseño. Solicita una cotización personalizada para tu proyecto.
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
          Beneficios clave para maximizar tu visibilidad
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Impacta en lanzamientos, activaciones, ferias y puntos de venta con una réplica inflable que la gente identifica al instante.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Impacto inmediato:</strong> la gente identifica tu producto al instante.</li>
          <li><strong>Ideal para lanzamientos:</strong> activaciones, ferias y puntos de venta.</li>
          <li><strong>Personalización total:</strong> forma, colores y detalles de marca.</li>
          <li><strong>Alta recordación:</strong> fotos, redes sociales y tráfico peatonal.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: '2.8rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: '#222', marginBottom: '1.6rem' }}>
          Preguntas frecuentes sobre réplicas inflables personalizadas
        </h2>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuál es el precio de una réplica inflable personalizada?</h3>
          <p>Se define según el tamaño, el detalle y la impresión. Te enviamos propuestas alineadas a tu presupuesto y objetivos.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Cuánto tiempo tarda la fabricación?</h3>
          <p>Dependiendo de la complejidad puede tomar de 2 a 4 semanas. Planificamos contigo para garantizar la entrega antes de tu evento.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto 1.4rem', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Se pueden hacer figuras de cualquier producto?</h3>
          <p>Sí, trabajamos con envases, botellas, personajes, mascotas y cualquier forma que represente tu marca.</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', color: '#2c2c2c', lineHeight: 1.65 }}>
          <h3>¿Realizan envíos a Guadalajara y otros estados?</h3>
          <p>Entregamos directamente en Guadalajara y coordinamos envíos seguros al resto del país.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
