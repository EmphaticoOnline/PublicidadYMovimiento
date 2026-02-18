import { clientsLogos } from '../data/clientsLogos'

export default function ClientsLogos() {
  return (
  <section style={{ marginTop: '2.5rem', marginBottom: '3rem' }}>
      <h2
        className="clients-heading"
        style={{
          textAlign: 'center',
          color: '#d60000',
          fontWeight: 'bold',
          marginBottom: '2rem',
          fontFamily: 'Montserrat, Arial, sans-serif'
        }}
      >
        EMPRESAS CON LAS QUE TRABAJAMOS
      </h2>

      <div
        style={{
          maxWidth: '1300px',
          width: '100%',
          margin: '0 auto'
        }}
      >
        <img
          src="/images/clients/marcas.jpg"
          alt="Marcas con las que trabajamos"
          loading="lazy"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'contain'
          }}
        />
      </div>

      {/**
       * BLOQUE ORIGINAL (logos por cliente)
       * Se deja comentado para futura reactivación.
       */}
      {/*
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
      */}
    </section>
  )
}
