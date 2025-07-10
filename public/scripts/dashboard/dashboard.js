import Aside from "./sections/aside.js";

const body = document.querySelector("body");

Aside();

const accountEmail = document.getElementById("account-email");
const accountName = document.getElementById("account-name");

accountEmail.textContent = localStorage.getItem("email") || "No email found";
accountName.textContent = localStorage.getItem("name") || "No name found";

function changeView(view) {
  location.hash = view;
}

async function checkToken() {
  const response = await fetch("/token/check");

  const headLocation = response.headers.get("Location");

  if (headLocation) {
    location.href = headLocation;
    return;
  }

  body.style.display = "flex";
}

if (location.hash === "") changeView("ques");

await checkToken();

const asideListContainer = document.querySelector(".aside-list");
const allButtons = asideListContainer.querySelectorAll("button");

function setActivate(button) {
  if (button.id === location.hash.slice(1)) button.classList.add("activate");
  else button.classList.remove("activate");
}

function updateButtonStyles() {
  allButtons.forEach((button) => {
    button.classList.remove("activate");
    setActivate(button);
  });
}

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    changeView(button.id);
    updateButtonStyles();
  });
});

updateButtonStyles();

window.addEventListener("hashchange", () => {
  // console.log(location.hash);
});
