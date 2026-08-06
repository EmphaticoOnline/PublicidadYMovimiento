import { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const Catalog = lazy(() => import('./pages/Catalog'))
const Contact = lazy(() => import('./pages/Contact'))
const InflablesGuadalajara = lazy(() => import('./pages/InflablesGuadalajara'))
import MainLayout from './components/layout/MainLayout'
import { categories } from './data/categories'
import { initAnalyticsListener } from './utils/analyticsListener'
import MetaPixelTracker from './components/analytics/MetaPixelTracker'

function App() {
  useEffect(() => {
    initAnalyticsListener()
  }, [])

  return (
    <Router>
      <MetaPixelTracker />
      <CartProvider>
        <MainLayout>
          <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalog />} />

              {/* Landing Guadalajara - URL nueva */}
              <Route path="/inflables-publicitarios-guadalajara" element={<InflablesGuadalajara />} />

              {/* Redirección 301-like desde la URL anterior */}
              {/* SEO: requiere redirección 301 real en servidor -> /test-inflables-guadalajara */}
              <Route
                path="/test-inflables-guadalajara"
                element={<Navigate to="/inflables-publicitarios-guadalajara" replace />}
              />

              {/* RUTAS LIMPIAS SEO */}
              {categories
                .filter(({ id }) => id !== 'tomi-publicitario')
                .map(({ id }) => (
                  <Route
                    key={id}
                    path={`/${id}`}
                    element={<Catalog initialCategory={id} />}
                  />
                ))}

              {/* SEO: requiere redirección 301 real en servidor -> /tomi-publicitario */}
              <Route
                path="/tomi-publicitario"
                element={<Navigate to="/inflable-publicitario-con-movimiento" replace />}
              />

              <Route
                path="/inflable-publicitario-con-movimiento"
                element={<Catalog initialCategory="tomi-publicitario" />}
              />

              <Route path="/contacto" element={<Contact />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </CartProvider>
    </Router>
  )
}

export default App
