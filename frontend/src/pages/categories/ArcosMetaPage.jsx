import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function ArcosMetaPage() {
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
        ARCOS META INFLABLES
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
          Cotiza tu Arco Meta ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES ARCOS META */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/arcos-meta/arco-curvo.jpg"
          alt="Arco Curvo"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/arcos-meta/arco-deea.jpg"
          alt="Arco DEEA"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/arcos-meta/arco-evo.jpg"
          alt="Arco EVO"
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
        <strong>Los arcos meta inflables son el punto de inicio y llegada perfecto para cualquier evento deportivo o promocional.</strong>{' '}
        Personalizables en tamaño, forma y diseño, ofrecen máxima visibilidad para patrocinadores y marcas, y crean un ambiente profesional y memorable. Su fácil transporte e instalación los hace ideales para carreras, maratones, ferias y activaciones donde destacar es fundamental.
      </p>
    </div>
  )
}
