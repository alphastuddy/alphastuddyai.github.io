function sendMessage() {
  const input = document.getElementById('userInput').value;
  const chat = document.getElementById('chat');

  if(input.trim() === "") return;

  // Mostrar mensaje del usuario
  const userMsg = document.createElement('div');
  userMsg.textContent = "Tú: " + input;
  userMsg.style.fontWeight = "bold";
  chat.appendChild(userMsg);

  // Limpiar input
  document.getElementById('userInput').value = "";

  // Simular respuesta de IA
  const botMsg = document.createElement('div');
  botMsg.textContent = "IA está escribiendo...";
  botMsg.style.fontStyle = "italic";
  chat.appendChild(botMsg);

  // Simular “pensando” antes de responder
  setTimeout(() => {
    botMsg.textContent = "IA: " + getResponse(input);
    chat.scrollTop = chat.scrollHeight; // Auto-scrollea abajo
  }, 1000);
}

// Función que genera respuestas simples
function getResponse(input) {
  input = input.toLowerCase();
  if(input.includes("hola")) return "¡Hola! ¿Cómo estás?";
  if(input.includes("adiós")) return "¡Adiós! ¡Que tengas un buen día!";
  if(input.includes("cómo estás")) return "Estoy bien, gracias por preguntar 😊";
  return "Lo siento, no entendí eso. 🤖";
}
