import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function KitsPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Kits Inflables Publicitarios | Paquetes para Activaciones | Envíos Nacionales',
    'Kits inflables publicitarios con solución integral y coordinación visual para campañas y activaciones. Imagen profesional lista para montar. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/kits'
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
        Kits Inflables Publicitarios Listos para Activar
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Paquetes completos para activaciones con imagen profesional
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
          Cotiza tus KITS ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES KITS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/kits/kits-agave.jpg"
          alt="Kit Agave"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/kits/kits-santatere.jpg"
          alt="Kit Santatere"
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
        <strong>Los kits inflables reúnen todo lo necesario para activar tu campaña con coherencia visual.</strong>{' '}
        Ideales para campañas temporales, lanzamientos y eventos donde requieres una solución integral y profesional lista para montar.
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
          Beneficios clave de los kits inflables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Paquetes completos listos para activaciones con imagen coordinada.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Solución integral:</strong> todo el set listo para activarse.</li>
          <li><strong>Imagen profesional:</strong> presentación uniforme y cuidada.</li>
          <li><strong>Coordinación visual:</strong> piezas que combinan entre sí.</li>
          <li><strong>Ideal para campañas temporales:</strong> monta y desmonta rápido.</li>
        </ul>
      </section>
    </div>
  )
}
