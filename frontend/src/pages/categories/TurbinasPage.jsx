import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa6'
import usePageTitle from '../../hooks/usePageTitle'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

export default function TurbinasPage() {
  const { handleWhatsappClick } = useWhatsappLead()

  usePageTitle(
    'Turbinas (Sopladores) para Inflables Publicitarios | Refacción y Respaldo para Eventos | Envíos a Toda la República',
    'Turbinas o sopladores para inflables publicitarios: potencia y flujo de aire para operación estable en eventos y promociones. Repuesto y respaldo recomendado. Envíos a toda la República Mexicana.',
    'https://grupopmpublicidad.mx/turbinas'
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
        Turbinas (Sopladores) para Inflables Publicitarios | Potencia y Operación Segura
      </h1>
      <h2 style={{ textAlign: 'center', fontSize: '1.35rem', color: '#444', marginTop: '0.35rem' }}>
        El motor que mantiene tu inflable estable y trabajando durante todo tu evento
      </h2>

      {/* GRID DE IMÁGENES TURBINAS (no se usa cover.jpg y no hay más archivos disponibles) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '3rem'
        }}
      />

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
          <FaWhatsapp size={20} />
          Cotiza tu Turbina / Soplador ahora
        </Link>
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
        <strong>Las turbinas o sopladores son el corazón operativo de tus inflables publicitarios.</strong>{' '}
        Proveen el flujo de aire y potencia necesarios para mantener arcos, sky dancers, tomi, réplicas y otros inflables estables durante horas. Para eventos largos se recomienda contar con una turbina de respaldo que evite detener activaciones por fallas o cortes inesperados.
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
          Beneficios clave de las turbinas inflables
        </h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '1rem' }}>
          Pensadas para operación continua y segura de tus inflables en eventos y promociones.
        </p>
        <ul style={{ maxWidth: '780px', margin: '0 auto', paddingLeft: '1.1rem', color: '#333' }}>
          <li><strong>Operación continua:</strong> mantiene el inflable firme durante horas de evento.</li>
          <li><strong>Respaldo recomendado:</strong> evita parar una activación por falla o corte inesperado.</li>
          <li><strong>Potencia adecuada:</strong> opciones según tamaño del inflable y necesidad de flujo de aire.</li>
          <li><strong>Seguridad y estabilidad:</strong> ayuda a mantener forma y presencia visual consistente.</li>
        </ul>
      </section>
    </div>
  )
}
