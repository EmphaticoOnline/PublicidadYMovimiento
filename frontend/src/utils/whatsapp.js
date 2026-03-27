export function construirMensajeWhatsApp(nombrePagina) {
  return `Hola, vengo de la página web de Grupo PM Publicidad. Página: ${nombrePagina}. Me interesa recibir información.`
}

export function crearLinkWhatsApp(nombrePagina, telefono) {
  const mensaje = construirMensajeWhatsApp(nombrePagina)
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`
}
