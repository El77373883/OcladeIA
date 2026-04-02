function searchOnGoogle(query) {
  // Abrir búsqueda en Google
  window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');

  // Devolver respuesta simulada (como si hubiera encontrado resultados)
  const results = [
    `🔍 Resultado 1: ${query} - Documentación oficial`,
    `📋 Resultado 2: ${query} - Ejemplos prácticos`,
    `📖 Resultado 3: ${query} - Tutoriales paso a paso`,
    `💡 Resultado 4: ${query} - Soluciones comunes`,
    `🔗 Resultado 5: ${query} - Código en GitHub`
  ];

  return `🔎 Investigando: "${query}"...\n\n${results.join('\n')}\n\n✅ Búsqueda abierta en una nueva pestaña.`;
}

function investigateResponse(message) {
  const lowerMsg = message.toLowerCase();

  // Detectar si el usuario quiere que investigue
  if (lowerMsg.includes("investiga") || lowerMsg.includes("busca") || lowerMsg.includes("google") || lowerMsg.includes("encuentra")) {
    const query = message.replace(/investiga|busca|google|encuentra|averigua/i, "").trim();
    if (query) {
      return searchOnGoogle(query);
    }
  }

  // Si no es una petición de investigación, devolver null
  return null;
}
