function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  const userMessage = input.value.trim();

  if (userMessage === '') return;

  const userDiv = document.createElement('div');
  userDiv.textContent = "You: " + userMessage;
  chatBox.appendChild(userDiv);

  const botDiv = document.createElement('div');
  botDiv.textContent = "Bot: " + getBotResponse(userMessage);
  chatBox.appendChild(botDiv);

  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes('hello')) return "Hi there! How can I help you today?";
    if (input.includes('resume')) return "You can view Juliana’s resume in the Resume section!";
    if (input.includes('contact')) return "You can reach Juliana via her email at Juliana19@gmail.com.";
    
    return "I'm not sure about that yet. Try asking about her skills, GPA, projects, or experience!";
}


