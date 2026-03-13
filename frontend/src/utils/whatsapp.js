export function crearLinkWhatsApp(nombrePagina, telefono) {
  const mensaje = `Hola, vengo de la página web de Grupo PM Publicidad. Página: ${nombrePagina}. Me interesa recibir información.`
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`
}
