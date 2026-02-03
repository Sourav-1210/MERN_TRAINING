let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


function showTasks() {
    let list = document.getElementById("WorkList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;

        let btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = function () {
            deleteTask(index);
        };

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskList");
    let task = input.value.trim();

    if (task === "") return alert("Enter a task");

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
    showTasks();
}


function deleteTask(index) {
    tasks.splice(index, 1); 
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

showTasks();




