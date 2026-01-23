import Header from './Header'
import Footer from './Footer'

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
