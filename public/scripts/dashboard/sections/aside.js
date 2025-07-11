const data = [
  {
    section: "Inicio",
    children: [
      {
        label: "Nueva Encuesta",
        icon: "add_circle",
        id: "new-ques",
      },
      {
        label: "Encuestas",
        icon: "forum",
        id: "ques",
      },
    ],
  },
  {
    section: "Datos",
    children: [
      {
        label: "Base de datos",
        icon: "database",
        id: "database",
      },
      {
        label: "Papelera",
        icon: "delete",
        id: "trash",
      },
    ],
  },
  {
    section: "Configuración",
    children: [
      {
        label: "Cuenta",
        icon: "account_circle",
        id: "account",
      },
    ],
  },
];

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
            <button id=${child.id}>
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
