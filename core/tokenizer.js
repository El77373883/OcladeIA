function updateTokenCounter(length) {
  tokenCount += Math.floor(length / 4);
  if (tokenCount > 4000) tokenCount = 4000;
  document.querySelector('.token-counter').textContent = `${tokenCount} / 4000 tokens`;
}
