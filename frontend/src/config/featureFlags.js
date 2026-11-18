// Promos Buen Fin 2026: se muestran hasta el 17 de noviembre (hora de Guadalajara)
// y se ocultan solas a partir del 18. Para apagarlas antes, cambia PROMOS_ENABLED a false.
const PROMOS_ENABLED = true
const PROMOS_END = new Date('2026-11-18T00:00:00-06:00')

export const SHOW_MONTHLY_PROMOS = PROMOS_ENABLED && Date.now() < PROMOS_END.getTime()

// Vacante de Diseñador(a) Industrial Jr. en /trabaja-con-nosotros.
// Cubierta el 18 de noviembre de 2026. Cambia a true para volver a publicarla
// (anuncio, botones de postulación y datos JobPosting para Google).
export const JOB_OPENING_ACTIVE = false
