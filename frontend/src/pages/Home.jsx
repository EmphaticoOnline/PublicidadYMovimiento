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
  const { handleWhatsappClick } = useWhatsappLead({
    buttonId: 'home_primary_quote',
    placement: 'home_intro'
  })
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
          Inflables Publicitarios que Atraen Clientes y Destacan desde Lejos
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
          <a
            href="/inflables-publicitarios-guadalajara"
            style={{
              display: 'inline-block',
              marginLeft: '0.75rem',
              marginTop: '0.6rem',
              padding: '0.75rem 1rem',
              borderRadius: '999px',
              border: '1px solid #d80000',
              background: '#d80000',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 700,
              boxShadow: '0 8px 18px rgba(216,0,0,0.22)',
              transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#b00000'
              e.currentTarget.style.boxShadow = '0 10px 22px rgba(176,0,0,0.28)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#d80000'
              e.currentTarget.style.boxShadow = '0 8px 18px rgba(216,0,0,0.22)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Nuestros inflables más vendidos
          </a>
        </div>
      </div>

      <div
        style={{
          maxWidth: '760px',
          margin: '1.8rem auto 0',
          padding: '1.25rem 1.1rem',
          textAlign: 'center',
          background: '#f8f9fb',
          borderRadius: '18px',
          boxShadow: '0 12px 28px rgba(0,0,0,0.08)'
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: '1.05rem',
            lineHeight: 1.65,
            color: '#444'
          }}
        >
          Hay un inflable que últimamente todos voltean a ver 👇
        </p>
        <a
          href="/inflable-publicitario-con-movimiento"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.8rem 1.15rem',
            borderRadius: '999px',
            border: '1px solid #d80000',
            background: '#d80000',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 700,
            boxShadow: '0 8px 18px rgba(216,0,0,0.22)',
            transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#b00000'
            e.currentTarget.style.boxShadow = '0 10px 22px rgba(176,0,0,0.28)'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#d80000'
            e.currentTarget.style.boxShadow = '0 8px 18px rgba(216,0,0,0.22)'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          Ver inflable con movimiento
        </a>
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
