var inputBox = document.getElementById("task");
var addButton = document.getElementById("add");
var taskList = document.getElementById("taskList");
var clearButton = document.getElementById("clear");

function getTask() {
    var input = inputBox.value;
    if (!(input.trim()))
    {
        alert("You entered an invalid input");
    }
    else
    {
        var item = document.createElement("li");
        var task = document.createTextNode(input);
        item.appendChild(task);
        inputBox.value = "";
        var doneButton = document.createElement("button");
        doneButton.innerHTML = "Done";
        doneButton.className = "remove";
        doneButton.addEventListener("click", clearTask);
        item.appendChild(doneButton);
        taskList.appendChild(item);
    }
}

function clearList() {
    taskList.innerHTML = "";
}

function clearTask(list) {
    var taskItem = list.target.parentElement;
    taskList.removeChild(taskItem)
}

addButton.addEventListener("click", getTask);
clearButton.addEventListener("click", clearList);

