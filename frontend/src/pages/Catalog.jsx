import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import catalog from '../data/catalog.json'
import { subcategories } from '../data/subcategories'
import { categories } from '../data/categories'
import CategoriesGrid from '../components/CategoriesGrid'
import usePageTitle from '../hooks/usePageTitle'

const TomiPage = lazy(() => import('./categories/TomiPage'))
const SkyDancerPage = lazy(() => import('./categories/SkyDancerPage'))
const ReplicasInflablesPage = lazy(() => import('./categories/ReplicasInflablesPage'))
const ArcosMetaPage = lazy(() => import('./categories/ArcosMetaPage'))
const PublibackPage = lazy(() => import('./categories/PublibackPage'))
const CilindrosPublicitariosPage = lazy(() => import('./categories/CilindrosPublicitariosPage'))
const PublituboPage = lazy(() => import('./categories/PublituboPage'))
const PantallasCartelerasPage = lazy(() => import('./categories/PantallasCartelerasPage'))
const FlagBannerPage = lazy(() => import('./categories/FlagBannerPage'))
const BotargasPage = lazy(() => import('./categories/BotargasPage'))
const CarpasToldosPage = lazy(() => import('./categories/CarpasToldosPage'))
const TunelsPage = lazy(() => import('./categories/TunelsPage'))
const GlobosAerostaticosPage = lazy(() => import('./categories/GlobosAerostaticosPage'))
const JuegosInteractivosPage = lazy(() => import('./categories/JuegosInteractivosPage'))
const BrincolinesPage = lazy(() => import('./categories/BrincolinesPage'))
const PeluchePublicitarioPage = lazy(() => import('./categories/PeluchePublicitarioPage'))
const DomisRellenablesPage = lazy(() => import('./categories/DomisRellenablesPage'))
const LineaAutosPage = lazy(() => import('./categories/LineaAutosPage'))
const DisplayPage = lazy(() => import('./categories/DisplayPage'))
const KitsPage = lazy(() => import('./categories/KitsPage'))
const TurbinasPage = lazy(() => import('./categories/TurbinasPage'))

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
  'carpas-toldos': CarpasToldosPage,
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
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const categoriaParam = searchParams.get('categoria')
  const sub = searchParams.get('sub')
  const categoria = isValidCategoryParam(categoriaParam) ? categoriaParam : initialCategory || null

  const categoryLabel = categories.find(cat => cat.id === categoria)?.label || (categoria ? categoria.replace(/-/g, ' ') : '')
  const subLabel = (subcategories[categoria] || []).find(s => s.id === sub)?.label || (sub ? sub.replace(/-/g, ' ') : '')

  const baseUrl = 'https://grupopmpublicidad.mx'
  const canonicalUrl = categoriaParam && isValidCategoryParam(categoriaParam) && !sub
    ? `${baseUrl}/${categoriaParam}`
    : hasOwn.call(specialPages, categoria)
      ? `${baseUrl}/${categoria}`
      : `${baseUrl}${location.pathname}${location.search || ''}`

  const rendersSpecialPage = !sub && Boolean(specialPages[categoria])

  const defaultTitle = 'Catálogo de Inflables Publicitarios | Publicidad y Movimiento'
  const defaultDescription = 'Explora nuestro catálogo de inflables publicitarios, sky dancers, arcos inflables y soluciones personalizadas en México.'

  const title = categoria
    ? sub
      ? `${subLabel} | ${categoryLabel} | Publicidad y Movimiento`
      : `${categoryLabel} | Publicidad y Movimiento`
    : defaultTitle

  const description = categoria
    ? sub
      ? `Descubre ${subLabel} dentro de ${categoryLabel}. Inflables publicitarios y soluciones personalizadas en México.`
      : `Explora ${categoryLabel} y soluciones de inflables publicitarios personalizadas en México.`
    : defaultDescription

  const shouldApplyMeta = !rendersSpecialPage
  usePageTitle(
    shouldApplyMeta ? title : null,
    shouldApplyMeta ? description : null,
    shouldApplyMeta ? canonicalUrl : null
  )

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
    return (
      <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Cargando...</div>}>
        <SpecialComponent />
      </Suspense>
    )
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
                  loading="lazy"
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
