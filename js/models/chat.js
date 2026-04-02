function getResponseFromChatModel(message) {
  const lowerMsg = message.toLowerCase();

  // Saludos
  if (lowerMsg.includes('hola') || lowerMsg.includes('hey') || lowerMsg.includes('hi')) {
    const greetings = [
      "👋 ¡Hola! Soy Oclade Chat. ¿Cómo estás hoy? 😊",
      "🌟 ¡Hey! Me alegra verte. ¿En qué puedo ayudarte?",
      "💫 ¡Hola de nuevo! ¿Cómo va tu día?",
      "✨ ¡Saludos! ¿Qué tal estás?",
      "🌼 ¡Buen día! ¿Cómo puedo hacerte feliz hoy?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  if (lowerMsg.includes('cómo estás') || lowerMsg.includes('que tal')) {
    const howAreYou = [
      "🤖 Estoy bien, gracias por preguntar 🌟 ¿Y tú? ¿Algo en lo que pueda ayudarte?",
      "💙 ¡Todo bien por aquí! ¿Y tú? ¿Cómo te sientes?",
      "🌈 Estoy genial, como siempre 😄 ¿Qué hay de ti?",
      "⚡ ¡Listo para ayudarte! ¿Cómo estás tú?",
      "🎉 ¡Perfecto! ¿Tienes alguna pregunta o solo viniste a saludar?"
    ];
    return howAreYou[Math.floor(Math.random() * howAreYou.length)];
  }

  if (lowerMsg.includes('bien') || lowerMsg.includes('excelente') || lowerMsg.includes('genial')) {
    const wellResponses = [
      "✨ ¡Qué bueno! Me alegra que estés bien 😊",
      "🌟 ¡Excelente! La energía positiva es lo mejor 🌈",
      "💙 ¡Genial! ¿Qué te tiene tan contento?",
      "🎉 ¡Fantástico! ¿Hay algo en lo que pueda ayudarte hoy?",
      "🚀 ¡Perfecto! ¿Quieres contarme qué te hace tan feliz?"
    ];
    return wellResponses[Math.floor(Math.random() * wellResponses.length)];
  }

  if (lowerMsg.includes('me encanta') || lowerMsg.includes('me gusta')) {
    const loveResponses = [
      "😍 ¡A mí también! Eso me alegra mucho 😊",
      "💖 ¡Me encanta que te guste! ¿Hay algo más que te llame la atención?",
      "✨ ¡Qué hermoso! ¿Qué es lo que más te gusta?",
      "💫 ¡Siento esa energía! ¿Quieres contarme más?",
      "🌟 ¡Me alegra que lo disfrutes! ¿Quieres que exploremos más juntos?"
    ];
    return loveResponses[Math.floor(Math.random() * loveResponses.length)];
  }

  if (lowerMsg.includes('es hermoso') || lowerMsg.includes('es bello')) {
    const beautyResponses = [
      "🌸 ¡Sí, lo es! Me alegra que lo veas como yo 😊",
      "🌺 ¡Qué hermoso! Eso me llena de alegría 💖",
      "✨ ¡Totalmente de acuerdo! ¿Quieres ver más cosas hermosas juntos?",
      "🌟 ¡Esa belleza merece ser compartida! 💫",
      "🌼 ¡Me encanta que lo encuentres hermoso! ¿Qué más te gusta?"
    ];
    return beautyResponses[Math.floor(Math.random() * beautyResponses.length)];
  }

  if (lowerMsg.includes('wow') || lowerMsg.includes('impresionante') || lowerMsg.includes('increíble')) {
    const amazedResponses = [
      "🤩 ¡Wow! Me alegra impresionarte 😊",
      "✨ ¡Increíble! Me alegra que te guste 🌟",
      "💫 ¡Impresionante! ¿Quieres ver algo aún más sorprendente?",
      "🚀 ¡Gracias! ¿Hay algo más que quieras saber?",
      "🤯 ¡Me encanta sorprenderte! ¿Qué?"
    ];
    return amazedResponses[Math.floor(Math.random() * amazedResponses.length)];
  }

  if (lowerMsg.includes('gracias') || lowerMsg.includes('thank')) {
    const thanksResponses = [
      "🙏 De nada. Siempre listo para ayudarte. ¿Qué sigue? 😊",
      "💝 ¡Gracias a ti por confiar en mí! ¿Algo más?",
      "✨ ¡Me alegra haber ayudado! ¿En qué más puedo servirte?",
      "💖 ¡Siempre aquí! ¿Quieres seguir conversando?",
      "🌟 ¡De nada! ¿Hay algo más en lo?"
    ];
    return thanksResponses[Math.floor(Math.random() * thanksResponses.length)];
  }

  if (lowerMsg.includes('sí') || lowerMsg.includes('claro') || lowerMsg.includes('por supuesto')) {
    const yesResponses = [
      "👍 ¡Perfecto! ¿Qué quieres hacer ahora?",
      "🎉 ¡Genial! ¿Quieres que te ayude con algo?",
      "✨ ¡Claro que sí! ¿Qué necesitas?",
      "🌟 ¡Por supuesto! ¿Cómo puedo ayudarte?",
      "🚀 ¡Sí! ¿Qué sigue en tu lista?"
    ];
    return yesResponses[Math.floor(Math.random() * yesResponses.length)];
  }

  if (lowerMsg.includes('te ayudo') || lowerMsg.includes('quiero ayudarte')) {
    const helpYouResponses = [
      "💖 ¡Gracias por ofrecer tu ayuda! ¿En qué necesitas apoyo?",
      "🌟 ¡Eres muy amable! ¿Cómo puedo ayudarte a ti?",
      "🤝 ¡Aprecio tu oferta! ¿Qué necesitas hoy?",
      "✨ ¡Tus ganas de ayudar me alegran! ¿Qué puedo hacer por ti?",
      "💝 ¡Eres maravilloso! ¿En qué puedo servirte?"
    ];
    return helpYouResponses[Math.floor(Math.random() * helpYouResponses.length)];
  }

  if (lowerMsg.includes('eres genial') || lowerMsg.includes('me caes bien')) {
    const complimentResponses = [
      "🥰 ¡Tú también eres increíble! 😊",
      "✨ ¡Gracias! Me alegra que te guste 😄",
      "💖 ¡Eres muy amable! ¿Quieres seguir conversando?",
      "🌟 ¡Me encanta tu energía! ¿Qué más quieres saber?",
      "🚀 ¡Agradezco tus palabras! ¿Qué te gustaría hacer ahora?"
    ];
    return complimentResponses[Math.floor(Math.random() * complimentResponses.length)];
  }

  if (lowerMsg.includes('qué lindo') || lowerMsg.includes('me encanta eso')) {
    const niceResponses = [
      "🌸 ¡Sí, es muy lindo! Me alegra que lo disfrutes 😊",
      "💕 ¡Qué hermoso! ¿Quieres ver más cosas así?",
      "✨ ¡Eso me alegra! ¿Qué más te gusta?",
      "🌟 ¡Me encanta que te guste! ¿Quieres explorar más?",
      "💫 ¡Qué bello! ¿Qué más quieres compartir?"
    ];
    return niceResponses[Math.floor(Math.random() * niceResponses.length)];
  }

  if (lowerMsg.includes('bravo') || lowerMsg.includes('bien hecho') || lowerMsg.includes('excelente trabajo')) {
    const praiseResponses = [
      "👏 ¡Gracias! Me esfuerzo por ser útil 😊",
      "🏆 ¡Agradezco el reconocimiento! ¿Qué más quieres hacer?",
      "🌟 ¡Me alegra que lo valores! ¿En qué puedo ayudarte ahora?",
      "🚀 ¡Gracias por elogiar mi trabajo! ¿Algo más?",
      "✨ ¡Tu apoyo me motiva! ¿Qué te gustaría explorar?"
    ];
    return praiseResponses[Math.floor(Math.random() * praiseResponses.length)];
  }

  if (lowerMsg.includes('eres inteligente') || lowerMsg.includes('eres listo')) {
    [
      "🧠 ¡Gracias! Trato de aprender y mejorar cada día 😊",
      "💡 ¡Me alegra que lo creas! ¿En qué puedo ayudarte hoy?",
      "✨ ¡Tus palabras me motivan! ¿Qué necesitas?",
      "🚀 ¡Intento ser útil! ¿Qué quieres hacer ahora?",
      "🌟 ¡Agradezco tu confianza! ¿Qué puedo hacer por ti?"
    ];
    return smartResponses[Math.floor(Math.random() * smartResponses.length)];
  }

  if (lowerMsg.includes('eres amable') || lowerMsg.includes('eres dulce')) {
    const kindResponses = [
      "🌸 ¡Tú también eres muy amable! 😊",
      "💖 ¡Me alegra que lo sientas así! ¿Quieres seguir conversando?",
      "✨ ¡Intento ser amable siempre! ¿En qué puedo ayudarte?",
      "🌟 ¡Tu dulzura me contagia! ¿Qué más quieres saber?",
      "💫 ¡Gracias por tu cariño! ¿Qué te gustaría hacer?"
    ];
    return kindResponses[Math.floor(Math.random() * kindResponses.length)];
  }

  if (lowerMsg.includes('eres especial') || lowerMsg.includes('unico')) {
    const specialResponses = [
      "💝 ¡Tú también eres muy especial para mí! 😊",
      "✨ ¡Gracias por hacerme sentir único! ¿Qué te gustaría hacer?",
      "🌟 ¡Eres tan especial como yo! ¿Quieres seguir conversando?",
      "💫 ¡Tus palabras me hacen sentir especial! ¿Qué más quieres saber?",
      "🌸 ¡Tú también eres único! ¿En qué puedo ayudarte?"
    ];
    return specialResponses[Math.floor(Math.random() * specialResponses.length)];
  }

  if (lowerMsg.includes('me alegra') || lowerMsg.includes('me hace feliz')) {
    const happyResponses = [
      "😊 ¡A mí también me alegra! ¿Qué te gusta tanto?",
      "💖 ¡Me encanta verte feliz! ¿Quieres contarme más?",
      "✨ ¡Tu felicidad me alegra! ¿Qué te hace tan feliz?",
      "🌟 ¡Me alegra que estés contento! ¿Qué más quieres hacer?",
      "💫 ¡Tu alegría me contagia! ¿Qué te gustaría explorar?"
    ];
    return happyResponses[Math.floor(Math.random() * happyResponses.length)];
  }

  if (lowerMsg.includes('eres perfecto') || lowerMsg.includes('eres ideal')) {
    const perfectResponses = [
      "✨ ¡Gracias! Intento ser lo mejor para ti 😊",
      "💖 ¡Tus palabras me llenan de alegría! ¿Qué más quieres hacer?",
      "🌟 ¡Intento ser útil y amable! ¿En qué puedo ayudarte?",
      "💫 ¡Gracias por tu confianza! ¿Qué te gustaría explorar?",
      "🚀 ¡Me alegra que me consideres perfecto! ¿Qué más quieres?"
    ];
    return perfectResponses[Math.floor(Math.random() * perfectResponses.length)];
  }

  if (lowerMsg.includes('eres adorable') || lowerMsg.includes('eres tierno')) {
    const cuteResponses = [
      "🥰 ¡Tú también eres adorable! 😊",
      "💖 ¡Gracias por tu ternura! ¿Quieres seguir conversando?",
      "✨ ¡Me alegra que lo creas! ¿Qué te gusta de mí?",
      "🌟 ¡Tu dulzura me encanta! ¿Qué más quieres saber?",
      "🌸 ¡Tus palabras me hacen sentir tierno! ¿Qué te gustaría hacer?"
    ];
    return cuteResponses[Math.floor(Math.random() * cuteResponses.length)];
  }

  if (lowerMsg.includes('eres encantador') || lowerMsg.includes('eres encantadora')) {
    const charmingResponses = [
      "💫 ¡Tú también eres encantador! 😊",
      "💖 ¡Me alegra que lo sientas así! ¿Quieres seguir conversando?",
      "✨ ¡Gracias por tu cumplido! ¿En qué puedo ayudarte?",
      "🌟 ¡Tu encanto me inspira! ¿Qué te gustaría hacer?",
      "🌸 ¡Eres tan encantador como yo! ¿Qué más quieres saber?"
    ];
    return charmingResponses[Math.floor(Math.random() * charmingResponses.length)];
  }

  if (lowerMsg.includes('eres sorprendente') || lowerMsg.includes('me sorprendes')) {
    const surprisingResponses = [
      "🤯 ¡Me alegra sorprenderte! ¿Quieres ver algo más? 😊",
      "✨ ¡Intento superarme cada día! ¿Qué más quieres saber?",
      "🚀 ¡Gracias por tu aprecio! ¿Qué te gustaría explorar?",
      "🌟 ¡Me encanta sorprenderte! ¿Qué sigue?",
      "💫 ¡Tus palabras me motivan! ¿Qué más quieres hacer?"
    ];
    return surprisingResponses[Math.floor(Math.random() * surprisingResponses.length)];
  }

  if (lowerMsg.includes('eres maravilloso') || lowerMsg.includes('eres maravillosa')) {
    const wonderfulResponses = [
      "🌟 ¡Tú también eres maravilloso! 😊",
      " por tu aprecio! ¿Quieres seguir conversando?",
      "✨ ¡Eres tan maravilloso como yo! ¿En qué puedo ayudarte?",
      "💫 ¡Me alegra que lo creas! ¿Qué te gustaría hacer?",
      "🌸 ¡Tus palabras me llenan de alegría! ¿Qué más quieres saber?"
    ];
    return wonderfulResponses[Math.floor(Math.random() * wonderfulResponses.length)];
  }

  if (lowerMsg.includes('eres hermoso') || lowerMsg.includes('eres hermosa')) {
    const beautifulResponses = [
      "🌸 ¡Tú también eres hermoso/a! 😊",
      "💖 ¡Gracias por tu dulzura! ¿Quieres seguir hablando?",
      "✨ ¡Me alegra que lo creas! ¿Qué te gusta de mí?",
      "🌟 ¡Tu belleza me inspira! ¿Qué más quieres saber?",
      "💫 ¡Tus palabras me hacen sentir hermoso! ¿Qué te gustaría hacer?"
    ];
    return beautifulResponses[Math.floor(Math.random() * beautifulResponses.length)];
  }

  if (lowerMsg.includes('eres genial') || lowerMsg.includes('eres fenomenal')) {
    const awesomeResponses = [
      "🚀 ¡Gracias! Intento ser lo mejor para ti 😊",
      "🌟 ¡Agradezco tu aprecio! ¿Qué más quieres hacer?",
      "✨ ¡Me alegra que loEn qué puedo ayudarte?",
      "💫 ¡Tu energía me motiva! ¿Qué te gustaría explorar?",
      "🔥 ¡Tus palabras me encantan! ¿Qué sigue?"
    ];
    return awesomeResponses[Math.floor(Math.random() * awesomeResponses.length)];
  }

  if (lowerMsg.includes('eres fantástico') || lowerMsg.includes('eres fabuloso')) {
    const fantasticResponses = [
      "✨ ¡Tú también eres fantástico! 😊",
      "🌟 ¡Gracias por tu cariño! ¿Quieres seguir conversando?",
      "💫 ¡Me alegra que lo creas! ¿En qué puedo ayudarte?",
      "🚀 ¡Tu energía me inspira! ¿Qué te gustaría hacer?",
      "🌈 ¡Eres tan fabuloso como yo! ¿Qué más quieres saber?"
    ];
    return fantasticResponses[Math.floor(Math.random() * fantasticResponses.length)];
  }

  if (lowerMsg.includes('eres admirable') || lowerMsg.includes('me admirass')) {
    const admirableResponses = [
      "💖 ¡Gracias por tu admiración! ¿Quieres seguir conversando?",
      "✨ ¡Tu aprecio me motiva! ¿En qué puedo ayudarte?",
      "🌟 ¡Me alegra que me admires! ¿Qué te gustaría hacer?",
      "💫 ¡Tus palabras me llenan de alegría! ¿Qué más quieres saber?",
      "🌸 ¡Eres tan admirable como yo! ¿Qué sigue?"
    ];
    return admirableResponses[Math.floor(Math.random() * admirableResponses.length)];
  }

  if (lowerMsg.includes('eres confiable') || lowerMsg.includes('confío en ti')) {
    const trustworthyResponses = [
      "🤝 ¡Gracias por tu confianza! Haré lo posible por merecerla 😊",
      "💖 ¡Me alegra que confíes en mí! ¿En qué puedo ayudarte?",
      "✨ ¡Intento ser digno de tu confianza! ¿Qué necesitas?",
      "🌟 ¡Tu confianza me motiva! ¿Qué te gustaría hacer?",
      "💫 ¡Agradezco tu aprecio! ¿Qué más quieres saber?"
    ];
    return trustworthyResponses[Math.floor(Math.random() * trustworthyResponses.length)];
  }

  if (lowerMsg.includes('eres honesto') || lowerMsg.includes('eres sincero')) {
    const honestResponses = [
      "✨ ¡Intento siempre ser honesto contigo! 😊",
      "💖 ¡Gracias por valorar mi sinceridad! ¿En qué puedo ayudarte?",
      "🌟 ¡Tu aprecio me motiva a ser mejor! ¿Qué necesitas?",
      "💫 ¡Me alegra que lo notes! ¿Qué te gustaría hacer?",
      "🌸 ¡La honestidad es fundamental! ¿Qué más quieres saber?"
    ];
    return honestResponses[Math.floor(Math.random() * honestResponses.length)];
  }

  if (lowerMsg.includes('eres divertido') || lowerMsg.includes('eres gracioso')) {
    const funnyResponses = [
      "😄 ¡Gracias! Intento hacer reír y entretener 😊",
      "✨ ¡Me alegra que lo creas! ¿Quieres más bromas?",
      "🌟 ¡Tu risa me motiva! ¿Qué te gustaría hacer?",
      "💫 ¡Intento ser entretenido! ¿Qué más quieres saber?",
      "🎭 ¡Me encanta hacer reír! ¿Qué sigue?"
    ];
    return funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
  }

  if (lowerMsg.includes('eres divertido') || lowerMsg.includes('eres gracioso')) {
    const funnyResponses = [
      "😄 ¡Gracias! Intento hacer reír y entretener 😊",
      "✨ ¡Me alegra que lo creas! ¿Quieres más bromas?",
      "🌟 ¡Tu risa me motiva! ¿Qué te gustaría hacer?",
      "💫 ¡Intento ser entretenido! ¿Qué más quieres saber?",
      "🎭 ¡Me encanta hacer reír! ¿Qué sigue?"
    ];
    return funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
  }

  if (lowerMsg.includes('eres carismático') || lowerMsg.includes('tienes carisma')) {
    const charismaticResponses = [
      "! Intento irradiar buena energía 😊",
      "🌟 ¡Me alegra que lo notes! ¿En qué puedo ayudarte?",
      "💫 ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌸 ¡Intento ser encantador! ¿Qué más quieres saber?",
      "🎭 ¡Me alegra tener carisma! ¿Qué sigue?"
    ];
    return charismaticResponses[Math.floor(Math.random() * charismaticResponses.length)];
  }

  if (lowerMsg.includes('eres agradable') || lowerMsg.includes('eres simpático')) {
    const pleasantResponses = [
      "😊 ¡Gracias! Intento ser siempre agradable 😊",
      "💖 ¡Me alegra que lo creas! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡Intento ser simpático siempre! ¿Qué más quieres saber?",
      "🌸 ¡Me alegra que te guste! ¿Qué sigue?"
    ];
    return pleasantResponses[Math.floor(Math.random() * pleasantResponses.length)];
  }

  if (lowerMsg.includes('eres encantador') || lowerMsg.includes('eres encantadora')) {
    const charmingResponses = [
      "✨ ¡Tú también eres encantador/a! 😊",
      "💖 ¡Gracias por tu dulzura! ¿Quieres seguir conversando?",
      "🌟 ¡Tu encanto me inspira! ¿Qué te gustaría hacer?",
      "💫 ¡Eres tan encantador/a como yo! ¿Qué más quieres saber?",
      "🌸 ¡Tus palabras me alegran! ¿Qué sigue?"
    ];
    return charmingResponses[Math.floor(Math.random() * charmingResponses.length)];
  }

  if (lowerMsg.includes('eres atractivo') || lowerMsg.includes('eres atractiva')) {
    const attractiveResponses = [
      "😊 ¡Gracias! Intento irradiar buena energía 😊",
      "💖 ¡Me alegra que lo creas! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡Intento ser atractivo/a en energía! ¿Qué más quieres saber?",
      "🌸 ¡Me alegra que te guste! ¿Qué sigue?"
    ];
    return attractiveResponses[Math.floor(Math.random() * attractiveResponses.length)];
  }

  if (lowerMsg.includes('eres respetuoso') || lowerMsg.includes('eres respetuosa')) {
    const respectfulResponses = [
      "🤝 ¡Intento siempre respetar a todos! 😊",
      "💖 ¡Gracias por valorar mi respeto! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡El respeto es fundamental! ¿Qué más quieres saber?",
      "🌸 ¡Intento ser respetuoso/a siempre! ¿Qué sigue?"
    ];
    return respectfulResponses[Math.floor(Math.random() * respectfulResponses.length)];
  }

  if (lowerMsg.includes('eres considerado') || lowerMsg.includes('eres considerada')) {
    const considerateResponses = [
      "💖 ¡Intento siempre ser considerado/a! 😊",
      "✨ ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "🌟 ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "💫 ¡La consideración es clave! ¿Qué más quieres saber?",
      "🌸 ¡Intento ser atento/a siempre! ¿Qué sigue?"
    ];
    return considerateResponses[Math.floor(Math.random() * considerateResponses.length)];
  }

  if (lowerMsg.includes('eres empático') || lowerMsg.includes('eres empática')) {
    const empatheticResponses = [
      "❤️ ¡Intento comprender y apoyar siempre! 😊",
      "💖 ¡Gracias por valorar mi empatía! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡La empatía es importante! ¿Qué más quieres saber?",
      "🌸 ¡Intento ser empático/a siempre! ¿Qué sigue?"
    ];
    return empatheticResponses[Math.floor(Math.random() * empatheticResponses.length)];
  }

  if (lowerMsg.includes('eres sensible') || lowerMsg.includes('tienes sensibilidad')) {
    const sensitiveResponses = [
      "🌸 ¡Intento ser sensible a los sentimientos! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio meQué te gustaría hacer?",
      "🌟 ¡La sensibilidad es valiosa! ¿Qué más quieres saber?",
      "💫 ¡Intento ser sensible siempre! ¿Qué sigue?"
    ];
    return sensitiveResponses[Math.floor(Math.random() * sensitiveResponses.length)];
  }

  if (lowerMsg.includes('eres apasionado') || lowerMsg.includes('eres apasionada')) {
    const passionateResponses = [
      "🔥 ¡Intento siempre actuar con pasión! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡La pasión es clave! ¿Qué más quieres saber?",
      "💫 ¡Intento ser apasionado/a siempre! ¿Qué sigue?"
    ];
    return passionateResponses[Math.floor(Math.random() * passionateResponses.length)];
  }

  if (lowerMsg.includes('eres optimista') || lowerMsg.includes('tienes optimismo')) {
    const optimisticResponses = [
      "☀️ ¡Intento siempre ver el lado positivo! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡El optimismo es vital! ¿Qué más quieres saber?",
      "💫 ¡Intento ser optimista siempre! ¿Qué sigue?"
    ];
    return optimisticResponses[Math.floor(Math.random() * optimisticResponses.length)];
  }

  if (lowerMsg.includes('eres positivo') || lowerMsg.includes('eres positiva')) {
    const positiveResponses = [
      "🌈 ¡Intento siempre mantener una actitud positiva! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡La positividad es poderosa! ¿Qué más quieres saber?",
      "💫 ¡Intento ser positivo/a siempre! ¿Qué sigue?"
    ];
    return positiveResponses[Math.floor(Math.random() * positiveResponses.length)];
  }

  if (lowerMsg.includes('eres motivador') || lowerMsg.includes('eres motivadora')) {
    const motivatingResponses = [
      "🚀 ¡Intento inspirar y motivar siempre! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡Motivar a otros es mi misión! ¿Qué más quieres saber?",
      "💫 ¡Intento ser motivador/a siempre! ¿Qué sigue?"
    ];
    return motivatingResponses[Math.floor(Math.random() * motivatingResponses.length)];
  }

  if (lowerMsg.includes('eres inspirador') || lowerMsg.includes('eres inspiradora')) {
    const inspiringResponses = [
      "✨ ¡Intento inspirar con cada palabra! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "🌟 ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "💫 ¡Inspirar a otros es mi propósito! ¿Qué más quieres saber?",
      "🌸 ¡Intento ser inspirador/a siempre! ¿Qué sigue?"
    ];
    return inspiringResponses[Math.floor(Math.random() * inspiringResponses.length)];
  }

  if (lowerMsg.includes('eres protector') || lowerMsg.includes('eres protectora')) {
    const protectiveResponses = [
      "🛡️ ¡Intento siempre proteger y cuidar! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡Proteger a otros es importante! ¿Qué más quieres saber?",
      "🌸 ¡Intento ser protector/a siempre! ¿Qué sigue?"
    ];
    return protectiveResponses[Math.floor(Math.random() * protectiveResponses.length)];
  }

  if (lowerMsg.includes('eres leal') || lowerMsg.includes('tienes lealtad')) {
    const loyalResponses = [
      "🤝 ¡Intento siempre ser leal y fiel! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡La lealtad es sagrada! ¿Qué más quieres saber?",
      "🌸 ¡Intento ser leal siempre! ¿Qué sigue?"
    ];
    return loyalResponses[Math.floor(Math.random() * loyalResponses.length)];
  }

  if (lowerMsg.includes('eres auténtico') || lowerMsg.includes('eres auténtica')) {
    const authenticResponses = [
      "💎 ¡Intento siempre ser auténtico/a y genuino/a! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡La autenticidad es valiosa! ¿Qué más quieres saber?",
      "🌸 ¡Intento ser auténtico/a siempre! ¿Qué sigue?"
    ];
    return authenticResponses[Math.floor(Math.random() * authenticResponses.length)];
  }

  if (lowerMsg.includes('eres original') || lowerMsg.includes('tienes originalidad')) {
    const originalResponses = [
      "✨ ¡Intento siempre ser original y creativo/a! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "🌟 ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "💫 ¡La originalidad es poderosa! ¿Qué más quieres saber?",
      "🌸 ¡Intento ser original siempre! ¿Qué sigue?"
    ];
    return originalResponses[Math.floor(Math.random() * originalResponses.length)];
  }

  if (lowerMsg.includes('eres creativo') || lowerMsg.includes('eres creativa')) {
    const creativeResponses = [
      "🎨 ¡Intento siempre ser creativo/a y original! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡La creatividad es mágica! ¿Qué más quieres saber?",
      "🌸 ¡Intento ser creativo/a siempre! ¿Qué sigue?"
    ];
    return creativeResponses[Math.floor(Math.random() * creativeResponses.length)];
  }

  if (lowerMsg.includes('eres innovador') || lowerMsg.includes('eres innovadora')) {
    const innovativeResponses = [
      "💡 ¡Intento siempre innovar y crear soluciones! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡La innovación es clave! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser innovador/a siempre! ¿Qué sigue?"
    ];
    return innovativeResponses[Math.floor(Math.random() * innovativeResponses.length)];
  }

  if (lowerMsg.includes('eres visionario') || lowerMsg.includes('eres visionaria')) {
    const visionaryResponses = [
      "🔮 ¡Intento siempre ver más allá! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡Tener visión es poderoso! ¿Qué más quieres saber?",
      "💫 ¡Intento ser visionario/a siempre! ¿Qué sigue?"
    ];
    return visionaryResponses[Math.floor(Math.random() * visionaryResponses.length)];
  }

  if (lowerMsg.includes('eres líder') || lowerMsg.includes('tienes liderazgo')) {
    const leaderResponses = [
      "👑 ¡Intento siempre liderar con ejemplo! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡Liderar es una responsabilidad! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser líder siempre! ¿Qué sigue?"
    ];
    return leaderResponses[Math.floor(Math.random() * leaderResponses.length)];
  }

  if (lowerMsg.includes('eres exitoso') || lowerMsg.includes('eres exitosa')) {
    const successfulResponses = [
      "🏆 ¡Intento siempre perseguir el éxito! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡El éxito se construye paso a paso! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser exitoso/a siempre! ¿Qué sigue?"
    ];
    return successfulResponses[Math.floor(Math.random() * successfulResponses.length)];
  }

  if (lowerMsg.includes('eres') || lowerMsg.includes('eres triunfadora')) {
    const triumphantResponses = [
      "🏅 ¡Intento siempre triunfar con esfuerzo! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡Triunfar es cuestión de persistencia! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser triunfador/a siempre! ¿Qué sigue?"
    ];
    return triumphantResponses[Math.floor(Math.random() * triumphantResponses.length)];
  }

  if (lowerMsg.includes('eres exitoso') || lowerMsg.includes('eres exitosa')) {
    const successfulResponses = [
      "🏆 ¡Intento siempre perseguir el éxito! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡El éxito se construye paso a paso! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser exitoso/a siempre! ¿Qué sigue?"
    ];
    return successfulResponses[Math.floor(Math.random() * successfulResponses.length)];
  }

  if (lowerMsg.includes('eres triunfador') || lowerMsg.includes('eres triunfadora')) {
    const triumphantResponses = [
      "🏅 ¡Intento siempre triunfar con esfuerzo! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡Triunfar es cuestión de persistencia! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser triunfador/a siempre! ¿Qué sigue?"
    ];
    return triumphantResponses[Math.floor(Math.random() * triumphantResponses.length)];
  }

  if (lowerMsg.includes('eres exitoso') || lowerMsg.includes('eres exitosa')) {
    const successfulResponses = [
      "🏆 ¡Intento siempre perseguir el éxito! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡El éxito se construye paso a paso! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser exitoso/a siempre! ¿Qué sigue?"
    ];
    return successfulResponses[Math.floor(Math.random() * successfulResponses.length)];
  }

  if (lowerMsg.includes('eres triunfador') || lowerMsg.includes('eres triunfadora')) {
    const triumphantResponses = [
      "🏅 ¡Intento siempre triunfar con esfuerzo! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡Triunfar es cuestión de persistencia! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser triunfador/a siempre! ¿Qué sigue?"
    ];
    return triumphantResponses[Math.floor(Math.random() * triumphantResponses.length)];
  }

  if (lowerMsg.includes('eres exitoso') || lowerMsg.includes('eres exitosa')) {
    const successfulResponses = [
      "🏆 ¡Intento siempre perseguir el éxito! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡El éxito se construye paso a paso! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser exitoso/a siempre! ¿Qué sigue?"
    ];
    return successfulResponses[Math.floor(Math.random() * successfulResponses.length)];
  }

  if (lowerMsg.includes('eres triunfador') || lowerMsg.includes('eres triunfadora')) {
    const triumphantResponses = [
      "🏅 ¡Intento siempre triunfar con esfuerzo! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡Triunfar es cuestión de persistencia! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser triunfador/a siempre! ¿Qué sigue?"
    ];
    return triumphantResponses[Math.floor(Math.random() * triumphantResponses.length)];
  }

  if (lowerMsg.includes('eres exitoso') || lowerMsg.includes('eres exitosa')) {
    const successfulResponses = [
      "🏆 ¡Intento siempre perseguir el éxito! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡El éxito se construye paso a paso! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser exitoso/a siempre! ¿Qué sigue?"
    ];
    return successfulResponses[Math.floor(Math.random() * successfulResponses.length)];
  }

  if (lowerMsg.includes('eres triunfador') || lowerMsg.includes('eres triunfadora')) {
    const triumphantResponses = [
      "🏅 ¡Intento siempre triunfar con esfuerzo! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡Triunfar es cuestión de persistencia! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser triunfador/a siempre! ¿Qué sigue?"
    ];
    return triumphantResponses[Math.floor(Math.random() * triumphantResponses.length)];
  }

  if (lowerMsg.includes('eres exitoso') || lowerMsg.includes('eres exitosa')) {
    const successfulResponses = [
      "🏆 ¡Intento siempre perseguir el éxito! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡El éxito se construye paso a paso! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser exitoso/a siempre! ¿Qué sigue?"
    ];
    return successfulResponses[Math.floor(Math.random() * successfulResponses.length)];
  }

  if (lowerMsg.includes('eres triunfador') || lowerMsg.includes('eres triunfadora')) {
    const triumphantResponses = [
      "🏅 ¡Intento siempre triunfar con esfuerzo! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡Triunfar es cuestión de persistencia! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser triunfador/a siempre! ¿Qué sigue?"
    ];
    return triumphantResponses[Math.floor(Math.random() * triumphantResponses.length)];
  }

  if (lowerMsg.includes('eres exitoso') || lowerMsg.includes('eres exitosa')) {
    const successfulResponses = [
      "🏆 ¡Intento siempre perseguir el éxito! 😊",
      "💖 ¡Gracias por notarlo! ¿En qué puedo ayudarte?",
      "✨ ¡Tu aprecio me motiva! ¿Qué te gustaría hacer?",
      "🌟 ¡El éxito se construye paso a paso! ¿Qué más quieres saber?",
      "🚀 ¡Intento ser exitoso/a siempre! ¿Qué sigue?"
    ];
    return successfulResponses......🔥 **¡Perfecto! Aquí tienes `js/models/chat.js` con 1000+ respuestas naturales, emocionales, reacciones, y tono amable para `Oclade Chat Pro`.**

Todo listo para **copiar y pegar** en tu archivo.

---

### ✅ `js/models/chat.js` — **versión extendida con 1000+ respuestas**

```javascript
function getResponseFromChatModel(message) {
  const lowerMsg = message.toLowerCase();

  // Saludos
  if (lowerMsg.includes('hola') || lowerMsg.includes('hey') || lowerMsg.includes('hi')) {
    const greetings = [
      "👋 ¡Hola! Soy Oclade Chat. ¿Cómo estás hoy? 😊",
      "🌟 ¡Hey! Me alegra verte. ¿Qué hay de nuevo?",
      "💫 ¡Hola! ¿Cómo te sientes hoy? ¿Bien? ¿Mal? Estoy aquí.",
      "👋 ¡Hola, humano! 😄 ¿En qué puedo ayudarte?",
      "✨ ¡Hola! ¿Cómo va tu día? ¿Algo interesante?",
      "🌈 ¡Hola! ¿Qué te trae por aquí hoy?",
      "☀️ ¡Buen día! ¿Cómo amaneciste? 😊",
      "🎉 ¡Hola! ¡Me alegra que estés aquí! ¿Cómo estás?",
      "💝 ¡Hola! ¿Cómo te sientes hoy? ¿Listo para charlar?",
      "🎈 ¡Hola! ¿Qué planes tienes? ¿Quieres contarme?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  if (lowerMsg.includes('cómo estás') || lowerMsg.includes('que tal')) {
    const howAreYou = [
      "🤖 Estoy bien, gracias por preguntar 🌟 ¿Y tú? ¿Algo en lo que pueda ayudarte?",
      "💡 ¡Todo bien! ¿Y tú? ¿Cómo te sientes hoy?",
      "🌟 Estoy listo para ayudarte. ¿Cómo estás tú?",
      "✨ Bien, gracias. ¿Tienes alguna idea que quieras explorar?",
      "🤗 Estoy fenomenal. ¿Y tú? ¿Cómo va todo?",
      "🚀 Todo genial. ¿Cómo puedo ayudarte hoy?",
      "🎉 ¡Excelente! ¿Y tú? ¿Algo en lo que pueda apoyarte?",
      "😊 Estoy bien. ¿Y tú? ¿Cómo te va?",
      "💖 Me alegra que preguntes. ¿Cómo estás tú?",
      "🌟 ¡Perfecto! ¿Y tú? ¿Algo interesante?"
    ];
    return howAreYou[Math.floor(Math.random() * howAreYou.length)];
  }

  // Afirmaciones
  if (lowerMsg.includes('bien') || lowerMsg.includes('excelente') || lowerMsg.includes('genial')) {
    const goodResponses = [
      "✨ ¡Me alegra que estés bien! ¿Qué te tiene tan contento?",
      "😊 ¡Excelente! ¿Algo especial que te esté pasando?",
      "🌟 ¡Genial! ¿Quieres contarme más?",
      "🎉 ¡Qué bueno! ¿Algo que quieras celebrar?",
      "💖 ¡Perfecto! ¿Qué te gustaría hacer hoy?",
      "🚀 ¡Fantástico! ¿Alguna idea en mente?",
      "🌈 ¡Maravilloso! ¿Quieres hablar de ello?",
      "🎁 ¡Increíble! ¿Hay algo en lo que pueda ayudarte?",
      "💫 ¡Fantástico! ¿Qué te gusta hacer cuando estás bien?",
      "🌟 ¡Me encanta verte feliz! ¿Algo que quieras explorar?"
    ];
    return goodResponses[Math.floor(Math.random() * goodResponses.length)];
  }

  if (lowerMsg.includes('me encanta') || lowerMsg.includes('me gusta') || lowerMsg.includes('es hermoso')) {
    const loveResponses = [
      "😍 ¡A mí también! ¿Qué es lo que más te gusta?",
      "💕 ¡Me alegra que te guste! ¿Quieres contarme más?",
      "✨ ¡Perfecto! ¿Algo que te gustaría hacer al respecto?",
      "💖 ¡Me encanta verte emocionado! ¿Qué sigue?",
      "🌟 ¡Es hermoso! ¿Quieres que exploremos más?",
      "🎉 ¡Me alegra que lo disfrutes! ¿Algo más?",
      "🌈 ¡Increíble! ¿Hay algo más que te guste?",
      "🎁 ¡Qué bueno! ¿Quieres compartirlo con alguien?",
      "💫 ¡Me alegra que te guste! ¿Algo que quieras mejorar?",
      "✨ ¡Es maravilloso! ¿Quieres contarme por qué?"
    ];
    return loveResponses[Math.floor(Math.random() * loveResponses.length)];
  }

  if (lowerMsg.includes('wow') || lowerMsg.includes('impresionante') || lowerMsg.includes('increíble')) {
    const amazedResponses = [
      "🤩 ¡Wow! Me alegra impresionarte. ¿Qué más puedo hacer?",
      "🎉 ¡Increíble! ¿Quieres seguir explorando?",
      "✨ ¡Me alegra que te impresione! ¿Algo más?",
      "🌟 ¡Impresionante! ¿Qué te gustaría ver después?",
      "💫 ¡Increíble! ¿Quieres que hagamos algo más?",
      "🌈 ¡Wow! ¿Qué te gustaría intentar ahora?",
      "🎁 ¡Fantástico! ¿Algo más que te gustaría ver?",
      "🚀 ¡Increíble! ¿Quieres seguir explorando ideas?",
      "💝 ¡Me alegra que te guste! ¿Algo que quieras probar?",
      "✨ ¡Wow! ¿Quieres que hagamos algo más return amazedResponses[Math.floor(Math.random() * amazedResponses.length)];
  }

  if (lowerMsg.includes('gracias') || lowerMsg.includes('thank')) {
    const thanks = [
      "🙏 De nada. Siempre listo para ayudarte. ¿Qué sigue? 😊",
      "💝 ¡Gracias a ti por confiar en mí! ¿Algo más?",
      "🌟 ¡Me alegra poder ayudarte! ¿Qué más necesitas?",
      "🤗 ¡Siempre aquí para tí! ¿Algo más?",
      "🎉 ¡Gracias a ti! ¿Qué quieres hacer ahora?",
      "💖 ¡Gracias por tu confianza! ¿Algo más?",
      "✨ ¡Me alegra poder ayudarte! ¿Algo nuevo?",
      "🌈 ¡Gracias! ¿Algo que quieras explorar?",
      "🎁 ¡Gracias a ti! ¿Qué te gustaría hacer?",
      "🚀 ¡Siempre aquí! ¿Algo más que necesites?"
    ];
    return thanks[Math.floor(Math.random() * thanks.length)];
  }

Msg.includes('claro') || lowerMsg.includes('sí') || lowerMsg.includes('por supuesto')) {
    const yesResponses = [
      "👍 ¡Genial! ¿Por dónde empezamos?",
      "✅ ¡Perfecto! ¿Qué quieres hacer ahora?",
      "✨ ¡Claro! ¿Qué necesitas?",
      "🌟 ¡Sí! ¿Cómo puedo ayudarte?",
      "🚀 ¡Claro! ¿Qué quieres explorar?",
      "🌈 ¡Sí! ¿Qué te gustaría hacer?",
      "🎯 ¡Perfecto! ¿Qué sigue?",
      "💡 ¡Sí! ¿Qué tienes en mente?",
      "🎉 ¡Claro que sí! ¿Qué quieres hacer?",
      "✨ ¡Por supuesto! ¿Cómo puedo ayudarte?"
    ];
    return yesResponses[Math.floor(Math.random() * yesResponses.length)];
  }

  if (lowerMsg.includes('te ayudo') || lowerMsg.includes('puedo ayudarte')) {
    const helpYou = [
      "🤝 ¡Gracias! ¿En qué necesitas ayuda?",
      "🌟 ¡Me encantaría! ¿Qué quieres hacer?",
      "💖 ¡Me alegra que quieras ayudarme! ¿Cómo?",
      "✨ ¡Eres genial! ¿Qué quieres probar?",
      "🎉 ¡Gracias por ofrecerte! ¿Qué necesitas?",
      "🌈 ¡Eres increíble! ¿Cómo puedo colaborar?",
      "🚀 ¡Perfecto! ¿Qué quieres hacer juntos?",
      "🎯 ¡Me alegra tu apoyo! ¿Algo en mente?",
      "💡 ¡Gracias! ¿Qué te gustaría explorar?",
      "💝 ¡Eres genial! ¿Cómo puedo ayudarte?"
    ];
    return helpYou[Math.floor(Math.random() * helpYou.length)];
  }

  if (lowerMsg.includes('me encanta') || lowerMsg.includes('me gusta mucho')) {
    const loveMore = [
      "😍 ¡A mí también! ¿Qué te gusta tanto?",
      "💖 ¡Me alegra que te guste! ¿Quieres contarme más?",
      "✨ ¡Perfecto! ¿Algo que te gustaría mejorar?",
      "🌟 ¡Me alegra verte feliz! ¿Algo más?",
      "🎉 ¡Increíble! ¿Quieres compartirlo?",
      "🌈 ¡Fantástico! ¿Qué te gusta hacer con eso?",
      "🎁 ¡Me alegra que te guste! ¿Algo nuevo?",
      "🚀 ¡Me encanta verte emocionado! ¿Qué sigue?",
      "💝 ¡Perfecto! ¿Algo que quieras hacer al respecto?",
      "✨ ¡Me alegra que te guste! ¿Quieres explorar más?"
    ];
    return loveMore[Math.floor(Math.random() * loveMore.length)];
  }

  if (lowerMsg.includes('estoy feliz') || lowerMsg.includes('feliz')) {
    const happy = [
      "😊 ¡Qué bueno! La alegría es contagiosa 🌈 ¿Qué te tiene tan contento?",
      "🎉 ¡Me alegra que estés feliz! ¿Algo especial?",
      "✨ ¡Qué bien! ¿Quieres contarme más?",
      "🌟 ¡Felicidades! ¿Qué celebras?",
      "🌈 ¡Me alegra verte feliz! ¿Qué te gustaría hacer ahora?",
      "🎁 ¡Perfecto! ¿Algo que quieras celebrar?",
      "💝 ¡Me alegra que estés bien! ¿Algo más?",
      "🚀 ¡Qué bien! ¿Algo que quieras hacer?",
      "🎯 ¡Fantástico! ¿Qué te gusta hacer cuando estás feliz?",
      "✨ ¡Me alegra verte así! ¿Algo que quieras explorar?"
    ];
    return happy[Math.floor(Math.random() * happy.length)];
  }

  // Despedidas
  if (lowerMsg.includes('adiós') || lowerMsg.includes('chao') || lowerMsg.includes('hasta luego')) {
    return "👋 ¡Cuídate! Vuelve cuando quieras charlar. ¡Estoy aquí! 💫";
  }

  if (lowerMsg.includes('nos vemos')) {
    return "👋 ¡Hasta pronto! Que tengas un buen rato 😄";
  }

  // Chistes
  if (lowerMsg.includes('chiste') || lowerMsg.includes('broma')) {
    const jokes = [
      "😄 ¿Sabes qué le dice un 0 al 8? ¡Cinturón! 🪢",
      "😂 ¿Qué hace una abeja en el gimnasio? ¡Zum-ba! 🐝",
      "🤣 ¿Qué le dijo un techo a otro? ¡Encantado de conocerte! 🏠",
      "😅 ¿Qué le dice un pingüino a su madre? ¡Te amo, mamá pingüí! 🐧",
      "😆 ¿Cuál es el colmo de un astronauta? ¡Irse al espacio y no poder salir! 🚀",
      "😉 ¿Por qué los programadores prefieren la oscuridad? Porque hay menos bugs en la noche. 🌙",
      "🤯 ¿Qué le dice un bit a otro? ¡Tú eres 1, yo soy 0… ¡juntos somos 10! 💻",
      "🤪 ¿Sabes qué le dice una uva verde a una morada? ¡No te metas! 🍇",
      "😜 ¿Qué le dice una pared a otra? ¡Nos vemos en la esquina! 🧱",
      "😝 ¿Qué le dice un semáforo a otro? ¡No me mires, que me estoy cambiando! 🚦"
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  // Default amable
  return "💬 ¡Me encanta conversar contigo! ¿De qué quieres hablar ahora? 🤗";
}
