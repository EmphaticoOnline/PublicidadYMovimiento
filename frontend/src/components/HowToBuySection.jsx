function HowToBuySection() {
  const steps = [
    {
      id: 1,
      title: 'PASO 1',
      description: 'Explora nuestro catálogo de productos y encuentra lo que necesitas'
    },
    {
      id: 2,
      title: 'PASO 2',
      description: 'Contacta con nuestro equipo de ventas por WhatsApp o teléfono'
    },
    {
      id: 3,
      title: 'PASO 3',
      description: 'Cuéntanos tu idea y personaliza tu producto'
    },
    {
      id: 4,
      title: 'PASO 4',
      description: 'Recibe una cotización detallada sin compromiso'
    },
    {
      id: 5,
      title: 'PASO 5',
      description: 'Aprueba el diseño y confirma tu pedido'
    },
    {
      id: 6,
      title: 'PASO 6',
      description: 'Nuestro equipo fabrica tu producto con los mejores materiales'
    },
    {
      id: 7,
      title: 'PASO 7',
      description: 'Recibe tu producto y destaca en tu evento o campaña'
    }
  ]

  return (
    <section
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#fff'
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        {/* TÍTULO */}
        <h2
          style={{
            color: '#333',
            fontSize: '2rem',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '3.5rem',
            fontFamily: `'Poppins', 'Segoe UI', sans-serif`
          }}
        >
          Comprar en Publicidad y Movimiento es muy sencillo:
        </h2>

        {/* GRID DE PASOS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {steps.map((step) => (
            <div
              key={step.id}
              style={{
                textAlign: 'center',
                padding: '1.5rem'
              }}
            >
              {/* ICONO PLACEHOLDER */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  backgroundColor: '#d80000',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '2rem',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(216,0,0,0.3)'
                }}
              >
                {step.id}
              </div>

              {/* TÍTULO DEL PASO */}
              <h3
                style={{
                  color: '#d80000',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  fontFamily: `'Poppins', 'Segoe UI', sans-serif`
                }}
              >
                {step.title}
              </h3>

              {/* DESCRIPCIÓN */}
              <p
                style={{
                  color: '#666',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToBuySection
