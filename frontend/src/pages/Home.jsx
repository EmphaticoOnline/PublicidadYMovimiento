import HeroPromosCategories from '../components/carousel/HeroPromosCategories'
import CategoriesGrid from '../components/CategoriesGrid'
import ClientsLogos from '../components/ClientsLogos'
import AboutSection from '../components/AboutSection'
import YoutubeSection from '../components/YoutubeSection'
import BestSellersSection from '../components/BestSellersSection'
import MonthlyPromoSection from '../components/MonthlyPromoSection'
import BrandMessageSection from '../components/BrandMessageSection'
import HowToBuySection from '../components/HowToBuySection'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <>
      <HeroPromosCategories />
      <CategoriesGrid />
      <ClientsLogos />
      <AboutSection />
      <YoutubeSection />
      <BestSellersSection />
      <MonthlyPromoSection />
      <BrandMessageSection />
      <HowToBuySection />
      <ContactSection />
    </>
  )
}

export default Home
