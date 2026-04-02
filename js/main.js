let currentModel = 'chat';
let tokenCount = 0;

document.addEventListener('DOMContentLoaded', () => {
  updateTimeGreeting();
  initEventListeners();
  loadChatHistory();
});

function updateTimeGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = '';

  if (hour >= 6 && hour < 12) greeting = 'Buenos días';
  else if (hour >= 12 && hour < 18) greeting = 'Buenas tardes';
  else greeting = 'Buenas noches';

  document.getElementById('time-greeting').textContent = greeting;
}

function initEventListeners() {
  // Menú hamburguesa
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
    });
  }

  // Nueva conversación
  const newChatBtn = document.getElementById('new-chat-btn');
  if (newChatBtn) {
    newChatBtn.addEventListener('click', startNewChat);
  }

  // Modelos
  document.querySelectorAll('.model-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentModel = this.dataset.model;
      localStorage.setItem('selectedModel', currentModel);
    });
  });

  // Enviar mensaje
  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  if (sendBtn && userInput) {
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') sendMessage();
    });
  }

  // Menú desplegable de modelos
  const modelMenuBtn = document.getElementById('model-menu-btn');
  const modelMenu = document.getElementById('model-menu');
  if (modelMenuBtn && modelMenu) {
    modelMenuBtn.addEventListener('click', () => {
      modelMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#model-menu .model-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        modelMenu.classList.add('hidden');
        // Actualiza el botón activo
        document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentModel = btn.dataset.model;
        localStorage.setItem('selectedModel', currentModel);
      });
    });
  }
}

function startNewChat() {
  document.querySelector('.chat-container').innerHTML = '';
  tokenCount = 0;
  document.querySelector('.token-counter').textContent = '0 / 4000 tokens';
  document.getElementById('sidebar').classList.add('hidden');
}

function sendMessage() {
  const input = document.getElementById('user-input');
  const msg = input.value.trim();
  if (!msg) return;

  // Agregar mensaje del usuario
  addMessageToChat(msg, 'user');

  // Mostrar "pensando..."
  showThinking();

  setTimeout(() => {
    hideThinking();
    const response = generateResponse(msg);
    addMessageToChat(response, 'bot');
    updateTokenCounter(msg.length + response.length);
  }, 1500);

  input.value = '';
}

function generateResponse(msg) {
  if (currentModel === 'code') return getResponseFromCodeModel(msg);
  if (currentModel === 'think') return getResponseFromThinkModel(msg);
  return getResponseFromChatModel(msg);
}
