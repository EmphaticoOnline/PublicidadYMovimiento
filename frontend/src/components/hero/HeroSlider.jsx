import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { useWhatsappLead } from '../../hooks/useWhatsappLead'

const IMAGES = [
  {
    src: '/images/hero/hero-1.jpg',
    alt: 'Inflable publicitario rojo con logo de Publicidad y Movimiento en exterior'
  },
  {
    src: '/images/hero/hero-2.jpg',
    alt: 'Equipo instalando inflable promocional alto frente a negocio en México'
  },
  {
    src: '/images/hero/hero-3.jpg',
    alt: 'Sky dancer inflable multicolor llamando la atención de transeúntes'
  },
  {
    src: '/images/hero/hero-4.jpg',
    alt: 'Inflable gigante personalizado exhibido en un evento promocional'
  },
]

const SLIDE_TEXTS = [
  {
    title: 'Con 25 años de experiencia en el mercado,',
    text: 'sabemos exactamente cómo hacer que tu negocio destaque.',
  },
  {
    title: 'Resultados que se notan',
    text: 'Nuestros clientes han incrementado sus ventas hasta en un 30% y la afluencia de personas en un 50%.',
  },
  {
    title: 'Tu negocio como referencia visual',
    text: 'Convertimos tu negocio en un Punto Visual para que tus clientes te ubiquen de inmediato.',
  },
  {
    title: 'Publicidad que impacta',
    text: 'Creamos material publicitario innovador que atrae y hace que recuerden tu marca.',
  },
]



const INTERVAL_TIME = 4500

function HeroSlider() {
  const [index, setIndex] = useState(0)

  const { handleWhatsappClick, loading: loadingWhatsapp } = useWhatsappLead({ 
    empresa_id: 1, 
    origen: 'web' 
  })

  const intervalRef = useRef(null)
  const isPausedRef = useRef(false)

  const total = IMAGES.length

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total)
  }

  const goNext = () => {
    setIndex((prev) => (prev + 1) % total)
  }

  /* ======================
     AUTOPLAY
  ====================== */
  const startAutoPlay = () => {
    stopAutoPlay()
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setIndex((prev) => (prev + 1) % total)
      }
    }, INTERVAL_TIME)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [total])

  const currentText = SLIDE_TEXTS[index]

  return (
    <section
      onMouseEnter={() => (isPausedRef.current = true)}
      onMouseLeave={() => (isPausedRef.current = false)}
      style={{
        width: '100%',
        height: '480px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* IMÁGENES */}
      {IMAGES.map(({ src, alt }, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          decoding="async"
          width="1600"
          height="900"
          {...(i === 0
            ? { fetchpriority: 'high', loading: 'eager' }
            : { loading: 'lazy' })}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            aspectRatio: '16 / 9',
            objectFit: 'cover',
            filter: 'brightness(1.12)',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        />
      ))}

      {/* OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.35)',
          zIndex: 1,
        }}
      />

      {/* TEXTO DINÁMICO */}
      <div
        key={index}
        style={{
          position: 'absolute',
          left: '8%',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          color: '#fff',
          maxWidth: '620px',
          fontFamily: `'Montserrat', 'Segoe UI', sans-serif`,
          animation: 'fadeSlide 0.9s ease',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(1.9rem, 3vw, 2.8rem)',
            lineHeight: 1.2,
            fontWeight: 600,
          }}
        >
          {currentText.title}
        </h1>

        <p
          style={{
            marginTop: '1rem',
            fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          {currentText.text}
        </p>
      </div>

      {/* CONTROLES */}
      <button
        type="button"
        aria-label="Imagen anterior"
        onClick={goPrev}
        className="hero-slider-control"
        style={{
          position: 'absolute',
          left: '18px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: 'none',
          background: 'rgba(0,0,0,0.45)',
          color: '#fff',
          fontSize: '24px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s ease, transform 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.65)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.04)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.45)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
        }}
      >
        ‹
      </button>

      <button
        type="button"
        aria-label="Imagen siguiente"
        onClick={goNext}
        className="hero-slider-control"
        style={{
          position: 'absolute',
          right: '18px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: 'none',
          background: 'rgba(0,0,0,0.45)',
          color: '#fff',
          fontSize: '24px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s ease, transform 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.65)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1.04)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0,0,0,0.45)'
          e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
        }}
      >
        ›
      </button>

{/* BOTÓN WHATSAPP */}
<button
  className="whatsapp-btn"
  onClick={handleWhatsappClick}
  disabled={loadingWhatsapp}
  style={{
    position: 'absolute',
    left: '8%',
    bottom: '80px',
    zIndex: 3,
    fontFamily: `'Montserrat', 'Segoe UI', sans-serif`,
    cursor: loadingWhatsapp ? 'not-allowed' : 'pointer',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    opacity: loadingWhatsapp ? 0.7 : 1,
  }}
>
  <FaWhatsapp size={20} />
  {loadingWhatsapp ? 'Cargando...' : 'Cotiza ahora'}
</button>

{/* INDICADORES */}
<div
  style={{
    position: 'absolute',
    left: '50%',
    bottom: '30px',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '10px',
    zIndex: 3,
  }}
>
  {IMAGES.map((_, i) => (
    <div
      key={i}
      onClick={() => setIndex(i)}
      style={{
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor:
          i === index ? '#fff' : 'rgba(255,255,255,0.5)',
        cursor: 'pointer',
      }}
    />
  ))}
</div>


      {/* ANIMACIONES */}
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.7); }
          70% { box-shadow: 0 0 0 18px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }

        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateY(-40%);
          }
          to {
            opacity: 1;
            transform: translateY(-50%);
          }
        }

        @media (max-width: 768px) {
          .hero-slider-control {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSlider
