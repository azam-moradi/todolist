const listWrapper = document.getElementById("list-wrapper");
const taskInput = document.getElementById("task-input");
const statuses = document.querySelectorAll(".menu li a");
const container = document.getElementById("container")

const tasks = [
    {
        title: "Lorem Ipsum is simply dummy 1",
        status: "PENDING",
    },
    {
        title: "Lorem Ipsum is simply dummy 2",
        status: "COMPLETED",
    },
    {
        title: "Lorem Ipsum is simply dummy 3",
        status: "COMPLETED",
    },
    {
        title: "Lorem Ipsum is simply dummy 4",
        status: "COMPLETED",
    },
    {
        title: "Lorem Ipsum is simply dummy 5",
        status: "PENDING",
    },
];

function onClickTask(e) {
    e.target.classList.toggle("completed");
}

for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
    const title = tasks[i].title;
    const status = tasks[i].status;
    const newTask = document.createElement("li");
    newTask.classList.add("checkbox");
    if (status === "COMPLETED") newTask.classList.add("completed");

    // if (status === "COMPLETED"){
    // newTask.classList.add("completed");
    // }
    newTask.addEventListener("click", onClickTask)
    newTask.innerHTML = title;
    listWrapper.appendChild(newTask);
}

const allTasks = document.querySelectorAll(".checkbox");
const completedTasks = document.querySelectorAll(".checkbox.completed");
const pendingTasks = document.querySelectorAll(".checkbox:not(.completed)");


taskInput.addEventListener("keydown", function (e) {
    const allTasks = document.querySelectorAll(".checkbox");

    if (e.key === "Enter" && taskInput.value.trim().length > 3) {
        const newTask = document.createElement("li");
        newTask.classList.add("checkbox");
        newTask.innerHTML = taskInput.value.trim();
        taskInput.value = "";

        const container = document.getElementById("container");
        const containerClass = container.classList;
        console.log(containerClass);
        if (containerClass.value === "container dark-mode-container") {
            newTask.classList.add("dark-mode-text");
        } else {
            newTask.classList.remove("dark-mode-text");
            newTask.classList.add("light-text");
            console.log(newTask.classList);
        }

        newTask.addEventListener("click", onClickTask);
        // newTask.classList.add("dark-mode-text");
        listWrapper.appendChild(newTask);
    }
})


function onClickAllStatus(e) {
    const allTasks = document.querySelectorAll(".checkbox");
    const statuses = document.querySelectorAll(".menu li a");

    statuses.forEach(function (item) {
        item.classList.remove("selected-status");
    })
    allTasks.forEach(function (item) {
        item.classList.remove("hide");
        item.addEventListener("click", function () {
            item.classList.remove("hide")
        })
    })
    e.classList.add("selected-status");
}

function onClickPending(e) {
    const pendingTasks = document.querySelectorAll(".checkbox:not(.completed)");
    const completedTasks = document.querySelectorAll(".checkbox.completed");
    const allTasks = document.querySelectorAll(".checkbox");

    statuses.forEach(function (item) {
        item.classList.remove("selected-status");
    })
    completedTasks.forEach(function (item) {
        console.log(item);
        item.classList.add("hide");
    })
    pendingTasks.forEach(function (item) {
        item.classList.remove("hide");
    })
    allTasks.forEach(function (item) {
        item.addEventListener("click", function () {
            if (item.classList.contains("hide")) {
                item.classList.remove("hide")
            } item.classList.add("hide");
        });
    })
    e.classList.add("selected-status");
}

function onClickCompleted(e) {
    const completedTasks = document.querySelectorAll(".checkbox.completed");
    const pendingTasks = document.querySelectorAll(".checkbox:not(.completed)");
    const allTasks = document.querySelectorAll(".checkbox");

    pendingTasks.forEach(function (item) {
        item.classList.add("hide");
    })
    completedTasks.forEach(function (item) {
        item.classList.remove("hide");
    })
    statuses.forEach(function (item) {
        item.classList.remove("selected-status");
    })
    allTasks.forEach(function (item) {
        item.addEventListener("click", function () {
            if (item.classList.contains("hide")) {
                item.classList.remove("hide")
            } item.classList.add("hide");
        })
    })

    e.classList.add("selected-status");
}

function onClickClearAll() {
    const allTasks = document.querySelectorAll("li.checkbox");

    allTasks.forEach(function (item) {
        item.classList.add("hide2");
    })
}

function onClickChangingMode() {
    const changingModeButton = document.getElementById("circle-button");
    const darkModeBackground = document.getElementById("mode");
    const body = document.querySelectorAll("body");
    const statuses = document.querySelectorAll(".menu li a");
    const tasks = document.querySelectorAll(".checkbox");
    const container = document.querySelectorAll(".container");
    const taskInput = document.getElementById("task-input");
    const dayVideo = document.getElementById("mode-video1");
    const nightVideo = document.getElementById("mode-video2");


    changingModeButton.classList.toggle("circle-button-night");
    darkModeBackground.classList.toggle("mode2");

    body.forEach(function (item) {
        item.classList.toggle("dark-body");
    })

    statuses.forEach(function(item){
        item.classList.toggle("dark-mode-text");
    })
    // statuses.forEach(function (item) {
    //     if (item.classList.contains("selected-status")) {
    //         item.classList.remove("dark-mode-text");
    //         console.log(item);
    //     } else {
    //         item.classList.toggle("dark-mode-text");
    //     }
    // })

    tasks.forEach(function (item) {
        item.classList.toggle("dark-mode-text");
        if (item.classList.contains("light-text")) {
            // if (item.classList.value === "checkbox light-text dark-mode-text" || item.classList.value === "checkbox light-text completed dark-mode-text" ) {
            item.classList.remove("light-text");
        }
        console.log(item.classList);

        //     console.log(item);
        //     console.log(item.classList);
        //     item.classList.toggle("dark-mode-text");
        //     item.classList.toggle("light-text");
    })
    container.forEach(function (item) {
        item.classList.toggle("dark-mode-container");
    })

    taskInput.classList.toggle("dark-mode-container");

    taskInput.addEventListener("mouseover", function (e) {
        taskInput.classList.toggle("dark-mode-add-task");
    })
    taskInput.addEventListener("mouseout", function (e) {
        taskInput.classList.remove("dark-mode-add-task");
    })

    dayVideo.classList.toggle("hide");
    nightVideo.classList.toggle("hide");

}



