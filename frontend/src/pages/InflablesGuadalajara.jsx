import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa'
import { useWhatsappLead } from '../hooks/useWhatsappLead'
import usePageTitle from '../hooks/usePageTitle'
import { Link } from 'react-router-dom'

const sectionStyle = {
  padding: '3rem 1.25rem',
  maxWidth: '1100px',
  margin: '0 auto'
}

const cardGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.2rem'
}

const cardStyle = {
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  padding: '1.25rem',
  background: '#fff',
  boxShadow: '0 12px 30px rgba(0,0,0,0.04)'
}

const badge = {
  display: 'inline-block',
  padding: '0.35rem 0.75rem',
  borderRadius: '999px',
  background: '#e7f5ff',
  color: '#0b6bcb',
  fontWeight: 700,
  fontSize: '0.85rem'
}

const bullet = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.4rem',
  color: '#0f172a'
}

const caseImageStyle = {
  width: '100%',
  height: '190px',
  objectFit: 'cover',
  borderRadius: '10px',
  marginBottom: '0.75rem'
}

function InflablesGuadalajara() {
  // Usamos el origen por defecto ('web') y personalizamos el nombre para el mensaje inicial de WhatsApp
  const { handleWhatsappClick, loading } = useWhatsappLead({
    pageName: 'Página de los más vendidos en inflables publicitarios'
  })

  usePageTitle(
    'Inflables publicitarios en Guadalajara | Cotiza hoy con respuesta inmediata',
    'Cotiza por WhatsApp en minutos inflables publicitarios en Guadalajara: Tomi, Sky Dancer, arcos y réplicas. 25+ años, materiales premium, entrega rápida en GDL y envíos nacionales, asesoría gratis.',
    'https://grupopmpublicidad.mx/inflables-publicitarios-guadalajara'
  )

  const catalogo = [
    {
      id: 'tomi',
      nombre: 'Tomi publicitario',
      destacado: true,
      descripcion:
        'Inflable con movimiento que atrae miradas al instante y hace que tu negocio destaque por encima de los demás.',
      ideal: 'lanzamientos, aperturas y promociones donde necesitas captar la atención desde lejos',
      link: '/inflable-publicitario-con-movimiento',
      video: '/images/categories/tomi-publicitario/tomi-4.mp4',
      poster: '/images/categories/tomi-publicitario/castor.jpg'
    },
    {
      id: 'sky-dancer',
      nombre: 'Sky Dancer',
      descripcion: 'Figura de aire llamativa y económica para captar atención continua.',
      ideal: 'Promociones en fachada y eventos al aire libre',
      link: '/sky-dancer',
      image: '/images/categories/sky-dancer/sky-amarillo.jpg',
      alt: 'Sky Dancer inflable publicitario alto amarillo en uso para negocio'
    },
    {
      id: 'replicas',
      nombre: 'Réplicas inflables',
      descripcion: 'Reproduce tu producto o mascota en grande para foto y recordación.',
    ideal: 'Eventos, activaciones y lanzamientos de producto',
      link: '/replicas-inflables',
      image: '/images/categories/replicas-inflables/replica-cordoba.jpg',
      alt: 'Réplica inflable publicitaria de producto Córdoba'
    },
    {
      id: 'arcos',
      nombre: 'Arcos meta',
      descripcion: 'Pórticos inflables para entradas y eventos deportivos.',
      ideal: 'Carreras, ferias y accesos destacados',
      link: '/arcos-inflables',
      image: '/images/categories/arcos-meta/arco-curvo.jpg',
      alt: 'Arco meta inflable curvo en evento deportivo'
    },
    {
      id: 'botargas',
      nombre: 'Botargas',
      descripcion:
        'Personajes inflables y botargas que generan interacción directa con el público y hacen tu marca más cercana y memorable.',
      ideal: 'Activaciones, promociones en punto de venta y eventos donde buscas interacción con clientes',
      link: '/botargas',
      image: '/images/casos-uso/botarga-elote.jpg',
      alt: 'Botarga publicitaria para eventos y promociones'
    }
  ]

  const faq = [
    {
      q: '¿Atienden en toda el área metropolitana de Guadalajara?',
      a: 'Sí, cubrimos toda el área metropolitana de Guadalajara y fabricamos aquí; también enviamos al resto de la República. Escríbenos por WhatsApp y confirmamos entregas en tu zona.'
    },
    {
      q: '¿Cuál es el tiempo de entrega?',
      a: 'Depende del modelo; para inflables estándar solemos fabricar en 7-10 días. Te damos fecha exacta por WhatsApp según agenda y urgencia.'
    },
    {
      q: '¿Ayudan a elegir el inflable correcto?',
      a: 'Sí, te guiamos según tu objetivo, espacio y aforo para que elijas el formato correcto. Cuéntanos por WhatsApp y te sugerimos la mejor opción.'
    },
    {
      q: '¿Qué materiales usan?',
      a: 'Usamos lonas e insumos de alta calidad para exterior, pensados para durabilidad y buen inflado. Si necesitas especificaciones, te las compartimos por WhatsApp.'
    }
  ]

  return (
    <div style={{ background: '#f8fafc' }}>
      {/* Hero */}
      <section style={{ ...sectionStyle, paddingTop: '3.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <span style={badge}>Guadalajara · Más de 25 años de experiencia</span>
          <h1 style={{ fontSize: '2.4rem', lineHeight: 1.15, margin: '1rem 0 0.75rem', color: '#0f172a' }}>
            Inflables publicitarios en Guadalajara que sí llaman la atención desde el primer momento
          </h1>
          <p style={{ fontSize: '1.08rem', lineHeight: 1.65, color: '#334155', marginBottom: '1.4rem' }}>
            Tomi publicitario, Sky Dancer, réplicas, arcos meta y mucho más. Te asesoramos para elegir el inflable ideal según tu objetivo, con fabricación de alta calidad en Guadalajara y envíos a toda la República.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="whatsapp-btn"
              onClick={handleWhatsappClick}
              disabled={loading}
              style={{ minWidth: '220px' }}
            >
              <FaWhatsapp size={18} /> {loading ? 'Abriendo...' : 'Cotizar por WhatsApp'}
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0f172a' }}>
              <FaCheckCircle color="#16a34a" /> ✔ Asesoría personalizada incluida
            </div>
          </div>
          <p style={{ marginTop: '0.75rem', color: '#475569', fontSize: '0.96rem' }}>
            La disponibilidad puede variar según la temporada; escríbenos cuanto antes para asegurar tu inflable a tiempo.
          </p>
        </div>
      </section>

      <div
        style={{
          maxWidth: '760px',
          margin: '0 auto 0',
          padding: '0 1.25rem 0.6rem',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '1.15rem 1rem 1.2rem',
            boxShadow: '0 12px 30px rgba(0,0,0,0.04)'
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '1.02rem',
              lineHeight: 1.6,
              color: '#334155'
            }}
          >
            Hay un inflable que últimamente todos voltean a ver 👇
          </p>
          <Link
            to="/inflable-publicitario-con-movimiento"
            style={{
              display: 'inline-block',
              marginTop: '0.9rem',
              padding: '0.72rem 1rem',
              borderRadius: '999px',
              background: '#e7f5ff',
              color: '#0b6bcb',
              textDecoration: 'none',
              fontWeight: 700,
              border: '1px solid #b6e0fe'
            }}
          >
            Ver inflable con movimiento
          </Link>
        </div>
      </div>

      {/* Catálogo de opciones */}
      <section style={sectionStyle}>
        <p
          style={{
            color: '#0b6bcb',
            fontWeight: 700,
            fontSize: '1rem',
            marginBottom: '0.5rem'
          }}
        >
          Algunos inflables cumplen... otros hacen que la gente voltee y pregunte por tu negocio.
        </p>
        <h2 style={{ fontSize: '1.7rem', marginBottom: '0.6rem', color: '#0f172a' }}>Opciones destacadas</h2>
        <p style={{ color: '#334155', marginBottom: '1.2rem' }}>
          Trabajamos en Guadalajara, y enviamos a toda la República.
        </p>
        <div style={cardGrid}>
          {catalogo.map(item => (
            <div
              key={item.id}
              style={{
                ...cardStyle,
                border: item.destacado ? '1.5px solid #0ea5e9' : cardStyle.border,
                gridColumn: item.destacado ? '1 / -1' : undefined,
                background: item.destacado ? '#e7f5ff' : '#fff'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <h3 style={{ margin: 0, color: '#0f172a' }}>{item.nombre}</h3>
                {item.destacado && <span style={badge}>Más llamativo</span>}
              </div>
              {item.video ? (
                <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                  <video
                    src={item.video}
                    poster={item.poster}
                    controls
                    style={{
                      width: '100%',
                      maxWidth: '280px',
                      aspectRatio: '9 / 16',
                      borderRadius: '10px',
                      objectFit: 'contain',
                      background: '#000'
                    }}
                  />
                </div>
              ) : item.image ? (
                <div style={{ marginBottom: '0.75rem' }}>
                  <img
                    src={item.image}
                    alt={item.alt || item.nombre}
                    loading="lazy"
                    style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', maxHeight: '260px' }}
                  />
                </div>
              ) : null}
              <p style={{ color: '#334155', marginBottom: '0.4rem' }}>{item.descripcion}</p>
              <p style={{ color: '#0f172a', fontWeight: 600, marginBottom: '0.8rem' }}>Ideal para: {item.ideal}</p>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <Link to={item.link} style={{ color: '#0b6bcb', fontWeight: 700 }}>
                  Ver detalles
                </Link>
                <button
                  className="whatsapp-btn"
                  onClick={handleWhatsappClick}
                  disabled={loading}
                  style={{ padding: '0.65rem 0.85rem', fontSize: '0.95rem' }}
                >
                  <FaWhatsapp size={16} /> Cotizar por WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Propuesta de valor */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', color: '#0f172a' }}>Por qué elegirnos en Guadalajara y en todo México</h2>
        <div style={{ ...cardGrid, gap: '0.8rem' }}>
          {[
            'Más de 25 años fabricando inflables publicitarios',
            'Materiales de alta calidad y durabilidad',
            'Asesoría personalizada para elegir el modelo correcto',
            'Entrega en GDL y envíos a todo México'
          ].map(item => (
            <div key={item} style={{ ...cardStyle, padding: '1rem' }}>
              <div style={bullet}>
                <FaCheckCircle color="#16a34a" />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Te ayudamos a elegir */}
      <section style={{ ...sectionStyle, background: '#fff', borderRadius: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'grid', gap: '1.4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.65rem', color: '#0f172a', marginBottom: '0.6rem' }}>Te ayudamos a elegir el inflable correcto</h2>
            <p style={{ color: '#334155', lineHeight: 1.6 }}>
              Cuéntanos tu objetivo (visibilidad, lanzamiento, activación) y te recomendamos el formato ideal según espacio, flujo de personas y presupuesto.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.8rem', color: '#0f172a' }}>
              {['Recomendaciones personalizadas', 'Acierto en formato y tamaño', 'Optimización de inversión'].map(item => (
                <li key={item} style={bullet}>
                  <FaCheckCircle color="#0ea5e9" /> {item}
                </li>
              ))}
            </ul>
            <button
              className="whatsapp-btn"
              onClick={handleWhatsappClick}
              disabled={loading}
              style={{ marginTop: '1rem' }}
            >
              <FaWhatsapp size={18} /> {loading ? 'Abriendo...' : 'Cotizar ahora por WhatsApp'}
            </button>
          </div>
          <div style={{ ...cardStyle, background: '#0f172a', color: '#e2e8f0' }}>
            <h3 style={{ marginBottom: '0.5rem', color: '#fff' }}>¿Dudas entre opciones?</h3>
            <p style={{ lineHeight: 1.6 }}>
              En una breve llamada o chat revisamos tu objetivo y proponemos el modelo que maximiza visibilidad. Así evitas gastar en el inflable equivocado.
            </p>
          </div>
        </div>
      </section>

      {/* Prueba social local */}
      <section style={{ ...sectionStyle, background: '#fff', borderRadius: '16px', boxShadow: '0 12px 30px rgba(0,0,0,0.05)' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#0f172a' }}>
          Negocios en Guadalajara que ya están llamando la atención con nuestros inflables
        </h2>
        <p style={{ color: '#334155', marginBottom: '1rem', lineHeight: 1.6 }}>
          Hemos trabajado con diferentes marcas, eventos y negocios locales, ayudándolos a destacar y atraer más clientes.
        </p>
        <div style={{ ...cardGrid, gap: '1rem' }}>
          {[
            {
              title: 'Retail en zona metropolitana',
              text: 'Presencia de marca en punto de venta con inflables y elementos visuales que atraen miradas desde la calle y generan mayor flujo de clientes desde el primer día.',
              image: '/images/casos-uso/continental.jpg',
              alt: 'Inflable publicitario en negocio local en Guadalajara'
            },
            {
              title: 'Evento deportivo local',
              text: 'Activaciones en eventos deportivos con inflables de gran formato que captan la atención del público y refuerzan la recordación de marca durante toda la experiencia.',
              image: '/images/casos-uso/replica-balon.jpg',
              alt: 'Arco inflable en evento deportivo en Guadalajara'
            },
            {
              title: 'Lanzamiento de producto',
              text: 'Activaciones con personajes e inflables que generan interacción, fotos y una experiencia memorable para los asistentes, ayudando a que tu marca se comparta y se recuerde.',
              image: '/images/casos-uso/botargas.jpg',
              alt: 'Activación de marca con inflables publicitarios'
            }
          ].map(card => (
            <div key={card.title} style={cardStyle}>
              <h3 style={{ margin: '0 0 0.4rem', color: '#0f172a' }}>{card.title}</h3>
              {card.image ? (
                <img src={card.image} alt={card.alt} loading="lazy" style={caseImageStyle} />
              ) : null}
              <p style={{ color: '#334155', lineHeight: 1.6 }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '0.8rem', color: '#0f172a' }}>Cómo trabajamos</h2>
        <div style={{ display: 'grid', gap: '0.9rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {[
            '1. Cuéntanos tu objetivo y fechas por WhatsApp',
            '2. Te recomendamos el inflable ideal (tamaño, formato)',
            '3. Producción con materiales de alta calidad',
            '4. Entrega en GDL y envíos nacionales (opcional instalación)'
          ].map(step => (
            <div key={step} style={{ ...cardStyle, padding: '1rem' }}>
              <div style={bullet}>
                <FaCheckCircle color="#0ea5e9" />
                <span>{step}</span>
              </div>
            </div>
          ))}
        </div>
        <button
          className="whatsapp-btn"
          onClick={handleWhatsappClick}
          disabled={loading}
          style={{ marginTop: '1rem' }}
        >
          <FaWhatsapp size={18} /> {loading ? 'Abriendo...' : 'Iniciar por WhatsApp'}
        </button>
      </section>

      {/* Diferenciadores */}
      <section style={{ ...sectionStyle, background: '#0f172a', color: '#f8fafc', borderRadius: '16px' }}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '0.8rem', color: '#fff' }}>Lo que nos hace distintos</h2>
        <div style={{ display: 'grid', gap: '0.7rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {[
            '25+ años de experiencia en inflables publicitarios',
            'Materiales de alta calidad para uso intensivo',
            'Asesoría personalizada para acertar en el modelo',
            'Atención local en Guadalajara, envíos a todo México'
          ].map(item => (
            <div
              key={item}
              style={{
                ...cardStyle,
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#f8fafc'
              }}
            >
              <div style={{ ...bullet, color: '#f8fafc' }}>
                <FaCheckCircle color="#22c55e" />
                <span>{item}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={sectionStyle}>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '0.8rem', color: '#0f172a' }}>Preguntas frecuentes</h2>
        <div style={{ display: 'grid', gap: '0.8rem' }}>
          {faq.map(item => (
            <div key={item.q} style={{ ...cardStyle, padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.35rem', color: '#0f172a' }}>{item.q}</h3>
              <p style={{ margin: 0, color: '#334155', lineHeight: 1.6 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section style={{ ...sectionStyle, textAlign: 'center', paddingBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.6rem', color: '#0f172a' }}>
          Haz que tu negocio destaque con el inflable correcto
        </h2>
        <p style={{ color: '#334155', marginBottom: '1rem' }}>
          Cuéntanos qué necesitas y te ayudamos a elegir la mejor opción según tu objetivo. Fabricamos en Guadalajara y enviamos a toda la República.
        </p>
        <button
          className="whatsapp-btn"
          onClick={handleWhatsappClick}
          disabled={loading}
          style={{ minWidth: '240px' }}
        >
          <FaWhatsapp size={18} /> {loading ? 'Abriendo...' : 'Cotizar por WhatsApp'}
        </button>
        <div style={{ marginTop: '0.6rem', color: '#0f172a', display: 'flex', justifyContent: 'center', gap: '0.4rem', alignItems: 'center' }}>
          <FaCheckCircle color="#16a34a" /> ✔ Asesoría personalizada incluida
        </div>
      </section>
    </div>
  )
}

export default InflablesGuadalajara
