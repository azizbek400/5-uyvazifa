const box = document.querySelector(".box");
const form = document.querySelector(".form");
const input = document.querySelector(".input");

let data = [];

const render = () => {
    const item = data.map((item) => {
        return `
        <div>
            <h1>${item.name}</h1>
            <button onclick="deleteItem(${item.id})">delete</button>
            <button onclick="editItem(${item.id})">edit</button>
        </div>
        `;
    })
    box.innerHTML = item.join("")

}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    data.push({ name: input.value, id: Date.now() });
    input.value = "";

    render()
});

const deleteItem = (id) => {
    console.log(id);

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            data.splice(i, 1)
        }
    }

    render();
};


const editItem = (id) => {
    const item = data.find((values) => values.id == id);
    let newTitle = prompt("", item.name);

    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            data[i].name = newTitle
        }
    }

    render();
};