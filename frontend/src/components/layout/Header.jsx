import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa'

const HEADER_HEIGHT = 140
const MOBILE_BREAKPOINT = 1100

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT)

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const LOGO_WIDTH = isMobile ? 260 : 460

  return (
    <>
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
            zIndex: 3
          }}
        >
          <img
            src="/logotipo.jpg"
            alt="Publicidad y Movimiento"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
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
            paddingRight: '2.5rem',
            zIndex: 2
          }}
        >
          {!isMobile && <MenuLinks />}

          {isMobile && (
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '2.6rem',
                cursor: 'pointer'
              }}
              aria-label="Abrir menú"
            >
              ☰
            </button>
          )}
        </div>
      </header>

      {/* PANEL LATERAL */}
      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

function SideMenu({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 90
          }}
        />
      )}

      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '300px',
          backgroundColor: '#d80000',
          padding: '2rem',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s ease',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          fontFamily: `'Poppins', 'Segoe UI', sans-serif`
        }}
      >
        <button
          onClick={onClose}
          style={{
            alignSelf: 'flex-end',
            background: 'transparent',
            border: 'none',
            color: '#fff',
            fontSize: '2rem',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>

        <Link to="/" style={mobileLink} onClick={onClose}>INICIO</Link>
  <a href="#nosotros" style={mobileLink} onClick={onClose}>NOSOTROS</a>
  <a href="#promociones" style={mobileLink} onClick={onClose}>OFERTAS</a>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Icon bg="#25D366"><FaWhatsapp /></Icon>
          <Icon><FaFacebookF /></Icon>
          <Icon><FaTiktok /></Icon>
          <Icon><FaInstagram /></Icon>
          <Icon><FaYoutube /></Icon>
        </div>
      </div>
    </>
  )
}

function MenuLinks() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '2.2rem',
        fontFamily: `'Poppins', 'Segoe UI', sans-serif`
      }}
    >
      <Link to="/" style={menuLink}>INICIO</Link>
  <a href="#nosotros" style={menuLink}>NOSOTROS</a>
  <a href="#promociones" style={menuLink}>OFERTAS</a>
      <Icon bg="#25D366"><FaWhatsapp /></Icon>
      <Icon><FaFacebookF /></Icon>
      <Icon><FaTiktok /></Icon>
      <Icon><FaInstagram /></Icon>
      <Icon><FaYoutube /></Icon>
    </div>
  )
}

function Icon({ children, bg = '#2e2ee6' }) {
  return (
    <div
      style={{
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        backgroundColor: bg,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {children}
    </div>
  )
}

const menuLink = {
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: '1.05rem'
}

const mobileLink = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: '1.2rem'
}

export default Header
