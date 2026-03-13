// Utilidad para obtener el número de WhatsApp del vendedor asignado desde el backend
export async function getVendedorWhatsapp({ empresa_id, origen }) {
  try {
    const response = await fetch('/api/leads/whatsapp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ empresa_id, origen }),
    });

    const isJson = response.headers.get('content-type')?.includes('application/json');
    const payload = isJson ? await response.json() : null;

    if (!response.ok) {
      const backendMsg = payload?.error || payload?.message;
      throw new Error(backendMsg || 'No se pudo obtener el número de WhatsApp');
    }

    const telefono = payload?.vendedor?.telefono || null;
    if (!telefono) {
      throw new Error('El backend no devolvió teléfono');
    }
    return telefono;
  } catch (error) {
    console.error('Error obteniendo WhatsApp:', error);
    throw error;
  }
}
