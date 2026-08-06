import { useState } from 'react';
import { getVendedorWhatsapp } from '../services/getVendedorWhatsapp';
import { registrarIntentoWhatsapp, obtenerSessionIdWhatsapp } from '../services/registrarIntentoWhatsapp';
import { construirMensajeWhatsApp, crearLinkWhatsApp } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/metaPixel';
import { categories } from '../data/categories';

/**
 * Hook personalizado para manejar leads de WhatsApp
 * Obtiene el vendedor disponible mediante round-robin y abre WhatsApp
 * 
 * @param {Object} options - Opciones de configuración
 * @param {number} options.empresa_id - ID de la empresa (default: 2)
 * @param {string} options.origen - Origen del lead (default: 'web')
 * @returns {Object} { handleWhatsappClick, loading }
 */
export function useWhatsappLead({
  empresa_id = 2,
  origen = 'web',
  pageName,
  productId,
  contentName,
  buttonId = 'category_primary_quote',
  placement = 'category_page',
} = {}) {
  const [loading, setLoading] = useState(false);

  const handleWhatsappClick = async (trackingOverrides = {}) => {
    const overrides = trackingOverrides?.nativeEvent ? {} : trackingOverrides
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

        const mensajePrellenado = construirMensajeWhatsApp(nombrePagina);
        const paginaOrigen = (typeof window !== 'undefined' && window.location?.pathname) || '/';
        const sessionId = obtenerSessionIdWhatsapp();
        const userAgent = (typeof navigator !== 'undefined' && navigator.userAgent) || 'desconocido';

        // Disparar registro en background, sin bloquear la apertura del link
        registrarIntentoWhatsapp({
          empresa_id,
          pagina_origen: paginaOrigen,
          producto: pageName || null,
          fuente: 'web',
          tipo_intento: 'whatsapp_click',
          mensaje_prellenado: mensajePrellenado,
          session_id: sessionId,
          user_agent: userAgent,
        }).catch((err) => console.debug('[useWhatsappLead] intento no registrado', err));

        const link = crearLinkWhatsApp(nombrePagina, telefono);
        const pathCategory = categories.find(category => category.link === window.location?.pathname)
        trackWhatsAppClick({
          pagePath: `${window.location?.pathname || '/'}${window.location?.search || ''}`,
          productId: overrides.productId || productId || pathCategory?.id,
          contentName: overrides.contentName || contentName || pageName || pathCategory?.label,
          buttonId: overrides.buttonId || buttonId,
          placement: overrides.placement || placement,
        });
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
