// js/main.js — versión 100% funcional para iPhone
let currentModel = 'chat';
let tokenCount = 0;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Menú hamburguesa
  const menuBtn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
    });
  }

  // 2. Modelos
  document.querySelectorAll('.model-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentModel = this.dataset.model;
      console.log('Modelo seleccionado:', currentModel);
    });
  });

  // 3. Enviar mensaje
  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const chatContainer = document.querySelector('.chat-container');

  if (sendBtn && userInput && chatContainer) {
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') sendMessage();
    });
  }

  function sendMessage() {
    const msg = userInput.value.trim();
    if (!msg) return;

    // Mostrar mensaje del usuario
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = msg;
    chatContainer.appendChild(userMsg);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Simular respuesta
    setTimeout(() => {
      let response = "👋 ¡Hola! Estoy aquí para ayudarte.";
      if (currentModel === 'code') response = "💻 Estoy listo para ayudarte con código.";
      if (currentModel === 'think') response = "🧠 Analizando tu pregunta...";
      if (currentModel === 'chat') response = "💬 ¿De qué quieres hablar hoy?";

      const botMsg = document.createElement('div');
      botMsg.className = 'message bot';
      botMsg.textContent = response;
      chatContainer.appendChild(botMsg);
      chatContainer.scrollTop = chatContainer.scrollHeight;

      // Actualizar tokens
      tokenCount += Math.floor((msg.length + response.length) / 4);
      if (tokenCount > 4000) tokenCount = 4000;
      document.querySelector('.token-counter').textContent = `${tokenCount} / 4000 tokens`;
    }, 800);

    userInput.value = '';
  }

  // 4. Cargar historial (solo si existe)
  loadChatHistory();
});

function loadChatHistory() {
  const ul = document.getElementById('chat-history');
  if (!ul) return;
  const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  = '';
  history.forEach(chat => {
    const li = document.createElement('li');
    li.className = 'history-item';
    li.textContent = chat.title || 'Chat';
    li.onclick = () => alert('Cargar chat: ' + chat.id);
    ul.appendChild(li);
  });
}
