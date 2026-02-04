import YoutubeSection from './YoutubeSection';

function AboutSection() {
  return (
    <section
      id="nosotros"
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* IMAGEN BASE */}
      <img
        src="/images/background/cover-nosotros.jpg"
        alt="Nosotros"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />

      {/* YOUTUBE ANCLADO A LA FRANJA GRIS */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '54%',                 // 👈 ESTE es el punto correcto
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '600px',          // un poco más elegante
          padding: '0 1rem',
          zIndex: 10,
        }}
      >
        <YoutubeSection />
      </div>
    </section>
  );
}

export default AboutSection;
