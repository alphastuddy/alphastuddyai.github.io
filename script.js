async function sendMessage() {
  const input = document.getElementById("userInput").value;
  const chat = document.getElementById("chat");

  // Mostrar mensaje del usuario
  const userMessage = document.createElement("div");
  userMessage.textContent = "Tú: " + input;
  chat.appendChild(userMessage);

  // Limpiar input
  document.getElementById("userInput").value = "";

  // Llamar al modelo de Hugging Face
  try {
    const response = await fetch("https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: input })
    });

    const data = await response.json();
    const botMessage = document.createElement("div");

    if(data && data[0]?.generated_text) {
      botMessage.textContent = "IA: " + data[0].generated_text;
    } else {
      botMessage.textContent = "IA: Lo siento, no entendí eso.";
    }

    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  } catch (error) {
    console.error(error);
    const botMessage = document.createElement("div");
    botMessage.textContent = "IA: Ha ocurrido un error. Intenta de nuevo.";
    chat.appendChild(botMessage);
  }
}

