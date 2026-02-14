import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function PublituboPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Publitubo Publicitario Vertical | Branding Fijo Corporativo | Envíos Nacionales',
    'Publitubo publicitario vertical ideal para gasolineras, centros comerciales y campañas corporativas. Presencia fija profesional de alto impacto visual.',
    'https://grupopmpublicidad.mx/publitubo'
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
        Publitubo publicitario vertical de alto impacto
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Presencia fija profesional para campañas corporativas
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
          Cotiza tu PUBLITUBO ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES PUBLITUBO */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/publitubo/publitubos-blanco.jpg"
          alt="Publitubo Blanco"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/publitubo/publitubos-pri.jpg"
          alt="Publitubo Primario"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/publitubo/publitubos-verde.jpg"
          alt="Publitubo Verde"
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
        <strong>El Publitubo es un cilindro publicitario vertical pensado para branding fijo y corporativo.</strong>{' '}
        Brinda presencia sólida en gasolineras, centros comerciales y accesos donde necesitas un identificador visible y profesional.
        Su estructura fija mantiene la imagen institucional sin depender de movimiento o espectáculo.
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
        Ideal para campañas corporativas, señalización de puntos de servicio y promociones en sitio donde el público requiere una guía clara y una marca presente.
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
        <li><strong>Estructura fija:</strong> mantiene la forma y visibilidad en todo momento.</li>
        <li><strong>Branding institucional:</strong> refuerza imagen corporativa en sitio.</li>
        <li><strong>Gasolineras y centros comerciales:</strong> señaliza y atrae con claridad.</li>
        <li><strong>Imagen corporativa consistente:</strong> soporte cilíndrico profesional y estable.</li>
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
        Refuerza tu marca en accesos y puntos de venta con un soporte vertical confiable y de alto impacto visual.
      </p>
    </div>
  )
}
