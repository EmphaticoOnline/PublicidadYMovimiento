import { useSearchParams, Link } from 'react-router-dom'
import { subcategories } from '../data/subcategories'
import catalog from '../data/catalog.json'

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

function Catalog() {
  const [searchParams] = useSearchParams()
  const categoria = searchParams.get('categoria')
  const sub = searchParams.get('sub')

  // SIN CATEGORÍA
  if (!categoria) {
    return (
      <div>
        <h1>Catálogo</h1>
        <p>Selecciona una categoría desde la página de inicio.</p>
      </div>
    )
  }

  // 👉 PÁGINAS ESPECIALES (siempre arriba)
  if (categoria === 'tomi-publicitario' && !sub) {
    return <TomiPage />
  }

  if (categoria === 'sky-dancer' && !sub) {
    return <SkyDancerPage />
  }

  if (categoria === 'replicas-inflables' && !sub) {
    return <ReplicasInflablesPage />
  }

  if (categoria === 'arcos-meta' && !sub) {
    return <ArcosMetaPage />
  }

  if (categoria === 'publiback' && !sub) {
    return <PublibackPage />
  }
if (categoria === 'cilindros-publicitarios' && !sub) {
    return <CilindrosPublicitariosPage />
  }

  if (categoria === 'publitubo' && !sub) {
    return <PublituboPage />
  }
if (categoria === 'pantallas-carteleras' && !sub) {
    return <PantallasCartelerasPage />
  }

  if (categoria === 'flag-banner' && !sub) {
    return <FlagBannerPage />
  }

  if (categoria === 'botargas' && !sub) {
    return <BotargasPage />
  }

  if (categoria === 'carpas-toldos' && !sub) {
    return <CarpasTokenPage />
  }

  if (categoria === 'tuneles' && !sub) {
    return <TunelsPage />
  }

  if (categoria === 'globos-aerostaticos' && !sub) {
    return <GlobosAerostaticosPage />
  }

  if (categoria === 'juegos-interactivos' && !sub) {
    return <JuegosInteractivosPage />
  }

  if (categoria === 'brincolines' && !sub) {
    return <BrincolinesPage />
  }

  if (categoria === 'peluche-publicitario' && !sub) {
    return <PeluchePublicitarioPage />
  }

  if (categoria === 'domis-rellenables' && !sub) {
    return <DomisRellenablesPage />
  }

  if (categoria === 'linea-autos' && !sub) {
    return <LineaAutosPage />
  }

  if (categoria === 'display' && !sub) {
    return <DisplayPage />
  }

  if (categoria === 'kits' && !sub) {
    return <KitsPage />
  }

  if (categoria === 'turbinas' && !sub) {
    return <TurbinasPage />
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

  // 👉 NIVEL 2: PRODUCTOS
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
