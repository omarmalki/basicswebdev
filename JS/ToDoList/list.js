var todos = ["nothing"];
var input = prompt("What would you like to do?");

while(input !== "quit") {

if(input === "list") {
listTodos();
} else if (input === "new") {
    addTodo();
} else if (input === "delete") {
    deleteToDo();
}
input = prompt("What would you like to do?");
}
console.log("Ok, you quit");

function listTodos() {
    console.log("**************");
    todos.forEach(function(todo, index) {
        console.log(index + ": " + todo);
    });
    console.log("**************");
}
function addTodo() {
    var whatToDo = prompt("Enter new todo");
    todos.push(whatToDo);
    console.log ("Added Todo");
}
function deleteToDo() {
    var whatIndex = prompt("Enter index of todo to delete");
    todos.splice(whatIndex, 1);
    console.log("Deleted Todo");
}