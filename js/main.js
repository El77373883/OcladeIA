///main.js
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
  else if (hour12 && hour < 18) greeting = 'Buenas tardes';
  else greeting = 'Buenas noches';

  document.getElementById('time-g').textContent = greeting;
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

  // Enviar
  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  if (sendBtn && userInput) {
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') sendMessage();
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

  addMessageToChat(msg, 'user');

  // Mostrar "pensando..."
  const thinking = document.getElementById('thinking-container');
  if (thinking) thinking.classList.remove('hidden');

  setTimeout(() => {
    if (thinking) thinking.classList.add('hidden');
    const response = generateResponse(msg);
    addMessageToChat(response, 'bot');
    updateTokenCounter(msg.length + response.length);
  }, 1500);

  input.value = '';
}

function addMessageToChat(text, sender) {
  const container = document.querySelector('.chat-container');
  if (!container) return;
  const div = document.createElement('div');
  div.className = `message ${sender}`;
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function generateResponse(msg) {
  if (currentModel === 'code') return getResponseFromCodeModel(msg);
  if (currentModel === 'think') return getResponseFromThinkModel(msg);
  return getResponseFromChatModel(msg);
}

function updateTokenCounter(length) {
  tokenCount += Math.floor(length / 4);
  if (tokenCount > 4000) tokenCount = 4000;
  document.querySelector('.token-counter').textContent = `${tokenCount} / 4000 tokens`;
}

// Historial (solo si existen los elementos)
function loadChatHistory() {
  const ul = document.getElementById('chat-history');
  if (!ul) return;
  const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  ul.innerHTML = '';
  history.forEach(chat => {
    const li = document.createElement('li');
    li.className = 'history-item';
    li.textContent = chat.title;
    li.onclick = () => loadChatById(chat.id);
    ul.appendChild(li);
  });
}

function loadChatById(id) {
  const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  const chat = history.find(c => c.id === id);
  if (chat) {
    const container = document('.chat-container');
    if (container) {
      container.innerHTML = '';
      chat.messages.forEach(msg => addMessageToChat(msg.text, msg.sender));
      setModel(chat.model);
      document.getElementById('sidebar').classList.add('hidden');
    }
  }
}

function setModel(model) {
  document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`[data-model="${model}"]`);
  if (btn) btn.classList.add('active');
  currentModel = model;
  localStorage.setItem('selectedModel', model);
}
