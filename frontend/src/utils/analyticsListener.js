let initialized = false

const hasGtag = () => typeof window !== 'undefined' && typeof window.gtag === 'function'

const fireContactEvent = (eventName, label) => {
  if (!hasGtag()) return
  window.gtag('event', eventName, {
    event_category: 'Contacto',
    event_label: label,
  })
}

const handleDocumentClick = (event) => {
  const anchor = event.target?.closest?.('a')
  if (!anchor) return

  const href = anchor.getAttribute('href')
  if (!href) return

  const normalizedHref = href.toLowerCase()
  const currentPath = typeof window !== 'undefined' && window.location
    ? window.location.pathname || '/'
    : '/'

  if (normalizedHref.includes('wa.me')) {
    fireContactEvent('click_whatsapp', currentPath)
    return
  }

  if (normalizedHref.startsWith('tel:')) {
    fireContactEvent('click_telefono', currentPath)
  }
}

export function initAnalyticsListener() {
  if (initialized || typeof document === 'undefined') return
  document.addEventListener('click', handleDocumentClick, true)
  initialized = true
}
