import { useWhatsappLead } from '../hooks/useWhatsappLead'
import { SHOW_MONTHLY_PROMOS } from '../config/featureFlags'

function MonthlyPromoSection() {
  const { handleWhatsappClick } = useWhatsappLead({
    buttonId: 'monthly_promo_quote',
    placement: 'home_monthly_promotions'
  })

  if (!SHOW_MONTHLY_PROMOS) {
    return null
  }

  const promos = [
    { id: 'buen-fin-2', image: '/images/buen-fin/buen-fin-2.jpg', alt: 'Arma tu kit promocional: 15% de descuento desde 3 piezas' },
    { id: 'buen-fin-3', image: '/images/buen-fin/buen-fin-3.jpg', alt: 'Kit promocional para eventos: 15% de descuento a partir de 3 piezas' },
    { id: 'buen-fin-4', image: '/images/buen-fin/buen-fin-4.jpg', alt: '10% de descuento en Sky Dancer, Arco Meta, Flag Banner y Tomi' },
    { id: 'buen-fin-5', image: '/images/buen-fin/buen-fin-5.jpg', alt: 'Tomi publicitario con 10% de descuento' },
    { id: 'buen-fin-6', image: '/images/buen-fin/buen-fin-6.jpg', alt: 'Flag Banner con 10% de descuento' },
    { id: 'buen-fin-7', image: '/images/buen-fin/buen-fin-7.jpg', alt: 'Arco Meta menor de 6x4 metros con 10% de descuento' },
    { id: 'buen-fin-8', image: '/images/buen-fin/buen-fin-8.jpg', alt: 'Sky Dancer con 10% de descuento' }
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
            fontSize: 'clamp(1.7rem, 7vw, 2.5rem)',
            fontWeight: 700,
            textAlign: 'center',
            margin: '0 0 0.4rem',
            fontFamily: `'Poppins', 'Segoe UI', sans-serif`
          }}
        >
          PROMOS BUEN FIN
        </h2>
        <p
          style={{
            textAlign: 'center',
            margin: '0 0 2.5rem',
            fontWeight: 600,
            color: '#444',
            fontFamily: `'Montserrat', 'Segoe UI', sans-serif`
          }}
        >
          Válido del 13 al 17 de noviembre
        </p>

        {/* GRID DE PROMOS */}
        <div className="monthly-promos-grid">
          {promos.map((promo) => (
            <button
              type="button"
              key={promo.id}
              className="monthly-promo-card"
              onClick={() => handleWhatsappClick({
                productId: `monthly-promo-${promo.id}`,
                contentName: promo.alt,
                buttonId: `monthly_promo_${promo.id}_quote`,
                placement: 'home_monthly_promotions'
              })}
              aria-label={`Cotizar por WhatsApp: ${promo.alt}`}
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
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
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
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default MonthlyPromoSection
