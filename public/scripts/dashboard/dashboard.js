import Aside from "./aside.js";

const body = document.querySelector("body");

Aside();

const accountEmail = document.getElementById("account-email");

accountEmail.textContent = localStorage.getItem("email") || "No email found";

async function checkToken() {
  const response = await fetch("/token/check");

  const headLocation = response.headers.get("Location");

  if (headLocation) {
    location.href = headLocation;
    return;
  }

  body.style.display = "flex";
}

await checkToken();
