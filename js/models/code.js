function getResponseFromCodeModel(message) {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes("hola") || lowerMsg.includes("hey")) {
    return "¡Hola! Soy Oclade Code. ¿En qué problema de programación puedo ayudarte? 👨‍💻";
  }

  if (lowerMsg.includes("bug") || lowerMsg.includes("error")) {
    return "🔍 Veo que tienes un error. Pégalo aquí y te ayudo a encontrar la solución.";
  }

  if (lowerMsg.includes("react") || lowerMsg.includes("componente")) {
    return "💡 Para crear un componente en React:\n\n```jsx\nfunction MiComponente() {\n  return <h1>Hola Mundo</h1>;\n}\n```\n¿N detalles?";
  }

  if (lowerMsg.includes("loop") || lowerMsg.includes("for") || lowerMsg.includes("while")) {
    return "🔄 Ejemplo de bucle en JavaScript:\n\n```js\nfor (let i = 0; i < 10; i++) {\n  console.log(i);\n}\n```\n¿Quieres verlo en otro lenguaje?";
  }

  if (lowerMsg.includes("función") || lowerMsg.includes("function")) {
    return "🔧 Una función en JS:\n\n```js\nfunction saludar(nombre) {\n  return `Hola \${nombre}`;\n}\n```\n¿Quieres que te la convierta a flecha?";
  }

  return "🤓 Estoy aquí para ayudarte con código. Puedo explicar funciones, bucles, errores, frameworks, etc. ¿Qué necesitas?";
}
