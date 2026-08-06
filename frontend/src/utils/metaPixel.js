const META_PIXEL_SCRIPT_ID = 'meta-pixel-script'

let initialized = false
let lastPagePath = null
let lastViewContentKey = null

const isDevelopment = import.meta.env.DEV
const pixelId = import.meta.env.VITE_META_PIXEL_ID?.trim()

const debug = (eventName, params = {}, status) => {
  if (!isDevelopment) return
  console.debug(`[MetaPixel] ${eventName}`, params, status ? { status } : '')
}

const getFbq = () => {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return null
  return window.fbq
}

export function initMetaPixel({ hasConsent = true } = {}) {
  if (!hasConsent || initialized || typeof window === 'undefined' || typeof document === 'undefined') {
    return initialized
  }

  if (!pixelId) {
    debug('init', {}, 'skipped: missing VITE_META_PIXEL_ID')
    return false
  }

  try {
    if (!window.fbq) {
      const fbq = function (...args) {
        if (fbq.callMethod) fbq.callMethod(...args)
        else fbq.queue.push(args)
      }
      fbq.push = fbq
      fbq.loaded = true
      fbq.version = '2.0'
      fbq.queue = []
      window.fbq = fbq
      window._fbq = fbq
    }

    if (!document.getElementById(META_PIXEL_SCRIPT_ID)) {
      const script = document.createElement('script')
      script.id = META_PIXEL_SCRIPT_ID
      script.async = true
      script.src = 'https://connect.facebook.net/en_US/fbevents.js'
      script.onerror = () => debug('script', {}, 'blocked or unavailable')
      document.head.appendChild(script)
    }

    window.fbq('init', pixelId)
    initialized = true
    debug('init', { pixel_id: pixelId })
    return true
  } catch {
    debug('init', {}, 'failed safely')
    return false
  }
}

export function trackMetaEvent(eventName, params = {}) {
  debug(eventName, params)
  try {
    const fbq = getFbq()
    if (!initialized || !fbq) return false
    fbq('track', eventName, params)
    return true
  } catch {
    debug(eventName, params, 'failed safely')
    return false
  }
}

export function trackPageView(pagePath) {
  if (!pagePath || pagePath === lastPagePath) return false
  lastPagePath = pagePath
  return trackMetaEvent('PageView', { page_path: pagePath })
}

export function trackWhatsAppClick({ pagePath, productId, contentName, buttonId, placement } = {}) {
  const params = {
    contact_channel: 'whatsapp',
    page_path: pagePath || (typeof window !== 'undefined' ? `${window.location.pathname}${window.location.search}` : '/'),
    button_id: buttonId || 'whatsapp_contact',
    placement: placement || 'unknown',
  }

  if (contentName) params.content_name = contentName
  if (productId) params.content_ids = [productId]

  return trackMetaEvent('Contact', params)
}

export function trackViewContent(params = {}) {
  const key = `${params.page_path || ''}|${(params.content_ids || []).join(',')}`
  if (!params.page_path || key === lastViewContentKey) return false
  lastViewContentKey = key
  return trackMetaEvent('ViewContent', params)
}

export function trackLead(params = {}) {
  return trackMetaEvent('Lead', params)
}
