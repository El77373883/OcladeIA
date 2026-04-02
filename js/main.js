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
  document.getElementById('menu-toggle').addEventListener('click', toggleSidebar);
  document.getElementById('new-chat-btn').addEventListener('click', startNewChat);
  document.querySelectorAll('.model-btn').forEach(btn => {
    btn.addEventListener('click', () => setModel(btn.dataset.model));
  });
  document.getElementById('send-btn').addEventListener('click', sendMessage);
  document.getElementById('user-input').addEventListener('keypress', e => {
    if (e.key === 'Enter') sendMessage();
  });
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('hidden');
}

function setModel(model) {
  document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  currentModel = model;
  localStorage.setItem('selectedModel', model);
}

function sendMessage() {
  const input = document.getElementById('user-input');
  const msg = input.value.trim();
  if (!msg) return;

  addMessageToChat(msg, 'user');

  // Simulación de respuesta
  showThinking();

  setTimeout(() => {
    hideThinking();
    const response = generateResponse(msg);
    addMessageToChat(response, 'bot');
    updateTokenCounter(msg.length + response.length);
  }, 1500);

  input.value = '';
}

function addMessageToChat(text, sender) {
  const container = document.querySelector('.chat-container');
  const div = document.createElement('div');
  div.className = `message ${sender}`;
  div.textContent container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function generateResponse(msg) {
  // Lógica básica para elegir modelo
  if (currentModel === 'code') return getResponseFromCodeModel(msg);
  if (currentModel === 'think') return getResponseFromThinkModel(msg);
  return getResponseFromChatModel(msg);
}

function showThinking() {
  document.getElementById('thinking-container').classList.remove('hidden');
}

function hideThinking() {
  document.getElementById('thinking-container').classList.add('hidden');
}

function updateTokenCounter(length) {
  tokenCount += Math.floor(length / 4);
  if (tokenCount > 4000) tokenCount = 4000;
  document.querySelector('.token-counter').textContent = `${tokenCount} / 4000 tokens`;
}

// Historial
function saveCurrentChat() {
  const messages = Array.from(document.querySelectorAll('.message')).map(m => ({
    text: m.textContent,
    sender: m.classList.contains('user') ? 'user' : 'bot'
  }));
  const chatId = Date.now().toString();
  const chatTitle = messages[0]?.text.slice(0, 30) || 'Nuevo chat';
  const chatData = {
    id: chatId,
    title: chatTitle,
    timestamp: new Date(),
    messages,
    model: currentModel
  };
  let history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  history.unshift(chatData);
  localStorage.setItem('chatHistory', JSON.stringify(history));
  renderChatHistory();
}

function loadChatHistory() {
  const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  const ul = document.getElementById('chat-history');
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
    document.querySelector('.chat-container').innerHTML = '';
    chat.messages.forEach(msg => addMessageToChat(msg.text, msg.sender));
    setModel(chat.model);
    document.getElementById('sidebar').classList.add('hidden');
  }
}

function startNewChat() {
  document.querySelector('.chat-container').innerHTML = '';
  tokenCount = 0;
  updateTokenCounter(0);
  document.getElementById('sidebar').classList.add('hidden');
}


