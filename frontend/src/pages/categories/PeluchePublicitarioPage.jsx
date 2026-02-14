import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function PeluchePublicitarioPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Peluche Publicitario Personalizado | Merchandising y Conexión Emocional | Envíos Nacionales',
    'Peluche publicitario personalizado tipo mascota o personaje. Merchandising abrazable para regalos corporativos, activaciones emocionales y recordación de marca. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/peluche-publicitario'
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
        Peluche publicitario personalizado para conexión emocional
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Merchandising abrazable para regalos corporativos y recordación de marca
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
          Cotiza tus Peluches ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES PELUCHE PUBLICITARIO */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/peluche-publicitario/peluche-leopardo.jpg"
          alt="Peluche Leopardo"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/peluche-publicitario/peluche-pulmones.jpg"
          alt="Peluche Pulmones"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/peluche-publicitario/peluche-scribe.jpg"
          alt="Peluche Scribe"
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
        <strong>Los peluches publicitarios son piezas tangibles y coleccionables que generan conexión emocional.</strong>{' '}
        Desde mascotas de marca hasta personajes temáticos, funcionan como merchandising y regalo corporativo que la gente quiere conservar.
        Ideales para activaciones emocionales, programas de lealtad y obsequios donde buscas recordación cercana y amable.
        <br /><br />
        Convierte tu marca en un objeto abrazable que tus clientes quieran guardar, compartir y recordar durante años.
      </p>
    </div>
  )
}
