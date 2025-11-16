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

// Base de respuestas educativas
const knowledgeBase = [
  { keywords: ["suma", "+", "sumar"], answer: "Para sumar, simplemente sumas los números. Ej: 2 + 3 = 5." },
  { keywords: ["resta", "-", "restar"], answer: "Para restar, quita el segundo número del primero. Ej: 5 - 2 = 3." },
  { keywords: ["historia", "guerra", "revolución"], answer: "La historia estudia hechos del pasado. ¿Sobre qué periodo quieres saber?" },
  { keywords: ["ciencia", "biología", "química"], answer: "La ciencia estudia la naturaleza. La biología estudia los seres vivos y la química las sustancias." },
  { keywords: ["inglés", "translate", "traduce"], answer: "Puedo ayudarte a traducir palabras o frases simples del inglés al español." }
];

function getAIResponse(message) {
  const text = message.toLowerCase();

  for (const item of knowledgeBase) {
    if (item.keywords.some(k => text.includes(k))) {
      return item.answer;
    }
  }

  // Si no encuentra coincidencia, devuelve respuesta educativa general
  return "¡Buena pregunta! Trata de ser más específico sobre tu duda de colegio o instituto para ayudarte mejor.";
}
