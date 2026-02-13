import YoutubeSection from './YoutubeSection'
import './AboutSection.css'

function AboutSection() {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-section__art">
        <img
          src="/images/background/cover-nosotros.jpg"
          alt="Nosotros"
          className="about-section__image"
        />

        <div className="about-section__video-wrapper">
          <YoutubeSection />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
