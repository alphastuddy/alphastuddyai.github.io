const chatDiv = document.getElementById('chat');

function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (!message) return;

  appendMessage('user', message);
  input.value = '';

  const response = getAIResponse(message);
  appendMessage('bot', response);
}

function appendMessage(sender, text) {
  const p = document.createElement('p');
  p.className = sender;
  p.textContent = (sender === 'user' ? "Tú: " : "Alphastuddy AI: ") + text;
  chatDiv.appendChild(p);
  chatDiv.scrollTop = chatDiv.scrollHeight;
}

function getAIResponse(message) {
  // Mensajes educativos básicos
  message = message.toLowerCase();

  // Matemáticas
  if (message.includes("sumar") || message.includes("suma") || message.includes("+")) {
    return "Para sumar, simplemente sumas los números que tengas. Por ejemplo, 2 + 3 = 5.";
  }
  if (message.includes("resta") || message.includes("-")) {
    return "Para restar, quita el segundo número del primero. Por ejemplo, 5 - 2 = 3.";
  }
  
  // Historia
  if (message.includes("historia") || message.includes("guerra") || message.includes("revolución")) {
    return "La historia estudia hechos y eventos del pasado. ¿Quieres que te cuente sobre algún periodo específico?";
  }

  // Ciencias
  if (message.includes("ciencia") || message.includes("biología") || message.includes("química")) {
    return "La ciencia estudia la naturaleza y sus fenómenos. Por ejemplo, la biología estudia los seres vivos.";
  }

  // Inglés básico
  if (message.includes("inglés") || message.includes("translate") || message.includes("traduce")) {
    return "Puedo ayudarte a traducir palabras o frases simples del inglés al español.";
  }

  // Pregunta general
  return "¡Buena pregunta! Intenta darme más detalles sobre tu duda de colegio o instituto para ayudarte mejor.";
}
