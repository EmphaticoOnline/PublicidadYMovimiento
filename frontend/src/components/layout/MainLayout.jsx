import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function MainLayout({ children }) {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on route change when there's no hash anchor
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    if (!location.hash) return

    const targetId = location.hash.replace('#', '')
    const scrollToSection = () => {
      const el = document.getElementById(targetId)
      if (!el) return

      const headerOffset = 120
      const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }

    const timer = setTimeout(scrollToSection, 50)
    return () => clearTimeout(timer)
  }, [location])

  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default MainLayout
