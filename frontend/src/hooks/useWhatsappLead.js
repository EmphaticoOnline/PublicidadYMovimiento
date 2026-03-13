import { useState } from 'react';
import { getVendedorWhatsapp } from '../services/getVendedorWhatsapp';
import { crearLinkWhatsApp } from '../utils/whatsapp';

/**
 * Hook personalizado para manejar leads de WhatsApp
 * Obtiene el vendedor disponible mediante round-robin y abre WhatsApp
 * 
 * @param {Object} options - Opciones de configuración
 * @param {number} options.empresa_id - ID de la empresa (default: 2)
 * @param {string} options.origen - Origen del lead (default: 'web')
 * @returns {Object} { handleWhatsappClick, loading }
 */
export function useWhatsappLead({ empresa_id = 2, origen = 'web', pageName } = {}) {
  const [loading, setLoading] = useState(false);

  const handleWhatsappClick = async () => {
    setLoading(true);
    try {
      const telefono = await getVendedorWhatsapp({ empresa_id, origen });
      if (telefono) {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'click_whatsapp', {
            event_category: 'Contacto',
            event_label: window.location?.pathname || '/',
          });
        }
        const nombrePagina =
          pageName ||
          (typeof document !== 'undefined' && document.title) ||
          (typeof window !== 'undefined' && window.location?.pathname) ||
          'Página web';

        const link = crearLinkWhatsApp(nombrePagina, telefono);
        window.open(link, '_blank');
      } else {
        alert('No se pudo obtener el número de WhatsApp. Intenta más tarde.');
      }
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
      alert('Ocurrió un error al intentar contactar. Por favor, intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return { handleWhatsappClick, loading };
}
