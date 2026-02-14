import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function ArcosMetaPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Arcos Meta Inflables para Carreras y Eventos Deportivos | Envíos a Toda la República',
    'Arcos meta inflables ideales para carreras, maratones, eventos deportivos y activaciones de marca. Estructura llamativa y resistente. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/arcos-meta'
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
        Arcos Meta Inflables Profesionales para Carreras y Eventos Deportivos
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        El punto visual que marca la meta y eleva el impacto de tu evento
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
          alt="Arco meta inflable profesional curvo para carreras y maratones, alta visibilidad en eventos deportivos"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/arcos-meta/arco-deea.jpg"
          alt="Arco meta inflable publicitario DEEA para llegada y salida de eventos deportivos con patrocinadores"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/arcos-meta/arco-evo.jpg"
          alt="Arco meta inflable EVO resaltando la meta en maratones y activaciones de marca"
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
        <strong>Los arcos meta inflables son el punto central que guía a corredores y público en carreras, maratones y eventos deportivos.</strong>{' '}
        Personalizables en tamaño, forma y diseño, ofrecen máxima visibilidad para patrocinadores y marcas, y crean un ambiente profesional y memorable. Su fácil transporte e instalación los hace ideales para marcar la salida y llegada, darle identidad a la meta y convertirla en un símbolo de logro.
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
          Beneficios clave para tus carreras y eventos
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Diseñados para carreras, maratones y activaciones deportivas donde el arco es el punto visual principal del evento.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Símbolo de meta y logro:</strong> señala claramente el inicio y la llegada.</li>
          <li><strong>Alta visibilidad para público y participantes:</strong> destaca desde lejos y guía el flujo del evento.</li>
          <li><strong>Ideal para patrocinadores y branding:</strong> superficie lista para logos y mensajes.</li>
          <li><strong>Estructura resistente y personalizable:</strong> adaptada a cada recorrido y condición.</li>
        </ul>
      </section>
    </div>
  )
}
