const tasks = [];
const toDo = document.getElementById("toDoInput");
document.getElementById('todo').addEventListener('submit',addTask)
let listClass = document.getElementsByClassName('listTasks')[0]

function addTask (e) {
    e.preventDefault()
    let task = toDo.value;
    if (task){
        tasks.push(task);
        let div = document.createElement("div");
        div.classList.add("newTasks");
        let btn = document.createElement("button");
        let icon = document.createElement("i");
        icon.className = "fa-solid fa-x";
        btn.classList.add("tasksButton")
        btn.appendChild(icon);
        let inpt = document.createElement("input");
        let label = document.createElement("label");
        label.textContent =task
        label.htmlFor = "inpt"
        inpt.type = "checkbox";
        div.appendChild(btn);
        div.appendChild(label);
        div.appendChild(inpt);
        listClass.appendChild(div);
    }
}