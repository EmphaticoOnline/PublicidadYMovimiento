const VIDEO_ID = 'f_K6ZG8Mrcs'

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
        <iframe
          title="Video de YouTube"
          src={`https://www.youtube.com/embed/${VIDEO_ID}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
            border: 0,
            display: 'block',
          }}
        />
      </div>
    </div>
  )
}

export default YoutubeSection
