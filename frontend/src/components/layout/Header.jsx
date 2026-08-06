import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
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
  const [productsOpen, setProductsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT)
  const desktopWhatsapp = useWhatsappLead({
    buttonId: 'header_whatsapp_desktop',
    placement: 'header_desktop'
  })
  const mobileWhatsapp = useWhatsappLead({
    buttonId: 'header_whatsapp_mobile',
    placement: 'header_mobile_menu'
  })

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
          position: 'sticky',
          top: 0,
          zIndex: 1200,
          backgroundColor: '#d80000',
          display: 'flex',
          alignItems: 'center',
          padding: '0 1.75rem',
          gap: '1.75rem',
          boxShadow: '0 8px 20px rgba(0,0,0,0.16)'
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
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link to="/" style={menuLink}>INICIO</Link>
            <Link to="/#nosotros" style={menuLink}>NOSOTROS</Link>
            <Link to="/#promociones" style={menuLink}>OFERTAS</Link>

            {/* PRODUCTOS DROPDOWN */}
            <div style={{ position: 'relative' }} onMouseEnter={() => setProductsOpen(true)}>
              <button
                type="button"
                style={{
                  ...menuLink,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  fontWeight: 800
                }}
              >
                PRODUCTOS ▾
              </button>

              {productsOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '110%',
                    left: 0,
                    background: '#fff',
                    boxShadow: '0 10px 28px rgba(0,0,0,0.16)',
                    borderRadius: '14px',
                    padding: '1rem',
                    minWidth: '340px',
                    zIndex: 1300
                  }}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, minmax(150px, 1fr))',
                      gap: '0.35rem 1rem',
                      maxHeight: '320px',
                      overflowY: 'auto'
                    }}
                  >
                    {categories.map(cat => (
                      <Link
                        key={cat.id}
                        to={cat.link}
                        style={{
                          color: '#222',
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '0.93rem',
                          padding: '0.25rem 0.1rem',
                          borderRadius: '6px'
                        }}
                        onClick={() => setProductsOpen(false)}
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Icon bg="#25D366" onClick={desktopWhatsapp.handleWhatsappClick}><FaWhatsapp /></Icon>
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
        onWhatsappClick={mobileWhatsapp.handleWhatsappClick}
        onSocialClick={openSocialLink}
      />
    </>
  )
}

function SideMenu({ open, onClose, onWhatsappClick, onSocialClick }) {
  const [productsOpen, setProductsOpen] = useState(false)
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
  <Link to="/#nosotros" style={mobileLink}>NOSOTROS</Link>
  <Link to="/#promociones" style={mobileLink}>OFERTAS</Link>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <Icon bg="#25D366" onClick={onWhatsappClick}><FaWhatsapp /></Icon>
          <Icon onClick={() => onSocialClick(SOCIAL_LINKS.facebook)}><FaFacebookF /></Icon>
          <Icon onClick={() => onSocialClick(SOCIAL_LINKS.tiktok)}><FaTiktok /></Icon>
          <Icon onClick={() => onSocialClick(SOCIAL_LINKS.instagram)}><FaInstagram /></Icon>
          <Icon onClick={() => onSocialClick(SOCIAL_LINKS.youtube)}><FaYoutube /></Icon>
        </div>

        <button
          onClick={() => setProductsOpen(p => !p)}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.6)',
            borderRadius: '10px',
            color: '#fff',
            padding: '0.8rem 1rem',
            textAlign: 'left',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          PRODUCTOS {productsOpen ? '▴' : '▾'}
        </button>

        {productsOpen && (
          <div style={{ display: 'grid', gap: '0.4rem', maxHeight: '260px', overflowY: 'auto' }}>
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={cat.link}
                onClick={onClose}
                style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        )}
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
