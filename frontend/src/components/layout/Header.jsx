import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

const HEADER_HEIGHT = 102
const MOBILE_BREAKPOINT = 1100

const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/14yWrSuxif/?mibextid=LQQJ4d',
  instagram: 'https://www.instagram.com/pm_publicidadymovimiento',
  tiktok: 'https://www.tiktok.com/@pmpublicidad',
  youtube: 'https://youtube.com/@pmpublicidadymovimiento4506'
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT)
  const { handleWhatsappClick } = useWhatsappLead()

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const openSocialLink = (url) =>
    window.open(url, '_blank', 'noopener,noreferrer')

  return (
    <>
      <header
        style={{
          height: HEADER_HEIGHT,
          backgroundColor: '#d80000',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1.75rem',
          gap: '1.75rem'
        }}
      >
        {/* LOGO */}
        <img
          src="/logotipo.jpg"
          alt="Publicidad y Movimiento"
          style={{
            height: isMobile ? '70px' : '90px',
            width: 'auto',
            flexShrink: 0
          }}
        />

        {/* MENÚ */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.6rem',
              fontFamily: `'Montserrat', 'Segoe UI', sans-serif`,
              marginLeft: '0.5rem'
            }}
          >
            <Link to="/" style={menuLink}>INICIO</Link>
            <a href="#nosotros" style={menuLink}>NOSOTROS</a>
            <a href="#promociones" style={menuLink}>OFERTAS</a>

            <Icon bg="#25D366" onClick={handleWhatsappClick}><FaWhatsapp /></Icon>
            <Icon onClick={() => openSocialLink(SOCIAL_LINKS.facebook)}><FaFacebookF /></Icon>
            <Icon onClick={() => openSocialLink(SOCIAL_LINKS.tiktok)}><FaTiktok /></Icon>
            <Icon onClick={() => openSocialLink(SOCIAL_LINKS.instagram)}><FaInstagram /></Icon>
            <Icon onClick={() => openSocialLink(SOCIAL_LINKS.youtube)}><FaYoutube /></Icon>
          </div>
        )}

        {/* HAMBURGUESA */}
        {isMobile && (
          <div style={{ marginLeft: 'auto' }}>
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '2.8rem',
                lineHeight: 1,
                padding: '0.25rem 0.4rem',
                cursor: 'pointer'
              }}
            >
              ☰
            </button>
          </div>
        )}
      </header>

      <SideMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onWhatsappClick={handleWhatsappClick}
        onSocialClick={openSocialLink}
      />
    </>
  )
}

function SideMenu({ open, onClose, onWhatsappClick, onSocialClick }) {
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
          fontFamily: `'Montserrat', 'Segoe UI', sans-serif`
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

        <Link to="/" style={mobileLink}>INICIO</Link>
        <a href="#nosotros" style={mobileLink}>NOSOTROS</a>
        <a href="#promociones" style={mobileLink}>OFERTAS</a>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Icon bg="#25D366" onClick={onWhatsappClick}><FaWhatsapp /></Icon>
          <Icon onClick={() => onSocialClick(SOCIAL_LINKS.facebook)}><FaFacebookF /></Icon>
          <Icon onClick={() => onSocialClick(SOCIAL_LINKS.tiktok)}><FaTiktok /></Icon>
          <Icon onClick={() => onSocialClick(SOCIAL_LINKS.instagram)}><FaInstagram /></Icon>
          <Icon onClick={() => onSocialClick(SOCIAL_LINKS.youtube)}><FaYoutube /></Icon>
        </div>
      </div>
    </>
  )
}

function Icon({ children, bg = '#2e2ee6', onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: bg,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: onClick ? 'pointer' : 'default'
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
  fontSize: '0.95rem'
}

const mobileLink = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: '1.2rem'
}
