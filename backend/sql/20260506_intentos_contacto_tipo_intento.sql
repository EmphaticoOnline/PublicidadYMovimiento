ALTER TABLE whatsapp.intentos_contacto
	ADD COLUMN tipo_intento text;

CREATE INDEX intentos_contacto_dedupe_idx
	ON whatsapp.intentos_contacto (
		session_id,
		pagina_origen,
		tipo_intento,
		creado_en DESC
	);