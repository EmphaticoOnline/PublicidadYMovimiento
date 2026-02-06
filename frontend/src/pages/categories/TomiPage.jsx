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

// 🔒 VIDEO FIJO DEL GRID (CLAVE)
const GRID_VIDEO_ID = 'tomi-4'

const GRID_IMAGES = [
  { src: '/images/categories/tomi-publicitario/castor.jpg', alt: 'Tomi publicitario Castor' },
  { src: '/images/categories/tomi-publicitario/pemex.jpg', alt: 'Tomi publicitario Pemex' },
  { src: '/images/categories/tomi-publicitario/perro.jpg', alt: 'Tomi publicitario Perro' }
]

export default function TomiPage() {
  const [mainVideoId, setMainVideoId] = useState('tomi-1')

  const mainVideo = VIDEOS.find(v => v.id === mainVideoId)
  const thumbnails = VIDEOS.filter(
    v => v.id !== mainVideoId && v.id !== GRID_VIDEO_ID
  ).slice(0, 2)

  const gridVideo = VIDEOS.find(v => v.id === GRID_VIDEO_ID)

  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '2.1rem 1.5rem 3.5rem',
        fontFamily: 'Montserrat, Segoe UI, sans-serif'
      }}
    >
      {/* HERO */}
      <div className="tomi-hero">
        {/* TEXTO */}
        <div>
          <h1>TOMI PUBLICITARIO</h1>

          <p className="lead">
            El inflable que dirige miradas y convierte curiosos en clientes desde la calle.
          </p>

          <ul>
            <li>Movimiento intencional que invita a entrar.</li>
            <li>Personaje memorable que refuerza tu marca.</li>
            <li>Visible desde lejos y efectivo en puntos de venta.</li>
          </ul>

          <p>
            Cuéntanos qué tipo de negocio tienes y te ayudamos a elegir el Tomi ideal para atraer más clientes.
          </p>

          <Link
            to="/#"
            onClick={e => {
              e.preventDefault()
              openWhatsappAlternado()
            }}
            className="cta"
          >
            Cotiza tu Tomi ahora
          </Link>

          {/* THUMBNAILS */}
          <div className="tomi-thumbs">
            {thumbnails.map(video => (
              <video
                key={video.id}
                src={video.src}
                autoPlay
                loop
                muted
                onClick={() => setMainVideoId(video.id)}
              />
            ))}
          </div>
        </div>

        {/* VIDEO PRINCIPAL */}
        <div className="tomi-main-video">
          <video
            key={mainVideo.id}
            src={mainVideo.src}
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      {/* GRID – VIDEO ARRIBA A LA IZQUIERDA (ESTABLE) */}
      <div className="tomi-grid">
        <video
          src={gridVideo.src}
          autoPlay
          loop
          muted
          className="grid-video"
          onClick={() => setMainVideoId(gridVideo.id)}
        />

        {GRID_IMAGES.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} />
        ))}
      </div>

      {/* TEXTO FINAL */}
      <p className="tomi-copy">
        El Sky Dancer atrae miradas desde lejos.  
        El Tomi, en cambio, invita a pasar.
        <br /><br />
        Su movimiento no es al azar: señala, guía y conecta con quien va pasando.
        Es como tener un personaje afuera de tu negocio diciendo sin hablar:
        <strong> "Pásele, aquí es."</strong>
        <br /><br />
        Con el Tomi no solo decoras, comunicas.
        Con el Tomi no solo se mueven los brazos, se mueven los clientes.
      </p>

      <style>{`
        .tomi-hero {
          display: grid;
          gap: 2rem;
          align-items: stretch;
        }

        .tomi-hero h1 {
          font-size: 2.6rem;
          margin-bottom: 0.6rem;
        }

        .lead {
          font-size: 1.1rem;
          color: #444;
          max-width: 520px;
          line-height: 1.6;
        }

        ul {
          padding-left: 1.2rem;
          line-height: 1.6;
        }

        .cta {
          display: inline-block;
          margin-top: 1rem;
          background: #25D366;
          color: #fff;
          padding: 1rem 2.4rem;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 10px 24px rgba(0,0,0,0.18);
        }

        .tomi-thumbs {
          margin-top: 1.2rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          max-width: 520px;
        }

        .tomi-thumbs video {
          width: 100%;
          border-radius: 14px;
          cursor: pointer;
          box-shadow: 0 8px 18px rgba(0,0,0,0.15);
        }

        .tomi-main-video video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 18px 36px rgba(0,0,0,0.2);
        }

        /* 🔥 GRID: video arriba-izquierda FORZADO */
        .tomi-grid {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 15px;
        }

        /* ✅ REGLA ESPECÍFICA PRIMERO (mayor especificidad) */
        .tomi-grid .grid-video {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
          cursor: pointer;
        }

        /* Estilos genéricos para imágenes (sin afectar al video) */
        .tomi-grid img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
          cursor: pointer;
        }

        .tomi-copy {
          margin: 3rem auto 0;
          max-width: 820px;
          text-align: center;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #444;
        }

        @media (min-width: 768px) {
          .tomi-hero {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
      `}</style>
    </div>
  )
}