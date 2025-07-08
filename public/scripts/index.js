async function checkToken() {
  const response = await fetch("/token/check");

  const headLocation = response.headers.get("Location");

  if (!headLocation) {
    location.href = "/dashboard";
    return;
  }
}

await checkToken();

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method.toUpperCase(),
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const headLocation = response.headers.get("Location");

    if (headLocation) {
      const cookie = `token=${data.token}; path=/`;
      document.cookie = cookie;
      location.href = headLocation;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
});
