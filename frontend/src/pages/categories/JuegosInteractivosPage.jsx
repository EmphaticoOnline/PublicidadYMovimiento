import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function JuegosInteractivosPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Juegos Interactivos Inflables | Activaciones y Eventos | Envíos Nacionales',
    'Juegos interactivos inflables para activaciones, eventos corporativos y promociones. Diversión, interacción y alto engagement de marca. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/juegos-interactivos'
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
        Juegos Interactivos Inflables para Activaciones y Eventos
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Genera experiencia, interacción y recordación de marca
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
          alt="Juego interactivo inflable para activaciones con alto engagement"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/juegos-interactivos/interactivo-basquet.jpg"
          alt="Juego inflable interactivo ideal para eventos corporativos y ferias"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/juegos-interactivos/interactivo-verde.jpg"
          alt="Juego interactivo inflable que genera participación y fotos para redes"
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
        <strong>Los juegos interactivos inflables convierten tus activaciones en experiencias que la gente quiere vivir y compartir.</strong>{' '}
        Aumentan el tiempo de permanencia, generan participación y crean contenido para redes en eventos corporativos, ferias y promociones.
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
          Beneficios clave de los juegos interactivos inflables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Diseñados para activaciones donde la interacción y el tiempo de permanencia son esenciales.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Aumenta el tiempo de permanencia del público:</strong> la gente se queda a jugar.</li>
          <li><strong>Ideal para activaciones de marca:</strong> participación directa con tu identidad.</li>
          <li><strong>Perfecto para eventos corporativos y ferias:</strong> dinamiza el flujo de visitantes.</li>
          <li><strong>Alto engagement y contenido para redes sociales:</strong> fotos y videos orgánicos.</li>
        </ul>
      </section>
    </div>
  )
}
