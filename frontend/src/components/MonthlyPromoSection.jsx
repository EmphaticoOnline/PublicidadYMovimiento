import { useWhatsappLead } from '../hooks/useWhatsappLead'

function MonthlyPromoSection() {
  const { handleWhatsappClick } = useWhatsappLead()
  const promos = [
    { id: 1, image: '/images/monthly-promo/promo1.jpg', alt: 'Promocion activa 1' },
    { id: 2, image: '/images/monthly-promo/promo2.jpg', alt: 'Promocion activa 2' },
    { id: 3, image: '/images/monthly-promo/promo3.jpg', alt: 'Promocion activa 3' },
    { id: 4, image: '/images/monthly-promo/promo4.jpg', alt: 'Promocion activa 4' },
    { id: 5, image: '/images/monthly-promo/promo5.jpg', alt: 'Promocion activa 5' },
    { id: 6, image: '/images/monthly-promo/promo6.jpg', alt: 'Promocion activa 6' },
    { id: 7, image: '/images/monthly-promo/promo7.jpg', alt: 'Promocion activa 7' },
    { id: 8, image: '/images/monthly-promo/promo8.jpg', alt: 'Promocion activa 8' },
    { id: 9, image: '/images/monthly-promo/promo9.jpg', alt: 'Promocion activa 9' }
  ]

  return (
    <section
      id="promociones"
      style={{
        scrollMarginTop: '120px',
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
          PROMOS DEL MES
        </h2>

        {/* GRID DE PROMOS */}
        <div className="monthly-promos-grid">
          {promos.map((promo) => (
            <button
              type="button"
              key={promo.id}
              className="monthly-promo-card"
              onClick={handleWhatsappClick}
              aria-label={`Abrir WhatsApp para la promoción ${promo.id}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <img
                src={promo.image}
                alt={promo.alt}
                loading="lazy"
                className="monthly-promo-image"
              />
            </button>
          ))}
        </div>
      </div>
      <style>{`
        .monthly-promos-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
        }

        .monthly-promo-card {
          padding: 0;
          border: none;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          cursor: pointer;
          transition: transform 0.3s ease;
          background: #fff;
          display: block;
          width: 100%;
        }

        .monthly-promo-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        @media (max-width: 960px) {
          .monthly-promos-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .monthly-promos-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}

export default MonthlyPromoSection
