import usePageTitle from '../hooks/usePageTitle'

const pageStyle = {
  background: '#f8fafc',
  padding: 'clamp(1.5rem, 4vw, 3rem) 1.25rem clamp(2.5rem, 6vw, 4rem)'
}

const articleStyle = {
  maxWidth: '760px',
  margin: '0 auto',
  textAlign: 'left',
  background: '#fff',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  padding: 'clamp(1.25rem, 4vw, 2.5rem)',
  boxShadow: '0 12px 30px rgba(0,0,0,0.04)',
  color: '#334155',
  fontSize: '1rem',
  lineHeight: 1.7
}

const headingStyle = {
  color: '#0f172a',
  lineHeight: 1.25,
  margin: '2rem 0 0.75rem'
}

const listStyle = {
  margin: '0.75rem 0 0',
  paddingLeft: '1.25rem',
  listStylePosition: 'outside'
}

const itemStyle = {
  maxWidth: 'none',
  margin: '0.35rem 0',
  textAlign: 'left'
}

function AvisoDePrivacidad() {
  usePageTitle(
    'Aviso de Privacidad | Publicidad y Movimiento',
    'Consulta el Aviso de Privacidad de Publicidad y Movimiento y conoce cómo tratamos los datos personales recibidos mediante nuestro sitio web y formularios de contacto.',
    'https://grupopmpublicidad.mx/aviso-de-privacidad'
  )

  return (
    <div style={pageStyle}>
      <article style={articleStyle}>
        <h1 style={{ ...headingStyle, fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', marginTop: 0 }}>
          Aviso de Privacidad
        </h1>

        <p>
          Publicidad y Movimiento, responsable del tratamiento de los datos personales que recaba, pone a disposición de sus clientes, prospectos y usuarios el presente Aviso de Privacidad.
        </p>

        <h2 style={{ ...headingStyle, fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)' }}>
          Datos personales que podemos recabar
        </h2>
        <p>Podemos recabar datos de identificación y contacto, entre ellos:</p>
        <ul style={listStyle}>
          <li style={itemStyle}>Nombre</li>
          <li style={itemStyle}>Empresa</li>
          <li style={itemStyle}>Número telefónico</li>
          <li style={itemStyle}>Correo electrónico</li>
          <li style={itemStyle}>Estado o ubicación general</li>
          <li style={itemStyle}>
            Información proporcionada voluntariamente mediante formularios de contacto o formularios publicitarios
          </li>
        </ul>
        <p>
          Estos datos pueden ser proporcionados directamente a través de nuestros sitios web, formularios de contacto, formularios de clientes potenciales de Facebook e Instagram u otros medios de comunicación utilizados por Publicidad y Movimiento.
        </p>

        <h2 style={{ ...headingStyle, fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)' }}>
          Finalidades del tratamiento
        </h2>
        <p>Los datos personales recabados podrán utilizarse para:</p>
        <ul style={listStyle}>
          <li style={itemStyle}>Atender solicitudes de información.</li>
          <li style={itemStyle}>Dar seguimiento a prospectos y solicitudes comerciales.</li>
          <li style={itemStyle}>Elaborar cotizaciones.</li>
          <li style={itemStyle}>Contactar a personas interesadas en nuestros productos o servicios.</li>
          <li style={itemStyle}>Dar seguimiento a relaciones comerciales.</li>
          <li style={itemStyle}>Mejorar nuestros procesos de atención y servicio.</li>
        </ul>
        <p>
          No utilizamos los datos personales recibidos mediante formularios de Meta para fines distintos a los relacionados con la atención comercial y el seguimiento solicitado por el interesado.
        </p>

        <h2 style={{ ...headingStyle, fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)' }}>
          Uso de plataformas de terceros
        </h2>
        <p>
          Publicidad y Movimiento puede utilizar servicios y plataformas tecnológicas de terceros, incluyendo Meta Platforms, para recibir solicitudes de información y clientes potenciales.
        </p>
        <p>
          Cuando una persona proporciona sus datos mediante un formulario de Facebook o Instagram, dichos datos pueden ser transmitidos a nuestros sistemas para facilitar su atención y seguimiento comercial.
        </p>
        <p>
          El tratamiento posterior de dichos datos será realizado de conformidad con este Aviso de Privacidad.
        </p>

        <h2 style={{ ...headingStyle, fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)' }}>
          Protección de los datos
        </h2>
        <p>
          Aplicamos medidas administrativas y técnicas razonables destinadas a proteger la información personal contra pérdida, acceso no autorizado, alteración o divulgación indebida.
        </p>

        <h2 style={{ ...headingStyle, fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)' }}>
          Transferencia de información
        </h2>
        <p>No vendemos datos personales.</p>
        <p>
          Podemos utilizar proveedores tecnológicos que intervienen en la operación de nuestros sistemas únicamente en la medida necesaria para prestar nuestros servicios y procesar las solicitudes recibidas.
        </p>

        <h2 style={{ ...headingStyle, fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)' }}>
          Derechos sobre sus datos personales
        </h2>
        <p>
          El titular puede solicitar acceso, rectificación, cancelación u oposición al tratamiento de sus datos personales, así como solicitar información relacionada con el uso de sus datos.
        </p>
        <p>
          Para realizar una solicitud puede ponerse en contacto con Publicidad y Movimiento mediante los medios de contacto publicados en nuestro sitio web.
        </p>

        <h2 style={{ ...headingStyle, fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)' }}>
          Cambios al Aviso de Privacidad
        </h2>
        <p>
          Publicidad y Movimiento podrá actualizar este Aviso de Privacidad cuando existan cambios en sus procesos, servicios o requisitos aplicables.
        </p>
        <p>La versión vigente estará disponible permanentemente en:</p>
        <p>
          <a
            href="https://grupopmpublicidad.mx/aviso-de-privacidad"
            style={{ color: '#0b6bcb', overflowWrap: 'anywhere' }}
          >
            https://grupopmpublicidad.mx/aviso-de-privacidad
          </a>
        </p>
        <p style={{ marginBottom: 0 }}>Última actualización: septiembre de 2026.</p>
      </article>
    </div>
  )
}

export default AvisoDePrivacidad
