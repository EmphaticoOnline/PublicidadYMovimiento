
import { useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import catalog from '../data/catalog.json'
import { subcategories } from '../data/subcategories'
import CategoriesGrid from '../components/CategoriesGrid'

function Catalog({ initialCategory }) {
  const [searchParams] = useSearchParams()
  const categoriaParam = searchParams.get('categoria')
  const sub = searchParams.get('sub')
  const categoria = categoriaParam || initialCategory || null

  // SIN CATEGORÍA
  if (!categoria) {
    return (
      <div style={{ padding: '2rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Productos</h1>
        <p style={{ textAlign: 'center', color: '#555', marginBottom: '1.5rem' }}>
          Explora nuestras categorías y descubre la solución perfecta para tu marca.
        </p>
        <CategoriesGrid />
      </div>
    );
  }



  // 👉 NIVEL 1: SUBCATEGORÍAS
  if (categoria && !sub) {
    const subs = subcategories[categoria] || [];
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
    );
  }

  // 👉 NIVEL 2: PRODUCTOS
  if (categoria && sub) {
    const products = catalog?.[categoria]?.[sub] || [];
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
    );
  }

  return null;
}

export default Catalog
