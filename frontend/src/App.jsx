import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import './App.css'


import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import MainLayout from './components/layout/MainLayout'
import TomiPage from './pages/categories/TomiPage'
import SkyDancerPage from './pages/categories/SkyDancerPage'
import ReplicasInflablesPage from './pages/categories/ReplicasInflablesPage'
import ArcosMetaPage from './pages/categories/ArcosMetaPage'
import BotargasPage from './pages/categories/BotargasPage'
import BrincolinesPage from './pages/categories/BrincolinesPage'
import FlagBannerPage from './pages/categories/FlagBannerPage'
import CilindrosPublicitariosPage from './pages/categories/CilindrosPublicitariosPage'
import GlobosAerostaticosPage from './pages/categories/GlobosAerostaticosPage'
import JuegosInteractivosPage from './pages/categories/JuegosInteractivosPage'
import PantallasCartelerasPage from './pages/categories/PantallasCartelerasPage'
import DomisRellenablesPage from './pages/categories/DomisRellenablesPage'
import TunelsPage from './pages/categories/TunelsPage'
import TurbinasPage from './pages/categories/TurbinasPage'
import KitsPage from './pages/categories/KitsPage'
import DisplayPage from './pages/categories/DisplayPage'
import PublibackPage from './pages/categories/PublibackPage'
import PublituboPage from './pages/categories/PublituboPage'
import LineaAutosPage from './pages/categories/LineaAutosPage'
import PeluchePublicitarioPage from './pages/categories/PeluchePublicitarioPage'
import CarpasToldosPage from './pages/categories/CarpasToldosPage'




function App() {
  return (
    <Router>
      <CartProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/inflable-publicitario-con-movimiento" element={<TomiPage />} />
            <Route path="/sky-dancer" element={<SkyDancerPage />} />
            <Route path="/replicas-inflables" element={<ReplicasInflablesPage />} />
            <Route path="/arcos-meta" element={<ArcosMetaPage />} />
            <Route path="/botargas" element={<BotargasPage />} />
            <Route path="/brincolines" element={<BrincolinesPage />} />
            <Route path="/flag-banners" element={<FlagBannerPage />} />
            <Route path="/cilindros-publicitarios" element={<CilindrosPublicitariosPage />} />
            <Route path="/globos-aerostaticos" element={<GlobosAerostaticosPage />} />
            <Route path="/juegos-interactivos" element={<JuegosInteractivosPage />} />
            <Route path="/pantallas-carteleras" element={<PantallasCartelerasPage />} />
            <Route path="/domis-rellenables" element={<DomisRellenablesPage />} />
            <Route path="/tuneles" element={<TunelsPage />} />
            <Route path="/turbinas" element={<TurbinasPage />} />
            <Route path="/kits" element={<KitsPage />} />
            <Route path="/display" element={<DisplayPage />} />
            <Route path="/publiback" element={<PublibackPage />} />
            <Route path="/publitubo" element={<PublituboPage />} />
            <Route path="/linea-autos" element={<LineaAutosPage />} />
            <Route path="/peluche-publicitario" element={<PeluchePublicitarioPage />} />
            <Route path="/carpas-toldos" element={<CarpasToldosPage />} />
          </Routes>
        </MainLayout>
      </CartProvider>
    </Router>
  )
}

export default App
