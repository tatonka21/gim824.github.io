function editTaskList () {

    if (document.getElementById("editButton").innerHTML === "Edit") {

        let todoItems = document.getElementsByClassName("todoItem");

        for (let i = 0; i < todoItems.length; i++) {

            todoItems[i].contentEditable = true;

        }

        document.getElementById("editButton").innerHTML = "Done";

    } else if (document.getElementById("editButton").innerHTML === "Done") {

        let todoItems = document.getElementsByClassName("todoItem");

        for (let i = 0; i < todoItems.length; i++) {

            todoItems[i].contentEditable = false;

        }

        document.getElementById("editButton").innerHTML = "Edit";

    }

}

function deleteTaskList () {


    
}

function addTask (buttonClicked) {

    var button = buttonClicked;

    var task = document.createElement("li");
    var input = document.getElementById("taskInput").value;
    var taskText = document.createTextNode(input);

    task.appendChild(taskText);
    task.className = "list-group-item todoItem";

    if (input === "") {

        alert("You must enter text");

    } else {

        let card = button.parentNode.parentNode.parentNode;

        card.querySelector("#taskList").appendChild(task);

    }

    document.getElementById("taskInput").value = "";
 
}