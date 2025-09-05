// ======= Responsive Navigation Toggle =======
const nav = document.querySelector("header nav ul");
const navToggle = document.createElement("button");
navToggle.textContent = "☰ Menu";
navToggle.style.background = "#0077cc";
navToggle.style.color = "#fff";
navToggle.style.padding = "0.5rem 1rem";
navToggle.style.border = "none";
navToggle.style.borderRadius = "6px";
navToggle.style.cursor = "pointer";
document.querySelector("header").insertBefore(navToggle, nav);

navToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// ======= Simple Form Validation =======
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    const inputs = form.querySelectorAll("input[required], select[required]");
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.style.border = "2px solid red";
        valid = false;
      } else {
        input.style.border = "1px solid #ccc";
      }
    });
    if (!valid) {
      e.preventDefault();
      alert("Please fill all required fields.");
    }
  });
});

// ======= Chatbot Toggle =======
const chatbot = document.getElementById("chatbot");
if (chatbot) {
  const chatbotBtn = document.createElement("button");
  chatbotBtn.textContent = "💬 Chat";
  chatbotBtn.style.position = "fixed";
  chatbotBtn.style.bottom = "20px";
  chatbotBtn.style.right = "20px";
  chatbotBtn.style.background = "#0077cc";
  chatbotBtn.style.color = "#fff";
  chatbotBtn.style.padding = "0.8rem 1rem";
  chatbotBtn.style.border = "none";
  chatbotBtn.style.borderRadius = "50px";
  chatbotBtn.style.cursor = "pointer";
  document.body.appendChild(chatbotBtn);

  chatbot.style.display = "none";
  chatbot.style.position = "fixed";
  chatbot.style.bottom = "70px";
  chatbot.style.right = "20px";
  chatbot.style.background = "#fff";
  chatbot.style.border = "1px solid #ccc";
  chatbot.style.padding = "1rem";
  chatbot.style.width = "300px";
  chatbot.style.borderRadius = "12px";
  chatbot.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";

  chatbotBtn.addEventListener("click", () => {
    chatbot.style.display = chatbot.style.display === "none" ? "block" : "none";
  });
}

