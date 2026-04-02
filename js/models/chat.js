function getResponseFromChatModel(message) {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes("hola") || lowerMsg.includes("hey")) {
    return "👋 ¡Hola! Soy Oclade Chat. ¿Cómo estás hoy? 😊";
  }

  if (lowerMsg.includes("cómo estás")) {
    return "🤖 Estoy bien, gracias por preguntar. ¿Y tú? ¿En qué puedo ayudarte?";
  }

  if (lowerMsg.includes("gracias")) {
    return "🙏 De nada. ¡Siempre aquí para ayudarte!";
  }

  if (lowerMsg.includes("chiste")) {
    return "😄 ¿Sabes cómo se llama un robot que hace chistes malos?... ¡Un chistebot! 😂";
  }

  if (lowerMsg.includes("adiós") || lowerMsg.includes("chao")) {
    return "👋 ¡Cuídate! Vuelve cuando quieras conversar 🌟";
  }

  return "💬 Soy Oclade Chat. Estoy aquí para charlar contigo. ¿De qué quieres hablar?";
}
