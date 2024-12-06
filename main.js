function sendMessage(role) {
  const messages = document.getElementById("messages");
  const input = document.getElementById("messageInput");
  const text = input.value.trim();

  if (!text) return;

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");

  const message = document.createElement("div");
  message.classList.add("message", role);
  message.textContent = text;

  const timestamp = document.createElement("div");
  timestamp.classList.add("timestamp");
  timestamp.textContent = getTimeStamp();

  if (role === "receiver") {
    timestamp.style.textAlign = "left";
  } else {
    timestamp.style.textAlign = "right";
  }

  messageContainer.appendChild(message);
  messageContainer.appendChild(timestamp);

  messages.appendChild(messageContainer);
  input.value = "";

  messages.scrollTop = messages.scrollHeight;
}

function getTimeStamp() {
  const options = {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const now = new Date().toLocaleTimeString("en-US", options);
  return `${now}`;
}

function newChat() {
  const newReceiverName = document
    .getElementById("newReceiverName")
    .value.trim();

  if (!newReceiverName) {
    return;
  }

  document.getElementById("receiverName").textContent = newReceiverName;
  document.getElementById("profilePic").textContent = newReceiverName
    .charAt(0)
    .toUpperCase();
  document.getElementById("messages").innerHTML = "";

  document.getElementById("newReceiverName").value = "";

  document.getElementById("messageInput").value = "";
}
