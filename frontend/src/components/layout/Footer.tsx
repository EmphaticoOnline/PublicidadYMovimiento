import { Link } from 'react-router-dom'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'
import '../../styles/footer.css'

function Footer() {
  const { handleWhatsappClick } = useWhatsappLead() as { handleWhatsappClick: () => void }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <div className="footer-logo">Publicidad y Movimiento</div>
          <p className="footer-tagline">Impacto visual que mueve marcas.</p>
          <div className="footer-social">
            <a
              className="footer-social-link"
              href="https://www.facebook.com/share/14yWrSuxif/?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 9h4V6h-4c-2.2 0-4 1.8-4 4v3H7v3h2v6h3v-6h3l1-3h-4V10c0-.6.4-1 1-1z" />
              </svg>
            </a>
            <button
              className="footer-social-link"
              onClick={handleWhatsappClick}
              aria-label="WhatsApp"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              type="button"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2a9.93 9.93 0 0 0-8.6 14.91L2 22l5.2-1.36A10 10 0 1 0 12.04 2zm0 18a8 8 0 0 1-4.08-1.12l-.29-.17-3.08.8.82-3-.18-.31a8 8 0 1 1 6.81 3.8zm4.44-5.6c-.24-.12-1.44-.71-1.66-.79s-.38-.12-.54.12-.62.79-.76.95-.28.18-.52.06a6.54 6.54 0 0 1-1.93-1.19 7.07 7.07 0 0 1-1.3-1.62c-.14-.24 0-.37.1-.49l.35-.41c.12-.12.16-.2.24-.34s0-.26 0-.37 0-.37-.54-.89-.8-.89-.98-.85l-.41.06a.78.78 0 0 0-.57.27c-.2.2-.75.73-.75 1.77s.77 2.05.89 2.19.15.2.3.32a11.91 11.91 0 0 0 2.53 1.93 8.42 8.42 0 0 0 1.4.52 3.36 3.36 0 0 0 1.55.1c.47-.07 1.44-.59 1.64-1.17s.2-1.07.14-1.17-.21-.17-.45-.29z" />
              </svg>
            </button>
            <a
              className="footer-social-link"
              href="https://www.instagram.com/pm_publicidadymovimiento"
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
              href="https://youtube.com/@pmpublicidadymovimiento4506"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 8.4a3 3 0 0 0-2.1-2.1C18.2 6 12 6 12 6s-6.2 0-7.9.3A3 3 0 0 0 2 8.4 31.6 31.6 0 0 0 2 12a31.6 31.6 0 0 0 .1 3.6 3 3 0 0 0 2.1 2.1C5.8 18 12 18 12 18s6.2 0 7.9-.3a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 22 12a31.6 31.6 0 0 0-.1-3.6zM10 15.3V8.7L15.5 12 10 15.3z" />
              </svg>
            </a>
            <a
              className="footer-social-link"
              href="https://www.tiktok.com/@pmpublicidad"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.5 6.1c.7.6 1.6 1 2.6 1.1V9c-1.1 0-2.1-.3-3-.8v5.4c0 2.9-2.4 5.2-5.3 5.2S5.5 16.5 5.5 13.6c0-2.8 2.2-5 5-5 .2 0 .5 0 .7.1v2.1c-.2-.1-.5-.1-.7-.1-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9V4h2.4c.1.8.5 1.5 1.1 2.1z" />
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
            <li><Link to="/" className="footer-link">Inicio</Link></li>
            <li><Link to="/catalogo" className="footer-link">Productos</Link></li>
            <li><Link to="/#nosotros" className="footer-link">Nosotros</Link></li>
            <li><Link to="/#promociones" className="footer-link">Ofertas</Link></li>
            <li><Link to="/contacto" className="footer-link">Contacto</Link></li>
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
