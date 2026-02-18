import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function CarpasToldosPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Carpas y Toldos Publicitarios Personalizados | Carpas para Eventos | Envíos Nacionales',
    'Carpas y toldos publicitarios personalizados para ferias, activaciones y eventos corporativos. Estructuras resistentes con impresión de alta calidad. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/carpas-toldos'
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
      {/* BLOQUE 1 – HERO */}
      <h1 style={{ textAlign: 'center', fontSize: '2.2rem' }}>
        Carpas y Toldos Publicitarios Personalizados para Eventos
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Cobertura con marca para ferias, activaciones al aire libre y eventos corporativos
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
          Cotiza tus Carpas y Toldos ahora
        </Link>
      </div>

      {/* BLOQUE 2 – GRID DE IMÁGENES */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/carpas-toldos/toldo-inflable.jpg"
          alt="Toldo Inflable"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/carpas-toldos/toldo-mission.jpg"
          alt="Toldo Mission"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/carpas-toldos/toldo-selgamex.jpg"
          alt="Toldo Selgamex"
          loading="lazy"
          style={{ width: '100%', borderRadius: '14px' }}
        />
      </div>

      {/* BLOQUE 3 – TEXTO COMERCIAL PRINCIPAL */}
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
        <strong>Nuestras carpas publicitarias y toldos personalizados combinan protección contra sol y lluvia con presencia de marca memorable.</strong>{' '}
        Ideales para ferias comerciales, activaciones al aire libre y eventos corporativos, brindan sombra cómoda, visibilidad y un espacio para carpas promocionales con impresión de alta calidad.
        Ofrecemos personalización completa en tamaños, colores y gráficas, con carpas impresas con logotipo que se adaptan a cada campaña sin perder la estética corporativa.
      </p>

      {/* BLOQUE 4 – ¿Por qué elegir...? */}
      <h2 style={{ textAlign: 'center', fontSize: '1.6rem', marginTop: '2.4rem', color: '#222' }}>
        ¿Por qué elegir nuestras Carpas y Toldos?
      </h2>
      <ul
        style={{
          maxWidth: '900px',
          margin: '1.4rem auto 2rem',
          paddingLeft: '1.1rem',
          color: '#2c2c2c',
          lineHeight: 1.65
        }}
      >
        <li><strong>Estructuras resistentes:</strong> diseñadas para uso intensivo en interior y exterior.</li>
        <li><strong>Impresión de alta calidad:</strong> gráficas nítidas para toldos personalizados y carpas corporativas.</li>
        <li><strong>Montaje rápido:</strong> armados ágiles para equipos en ferias y activaciones.</li>
        <li><strong>Tamaños personalizados:</strong> adaptamos la medida de cada carpa para eventos según tu espacio.</li>
        <li><strong>Laterales desmontables:</strong> flexibilidad para aperturas, sombra y flujo de personas.</li>
        <li><strong>Uso interior y exterior:</strong> soluciones estables para climas variables y estructuras para activaciones.</li>
      </ul>

      {/* BLOQUE 5 – IDEALES PARA */}
      <h2 style={{ textAlign: 'center', fontSize: '1.6rem', marginTop: '2.4rem', color: '#222' }}>
        Ideales para:
      </h2>
      <ul
        style={{
          maxWidth: '900px',
          margin: '1.4rem auto 2.2rem',
          paddingLeft: '1.1rem',
          color: '#2c2c2c',
          lineHeight: 1.65
        }}
      >
        <li>Ferias y exposiciones donde necesitas carpas para eventos con imagen de marca.</li>
        <li>Activaciones de marca y carpas promocionales en exteriores.</li>
        <li>Eventos deportivos con zonas de sombra y carpas corporativas.</li>
        <li>Promociones en retail con toldos personalizados y módulos vistosos.</li>
        <li>Campañas gubernamentales que requieren estructuras para activaciones informativas.</li>
        <li>Eventos escolares y comunitarios con carpas impresas con logotipo.</li>
      </ul>

      {/* BLOQUE 6 – CTA FINAL */}
      <div style={{ textAlign: 'center', margin: '0 0 0.5rem' }}>
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
            padding: '1.05rem 2.6rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '1.12rem',
            fontWeight: 700,
            boxShadow: '0 10px 24px rgba(0,0,0,0.18)'
          }}
        >
          Cotiza tus Carpas y Toldos ahora
        </Link>
      </div>
    </div>
  )
}
