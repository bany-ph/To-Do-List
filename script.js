const add = document.getElementById("add-task");

const containerList = document.querySelector(".task-list")
add.addEventListener("click", function(event){
    
    event.preventDefault();
    


    let div = document.createElement("div");
    const taskName = document.querySelector("#task-name").value;

    if(taskName == '') { //check if the input is empty
        alert("put the name of the task")
        return // stops the event
    }

    /*create and show the task in <p> */
    const p = document.createElement("p")
    p.textContent = taskName;
    div.appendChild(p);
    containerList.appendChild(div);


  

    /* create and show the delete icon */
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-trash icon"
    div.appendChild(icon) 
    

      /* check box */
    /*   const check = document.createElement("i");
      check.className = "icon-check";
      div.insertBefore(check, p);
      
   */


   /* delete task */
    


    document.getElementById("task-name").value = "" // clear the input
})

document.body.addEventListener("click", nose('icon', containerList))

function nose(classs, contenedor, event) {
    if (event.target.classList.contains(classs)) {
        const li = event.target.parentElement;
        contenedor.removeChild(li);
    }
}

// icon.onclick = function () {
//         div.remove();
//     }