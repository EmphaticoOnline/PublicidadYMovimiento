import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function PublibackPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Publiback Publicitario Portátil | Publicidad Humana en Calle | Envíos Nacionales',
    'Publiback publicitario portátil para activaciones en calle y eventos. Publicidad humana con alto impacto visual y contacto directo con peatones. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/publiback'
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
        Publiback publicitario portátil para activaciones en calle
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Publicidad humana con alto impacto visual y contacto directo
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
          Cotiza tu PUBLIBACK ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES PUBLIBACK */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/publiback/publiback-azul.jpg"
          alt="Publiback Azul"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/publiback/publiback-capsulina.jpg"
          alt="Publiback Capsulina"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/publiback/publiback-verde.jpg"
          alt="Publiback Verde"
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
        <strong>El Publiback es un cilindro publicitario portátil pensado para activaciones y presencia peatonal.</strong>{' '}
        Se lleva en la espalda y ofrece publicidad humana con movimiento controlado, ideal para contacto directo en calle, eventos y promociones.
        Refuerza campañas donde necesitas interacción inmediata y recordación a nivel de peatón.
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
        Con presencia móvil y dirigida, el Publiback ayuda a distribuir volantes, guiar flujos peatonales y sostener mensajes corporativos en recorridos.
      </p>

      {/* BENEFICIOS */}
      <ul
        style={{
          maxWidth: '840px',
          margin: '1.8rem auto',
          paddingLeft: '1.1rem',
          color: '#2c2c2c',
          lineHeight: 1.65
        }}
      >
        <li><strong>Activaciones en calle:</strong> visibilidad directa con publicidad humana.</li>
        <li><strong>Movimiento controlado:</strong> impacto visual sin perder orden ni seguridad.</li>
        <li><strong>Presencia peatonal:</strong> mensajes a la altura del público objetivo.</li>
        <li><strong>Interacción directa:</strong> facilita contacto y entrega de materiales.</li>
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
        Lleva tu mensaje a donde está la gente con un formato portátil, profesional y pensado para generar recuerdo inmediato.
      </p>
    </div>
  )
}
