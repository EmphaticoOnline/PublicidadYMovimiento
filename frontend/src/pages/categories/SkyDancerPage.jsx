import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function SkyDancerPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Sky Dancer Inflable Publicitario Alto | Publicidad en Movimiento | Envíos Nacionales',
    'Sky Dancer inflable publicitario para máxima visibilidad. Publicidad en movimiento que atrae tráfico desde lejos en inauguraciones, promociones y eventos. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/sky-dancer'
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
      <h1 style={{ textAlign: 'center', fontSize: '2.3rem', lineHeight: 1.25 }}>
        Sky Dancer Inflable Publicitario para Visibilidad Inmediata
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Publicidad en movimiento que atrae tráfico y clientes desde lejos
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
          Cotiza tu SKY DANCER ahora
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
          src="/images/categories/sky-dancer/sky-amarillo.jpg"
          alt="Sky Dancer inflable publicitario alto amarillo en uso para negocio o evento, máxima visibilidad exterior"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/sky-dancer/sky-dancer.jpg"
          alt="Sky Dancer inflable publicitario alto multicolor animando evento promocional, ideal para atraer clientes"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/sky-dancer/sky-tiraloca.jpg"
          alt="Sky Dancer inflable publicitario alto tiraloca destacando en inauguración o promoción de negocio"
          style={{ width: '100%', borderRadius: '14px' }}
        />
      </div>

      {/* BLOQUE 3 – TEXTO COMERCIAL PRINCIPAL */}
      <p
        style={{
          textAlign: 'center',
          maxWidth: '840px',
          margin: '0 auto',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        <strong>El Sky Dancer es la pieza inflable publicitaria que más llama la atención en exterior.</strong>{' '}
        Su altura y movimiento constante generan publicidad en movimiento, captan miradas de peatones y tráfico vehicular y convierten tu punto de venta en un referente visible desde lejos.
        Ideal para inauguraciones, promociones, lanzamientos y campañas donde necesitas atraer flujo inmediato.
      </p>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '840px',
          margin: '1.3rem auto 0',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        Colores vibrantes, bailes visibles y fabricación robusta se combinan para ofrecer un inflable bailarín que funciona como faro visual. <span style={{ color: '#1a7f37', fontWeight: 600 }}>Envíos a toda la República Mexicana.</span>
      </p>

      {/* BLOQUE 4 – BENEFICIOS */}
      <h2 style={{ textAlign: 'center', fontSize: '1.6rem', marginTop: '2.4rem', color: '#222' }}>
        ¿Por qué elegir un Sky Dancer inflable?
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
        <li><strong>Visibilidad a distancia:</strong> destaca por encima de autos, toldos y marquesinas.</li>
        <li><strong>Publicidad en movimiento:</strong> el baile constante atrae miradas en segundos.</li>
        <li><strong>Ideal para tráfico vehicular:</strong> guía a los clientes hacia tu punto de venta.</li>
        <li><strong>Recordación inmediata:</strong> colores vibrantes que refuerzan la marca en exteriores.</li>
        <li><strong>Montaje rápido:</strong> listo para operar con turbina incluida.</li>
        <li><strong>Durabilidad:</strong> materiales resistentes para uso repetido en campañas.</li>
      </ul>

      {/* BLOQUE 5 – IDEALES PARA */}
      <h2 style={{ textAlign: 'center', fontSize: '1.6rem', marginTop: '2.4rem', color: '#222' }}>
        Ideal para:
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
        <li>Inauguraciones y promociones donde se requiere captar atención inmediata.</li>
        <li>Tiendas, gasolineras y restaurantes en avenidas con tráfico vehicular.</li>
        <li>Eventos y activaciones al aire libre que necesitan un punto visual dominante.</li>
        <li>Campañas temporales con inflable bailarín que anuncia ofertas y lanzamientos.</li>
        <li>Ferias y plazas donde la altura ayuda a localizar tu stand rápidamente.</li>
        <li>Promociones continuas que buscan mantener flujo constante de clientes.</li>
      </ul>

      {/* BLOQUE 6 – CTA FINAL */}
      <div style={{ textAlign: 'center', margin: '0 0 0.7rem' }}>
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
          Cotiza tu SKY DANCER ahora
        </Link>
      </div>
    </div>
  )
}
