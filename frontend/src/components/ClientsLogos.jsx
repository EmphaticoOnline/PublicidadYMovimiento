import { clientsLogos } from '../data/clientsLogos'

function ClientsLogos() {
  return (
    <section
      style={{
        padding: '3rem 2rem',
        backgroundColor: '#f5f5f5'
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        {/* TÍTULO CON LÍNEAS DECORATIVAS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          <div
            style={{
              flex: 1,
              height: '3px',
              backgroundColor: '#d80000'
            }}
          />
          <h2
            style={{
              color: '#d80000',
              fontSize: '1.8rem',
              fontWeight: 700,
              textAlign: 'center',
              margin: 0,
              whiteSpace: 'nowrap',
              fontFamily: `'Poppins', 'Segoe UI', sans-serif`
            }}
          >
            EMPRESAS CON LAS QUE TRABAJAMOS
          </h2>
          <div
            style={{
              flex: 1,
              height: '3px',
              backgroundColor: '#d80000'
            }}
          />
        </div>

        {/* GRID DE LOGOS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '24px'
          }}
        >
          {clientsLogos.map((client) => (
            <div
              key={client.id}
              style={{
                backgroundColor: '#fff',
                padding: '1.5rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <img
                src={client.image}
                alt={client.name}
                style={{
                  maxWidth: '120px',
                  maxHeight: '80px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsLogos
