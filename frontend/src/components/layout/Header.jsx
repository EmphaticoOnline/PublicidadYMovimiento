import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa'

const HEADER_HEIGHT = 140
const LOGO_WIDTH = 460

function Header() {
  return (
    <header
      style={{
        height: HEADER_HEIGHT,
        position: 'relative',
        backgroundColor: '#fff',
        overflow: 'hidden'
      }}
    >
      {/* LOGO */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          width: LOGO_WIDTH,
          backgroundColor: '#fff',
          zIndex: 2
        }}
      >
        <img
          src="/logotipo.jpg"
          alt="Publicidad y Movimiento"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',   // 🔴 ESTA ES LA CLAVE
            display: 'block'
          }}
        />
      </div>

      {/* MENÚ ROJO */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          width: `calc(100% - ${LOGO_WIDTH}px)`,
          backgroundColor: '#d80000',
          clipPath: 'polygon(90px 0%, 100% 0%, 100% 100%, 0% 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '2.5rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.2rem',
            fontFamily: `'Poppins', 'Segoe UI', sans-serif`
          }}
        >
          <Link to="/" style={menuLink}>INICIO</Link>
          <Link to="/nosotros" style={menuLink}>NOSOTROS</Link>
          <Link to="/catalogo?promo=mes" style={menuLink}>OFERTAS</Link>

          <a
            href="#"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
          >
            <FaWhatsapp size={24} />
          </a>

          <a href="#" style={iconStyle}>
            <FaFacebookF size={18} />
          </a>
          <a href="#" style={iconStyle}>
            <FaTiktok size={18} />
          </a>
          <a href="#" style={iconStyle}>
            <FaInstagram size={18} />
          </a>
          <a href="#" style={iconStyle}>
            <FaYoutube size={18} />
          </a>
        </div>
      </div>
    </header>
  )
}

const menuLink = {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: '1.05rem'
}

const iconStyle = {
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  backgroundColor: '#2e2ee6',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 'bold'
}

export default Header
