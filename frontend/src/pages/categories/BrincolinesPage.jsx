import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function BrincolinesPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Brincolines Inflables para Fiestas Infantiles | Diversión y Seguridad',
    'Brincolines inflables ideales para fiestas infantiles y eventos escolares. Diversión segura y atractivo visual para cualquier celebración.',
    'https://grupopmpublicidad.mx/brincolines'
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
        Brincolines Inflables para Fiestas Infantiles y Eventos
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Diversión garantizada que mantiene a las familias más tiempo en tu evento
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
          Cotiza tus Brincolines ahora
        </Link>
      </div>

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
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/brincolines/brincolin-rojo.jpg"
          alt="Brincolín inflable rojo llamativo ideal para celebraciones infantiles y ferias"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/brincolines/cocodrilo.jpg"
          alt="Brincolín inflable temática cocodrilo que atrae familias y niños en eventos"
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
        <strong>Los brincolines inflables son la atracción que engancha a familias y niños, asegurando más tiempo en tu evento.</strong>{' '}
        Ideales para fiestas infantiles, eventos escolares y celebraciones donde la diversión segura y visible es clave. Añaden color, movimiento y un punto de encuentro para fotos y convivencia.
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
    </div>
  )
}
