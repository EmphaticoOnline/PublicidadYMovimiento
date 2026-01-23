import products from '../data/products.mock'
import ProductCard from '../components/catalog/ProductCard'

function Catalog() {
  return (
    <div>
      <h1>Catálogo</h1>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Catalog
