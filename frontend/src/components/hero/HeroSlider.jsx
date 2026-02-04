import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const IMAGES = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg',
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

const WHATSAPP_NUMBERS = [
  '5213310949986', // Faby
  '5213331704595', // Publicidad y Movimiento
]

const INTERVAL_TIME = 4500

function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [whatsappIndex, setWhatsappIndex] = useState(0)

  const intervalRef = useRef(null)
  const isPausedRef = useRef(false)

  const total = IMAGES.length

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
    return stopAutoPlay
  }, [])

  /* ======================
     WHATSAPP ROTATIVO
  ====================== */
  const handleWhatsappClick = () => {
    const number = WHATSAPP_NUMBERS[whatsappIndex]
    window.open(`https://wa.me/${number}`, '_blank')

    setWhatsappIndex(
      (prev) => (prev + 1) % WHATSAPP_NUMBERS.length
    )
  }

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
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
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

      {/* BOTÓN WHATSAPP */}
      <button
        onClick={handleWhatsappClick}
        style={{
          position: 'absolute',
          left: '8%',
          bottom: '80px',
          zIndex: 3,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '0.85rem 1.6rem',
          backgroundColor: '#25D366',
          color: '#fff',
          borderRadius: '999px',
          fontWeight: 600,
          fontSize: '1.05rem',
          fontFamily: `'Montserrat', 'Segoe UI', sans-serif`,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        }}
      >
        <FaWhatsapp size={20} />
        Cotiza ahora
      </button>

      {/* DOTS */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
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
      `}</style>
    </section>
  )
}

export default HeroSlider
