function BrandMessageSection() {
  return (
    <section
      style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)',
        position: 'relative'
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}
      >
        {/* CARD BLANCA */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '3.5rem 3rem',
            boxShadow: '0 12px 32px rgba(0,0,0,0.3)'
          }}
        >
          {/* TEXTO DESCRIPTIVO */}
          <div
            style={{
              marginBottom: '2.5rem',
              lineHeight: '1.8',
              fontSize: '1.1rem',
              color: '#555',
              textAlign: 'center'
            }}
          >
            <p style={{ marginBottom: '1.5rem' }}>
              En Publicidad y Movimiento entendemos que cada marca es única y merece 
              destacar de manera especial. Por eso, nos dedicamos a crear soluciones 
              publicitarias inflables que no solo capturan miradas, sino que generan 
              experiencias memorables.
            </p>
            <p style={{ margin: 0 }}>
              Con tecnología de vanguardia, materiales de primera calidad y un equipo 
              creativo comprometido, transformamos conceptos en productos impactantes 
              que impulsan el éxito de tu negocio.
            </p>
          </div>

          {/* FRASE DESTACADA */}
          <div
            style={{
              borderTop: '3px solid #d80000',
              paddingTop: '2rem'
            }}
          >
            <p
              style={{
                color: '#d80000',
                fontSize: '1.8rem',
                fontWeight: 700,
                textAlign: 'center',
                margin: 0,
                letterSpacing: '1px',
                fontFamily: `'Poppins', 'Segoe UI', sans-serif`
              }}
            >
              TÚ LO IMAGINAS Y NOSOTROS LO HACEMOS REALIDAD
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandMessageSection
