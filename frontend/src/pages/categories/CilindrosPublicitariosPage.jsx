import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function CilindrosPublicitariosPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Cilindros Publicitarios Inflables | Inflables Verticales Gigantes | Envíos a Toda la República',
    'Cilindros publicitarios inflables verticales ideales para promociones, eventos y puntos de venta. Alta visibilidad y personalización total. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/cilindros-publicitarios'
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
        Cilindros Publicitarios Inflables Verticales de Alta Visibilidad
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Ideal para destacar tu marca en puntos de venta, ferias y promociones
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
          Cotiza tus Cilindros ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES CILINDROS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/cilindros-publicitarios/cilindro-cartepillar.jpg"
          alt="Cilindro publicitario inflable vertical de alta visibilidad en punto de venta"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/cilindros-publicitarios/cilindro-efilea.jpg"
          alt="Cilindro inflable personalizado ideal para accesos y ferias"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/cilindros-publicitarios/cilindro-presnillo.jpg"
          alt="Cilindro publicitario inflable con branding completo para promociones"
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
        <strong>Los cilindros publicitarios inflables ofrecen visibilidad 360° para tu marca en cualquier evento.</strong>{' '}
        Destacan en accesos, entradas y puntos de venta gracias a su altura y diseño personalizable, logrando impacto inmediato y recordación.
        Son fáciles de instalar y se adaptan a ferias, promociones y activaciones donde necesitas que te vean primero.
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
          Beneficios clave de los cilindros inflables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Pensados para maximizar tu presencia en accesos, ferias y puntos de venta con impacto inmediato.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Visibilidad 360°:</strong> se ve desde cualquier ángulo.</li>
          <li><strong>Perfecto para entradas y accesos:</strong> guía el flujo hacia tu marca.</li>
          <li><strong>Personalización total:</strong> branding completo con tus colores y logotipo.</li>
          <li><strong>Fácil instalación y gran impacto visual:</strong> listo para usar en minutos.</li>
        </ul>
      </section>
    </div>
  )
}
