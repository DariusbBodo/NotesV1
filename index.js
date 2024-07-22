// Butonul Submit
const submitButton =    document.getElementById("btnSubmit");
submitButton.addEventListener("click", sumbmitNewTask);

// Strikethrough Tasks
const tasks = document.getElementById("tasks");
tasks.addEventListener("click", strikeTaskTrough)

const messageElement = document.getElementById("message");

// Butonul Clear List
const clearListButton = document.getElementById("btnClear");
clearListButton.addEventListener("click", deleteList);




displayMessage("You do not have any tasks for today!")

// Functia pt a sterge lista
function deleteList(event){
    if(validInput(tasks.innerHTML)){
        tasks.innerHTML = "";
    }
else{
    displayMessage("Nu ai nimic de sters")
}

}

function strikeTaskTrough(event){
    const style = event.target.style;
    if(!style.textDecoration){
    style.textDecoration = "line-through"
    }
    else{
        style.textDecoration = "";
    }
}
// Functia pt submit new task

function sumbmitNewTask(){
    const newTask = document.getElementById("newTask");
    if(validInput(newTask.value)){
tasks.innerHTML += '<li class= "list-group-item">' + newTask.value + '</li>';
newTask.value = ""
    messageElement.style.visibility = "hidden"

  }
else {
    displayMessage("Please provide input!");

}
}

function validInput(input){
    if(input){
return true;
    }
    return false;
}

function displayMessage(a){
    messageElement.innerText = a;
    messageElement.style.visibility = "visible"

}
