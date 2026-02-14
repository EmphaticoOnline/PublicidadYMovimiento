import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function ReplicasInflablesPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Réplicas Inflables Publicitarias | Inflable Gigante de Producto o Personaje | Envíos a Toda la República',
    'Réplicas inflables publicitarias hechas a medida: productos, botellas, latas, mascotas y personajes. Ideal para promociones y eventos. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/replicas-inflables'
  )

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
        Réplicas Inflables Publicitarias Gigantes Hechas a Medida
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Convierte tu producto en un imán visual para eventos, promociones y puntos de venta
      </h2>

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
          Cotiza tus Réplicas Inflables ahora
        </Link>
      </div>

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
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/replicas-inflables/replica-pemex.jpg"
          alt="Réplica inflable publicitaria gigante estilo Pemex para promociones y activaciones de marca"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/replicas-inflables/replica-tostadas.jpg"
          alt="Réplica inflable publicitaria gigante de tostadas para ferias, lanzamientos y tráfico peatonal"
          style={{ width: '100%', borderRadius: '14px' }}
        />
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
        <strong>Las réplicas inflables publicitarias convierten tu producto o personaje en un imán visual inmediato.</strong>{' '}
        Permiten reproducir envases, botellas, latas, mascotas o íconos de marca a gran escala para que destaquen desde lejos.
        Son ideales para lanzamientos, activaciones, ferias y puntos de venta donde necesitas captar la atención y generar recordación.
        Envíos a toda la República Mexicana para que tu campaña llegue a tiempo y con impacto.
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
    </div>
  )
}
