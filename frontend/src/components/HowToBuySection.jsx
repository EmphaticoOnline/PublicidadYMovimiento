function HowToBuySection() {
  const steps = [
    {
      id: 1,
      title: 'PASO 1',
      description: (
        <>
          <strong>Explora nuestro catálogo de productos y encuentra lo que necesitas</strong>
        </>
      )
    },
    {
      id: 2,
      title: 'PASO 2',
      description: (
        <>
          <strong>Contacta con nuestro equipo de ventas por WhatsApp o teléfono</strong>
        </>
      )
    },
    {
      id: 3,
      title: 'PASO 3',
      description: (
        <>
          <strong>Cuéntanos tu idea y personaliza tu producto</strong>
        </>
      )
    },
    {
      id: 4,
      title: 'PASO 4',
      description: (
        <>
          <strong>Recibe una cotización detallada sin compromiso</strong>
        </>
      )
    },
    {
      id: 5,
      title: 'PASO 5',
      description: (
        <>
          <strong>Aprueba el diseño y confirma tu pedido</strong>
        </>
      )
    },
    {
      id: 6,
      title: 'PASO 6',
      description: (
        <>
          <strong>Nuestro equipo fabrica tu producto con los mejores materiales</strong>
        </>
      )
    },
    {
      id: 7,
      title: 'PASO 7',
      description: (
        <>
          <strong>Recibe tu producto y destaca en tu evento o campaña</strong>
        </>
      )
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
            fontFamily: 'Montserrat, Arial, sans-serif'
          }}
        >
          Comprar en Publicidad y Movimiento es muy sencillo:
        </h2>

        {/* GRID DE PASOS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.5rem'
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
              {/* ICONO PERSONALIZADO */}
              <img
                src={`/images/icons/paso-${step.id}.jpg`}
                alt={`Icono paso ${step.id}`}
                loading="lazy"
                style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  objectFit: 'contain',
                  borderRadius: '50%',
                  boxShadow: '0 4px 12px rgba(216,0,0,0.15)'
                }}
              />

              {/* TÍTULO DEL PASO */}
              <h3
                style={{
                  color: '#d80000',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  fontFamily: `'Montserrat', 'Poppins', 'Segoe UI', sans-serif`
                }}
              >
                {step.title}
              </h3>

              {/* DESCRIPCIÓN */}
              <p
                style={{
                  color: '#000',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: 0,
                  fontFamily: `'Montserrat', 'Inter', 'Segoe UI', sans-serif`
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
