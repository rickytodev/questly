import data from "../../databases/aside.data.js";

export default function Aside() {
  const container = document.querySelector(".aside-list");

  if (!container) return;

  let setHTML = "";

  data.map((element) => {
    const formatContainer = `
      <li class="list-item">
        ${element.section.toUpperCase()}
        <ol>
        ${element.children.map(
          (child) => `
          <li>
            <button id="${child.id}">
              <span class="material-symbols-rounded">
              ${child.icon}
              </span>
              ${child.label}
            </button>
          </li>
          `
        )}
        </ol>
      </li>
    `;

    setHTML += formatContainer;
  });

  container.innerHTML = setHTML.replaceAll(",", "");
}
