import { Link } from 'react-router-dom'
import { useState } from 'react'

const WHATSAPP_NUMBERS = [
  '5213310949986', // Faby
  '5213331704595', // Publicidad y Movimiento
]

function openWhatsappAlternado() {
  const lastIndex = Number(localStorage.getItem('waIndex')) || 0
  const nextIndex = (lastIndex + 1) % WHATSAPP_NUMBERS.length
  localStorage.setItem('waIndex', nextIndex)
  const phone = WHATSAPP_NUMBERS[lastIndex]
  window.open(`https://wa.me/${phone}`, '_blank')
}

const VIDEOS = [
  { id: 'tomi-1', src: '/images/categories/tomi-publicitario/tomi-1.mp4' },
  { id: 'tomi-2', src: '/images/categories/tomi-publicitario/tomi-2.mp4' },
  { id: 'tomi-3', src: '/images/categories/tomi-publicitario/tomi-3.mp4' },
  { id: 'tomi-4', src: '/images/categories/tomi-publicitario/tomi-4.mp4' }
]

const GRID_ITEMS = [
  { type: 'image', src: '/images/categories/tomi-publicitario/castor.jpg', alt: 'Tomi publicitario Castor' },
  { type: 'image', src: '/images/categories/tomi-publicitario/pemex.jpg', alt: 'Tomi publicitario Pemex' },
  { type: 'image', src: '/images/categories/tomi-publicitario/perro.jpg', alt: 'Tomi publicitario Perro' },
  { type: 'video', id: 'tomi-2' },
  { type: 'video', id: 'tomi-3' },
  { type: 'video', id: 'tomi-4' }
]

export default function TomiPage() {
  const [mainVideoId, setMainVideoId] = useState('tomi-1')
  
  const handleVideoSwap = (clickedVideoId) => {
    setMainVideoId(clickedVideoId)
  }
  
  const mainVideo = VIDEOS.find(v => v.id === mainVideoId)
  const gridItems = GRID_ITEMS.map(item => {
    if (item.type === 'video' && item.id === mainVideoId) {
      return { type: 'video', id: 'tomi-1' }
    }
    return item
  })

  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
        fontFamily: 'Montserrat, Segoe UI, sans-serif'
      }}
    >
      {/* TÍTULO */}
      <h1 style={{ textAlign: 'center', fontSize: '2.2rem' }}>
        TOMI PUBLICITARIO
      </h1>

      {/* CTA PRINCIPAL */}
      <div style={{ textAlign: 'center', margin: '1.5rem 0 2.5rem' }}>
        <Link
          to="/#"
          onClick={e => {
            e.preventDefault()
            openWhatsappAlternado()
          }}
          style={{
            display: 'inline-block',
            backgroundColor: '#25D366',
            color: '#fff',
            padding: '1rem 2.4rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 600,
            boxShadow: '0 8px 20px rgba(0,0,0,0.18)'
          }}
        >
          Cotiza tu TOMI ahora
        </Link>
      </div>

      {/* CONTENEDOR FLEX: VIDEO A IZQUIERDA + IMÁGENES A DERECHA */}
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          marginBottom: '3rem',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexWrap: 'nowrap'
        }}
      >
        {/* VIDEO A LA IZQUIERDA (DINÁMICO) */}
        <div
          style={{
            flex: '0 0 40%',
            minWidth: '280px'
          }}
        >
          <video
            key={mainVideo.id}
            src={mainVideo.src}
            alt="Video Tomi Publicitario"
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              borderRadius: '14px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          />
        </div>

        {/* GRID DE IMÁGENES A LA DERECHA */}
        <div
          style={{
            flex: '0 0 55%',
            minWidth: '280px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '15px'
          }}
        >
          {gridItems.map((item, idx) => {
            if (item.type === 'image') {
              return (
                <img
                  key={idx}
                  src={item.src}
                  alt={item.alt}
                  style={{ width: '100%', borderRadius: '14px' }}
                />
              )
            }
            const video = VIDEOS.find(v => v.id === item.id)
            return (
              <video
                key={item.id}
                src={video.src}
                alt={`Video Tomi Publicitario ${item.id}`}
                autoPlay
                loop
                muted
                onClick={() => handleVideoSwap(item.id)}
                style={{
                  width: '100%',
                  borderRadius: '14px',
                  backgroundColor: '#000',
                  cursor: 'pointer'
                }}
              />
            )
          })}
        </div>
      </div>

      {/* TEXTO COMERCIAL CENTRADO */}
      <p
        style={{
          textAlign: 'center',
          maxWidth: '820px',
          margin: '0 auto',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          color: '#444'
        }}
      >
        <strong>El Tomi Publicitario no solo llama la atención, la dirige.</strong>{' '}
        A diferencia del Sky Dancer, su movimiento es intencional y controlado:
        un brazo capta miradas y el otro invita a pasar con un gesto claro y natural.
        Su diseño en forma de personaje lo convierte en un punto visual de referencia
        que se ve profesional, distintivo y memorable.
        <br /><br />
        Si buscas que la gente no solo voltee a ver tu negocio, sino que entre,
        el Tomi es la herramienta ideal para atraer clientes y comunicar tu marca
        de forma efectiva.
      </p>
    </div>
  )
}
