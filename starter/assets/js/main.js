const toDoTask = document.getElementById("to-do-tasks");
const inProgress = document.getElementById("in-progress-tasks ");
const doneTask = document.getElementById("done-tasks");
let ToDo = 0;
afficherData();

let btnSave = document.getElementById("savebutton");

function afficherData() {
    var counter = 0;
    toDoTask.innerHTML = "";
    inProgress.innerHTML = "";
    doneTask.innerHTML = "";
    tasks.forEach((task) => {
        if (task.status === "To Do") {
            toDoTask.innerHTML += `<button class="bg-white w-100 border-0 border-top d-flex py-2 ">
            <div class="px-2 ">
                <i class="bi bi-question-circle text-success fs-3"></i> 
            </div>
            <div class="text-start ">
                <div class="h6">${task.title}</div>
                <div class="text-start ">
                    <div class="text-gray ">#${task.id} ${task.date}</div>
                    <div title="${task.description} "class=" text-truncate" style="max-width: 16rem;"> ${task.description}</div>
                </div>
                <div class="">
                    <span class="btn btn-primary ">${task.priority}</span>
                    <span class="btn btn-light text-black ">Feature</span>
                    <span class="btn btn-purple bi bi-pencil-square text-black" data-bs-toggle="modal" data-bs-target="#modal" onclick="editeTask(${task.id})">edit</span>
                    <span class="btn btn-red bi bi-trash3 text-black" onclick="deleteTask(${task.id})">delete</span>
                    
                </div>
            </div>
        </button>`;
            counter++;
            ToDo++;
        } else if (task.status === "In Progress") {
            inProgress.innerHTML += `<button class="bg-white w-100 border-0 border-top d-flex py-2 ">
            <div class="px-2 ">
                <i class="bi bi-calendar-check text-gray fs-3 "></i> 
            </div>
            <div class="text-start ">
                <div class="h6 ">${task.title}</div>
                <div class="text-start ">
                    <div class="text-gray ">#${task.id} ${task.date}</div>
                    <div title="${task.description}"class=" text-truncate" style="max-width: 16rem;"> ${task.description}</div>
                </div>
                <div class=" ">
                    <span class="btn btn-primary ">${task.priority}</span>
                    <span class="btn btn-light text-black ">Feature</span>
                    <span class="btn btn-purple bi bi-pencil-square text-black " data-bs-toggle="modal" data-bs-target="#modal" onclick="editeTask(${task.id})">edit</span>
                    <span class="btn btn-red bi bi-trash3 text-black" onclick="deleteTask(${task.id})">delete</span>
                    
                </div>
            </div>
        </button>`;
            counter++;
        } else if (task.status === "Done") {
            doneTask.innerHTML += `<button class="bg-white w-100 border-0 border-top d-flex py-2 ">
            <div class="px-2 ">
                <i class="bi bi-check-circle-fill text-success fs-3 "></i> 
            </div>
            <div class="text-start ">
                <div class="h6 ">${task.title}</div>
                <div class="text-start ">
                    <div class="text-gray ">#${task.id} ${task.date}</div>
                    <div title="${task.description}"class=" text-truncate" style="max-width: 16rem;">${task.description}</div>
                </div>
                <div class=" ">
                    <span class="btn btn-primary ">${task.priority}</span>
                    <span class="btn btn-light text-black ">Feature</span>
                    <span class="btn btn-purple bi bi-pencil-square text-black" data-bs-toggle="modal" data-bs-target="#modal" onclick="editeTask(${task.id})">edit</span>
                    <span class="btn btn-red bi bi-trash3 text-black" onclick="deleteTask(${task.id})">delete</span>
                    
                </div>
            </div>
        </button>`;
            counter++;
        }
    });
}

var form = document.forms["task"];

function addTask() {
    let id = tasks[tasks.length - 1].id + 1;
    console.log(id);
    let task = {
        id: id,
        title: form.title.value,
        type: form.type.value,
        priority: form.selectper.value,
        status: form.selectsta.value,
        date: form.date.value,
        description: form.descrip.value,
    };
    tasks.push(task);

    // console.log(tasks);
    afficherData();
    $("#modal").modal("hide");
}

function deleteTask(id) {
    console.log(id);

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks.splice(i, 1);
        }
    }

    // console.log(counter);

    // tasks.splice(counter, 1);

    console.log(tasks);

    afficherData();
}

let idTask;

function editeTask(id) {
    idTask = id;

    btnSave.innerHTML = "Update";
    btnSave.setAttribute("onclick", "updateTask()");

    tasks.forEach((task) => {
        if (task.id == id) {
            form.title.value = task.title;
            form.type.value = task.type;
            form.priority.value = task.priority;
            form.status.value = task.status;
            form.date.value = task.date;
            form.description.value = task.description;
        }
    });
}

function updateTask() {
    tasks.forEach((task) => {
        if (task.id == idTask) {
            task.title = form.title.value;
            task.type = form.type.value;
            task.priority = form.priority.value;
            task.status = form.status.value;
            task.date = form.date.value;
            task.description = form.description.value;
        }
    });
    afficherData();
    $("#modal").modal("hide");
}
function videinput() {
    document.getElementById("modal").reset();
    // document.forms["modalo"].reset();
}
