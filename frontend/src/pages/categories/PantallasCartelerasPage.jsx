import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function PantallasCartelerasPage() {
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
        PANTALLAS Y CARTELERAS
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
          alt="Pantalla OXXO"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/pantallas-carteleras/pantalla-negra.jpg"
          alt="Pantalla Negra"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/pantallas-carteleras/pantalla-roja.jpg"
          alt="Pantalla Roja"
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
        <strong>Las pantallas y carteleras son la solución definitiva para comunicar tu mensaje con claridad y presencia.</strong>{' '}
        Desde carteleras fijas hasta pantallas digitales, transformamos cualquier punto de venta o espacio público
        en un centro de comunicación efectivo. Ideales para tiendas, gasolineras, restaurantes y lugares donde necesitas
        información clara, ofertas vigentes y mensajes publicitarios que capten la atención al instante.
        <br /><br />
        Amplifica tu visibilidad y comunica con precisión mediante soluciones de cartelería moderna y profesional.
      </p>
    </div>
  )
}
