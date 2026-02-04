import { FaWhatsapp } from 'react-icons/fa'
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
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              display: 'flex'
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.514239139682!2d-103.36161882478672!3d20.689332580876446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1d7c88c11f3%3A0xcd5be53df090ff32!2sGrupo%20PM%20Publicidad%20y%20Movimiento!5e0!3m2!1ses-419!2smx!4v1770138729844!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', width: '100%', height: '100%', flex: 1 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Grupo PM Publicidad y Movimiento"
            />
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
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                Sábados: 10:00 AM - 2:00 PM
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
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                (33) 3641-0130<br />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5em' }}>
                  (33) 1618-0720
                  <span style={{
                    backgroundColor: '#25D366',
                    borderRadius: '50%',
                    width: '1.2em',
                    height: '1.2em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '0.5em'
                  }}>
                    <FaWhatsapp style={{ color: '#fff', fontSize: '0.8em' }} />
                  </span>
                </span><br />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5em' }}>
                  (33) 1594-0580
                  <span style={{
                    backgroundColor: '#25D366',
                    borderRadius: '50%',
                    width: '1.2em',
                    height: '1.2em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '0.5em'
                  }}>
                    <FaWhatsapp style={{ color: '#fff', fontSize: '0.8em' }} />
                  </span>
                </span>
              </div>
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
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: 0, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                Av. Enrique Díaz de León Nte. 819<br />
                Col. Mezquitán Country. Guadalara, Jalisco<br />
                C.P. 44260, México
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
