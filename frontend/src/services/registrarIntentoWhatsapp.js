const SESSION_KEY = 'pm_whatsapp_session_id'

/**
 * Genera un identificador de sesión estable para los clics de WhatsApp
 * y lo almacena en localStorage.
 * @returns {string} sessionId
 */
export function obtenerSessionIdWhatsapp() {
  const generarId = () => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID()
    }
    return `sess_${Date.now()}_${Math.random().toString(16).slice(2)}`
  }

  if (typeof window === 'undefined') {
    return generarId()
  }

  const existente = localStorage.getItem(SESSION_KEY)
  if (existente) return existente

  const nuevo = generarId()
  localStorage.setItem(SESSION_KEY, nuevo)
  return nuevo
}

/**
 * Registra un intento de contacto vía WhatsApp sin bloquear la navegación.
 * Prioriza navigator.sendBeacon y usa fetch con keepalive como respaldo.
 * @param {Object} intento
 * @param {number} intento.empresa_id
 * @param {string} intento.pagina_origen
 * @param {string | null} intento.producto
 * @param {string} intento.fuente
 * @param {string} intento.tipo_intento
 * @param {string | null} intento.mensaje_prellenado
 * @param {string} intento.session_id
 * @param {string} intento.user_agent
 * @returns {Promise<boolean>} indica si el envío se lanzó (no garantiza persistencia).
 */
export function registrarIntentoWhatsapp(intento) {
  try {
    const payload = {
      empresa_id: intento.empresa_id,
      pagina_origen: intento.pagina_origen || null,
      producto: intento.producto || null,
      fuente: intento.fuente || 'web',
      tipo_intento: intento.tipo_intento || 'whatsapp_click',
      mensaje_prellenado: intento.mensaje_prellenado || null,
      session_id: intento.session_id,
      user_agent: intento.user_agent || null,
    }

    const json = JSON.stringify(payload)
    const url = '/api/whatsapp/intentos-contacto'

    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([json], { type: 'application/json' })
      const enviado = navigator.sendBeacon(url, blob)
      if (enviado) return Promise.resolve(true)
    }

    if (typeof fetch === 'function') {
      return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json,
        keepalive: true,
      })
        .then(() => true)
        .catch((err) => {
          console.error('[registrarIntentoWhatsapp] error con fetch', err)
          return false
        })
    }
  } catch (error) {
    console.error('[registrarIntentoWhatsapp] error preparando payload', error)
  }

  return Promise.resolve(false)
}
