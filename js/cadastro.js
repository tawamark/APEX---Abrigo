const button = document.getElementById("add");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const table = document.querySelector("table");
const formButton = form.lastElementChild;

const tableType = table.id;

const storedTable = localStorage.getItem(tableType);

let HTML = "";

if (storedTable) {
    table.children.item(1).innerHTML = storedTable;
    HTML = storedTable;
} else localStorage.setItem(tableType, table.children.item(1).innerHTML)

button.addEventListener("click", () => {
    form.classList.toggle("hidden");
    table.classList.toggle("hidden");
    button.classList.add("hidden");
    inputs[0].focus();
});

formButton.addEventListener("click", () => {
    form.classList.toggle("hidden");
    table.classList.toggle("hidden");
    button.classList.remove("hidden");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    HTML += `<tr>`;

    inputs.forEach(e => {
        let value = e.value;

        if (e.name === "cpf") {
            value = formatCPF(value);
        }

        if (e.type === "date") {
            value = e.value
                ? e.valueAsDate.toLocaleDateString("pt-BR", { timeZone: "UTC" })
                : "-";
        }

        HTML += `<td>${value}</td>`;
        e.value = "";
    });

    HTML += `</tr>`;

    localStorage.setItem(tableType, HTML);

    const tableBody = table.children.item(1);
    tableBody.innerHTML = HTML;
});

function formatCPF(cpf) {
    //retira os caracteres indesejados...
    cpf = cpf.replace(/[^\d]/g, "");

    //realiza a formatação...
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}