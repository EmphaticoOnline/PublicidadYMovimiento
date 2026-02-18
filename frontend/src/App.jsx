import { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import './App.css'

const Home = lazy(() => import('./pages/Home'))
const Catalog = lazy(() => import('./pages/Catalog'))
const Contact = lazy(() => import('./pages/Contact'))
import MainLayout from './components/layout/MainLayout'
import { categories } from './data/categories'
import { initAnalyticsListener } from './utils/analyticsListener'

function App() {
  useEffect(() => {
    initAnalyticsListener()
  }, [])

  return (
    <Router>
      <CartProvider>
        <MainLayout>
          <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Cargando...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalog />} />

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
