const add = document.getElementById("add-task");

const containerList = document.querySelector(".task-list")
add.addEventListener("click", function(event){
    event.preventDefault();
    const taskName = document.querySelector("#task-name").value;

    if(taskName == '') { //check if the input is empty
        alert("put the name of the task")
        return // stops the event
    }

    /*create div comtainer and show the task in <p> */
    let div = document.createElement("div");
    const p = document.createElement("p")
    p.textContent = taskName;
    div.appendChild(p);
    containerList.appendChild(div);


  
    /* create sub container for checkbox and icon */
    const subDiv = document.createElement("div")



    /* create and show checkbox */
    const input = document.createElement("input")
    input.type = "checkbox";
    subDiv.appendChild(input);




    /* create and show the delete icon */
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-trash icon"
    subDiv.appendChild(icon) 
    


    /* show icons and checkbox*/
    div.appendChild(subDiv);



   /* delete task */
    icon.onclick = function () {
        div.remove();
    } 

    /* change task status */
    input.onclick = function(){
        if(input.checked){
            p.style.textDecoration = "line-through"
            p.style.color = "grey"
        }else{
            p.style.textDecoration = "none"
            p.style.color = "black"
        }
       
    }



    document.getElementById("task-name").value = "" // clear the input
})



