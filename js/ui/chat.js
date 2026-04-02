function addMessageToChat(text, sender) {
  const container = document.querySelector('.chat-container');
  if (!container) return;

  const div = document.createElement('div');
  div.className = `message ${sender}`;
  div.textContent = text;
  container.appendChild(div);

  // ✅ Scroll suave al final — pero solo si el usuario está en el fondo
  const isAtBottom = container.scrollHeight - container.clientHeight - container.scrollTop < 50;
  if (isAtBottom) {
    container.scrollTop = container.scrollHeight;
  }
}

// Opcional: funciones para mostrar/ocultar "Pensando..."
function showThinking() {
  document.getElementById('thinking-container').classList.remove('hidden');
}

function hideThinking() {
  document.getElementById('thinking-container').classList.add('hidden');
}
