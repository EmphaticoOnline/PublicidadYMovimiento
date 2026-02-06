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
    if (!response.ok) {
      throw new Error('No se pudo obtener el número de WhatsApp');
    }
    const data = await response.json();
    return data.vendedor?.telefono || null;
  } catch (error) {
    console.error('Error obteniendo WhatsApp:', error);
    return null;
  }
}
