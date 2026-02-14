import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function TunelsPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Túneles Inflables Publicitarios | Metas y Entradas Impactantes | Envíos Nacionales',
    'Túneles inflables publicitarios ideales como entrada o meta espectacular en maratones, eventos deportivos y activaciones. Branding de alto impacto y visibilidad aérea. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/tuneles'
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
        Túneles Inflables Publicitarios para Metas y Entradas
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Metas espectaculares para carreras, eventos deportivos y activaciones
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
          Cotiza tus Túneles ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES TÚNELES */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/tuneles/tunel-cuadrado.jpg"
          alt="Túnel Cuadrado"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/tuneles/tunel-curvo.jpg"
          alt="Túnel Curvo"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/tuneles/tunel-uno.jpg"
          alt="Túnel Uno"
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
        <strong>Los túneles inflables crean una entrada o meta espectacular para tus eventos.</strong>{' '}
        Perfectos para carreras, maratones y activaciones deportivas donde necesitas visibilidad aérea y branding de alto impacto.
        Generan fotografías memorables y guían el flujo de asistentes hacia tu marca.
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
          Beneficios clave de los túneles inflables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Diseñados para carreras, eventos deportivos y activaciones con entrada memorable.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Entrada o meta espectacular:</strong> crea el momento clave del evento.</li>
          <li><strong>Branding de alto impacto:</strong> gran superficie para logos y mensajes.</li>
          <li><strong>Visibilidad aérea:</strong> destacan en tomas y fotografías desde lejos.</li>
          <li><strong>Ideal para maratones y eventos deportivos:</strong> guía y recibe a los participantes.</li>
        </ul>
      </section>
    </div>
  )
}
