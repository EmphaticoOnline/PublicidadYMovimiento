function YoutubeSection() {
  return (
    <section
      style={{
        backgroundColor: '#f0f0f0',
        padding: '4rem 2rem'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* TÍTULO */}
        <h2
          style={{
            color: '#d80000',
            fontSize: '2.2rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem',
            fontFamily: `'Poppins', 'Segoe UI', sans-serif`
          }}
        >
          ¡VE NUESTROS PRODUCTOS EN YOUTUBE!
        </h2>

        {/* CONTENEDOR DE VIDEO */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            backgroundColor: '#000',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            position: 'relative',
            aspectRatio: '16/9'
          }}
        >
          <img
            src="/images/youtube-placeholder.jpg"
            alt="Video de YouTube"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"%3E%3Crect fill="%23333" width="640" height="360"/%3E%3Ctext fill="%23fff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EYouTube Video%3C/text%3E%3C/svg%3E'
            }}
          />

          {/* ICONO DE PLAY OVERLAY */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(255, 0, 0, 0.8)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 1)'
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.8)'
              e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'
            }}
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: '20px solid white',
                borderTop: '12px solid transparent',
                borderBottom: '12px solid transparent',
                marginLeft: '5px'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default YoutubeSection
