import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import './App.css'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import MainLayout from './components/layout/MainLayout'
import { categories } from './data/categories'

function App() {
  return (
    <Router>
      <CartProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />

            {/* RUTAS LIMPIAS SEO */}
            {categories.map(({ id }) => (
              <Route
                key={id}
                path={`/${id}`}
                element={<Catalog initialCategory={id} />}
              />
            ))}

            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </MainLayout>
      </CartProvider>
    </Router>
  )
}

export default App
