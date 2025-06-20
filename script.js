const add = document.getElementById("add-task");


add.addEventListener("click", () =>{
    /* add task */
    let p = document.createElement("p");
    if(document.getElementById("task-name").value.trim() === '') { //check if the input is empty
        alert("put the name of the task")
        return // stops the event
    }
    /*create and show the element */
    p.textContent = document.getElementById("task-name").value
    p.className = "task"
    document.querySelector(".task-list").appendChild(p);

    












    document.getElementById("task-name").value = "" // clear the input
})