import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import usePageTitle from '../../hooks/usePageTitle'

export default function FlagBannerPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Flag Banners Publicitarios para Exterior | Banderas Promocionales',
    'Flag banners publicitarios ideales para exterior, promociones en calle, expos y puntos de venta. Visibilidad ligera y efectiva.',
    'https://grupopmpublicidad.mx/flag-banners'
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
        Flag Banners Publicitarios para Exterior y Punto de Venta
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        Señalización ligera y estratégica que dirige tráfico hacia tu negocio
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
          Cotiza tu FLAG BANNER ahora
        </Link>
      </div>

      {/* GRID DE IMÁGENES FLAG BANNER */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      >
        <img
          src="/images/categories/flag-banner/flag-repegi.jpg"
          alt="Flag banner publicitario Repegi para exterior, señalización ligera y visible"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/flag-banner/flag-subaru.jpg"
          alt="Flag banner publicitario Subaru ideal para promociones en calle y puntos de venta"
          style={{ width: '100%', borderRadius: '14px' }}
        />
        <img
          src="/images/categories/flag-banner/flag-supercolchon.jpg"
          alt="Flag banner publicitario Supercolchón complementando inflables y dirigiendo tráfico"
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
        <strong>Los flag banners publicitarios dan visibilidad ligera y constante en exterior, calles y puntos de venta.</strong>{' '}
        Su movimiento con el viento atrae miradas y guía a las personas hacia tu negocio, ideal para promociones, expos y como complemento de inflables grandes.
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
          Beneficios clave de los Flag Banners
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Pensados para señalización exterior y promociones rápidas que dirigen tráfico al punto de venta.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Visibilidad exterior inmediata:</strong> se mueven con el viento y destacan.</li>
          <li><strong>Ligero y fácil de instalar:</strong> montaje rápido para activaciones.</li>
          <li><strong>Ideal para promociones en calle y expos:</strong> atrae flujo peatonal y vehicular.</li>
          <li><strong>Complemento estratégico para inflables grandes:</strong> refuerza señalización y branding.</li>
        </ul>
      </section>
    </div>
  )
}
