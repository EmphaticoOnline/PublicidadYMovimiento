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
          src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&controls=1&showinfo=0`}
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
