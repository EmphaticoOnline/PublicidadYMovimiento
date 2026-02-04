import '../../styles/footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <div className="footer-logo">Publicidad y Movimiento</div>
          <p className="footer-tagline">Impacto visual que mueve marcas.</p>
          <div className="footer-social">
            <a
              className="footer-social-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 9h4V6h-4c-2.2 0-4 1.8-4 4v3H7v3h2v6h3v-6h3l1-3h-4V10c0-.6.4-1 1-1z" />
              </svg>
            </a>
            <a
              className="footer-social-link"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zM17.5 7.6a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
              </svg>
            </a>
            <a
              className="footer-social-link"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 8.4a3 3 0 0 0-2.1-2.1C18.2 6 12 6 12 6s-6.2 0-7.9.3A3 3 0 0 0 2 8.4 31.6 31.6 0 0 0 2 12a31.6 31.6 0 0 0 .1 3.6 3 3 0 0 0 2.1 2.1C5.8 18 12 18 12 18s6.2 0 7.9-.3a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 22 12a31.6 31.6 0 0 0-.1-3.6zM10 15.3V8.7L15.5 12 10 15.3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contacto</h4>
          <ul className="footer-list">
            <li>Guadalajara, Jalisco</li>
            <li>
              Tel: <a href="tel:+523331704595">+52 33 3170 4595</a>
            </li>
            <li>
              WhatsApp: <a href="https://wa.me/5213331704595">+52 1 33 3170 4595</a>
            </li>
            <li>
              Email: <a href="mailto:ventas@publicidadymovimiento.com">ventas@publicidadymovimiento.com</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Navegación</h4>
          <ul className="footer-list">
            <li><a href="/">Inicio</a></li>
            <li><a href="/catalogo">Productos</a></li>
            <li><a href="/#servicios">Servicios</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Publicidad y Movimiento. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}

export default Footer
