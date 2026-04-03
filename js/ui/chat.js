function addMessageToChat(text, sender) {
  const container = document.querySelector('.chat-container');
  if (!container) return;

  const div = document.createElement('div');
  div.className = `message ${sender}`;
  div.textContent = text;
  container.appendChild(div);

  // ✅ Scroll automático mejorado - funciona en móviles
  // Usamos requestAnimationFrame para asegurar que el DOM se actualice primero
  requestAnimationFrame(() => {
    // Scroll directo al final
    container.scrollTop = container.scrollHeight;
    
    // Scroll adicional con scrollIntoView como respaldo
    setTimeout(() => {
      div.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 100);
  });
}

// Opcional: funciones para mostrar/ocultar "Pensando..."
function showThinking() {
  document.getElementById('thinking-container').classList.remove('hidden');
}

function hideThinking() {
  document.getElementById('thinking-container').classList.add('hidden');
}
