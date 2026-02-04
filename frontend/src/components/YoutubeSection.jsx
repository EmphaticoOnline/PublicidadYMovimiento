function YoutubeSection() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '720px',          // 👈 antes 900px (más compacto)
        margin: '0 auto',
        background: 'transparent',
        padding: 0,
        boxShadow: 'none',
      }}
    >
      <h2
        style={{
          color: '#d80000',
          fontSize: '1.6rem',       // 👈 antes 2.2rem
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '1rem',     // 👈 antes 1.5rem
          fontFamily: `'Poppins', 'Segoe UI', sans-serif`,
          letterSpacing: '0.5px',
          lineHeight: 1.15,
        }}
      >
        ¡VE NUESTROS PRODUCTOS EN YOUTUBE!
      </h2>

      <div
        style={{
          width: '100%',
          backgroundColor: '#000',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
          position: 'relative',
          aspectRatio: '16 / 8',    // 👈 antes 16/9 (menos alto, más “tarjeta”)
        }}
      >
        <img
          src="/images/youtube-placeholder.jpg"
          alt="Video de YouTube"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          onError={(e) => {
            e.currentTarget.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"%3E%3Crect fill="%23333" width="640" height="360"/%3E%3Ctext fill="%23fff" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EYouTube Video%3C/text%3E%3C/svg%3E'
          }}
        />

        {/* BOTÓN PLAY */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '72px',          // 👈 un poquito más chico
            height: '72px',
            backgroundColor: 'rgba(255, 0, 0, 0.85)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.25s ease, background-color 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 1)'
            e.currentTarget.style.transform =
              'translate(-50%, -50%) scale(1.08)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.85)'
            e.currentTarget.style.transform =
              'translate(-50%, -50%) scale(1)'
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: '18px solid white',  // 👈 proporcional al botón
              borderTop: '11px solid transparent',
              borderBottom: '11px solid transparent',
              marginLeft: '4px',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default YoutubeSection
