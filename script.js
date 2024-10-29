// Abrir/cerrar chat
function toggleChat() {
    const chatPopup = document.getElementById('chatPopup');
    chatPopup.style.display = chatPopup.style.display === 'none' ? 'block' : 'none';
}

// Enviar mensaje del usuario y respuesta del bot
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');

    if (userInput.value.trim() !== '') {
        // Mostrar mensaje del usuario
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = userInput.value;
        chatBody.appendChild(userMessage);

        // Limpiar campo de entrada
        userInput.value = '';

        // Desplazar hacia abajo
        chatBody.scrollTop = chatBody.scrollHeight;

        // Simular respuesta del bot (puedes reemplazar con la API más adelante)
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot';
            botMessage.textContent = 'Estoy aquí para ayudarte 😊';
            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}
