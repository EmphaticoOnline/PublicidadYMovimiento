function MonthlyPromoSection() {
  const promos = [
    { id: 1, image: '/images/placeholder.png', badge: '50%' },
    { id: 2, image: '/images/placeholder.png', badge: 'PROMO' },
    { id: 3, image: '/images/placeholder.png', badge: '30%' }
  ]

  return (
    <section
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#f8f8f8'
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
          PROMO DEL MES
        </h2>

        {/* GRID DE PROMOS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          {promos.map((promo) => (
            <div
              key={promo.id}
              style={{
                position: 'relative',
                aspectRatio: '1',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {/* IMAGEN */}
              <img
                src={promo.image}
                alt="Promo del mes"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* BADGE */}
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  backgroundColor: '#d80000',
                  color: '#fff',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  padding: '0.8rem 1.2rem',
                  borderRadius: '50%',
                  minWidth: '80px',
                  minHeight: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  fontFamily: `'Poppins', 'Segoe UI', sans-serif`
                }}
              >
                {promo.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MonthlyPromoSection
