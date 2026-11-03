import { useEffect } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import './TrabajaConNosotros.css'

const siteUrl = 'https://grupopmpublicidad.mx'
const jobTitle = 'Diseñador(a) Industrial Jr.'
const whatsappMessage = encodeURIComponent(`Hola, me interesa la vacante de ${jobTitle} en Grupo PM. Comparto mi CV o portafolio para consideración.`)

function TrabajaConNosotros() {
  const title = `${jobTitle} | Trabaja con nosotros | Grupo PM`
  const description = `Vacante de ${jobTitle} en Grupo PM Publicidad y Movimiento: modelado 3D, desarrollo de moldes para inflables y preparación de archivos técnicos.`

  usePageTitle(title, description, `${siteUrl}/trabaja-con-nosotros`, { ogImage: `${siteUrl}/images/careers/disenador-industrial-jr.png` })

  useEffect(() => {
    const existing = document.querySelector('script[data-job-posting="disenador-industrial-jr"]')
    if (existing) return undefined
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.jobPosting = 'disenador-industrial-jr'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'JobPosting', title: jobTitle, description,
      datePosted: '2026-11-03',
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Guadalajara',
          addressRegion: 'Jalisco',
          addressCountry: 'MX',
        },
      },
      hiringOrganization: { '@type': 'Organization', name: 'Grupo PM Publicidad y Movimiento', url: siteUrl },
      url: `${siteUrl}/trabaja-con-nosotros`,
      qualifications: 'Diseño industrial, de producto o carrera afín. Manejo de software CAD 3D como Rhino, SolidWorks, Fusion 360 o similar. Interés en patronaje y fabricación.',
      responsibilities: 'Modelado 3D de figuras y réplicas; desarrollo de patrones o moldes 2D para producción; preparación de archivos técnicos.',
      jobBenefits: 'Prestaciones de ley y oportunidad de desarrollo profesional.',
    })
    document.head.appendChild(script)
    return () => script.remove()
  }, [description])

  return (
    <div className="careers-page">
      <main className="careers-content">
        <article className="job-card" aria-labelledby="job-title">
          <div className="job-card-heading"><div><p className="careers-eyebrow">Grupo PM Publicidad y Movimiento</p><p className="job-label">Vacante disponible</p><h1 id="careers-title">Trabaja con nosotros</h1><h2 id="job-title">{jobTitle}</h2><p className="job-summary">Modelado 3D y desarrollo de moldes para inflables.</p><p className="job-intro">Únete a nuestro equipo y participa en el desarrollo de inflables publicitarios.</p><div className="benefits"><span>Prestaciones de ley</span><span>Desarrollo profesional</span></div><a className="hero-cta" href="#application-title">Postúlate ahora <span aria-hidden="true">↓</span></a></div><img className="job-illustration" src="/images/careers/disenador-industrial-jr.png" alt="Vacante de Diseñador(a) Industrial Jr. en Grupo PM" /></div>
          <div className="job-sections">
            <section><h3>¿Qué harás?</h3><ul><li>Modelado 3D de figuras y réplicas.</li><li>Desarrollo de patrones o moldes 2D para producción.</li><li>Preparación de archivos técnicos.</li></ul></section>
            <section><h3>Buscamos</h3><ul><li>Diseño industrial, de producto o carrera afín.</li><li>Manejo de software CAD 3D: Rhino, SolidWorks, Fusion 360 o similar.</li><li>Interés en patronaje y fabricación.</li></ul></section>
          </div>
          <section className="application-section" aria-labelledby="application-title"><h3 id="application-title">Postúlate</h3><p>Envía tu CV o portafolio por WhatsApp o correo electrónico.</p><div className="application-actions"><a className="application-button whatsapp" href={`https://wa.me/523310949986?text=${whatsappMessage}`} target="_blank" rel="noreferrer">WhatsApp 33 1094 9986</a><a className="application-button whatsapp" href={`https://wa.me/523316180720?text=${whatsappMessage}`} target="_blank" rel="noreferrer">WhatsApp 33 1618 0720</a><a className="application-button email" href="mailto:facturaspm@yahoo.com.mx?subject=Postulación%20Diseñador(a)%20Industrial%20Jr.">facturaspm@yahoo.com.mx</a></div></section>
        </article>
      </main>
    </div>
  )
}

export default TrabajaConNosotros
