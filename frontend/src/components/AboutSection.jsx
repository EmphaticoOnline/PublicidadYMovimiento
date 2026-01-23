function AboutSection() {
  return (
    <section
      style={{
        backgroundColor: '#d80000',
        padding: '4rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* CONTENEDOR BLANCO CENTRAL */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            padding: '3rem 2.5rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            position: 'relative'
          }}
        >
          <h2
            style={{
              color: '#d80000',
              fontSize: '2.5rem',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '2rem',
              fontFamily: `'Poppins', 'Segoe UI', sans-serif`
            }}
          >
            NOSOTROS
          </h2>

          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              lineHeight: '1.8',
              fontSize: '1.05rem',
              color: '#333',
              textAlign: 'justify'
            }}
          >
            <p style={{ marginBottom: '1.5rem' }}>
              Somos una empresa líder en publicidad inflable y soluciones promocionales innovadoras. 
              Con más de 15 años de experiencia en el mercado, nos especializamos en transformar 
              tus ideas en realidades impactantes que captan la atención de tu público objetivo.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Nuestro compromiso es ofrecer productos de la más alta calidad, diseños personalizados 
              y un servicio excepcional que supera las expectativas de nuestros clientes. Trabajamos 
              con las mejores marcas del país, brindando soluciones creativas que impulsan el éxito 
              de sus campañas publicitarias.
            </p>
            <p style={{ margin: 0 }}>
              Tú lo imaginas y nosotros lo hacemos realidad. Desde sky dancers hasta réplicas inflables, 
              cada proyecto es único y está diseñado para destacar tu marca en cualquier evento o campaña.
            </p>
          </div>
        </div>

        {/* IMAGEN IZQUIERDA */}
        <img
          src="/images/about-left.png"
          alt="Decoración izquierda"
          style={{
            position: 'absolute',
            left: '-80px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '200px',
            height: 'auto',
            opacity: 0.9,
            zIndex: 0
          }}
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />

        {/* IMAGEN DERECHA */}
        <img
          src="/images/about-right.png"
          alt="Decoración derecha"
          style={{
            position: 'absolute',
            right: '-80px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '200px',
            height: 'auto',
            opacity: 0.9,
            zIndex: 0
          }}
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
      </div>
    </section>
  )
}

export default AboutSection
