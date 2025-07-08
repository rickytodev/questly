const body = document.querySelector("body");

body.style.display = "none";

async function checkToken() {
  const response = await fetch("/token/check");

  const headLocation = response.headers.get("Location");

  console.log(response.status);

  if (headLocation) {
    location.href = headLocation;
    return;
  }

  body.style.display = "block";
}

await checkToken();
