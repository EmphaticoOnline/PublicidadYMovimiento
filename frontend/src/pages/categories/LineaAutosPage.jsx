import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function LineaAutosPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Publicidad para Autos Estacionados | Branding Vehicular Fijo | Envíos Nacionales',
    'Publicidad para autos estacionados en agencias, exposiciones y flotillas detenidas. Branding vehicular fijo de alto impacto visual.',
    'https://grupopmpublicidad.mx/linea-autos'
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
      <h1 style={{ textAlign: 'center', fontSize: '2.2rem' }}>
        Publicidad para autos estacionados en agencias y exposiciones
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Branding vehicular fijo de alto impacto visual
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
          Cotiza tu Línea para Autos ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES LÍNEA PARA AUTOS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/linea-autos/autos-cubierta.jpg"
          alt="Línea para Autos - Cubierta"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/linea-autos/autos-funda.jpg"
          alt="Línea para Autos - Funda"
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
        <strong>Las fundas y cubiertas impresas exhiben tu marca cuando el vehículo está estacionado.</strong>{' '}
        Ideales para agencias, exposiciones y flotillas detenidas, combinan protección contra sol e intemperie con presencia visual fija y elegante.
      </p>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '820px',
          margin: '1.4rem auto 0',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        Perfectas para exhibiciones en sala, patios de agencia y estacionamientos donde requieres branding estático creíble y profesional, sin hablar de circulación ni mensajeros rodantes.
      </p>

      <ul
        style={{
          maxWidth: '840px',
          margin: '1.8rem auto',
          paddingLeft: '1.1rem',
          color: '#2c2c2c',
          lineHeight: 1.65
        }}
      >
        <li><strong>Branding para autos estacionados:</strong> visibilidad en agencias y exhibiciones.</li>
        <li><strong>Protección contra sol e intemperie:</strong> cuida la unidad mientras muestra tu marca.</li>
        <li><strong>Imagen elegante y fija:</strong> presencia profesional sin prometer movilidad.</li>
        <li><strong>Flotillas detenidas:</strong> unifica la presentación de múltiples vehículos.</li>
      </ul>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        Usa tus autos estacionados como soporte de branding fijo y consistente, reforzando la imagen corporativa donde más se ve.
      </p>
    </div>
  )
}
