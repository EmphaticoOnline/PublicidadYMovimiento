import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

function CategoriesGrid() {
  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '1400px',
        margin: '0 auto'
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '18px'
        }}
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            style={{
              position: 'relative',
              aspectRatio: '1',
              borderRadius: '8px',
              overflow: 'hidden',
              textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              display: 'block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <img
              src={category.image || '/images/placeholder.png'}
              alt={category.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              onError={(e) => {
                e.target.src = '/images/placeholder.png'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div
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
                padding: '1rem'
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
