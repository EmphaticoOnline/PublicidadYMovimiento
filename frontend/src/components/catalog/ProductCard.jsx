import { useCart } from '../../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>${product.price}</strong>
      <div>
        <button onClick={() => addToCart(product)}>
          Agregar
        </button>
      </div>
    </div>
  )
}

export default ProductCard
