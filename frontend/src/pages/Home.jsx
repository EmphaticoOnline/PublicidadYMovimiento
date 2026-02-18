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
import usePageTitle from '../hooks/usePageTitle'
import { useWhatsappLead } from '../hooks/useWhatsappLead'
import { FaWhatsapp } from 'react-icons/fa6'

function Home() {
  const { handleWhatsappClick } = useWhatsappLead()
  usePageTitle(
    'Inflables Publicitarios en Guadalajara | Envíos a Todo México',
    'Fabricamos inflables publicitarios en Guadalajara: Sky Dancer, arcos inflables, réplicas y estructuras personalizadas. Envíos a todo México. Solicita cotización.',
    'https://grupopmpublicidad.mx/'
  )
  return (
    <>
      {/* HERO PRINCIPAL (tipo Publiglobos) */}
      <HeroSlider />

      <div style={{ padding: '1.8rem 1.2rem 0', maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.2rem', lineHeight: 1.22, marginBottom: '0.9rem' }}>
          Inflables Publicitarios en Guadalajara que Atraen Clientes y Destacan desde Lejos
        </h1>
        <p style={{ maxWidth: '900px', margin: '0 auto 1.4rem', fontSize: '1.06rem', lineHeight: 1.65, color: '#444' }}>
          Diseñamos y fabricamos en Guadalajara inflables publicitarios con impacto visual —Sky Dancer, arcos inflables y piezas personalizadas— listos para activaciones y punto de venta, con envíos a todo México para llevar tu marca donde se vea y venda más.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 1.4rem', display: 'inline-flex', gap: '1.4rem', flexWrap: 'wrap', justifyContent: 'center', color: '#1a7f37', fontWeight: 600, fontSize: '1rem' }}>
          <li>✔ Fabricación directa en Guadalajara</li>
          <li>✔ Envíos a todo México</li>
          <li>✔ Producción personalizada para tu marca</li>
        </ul>
        <div style={{ marginTop: '0.6rem' }}>
          <button
            className="whatsapp-btn"
            onClick={e => {
              e.preventDefault()
              handleWhatsappClick()
            }}
          >
            <FaWhatsapp size={20} />
            Cotiza tu inflable ahora
          </button>
        </div>
      </div>

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
