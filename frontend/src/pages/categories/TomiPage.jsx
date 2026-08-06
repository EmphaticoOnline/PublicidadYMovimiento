
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import usePageTitle from '../../hooks/usePageTitle'
import { crearLinkWhatsApp, construirMensajeWhatsApp } from '../../utils/whatsapp'
import { registrarIntentoWhatsapp, obtenerSessionIdWhatsapp } from '../../services/registrarIntentoWhatsapp'
import { trackWhatsAppClick } from '../../utils/metaPixel'

const WHATSAPP_NUMBERS = [
  '5213310949986', // Faby
  '5213331704595', // Publicidad y Movimiento
]

function openWhatsappAlternado() {
  const lastIndex = Number(localStorage.getItem('waIndex')) || 0
  const nextIndex = (lastIndex + 1) % WHATSAPP_NUMBERS.length
  localStorage.setItem('waIndex', nextIndex)
  const phone = WHATSAPP_NUMBERS[lastIndex]
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'click_whatsapp', {
      event_category: 'Contacto',
      event_label: window.location?.pathname || '/',
    })
  }
  const nombrePagina = 'Tomi inflable publicitario'
  const mensajePrellenado = construirMensajeWhatsApp(nombrePagina)

  registrarIntentoWhatsapp({
    empresa_id: 2,
    pagina_origen: window.location?.pathname || '/',
    producto: nombrePagina,
    fuente: 'web',
    tipo_intento: 'whatsapp_click',
    mensaje_prellenado: mensajePrellenado,
    session_id: obtenerSessionIdWhatsapp(),
    user_agent: navigator?.userAgent || 'desconocido',
  }).catch((err) => console.debug('[TomiPage] intento no registrado', err))

  const link = crearLinkWhatsApp(nombrePagina, phone)
  trackWhatsAppClick({
    pagePath: `${window.location?.pathname || '/'}${window.location?.search || ''}`,
    productId: 'tomi-publicitario',
    contentName: nombrePagina,
    buttonId: 'category_primary_quote',
    placement: 'tomi_hero'
  })
  window.open(link, '_blank')
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
  { src: '/images/categories/tomi-publicitario/castor.jpg', alt: 'Tomi inflable publicitario con movimiento Castor' },
  { src: '/images/categories/tomi-publicitario/pemex.jpg', alt: 'Tomi inflable publicitario con movimiento Gasolinera' },
  { src: '/images/categories/tomi-publicitario/perro.jpg', alt: 'Tomi inflable publicitario con movimiento Perro' }
]

