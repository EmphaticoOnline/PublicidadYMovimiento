-- =============================================================================
-- ruteo_leads_modo_asignacion.sql
--
-- Scripts para cambiar el modo de asignación de leads web entre dos modos:
--
--   'round_robin'  →  distribuye los prospectos entre vendedores activos
--                     siguiendo turno rotativo. Estado preservado en
--                     ultimo_vendedor_id.
--
--   'fijo'         →  todos los prospectos web llegan al contacto indicado
--                     en vendedor_fijo_id. El estado del round_robin
--                     (ultimo_vendedor_id) NO se modifica mientras está
--                     activo este modo, por lo que al volver a round_robin
--                     el turno continúa exactamente donde quedó.
--
-- Tabla afectada : public.crm_ruteo_leads
-- empresa_id     : 2  (Grupo PM Publicidad y Movimiento)
-- origen         : 'web'
--
-- IMPORTANTE: reemplazar 999 en el script de modo fijo con el id real
-- del contacto central en la tabla public.contactos antes de ejecutar.
-- =============================================================================


-- -----------------------------------------------------------------------------
-- ACTIVAR MODO FIJO
-- Todos los clics de WhatsApp desde el sitio web llegan al contacto central.
-- Reemplazar 999 con el id real del contacto antes de ejecutar.
-- -----------------------------------------------------------------------------

UPDATE public.crm_ruteo_leads
SET modo_asignacion  = 'fijo',
    vendedor_fijo_id = 4543          -- <-- reemplazar con el id del contacto central
WHERE empresa_id = 2
  AND origen     = 'web';


-- -----------------------------------------------------------------------------
-- VOLVER A MODO ROUND ROBIN
-- Retoma la distribución automática entre vendedores. El turno continúa
-- desde el último vendedor asignado antes de activar el modo fijo.
-- -----------------------------------------------------------------------------

UPDATE public.crm_ruteo_leads
SET modo_asignacion  = 'round_robin',
    --vendedor_fijo_id = NULL
WHERE empresa_id = 2
  AND origen     = 'web';
