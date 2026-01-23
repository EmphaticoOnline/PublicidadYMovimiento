import { useCart } from '../context/CartContext'

function Contact() {
  const { items } = useCart()

  return (
    <div>
      <h1>Contacto</h1>

      <h3>Carrito (demo)</h3>
      {items.length === 0 && <p>No hay productos</p>}

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Contact
