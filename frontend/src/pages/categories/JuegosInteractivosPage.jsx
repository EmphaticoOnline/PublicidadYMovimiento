import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function JuegosInteractivosPage() {
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
        JUEGOS INTERACTIVOS
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
          Cotiza tus Juegos Interactivos ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES JUEGOS INTERACTIVOS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/juegos-interactivos/interactivo-amarillo.jpg"
          alt="Juego Interactivo Amarillo"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/juegos-interactivos/interactivo-basquet.jpg"
          alt="Juego Interactivo Básquet"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/juegos-interactivos/interactivo-verde.jpg"
          alt="Juego Interactivo Verde"
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
        <strong>Los juegos interactivos son la diversión que engancha a tu audiencia.</strong>{' '}
        Desde competencias deportivas hasta entretenimiento familiar, generan engagement real y memorable.
        Ideales para ferias, eventos corporativos, centros comerciales y activaciones donde buscas que tu marca
        sea sinónimo de diversión, interacción y entretenimiento de calidad.
        <br /><br />
        Transforma tu evento en una experiencia lúdica que tus visitantes disfrutarán, compartirán y recordarán
        asociada directamente con tu marca.
      </p>
    </div>
  )
}
