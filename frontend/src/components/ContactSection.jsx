function ContactSection() {
  return (
    <section
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#d80000'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* TÍTULO */}
        <h2
          style={{
            color: '#fff',
            fontSize: '3rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3.5rem',
            fontFamily: `'Poppins', 'Segoe UI', sans-serif`
          }}
        >
          ¡CONTÁCTANOS!
        </h2>

        {/* DOS COLUMNAS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* COLUMNA IZQUIERDA - MAPA */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              aspectRatio: '16/12',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                fontSize: '1.2rem',
                fontWeight: 600
              }}
            >
              MAPA PLACEHOLDER
            </div>
          </div>

          {/* COLUMNA DERECHA - INFORMACIÓN */}
          <div
            style={{
              color: '#fff'
            }}
          >
            {/* HORARIO */}
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  fontFamily: `'Poppins', 'Segoe UI', sans-serif`
                }}
              >
                HORARIO DE ATENCIÓN
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                Sábados: 10:00 AM - 2:00 PM<br />
                Domingos: Cerrado
              </p>
            </div>

            {/* TELÉFONOS */}
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  fontFamily: `'Poppins', 'Segoe UI', sans-serif`
                }}
              >
                TELÉFONOS
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                Oficina: (55) 1234-5678<br />
                WhatsApp: (55) 9876-5432<br />
                Ventas: (55) 5555-1234
              </p>
            </div>

            {/* DIRECCIÓN */}
            <div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  fontFamily: `'Poppins', 'Segoe UI', sans-serif`
                }}
              >
                DIRECCIÓN
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0 }}>
                Av. Principal #123<br />
                Col. Centro, Ciudad de México<br />
                C.P. 12345, México
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
