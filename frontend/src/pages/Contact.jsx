import { useCart } from '../context/CartContext'
import usePageTitle from '../hooks/usePageTitle'

function Contact() {
  const { items } = useCart()

  usePageTitle(
    'Contacto | Publicidad y Movimiento',
    'Ponte en contacto con Publicidad y Movimiento para cotizaciones de inflables publicitarios, sky dancers y soluciones personalizadas en México.',
    'https://grupopmpublicidad.mx/contacto'
  )

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
