import { FaWhatsapp } from 'react-icons/fa'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

// Botón flotante de WhatsApp visible en todas las páginas.
// Se renderiza fuera de <main> (en MainLayout) con position: fixed, así
// ningún contenedor con transform/overflow puede romper su posición.
// z-index 80: por encima del contenido, por debajo del menú lateral móvil (90/100).
export default function FloatingWhatsapp() {
  const { handleWhatsappClick, loading } = useWhatsappLead({
    buttonId: 'floating_whatsapp',
    placement: 'floating_button'
  })

  return (
    <>
      <button
        type="button"
        className="floating-whatsapp"
        onClick={handleWhatsappClick}
        disabled={loading}
        aria-label="Contactar por WhatsApp"
        title="Contáctanos por WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </button>

      <style>{`
        .floating-whatsapp {
          position: fixed;
          right: max(20px, env(safe-area-inset-right));
          bottom: max(20px, env(safe-area-inset-bottom));
          z-index: 80;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: none;
          background: #25D366;
          color: #fff;
          font-size: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .floating-whatsapp:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.32);
        }
        .floating-whatsapp:disabled {
          opacity: 0.75;
          cursor: wait;
        }
        @media (max-width: 640px) {
          .floating-whatsapp {
            width: 54px;
            height: 54px;
            font-size: 30px;
          }
        }
      `}</style>
    </>
  )
}
