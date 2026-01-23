import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import heroCategories from '../../data/heroCategories.mock'

function HeroPromosCategories() {
  const navigate = useNavigate()
  const scrollRef = useRef(null)
  const animationFrameRef = useRef(null)
  const scrollPositionRef = useRef(0)
  const [centerIndex, setCenterIndex] = useState(0)

  // Duplicar los elementos para crear un efecto de loop infinito
  const duplicatedCategories = [...heroCategories, ...heroCategories, ...heroCategories]

  function handleClick(item) {
    if (item.type === 'promo') {
      navigate('/catalogo?promo=mes')
    } else {
      navigate(`/catalogo?familia=${item.id}`)
    }
  }

  // Función para calcular qué card está en el centro
  const updateCenterCard = () => {
    const container = scrollRef.current
    if (!container) return

    const containerCenter = container.scrollLeft + container.offsetWidth / 2
    const cards = container.children
    let closestIndex = 0
    let closestDistance = Infinity

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i]
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(cardCenter - containerCenter)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = i
      }
    }

    setCenterIndex(closestIndex)
  }

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const speed = 0.5 // píxeles por frame
    
    const scroll = () => {
      // Incrementar la posición del scroll
      scrollPositionRef.current += speed
      
      // Aplicar el scroll sin scrollBehavior (inmediato)
      container.scrollLeft = scrollPositionRef.current

      // Calcular el ancho de un set completo de elementos originales
      const singleSetWidth = container.scrollWidth / 3

      // Cuando hemos scrolleado un set completo, reiniciar posición
      if (scrollPositionRef.current >= singleSetWidth) {
        scrollPositionRef.current = 0
        container.scrollLeft = 0
      }

      // Actualizar la card central
      updateCenterCard()

      // Continuar la animación
      animationFrameRef.current = requestAnimationFrame(scroll)
    }

    // Iniciar la animación
    animationFrameRef.current = requestAnimationFrame(scroll)

    // Cleanup: cancelar la animación cuando el componente se desmonte
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, []) // Array vacío para ejecutar solo una vez

  return (
    <section
      style={{
        backgroundColor: '#1e4db7',
        padding: '2rem 0'
      }}
    >
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '1.5rem',
          padding: '0 1rem',
          overflowX: 'scroll',
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
          WebkitOverflowScrolling: 'touch'
        }}
        onMouseEnter={() => {
          // Pausar el scroll al hacer hover
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
          }
        }}
        onMouseLeave={() => {
          // Reanudar el scroll al salir del hover
          const scroll = () => {
            const container = scrollRef.current
            if (!container) return

            scrollPositionRef.current += 0.5
            container.scrollLeft = scrollPositionRef.current

            const singleSetWidth = container.scrollWidth / 3
            if (scrollPositionRef.current >= singleSetWidth) {
              scrollPositionRef.current = 0
              container.scrollLeft = 0
            }

            updateCenterCard()

            animationFrameRef.current = requestAnimationFrame(scroll)
          }
          animationFrameRef.current = requestAnimationFrame(scroll)
        }}
      >
        {duplicatedCategories.map((item, index) => {
          const isCenterCard = index === centerIndex
          const baseScale = isCenterCard ? 1.15 : 0.85

          return (
            <div
              key={`${item.id}-${index}`}
              onClick={() => handleClick(item)}
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                cursor: 'pointer',
                transform: `scale(${baseScale})`,
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const currentScale = isCenterCard ? 1.15 : 0.85
                e.currentTarget.style.transform = `scale(${currentScale * 1.05})`
              }}
              onMouseLeave={(e) => {
                const currentScale = isCenterCard ? 1.15 : 0.85
                e.currentTarget.style.transform = `scale(${currentScale})`
              }}
            >
              <img
                src={item.image || '/images/carousel/placeholder.png'}
                alt={item.title}
                style={{
                  height: '200px',
                  aspectRatio: '4 / 5',
                  objectFit: 'contain',
                  borderRadius: '5px',
                  display: 'block'
                }}
              />
            </div>
          )
        })}
      </div>
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default HeroPromosCategories
