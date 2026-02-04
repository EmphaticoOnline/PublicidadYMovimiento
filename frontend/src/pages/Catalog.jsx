import { useSearchParams, Link } from 'react-router-dom'
import { subcategories } from '../data/subcategories'
import catalog from '../data/catalog.json'

function Catalog() {
  const [searchParams] = useSearchParams()
  const categoria = searchParams.get('categoria')
  const sub = searchParams.get('sub')
  const isTomi = categoria === 'tomi-publicitario'
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


  // SIN CATEGORÍA
  if (!categoria) {
    return (
      <div>
        <h1>Catálogo</h1>
        <p>Selecciona una categoría desde la página de inicio.</p>
      </div>
    )
  }

  // 👉 PÁGINA ESPECIAL TOMI
  if (isTomi && !sub) {
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
            onClick={(e) => {
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

        {/* GRID DE IMÁGENES TOMI */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            marginBottom: '3rem'
          }}
        >
          <img
            src="/images/categories/tomi-publicitario/castor.jpg"
            alt="Tomi publicitario Castor"
            style={{ width: '100%', borderRadius: '14px' }}
          />
          <img
            src="/images/categories/tomi-publicitario/pemex.jpg"
            alt="Tomi publicitario Pemex"
            style={{ width: '100%', borderRadius: '14px' }}
          />
          <img
            src="/images/categories/tomi-publicitario/perro.jpg"
            alt="Tomi publicitario Perro"
            style={{ width: '100%', borderRadius: '14px' }}
          />
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

  // 👉 NIVEL 1: SUBCATEGORÍAS
  if (categoria && !sub) {
    const subs = subcategories[categoria] || []

    return (
      <div>
        <h1>{categoria.replace(/-/g, ' ').toUpperCase()}</h1>

        <div
          style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))'
          }}
        >
          {subs.map(({ id, label }) => (
            <Link
              key={id}
              to={`/catalogo?categoria=${categoria}&sub=${id}`}
              style={{
                border: '1px solid #ddd',
                padding: '1rem',
                borderRadius: '12px',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // 👉 NIVEL 2: PRODUCTOS DESDE JSON
  if (categoria && sub) {
    const products = catalog?.[categoria]?.[sub] || []

    return (
      <div>
        <h1>{categoria.replace(/-/g, ' ').toUpperCase()}</h1>
        <h2>{sub.replace(/-/g, ' ')}</h2>

        {products.length === 0 ? (
          <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
            Próximamente productos en esta categoría.
          </p>
        ) : (
          <div
            style={{
              marginTop: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem'
            }}
          >
            {products.map((product, index) => (
              <div key={index}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }}
                />
                <p style={{ marginTop: '0.5rem', textAlign: 'center' }}>
                  {product.title}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return null
}

export default Catalog
