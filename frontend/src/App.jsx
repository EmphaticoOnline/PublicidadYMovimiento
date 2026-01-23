import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import MainLayout from './components/layout/MainLayout'

function App() {
  return (
    <Router>
      <CartProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </MainLayout>
      </CartProvider>
    </Router>
  )
}

export default App
