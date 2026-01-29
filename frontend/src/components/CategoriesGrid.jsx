import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

function CategoriesGrid() {
  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '900px', // más angosto para centrar el grupo
        margin: '0 auto'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '4px 24px' // menos espacio entre filas, más entre columnas
        }}
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            style={{
              position: 'relative',
              aspectRatio: '1',
              overflow: 'hidden',
              textDecoration: 'none',
              transition: 'transform 0.2s',
              display: 'block',
              background: 'transparent'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)'
              // Mostrar overlay de label en hover
              const overlay = e.currentTarget.querySelector('.category-overlay')
              if (overlay) overlay.style.display = 'flex'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              // Ocultar overlay de label al salir del hover
              const overlay = e.currentTarget.querySelector('.category-overlay')
              if (overlay) overlay.style.display = 'none'
            }}
          >
            <img
              src={`/images/categories/${category.id}/cover.jpg`}
              alt={category.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
                background: '#fff' // para que el área vacía sea blanca (opcional)
              }}
              onError={e => {
                e.target.src = '/images/placeholder.png'
                // Mostrar overlay de debug con category.id
                const debugOverlay = e.target.parentNode.querySelector('.category-debug')
                if (debugOverlay) debugOverlay.style.display = 'flex'
              }}
            />
            {/* Overlay de debug: category.id, solo visible si la imagen falla */}
            <div
              className="category-debug"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,0,0,0.5)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 700,
                textAlign: 'center',
                zIndex: 2,
                pointerEvents: 'none',
                padding: '1rem',
                letterSpacing: '1px',
                textShadow: '0 1px 4px #000'
              }}
            >
              {category.id}
            </div>
            {/* Overlay de label: solo visible en hover */}
            <div
              className="category-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: 600,
                textAlign: 'center',
                padding: '1rem',
                zIndex: 1
              }}
            >
              {category.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoriesGrid
