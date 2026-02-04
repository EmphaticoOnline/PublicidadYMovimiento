import HeroSlider from '../components/hero/HeroSlider'
//import HeroPromosCategories from '../components/carousel/HeroPromosCategories'
import CategoriesGrid from '../components/CategoriesGrid'
import ClientsLogos from '../components/ClientsLogos'
import AboutSection from '../components/AboutSection'
import BestSellersSection from '../components/BestSellersSection'
import MonthlyPromoSection from '../components/MonthlyPromoSection'
import BrandMessageSection from '../components/BrandMessageSection'
import HowToBuySection from '../components/HowToBuySection'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <>
      {/* HERO PRINCIPAL (tipo Publiglobos) */}
      <HeroSlider />

      {/* Carrusel de promos / categorías */}
      {/* <HeroPromosCategories /> */}

      <CategoriesGrid />
      <ClientsLogos />

      {/* AboutSection incluye el YouTube como overlay */}
      <AboutSection />

      <BestSellersSection />
      <MonthlyPromoSection />
      <BrandMessageSection />
      <HowToBuySection />
      <ContactSection />
    </>
  )
}

export default Home
