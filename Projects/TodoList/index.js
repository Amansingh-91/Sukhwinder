const newTaskInput = document.querySelector("#addTask");
const taskList = document.querySelector(".app ul");

const handleAddNewTask = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value.trim().length);
    if (e.target[0].value.trim().length > 0) {
        const newTask = `<li>${e.target[0].value}<span class="material-symbols-outlined">
        delete
        </span></li>`;
        taskList.innerHTML += newTask;

    }
    e.target.reset();
    // const newTask = document.createElement("li");
    // newTask.textContent = e.target[0].value;
    // taskList.appendChild(newTask);

}

newTaskInput.addEventListener("submit", handleAddNewTask);


// delete task 

const allTasks = document.querySelectorAll("li");
console.log(allTasks);

const toggleCompleteTask = (e) => {
    console.log(e.target);
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("complete");
    }// delete task
    else if(e.target.tagName === "SPAN"){
        // console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }
}

// const applyCompleteTask = (task) => {
//     task.addEventListener("click", toggleCompleteTask)
// }

// allTasks.forEach(applyCompleteTask);

taskList.addEventListener("click",toggleCompleteTask);

const search = document.querySelector("#search");
const handleSearch = (e)=>{
    console.log(e.target.value);
    const allTasks = document.querySelectorAll("li");
    // const keyword  = e.target.value;
    const keyword  = search.value;

    allTasks.forEach((task)=>{
        // console.log(task);
        if(task.textContent.includes(keyword)){
            task.classList.remove("hide");
        }
        else{
            task.classList.add("hide");
        }
    })

}

search.addEventListener("keyup",handleSearch)

// aman singh
// sik