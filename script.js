const add = document.getElementById("add-task");


add.addEventListener("click", function(event){
    
    event.preventDefault();
    let p = document.createElement("p");
    const taskName = document.querySelector("#task-name").value;

    if(taskName == '') { //check if the input is empty
        alert("put the name of the task")
        return // stops the event
    }

    /*create and show the task */
    p.textContent = taskName; 
    p.className = "task"
    document.querySelector(".task-list").appendChild(p);

    
    /* create and show the delete icon */
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-trash"
    p.appendChild(icon) 
    
   /* delete task */
    icon.onclick = function () {
        p.remove();
    }


    document.getElementById("task-name").value = "" // clear the input
})