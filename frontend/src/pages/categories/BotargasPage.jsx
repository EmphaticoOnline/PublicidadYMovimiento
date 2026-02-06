import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function BotargasPage() {
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
        BOTARGAS
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
          Cotiza tus BOTARGAS ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES BOTARGAS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/botargas/botarga-elote.jpg"
          alt="Botarga Elote"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/botargas/botarga-tres.jpg"
          alt="Botarga Tres"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/botargas/botarga-zgas.jpg"
          alt="Botarga ZGAS"
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
        <strong>Las botargas son personajes vivos que transforman cualquier evento en una experiencia inolvidable.</strong>{' '}
        Desde carismáticas mascotas corporativas hasta personajes temáticos, nuestras botargas conectan directamente
        con el público, creando interacción, diversión y recordación de marca. Ideales para inauguraciones, ferias,
        activaciones, eventos infantiles y cualquier ocasión donde necesites generar engagement emocional y visual.
        <br /><br />
        Trae tu marca a la vida con personajes auténticos que cautivan, entretienen y dejan una huella permanente
        en la memoria de tu audiencia.
      </p>
    </div>
  )
}
