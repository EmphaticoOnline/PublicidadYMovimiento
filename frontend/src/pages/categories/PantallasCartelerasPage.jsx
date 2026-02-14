import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function PantallasCartelerasPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Pantallas y Carteleras Inflables | Publicidad de Gran Formato | Envíos Nacionales',
    'Pantallas y carteleras inflables publicitarias de gran formato ideales para eventos, conciertos y promociones. Impacto visual masivo. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/pantallas-carteleras'
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
        Pantallas y Carteleras Inflables de Gran Formato
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Impacto visual masivo para conciertos, eventos y promociones
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
          Cotiza tus Pantallas ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES PANTALLAS Y CARTELERAS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/pantallas-carteleras/oxxo.jpg"
          alt="Pantalla inflable publicitaria de gran formato para conciertos y eventos"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/pantallas-carteleras/pantalla-negra.jpg"
          alt="Cartelera inflable publicitaria ideal para promociones masivas"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/pantallas-carteleras/pantalla-roja.jpg"
          alt="Pantalla inflable de gran formato con branding para eventos y shows"
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
        <strong>Las pantallas y carteleras inflables de gran formato te dan exposición masiva en eventos y promociones.</strong>{' '}
        Funcionan como lienzos gigantes para tu marca en conciertos, ferias y activaciones, reforzando presencia y mensajes clave ante grandes audiencias.
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
          Beneficios clave de pantallas y carteleras inflables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Pensadas para escenarios, eventos masivos y campañas que requieren gran formato visible.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Gran formato para máxima exposición:</strong> mensajes que destacan a distancia.</li>
          <li><strong>Ideal para escenarios y eventos masivos:</strong> soporte visual principal.</li>
          <li><strong>Refuerza presencia de marca:</strong> espacio amplio para logos y anuncios.</li>
          <li><strong>Perfecto para conciertos y espectáculos:</strong> impacta al público desde cualquier ángulo.</li>
        </ul>
      </section>
    </div>
  )
}
