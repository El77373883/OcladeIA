function saveCurrentChat() {
  const messages = Array.from(document.querySelectorAll('.message')).map(m => ({
    text: m: m.classList.contains('user') ? 'user' : 'bot'
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
