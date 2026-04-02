function getResponseFromThinkModel(message) {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes("hola") || lowerMsg.includes("hey")) {
    return "🧠 ¡Hola! Soy Oclade Think. ¿En qué quieres que reflexione contigo? 🤔";
  }

  if (lowerMsg.includes("cómo") && lowerMsg.includes("mejorar")) {
    return "💭 Para mejorar, primero identifiquemos metas claras. ¿Tienes un objetivo específico? Podemos desglosarlo paso a paso.";
  }

  if (lowerMsg.includes("qué") && lowerMsg.includes("opinas")) {
    return "🔍 Mi opinión está basada en lógica y datos. ¿Sobre qué tema? Dame contexto y analizaré pros y contras.";
  }

  if (lowerMsg.includes("ayuda") || lowerMsg.includes("ayúdame")) {
    return "💡 Estoy aquí para ayudarte a pensar. ¿Qué situación estás enfrentando? Puedo ofrecerte perspectivas o preguntas para reflexionar.";
  }

  return "🤔 Soy Oclade Think. Analizo, razono, conecto ideas. ¿Sobre qué quieres que pensemos juntos?";
}
