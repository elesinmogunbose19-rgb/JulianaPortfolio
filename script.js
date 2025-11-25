document.addEventListener("DOMContentLoaded", () => {

  const portfolioURL = "https://elesinmogunbose19-rgb.github.io/JulianaPortfolio/";

  const qrcodeEl = document.getElementById("qrcode");

  if (qrcodeEl && typeof QRCode !== "undefined") {
    new QRCode(qrcodeEl, {
      text: portfolioURL,
      width: 140,
      height: 140,
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  const chatToggle = document.getElementById("chat-toggle");
  const chatWidget = document.getElementById("chat-widget");
  const chatClose = document.getElementById("chat-close");
  const chatSend = document.getElementById("chat-send");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");

  function appendMessage(text, who = "bot") {
    const div = document.createElement("div");
    div.className = who === "bot" ? "bot" : "user";
    div.innerHTML = `<strong>${who === "bot" ? "Bot" : "You"}:</strong> ${text}`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function botReply(text) {
    text = text.toLowerCase();

    if (text.includes("who") && text.includes("juliana"))
      return "Juliana Elesinmogun is an aspiring IT and cybersecurity professional studying Computer Technology at Bowie State University, with AWS cloud security experience.";

    if (text.includes("gpa"))
      return "Juliana has a 3.4 GPA at Bowie State and 3.2 GPA from PGCC.";

    if (text.includes("skills"))
      return "Juliana's skills include Python, Java, HTML, CSS, networking, AWS cloud security, Tenable.io, MS Office, and customer service.";

    if (text.includes("project"))
      return "Juliana's projects include her portfolio website, Wind Speed Program, and Catering Company Database.";

    if (text.includes("resume"))
      return "You can view or download Juliana’s resume in the Resume section.";

    if (text.includes("email") || text.includes("contact"))
      return "Email Juliana at: Elesinmogunbose19@gmail.com";

    return "I'm not sure about that yet—try asking about her skills, GPA, projects, or experience!";
  }

  chatToggle.addEventListener("click", () => {
    chatWidget.classList.toggle("hidden");
    chatInput.focus();
  });

  chatClose.addEventListener("click", () => chatWidget.classList.add("hidden"));

  chatSend.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (!text) return;
    appendMessage(text, "user");
    chatInput.value = "";
    setTimeout(() => appendMessage(botReply(text)), 200);
  });

  chatInput.addEventListener("keypress", e => {
    if (e.key === "Enter") chatSend.click();
  });

});
