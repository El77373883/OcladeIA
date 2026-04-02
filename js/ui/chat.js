function addMessageToChat(text, sender) {
  const container = document.querySelector('.chat-container');
  const div = document.createElement('div');
  div.className = `message ${sender}`;
  div.textContent = text;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function typewriterEffect(element, text) {
  let i = 0;
  element.textContent = '';
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      container.scrollTop    } else {
      clearInterval(timer);
    }
  }, 20);
}
