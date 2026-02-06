import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function KitsPage() {
  const { handleWhatsappClick, loading } = useWhatsappLead()
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
        KITS
      </h1>

      {/* CTA PRINCIPAL */}
      <div style={{ textAlign: 'center', margin: '1.5rem 0 2.5rem' }}>
        <Link
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
        <strong>Los kits publicitarios son soluciones integrales para activaciones y merchandising de marca.</strong>{' '}
        Combinan múltiples elementos publicitarios en paquetes personalizables que garantizan coherencia visual
        y máximo impacto. Ideales para lanzamientos de producto, eventos corporativos, campañas promocionales
        y cualquier activación donde necesites una propuesta visual completa y coordinada.
        <br /><br />
        Entrega a tu audiencia una experiencia de marca completa, coordinada y memorable con kits que
        trabajan juntos para potenciar tu mensaje.
      </p>
    </div>
  )
}
