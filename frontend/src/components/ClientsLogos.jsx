import { clientsLogos } from '../data/clientsLogos'

export default function ClientsLogos() {
  return (
  <section style={{ marginTop: '2.5rem', marginBottom: '3rem' }}>
      <h2
        style={{
          textAlign: 'center',
          color: '#d60000',
          fontWeight: 'bold',
          marginBottom: '2rem'
        }}
      >
        EMPRESAS CON LAS QUE TRABAJAMOS
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '4px 24px',
          alignItems: 'center',
          justifyItems: 'center',
          maxWidth: '900px',
          width: '100%',
          margin: '0 auto'
        }}
      >
        {clientsLogos.map((client) => (
          <img
            key={client.id}
            src={client.image}
            alt={client.name}
            title={client.name}
            style={{
              width: '100%',
              maxWidth: '280px',
              objectFit: 'contain',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          />
        ))}
      </div>
    </section>
  )
}
