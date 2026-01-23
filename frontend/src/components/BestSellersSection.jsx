function BestSellersSection() {
  const products = [
    {
      id: 1,
      title: 'TOMI MUÑECOS PUBLICITARIOS',
      image: '/images/placeholder.png'
    },
    {
      id: 2,
      title: 'RÉPLICAS INFLABLES',
      image: '/images/placeholder.png'
    },
    {
      id: 3,
      title: 'BOTARGAS',
      image: '/images/placeholder.png'
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
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* TÍTULO */}
        <h2
          style={{
            color: '#d80000',
            fontSize: '2.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem',
            fontFamily: `'Poppins', 'Segoe UI', sans-serif`
          }}
        >
          PRODUCTOS MÁS VENDIDOS
        </h2>

        {/* GRID DE PRODUCTOS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* IMAGEN */}
              <div
                style={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  aspectRatio: '1',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* TEXTO */}
              <h3
                style={{
                  color: '#333',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  margin: 0,
                  fontFamily: `'Poppins', 'Segoe UI', sans-serif`
                }}
              >
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellersSection
