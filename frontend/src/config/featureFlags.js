// Promos Buen Fin 2026: se muestran hasta el 17 de noviembre (hora de Guadalajara)
// y se ocultan solas a partir del 18. Para apagarlas antes, cambia PROMOS_ENABLED a false.
const PROMOS_ENABLED = true
const PROMOS_END = new Date('2026-11-18T00:00:00-06:00')

export const SHOW_MONTHLY_PROMOS = PROMOS_ENABLED && Date.now() < PROMOS_END.getTime()
