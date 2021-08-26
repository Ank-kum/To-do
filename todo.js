var addButton = document.getElementById("addButton");
var deleteAll = document.getElementById("deleteAll");
var toDoList = document.getElementById("toDoList");
var todoInput = document.getElementById("todoInput");
var due = document.getElementById("due");

function markAsDone(event){

    event.target.parentElement.classList.add("markAsDone")
}
function markInProgress(event){
    event.target.parentElement.classList.add("markInProgress")
}
function remove(event){
    event.target.parentElement.classList.add("remove")
}

function addToDoList(){
    var toDoMain = document.createElement('div')
    toDoMain.id = String(Math.random());

    var todo = document.createElement('div');
    todo.appendChild(document.createTextNode(todoInput.value));
    toDoMain.appendChild(todo);

    var todoDue = document.createElement('div');
    todoDue.appendChild(document.createTextNode(due.value));
    toDoMain.appendChild(todoDue);
    
    var todoX = document.createElement('BUTTON');
    todoX.appendChild(document.createTextNode('Clear'));
    toDoMain.appendChild(todoX);
    todoX.addEventListener("click", remove);

    var todoProg = document.createElement('BUTTON');
    todoProg.appendChild(document.createTextNode('In Progress'));
    toDoMain.appendChild(todoProg);
    todoProg.addEventListener("click", markInProgress);

    var todoDone = document.createElement('BUTTON');
    todoDone.appendChild(document.createTextNode('Done'));
    toDoMain.appendChild(todoDone);
    todoDone.addEventListener("click", markAsDone );

    var para = document.createElement('P');
    toDoMain.appendChild(para);

    toDoList.appendChild(toDoMain);

}

addButton.addEventListener("click", addToDoList );