export default function TomiPage() {
  usePageTitle(
    'Inflable Publicitario con Movimiento (Tomi) | Atrae Clientes a tu Negocio',
    'Inflable publicitario con movimiento tipo Tomi, ideal para atraer clientes a tu negocio. Más control que un Sky Dancer y mayor interacción con peatones.',
    'https://grupopmpublicidad.mx/inflable-publicitario-con-movimiento'
  );
  const [mainVideoId, setMainVideoId] = useState('tomi-1')

  const mainVideo = VIDEOS.find(v => v.id === mainVideoId)
  const thumbnails = VIDEOS.filter(
    v => v.id !== mainVideoId && v.id !== GRID_VIDEO_ID
  ).slice(0, 2)

  const gridVideo = VIDEOS.find(v => v.id === GRID_VIDEO_ID)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué es un muñeco inflable para negocio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es un inflable publicitario con movimiento diseñado para captar miradas y dirigir clientes a tu local. El modelo Tomi tiene gestos intencionales que invitan a entrar, ideal para puntos de venta que necesitan activación inmediata.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuál es la diferencia entre un Tomi y un sky dancer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El sky dancer destaca por su altura y visibilidad lejana, mientras que el Tomi actúa como muñeco inflable promocional con brazos dirigidos hacia tu negocio, logrando más interacción cercana y oportunidades de venta.'
        }
      },
      {
        '@type': 'Question',
        name: '¿El Tomi inflable se puede personalizar para mi marca?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Fabricamos cada muñeco inflable promocional con tus colores, logotipo y mensaje para que funcione como inflable gigante para negocio y refuerce tu identidad visual en eventos o fachadas.'
        }
      }
    ]
  }

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
          <h1>Inflable Publicitario con Movimiento para Negocios (Tomi)</h1>
          <h2>La alternativa profesional al Sky Dancer para negocios que buscan resultados</h2>

          <p className="lead">
            El inflable publicitario con movimiento que dirige miradas, mantiene presencia de marca y convierte curiosos en clientes en cualquier ciudad de México.
          </p>

          <ul>
            <li>Movimiento intencional que invita a entrar.</li>
            <li>Personaje memorable que refuerza tu marca.</li>
            <li>Visible desde lejos y efectivo en puntos de venta.</li>
          </ul>

          <p>
            Este muñeco inflable promocional se personaliza con tus colores y logotipo, funcionando como anfitrión permanente que atiende a tus clientes incluso cuando el equipo está ocupado.
          </p>

          <p>
            Cuéntanos qué tipo de negocio tienes y te ayudamos a elegir el Tomi ideal. Lo fabricamos como inflable gigante para negocio, resistente a exteriores y listo para operar con tus campañas.
          </p>

          <Link
            to="/#"
            onClick={e => {
              e.preventDefault()
              openWhatsappAlternado()
            }}
            className="cta"
          >
            <FaWhatsapp size={20} />
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
                playsInline
                controls={false}
                title={`Tomi inflable publicitario con movimiento - Video ${video.id}`}
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
            playsInline
            controls={false}
            title={`Tomi inflable publicitario con movimiento - Video principal (${mainVideo.id})`}
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
          playsInline
          controls={false}
          className="grid-video"
          title="Tomi inflable publicitario con movimiento - Video fijo grid"
          onClick={() => setMainVideoId(gridVideo.id)}
        />

        {GRID_IMAGES.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} loading="lazy" />
        ))}
      </div>

      {/* 
Agrega aquí una nueva sección comparativa entre Tomi y Sky Dancer.
Debe incluir:
- Un <h2> con la pregunta: "¿Tomi o Sky Dancer? ¿Cuál conviene más a tu negocio?"
- Un párrafo explicando que el Sky Dancer tiene más altura y visibilidad desde lejos.
- Un párrafo explicando que el Tomi tiene movimiento dirigido que invita a entrar.
- Una lista <ul> comparando ambos productos.
Mantener el mismo estilo visual de la página.
*/}
      <div style={{ marginTop: '3rem' }}>
        <h2>¿Tomi o Sky Dancer? ¿Cuál conviene más a tu negocio?</h2>
        <p>
          El Sky Dancer es el clásico inflable que se mueve con el viento, ideal para captar atención desde lejos gracias a su altura. Sin embargo, su movimiento es aleatorio y no siempre invita a entrar.
        </p>
        <p>
          El Tomi, por otro lado, tiene un movimiento intencional que señala hacia tu negocio, guiando a los clientes potenciales directamente a tu puerta. Es como tener un anfitrión animado que da la bienvenida a cada persona que pasa.
        </p>  
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

      {/* FAQ */}
      <section style={{ marginTop: '3rem' }}>
        <h2>Preguntas frecuentes sobre el muñeco inflable para negocio</h2>

        <div>
          <h3>¿Cómo funciona el inflable publicitario con movimiento?</h3>
          <p>
            Utiliza una turbina silenciosa que mantiene al personaje siempre activo.
            Sus brazos dirigen a las personas hacia tu puerta, generando interacción constante
            como si fuera un promotor en vivo.
          </p>
        </div>

        <div>
          <h3>¿Puedo usar el muñeco inflable promocional en interiores?</h3>
          <p>
            Sí, siempre que cuentes con altura libre y corriente eléctrica.
            Muchos clientes lo usan dentro de plazas comerciales para destacar
            su local desde cualquier pasillo.
          </p>
        </div>

        <div>
          <h3>¿Qué incluye el paquete del inflable gigante para negocio?</h3>
          <p>
            Incluye estructura personalizada, turbina lista para enchufar y bolsa de transporte.
            Opcionalmente agregamos iluminación LED o bases con peso adicional para exteriores.
          </p>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 1rem;
          background: #25D366;
          color: #fff;
          padding: 1rem 2.4rem;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
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

        .tomi-grid {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 15px;
        }

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
