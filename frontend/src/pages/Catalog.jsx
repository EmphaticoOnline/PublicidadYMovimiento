import { Link, useSearchParams } from 'react-router-dom'
import catalog from '../data/catalog.json'
import { subcategories } from '../data/subcategories'
import CategoriesGrid from '../components/CategoriesGrid'
import TomiPage from './categories/TomiPage'
import SkyDancerPage from './categories/SkyDancerPage'
import ReplicasInflablesPage from './categories/ReplicasInflablesPage'
import ArcosMetaPage from './categories/ArcosMetaPage'
import PublibackPage from './categories/PublibackPage'
import CilindrosPublicitariosPage from './categories/CilindrosPublicitariosPage'
import PublituboPage from './categories/PublituboPage'
import PantallasCartelerasPage from './categories/PantallasCartelerasPage'
import FlagBannerPage from './categories/FlagBannerPage'
import BotargasPage from './categories/BotargasPage'
import CarpasTokenPage from './categories/CarpasTokenPage'
import TunelsPage from './categories/TunelsPage'
import GlobosAerostaticosPage from './categories/GlobosAerostaticosPage'
import JuegosInteractivosPage from './categories/JuegosInteractivosPage'
import BrincolinesPage from './categories/BrincolinesPage'
import PeluchePublicitarioPage from './categories/PeluchePublicitarioPage'
import DomisRellenablesPage from './categories/DomisRellenablesPage'
import LineaAutosPage from './categories/LineaAutosPage'
import DisplayPage from './categories/DisplayPage'
import KitsPage from './categories/KitsPage'
import TurbinasPage from './categories/TurbinasPage'

const specialPages = {
  'tomi-publicitario': TomiPage,
  'sky-dancer': SkyDancerPage,
  'replicas-inflables': ReplicasInflablesPage,
  'arcos-meta': ArcosMetaPage,
  publiback: PublibackPage,
  'cilindros-publicitarios': CilindrosPublicitariosPage,
  publitubo: PublituboPage,
  'pantallas-carteleras': PantallasCartelerasPage,
  'flag-banner': FlagBannerPage,
  botargas: BotargasPage,
  'carpas-toldos': CarpasTokenPage,
  tuneles: TunelsPage,
  'globos-aerostaticos': GlobosAerostaticosPage,
  'juegos-interactivos': JuegosInteractivosPage,
  brincolines: BrincolinesPage,
  'peluche-publicitario': PeluchePublicitarioPage,
  'domis-rellenables': DomisRellenablesPage,
  'linea-autos': LineaAutosPage,
  display: DisplayPage,
  kits: KitsPage,
  turbinas: TurbinasPage
}

const hasOwn = Object.prototype.hasOwnProperty

const isValidCategoryParam = slug =>
  Boolean(slug) && (hasOwn.call(specialPages, slug) || hasOwn.call(subcategories, slug))

function Catalog({ initialCategory }) {
  const [searchParams] = useSearchParams()
  const categoriaParam = searchParams.get('categoria')
  const sub = searchParams.get('sub')
  const categoria = isValidCategoryParam(categoriaParam) ? categoriaParam : initialCategory || null

  if (!categoria) {
    return (
      <div style={{ padding: '2rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Productos</h1>
        <p style={{ textAlign: 'center', color: '#555', marginBottom: '1.5rem' }}>
          Explora nuestras categorías y descubre la solución perfecta para tu marca.
        </p>
        <CategoriesGrid />
      </div>
    )
  }

  if (!sub && specialPages[categoria]) {
    const SpecialComponent = specialPages[categoria]
    return <SpecialComponent />
  }

  const subs = subcategories[categoria] || []

  if (subs.length > 0 && !sub) {
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

  if (sub) {
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

  return (
    <div>
      <h1>{categoria.replace(/-/g, ' ').toUpperCase()}</h1>
      <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
        Estamos preparando contenido para esta categoría.
      </p>
    </div>
  )
}

export default Catalog
