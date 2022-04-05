// const { element } = require("prop-types");

// var StoreAllData = [];

// function Add() {
//     var input = document.getElementById("new-task").value;

//     StoreAllData.push(input);
//     TakeItems = "<ul>";
//     StoreAllData.forEach((element) => {
//         TakeItems += "<li>" + element + "</li>";
//     });
//     TakeItems += "</ul>";
// document.getElementById("incomplete-tasks").innerHTML = TakeItems;
// }

// document.write("TakeIteems");








// var UserInputData = [];

// function Add() {
//   var InputItems = document.getElementById("new-task").value;

//   UserInputData.push(InputItems);
//   var input = "<ul>";
// //   console.log(typeof InputItems);
//   UserInputData.forEach((element, index) => {
//     // console.log(index);
//     input +="<li>"+element+"<input type='button' onclick='EditRow()' value='Edit'><input type='button' onclick='deleteRow("+index+")' value='del'></li>";
//     // input += "<li><input type=checkbox><label>"+element+"</lable><input type=text><button class=edit>Edit</button><button class=delete>Delete</button></li>"
//   });
//   input += "</ul>";
//   document.getElementById("incomplete-tasks").innerHTML = input;
// }
// function deleteRow(x) {
//   UserInputData.splice(x,1)
//   var input = "<ul>";
//   console.log(typeof InputItems);
//   UserInputData.forEach((element, index) => {
//     console.log(index);
//     input +="<li>"+element+"<input type='button' onclick='EditRow()' value='Edit'><input type='button' onclick='deleteRow("+index+")' value='del'></li>";
//   });
//   input += "</ul>";
//   document.getElementById("incomplete-tasks").innerHTML = input;
//   console.log(x);

// }
// UserInputData.forEach((element) => {
//   if (element == x) {
//     UserInputData.splice(count, 1);
//   }
//   count++;
// });



var Input_Data = document.getElementById("new-task");
var Input_Button = document.getElementsByTagName("button")[0];
var Input_incompleteTask = document.getElementById("incomplete-tasks");
var Input_completedTasks = document.getElementById("completed-tasks");

function NewStoreElement(taskString) {
  var listItem = document.createElement("li");

  var checkBox = document.createElement("input");

  var label = document.createElement("label");

  var editInput = document.createElement("input");

  var editButton = document.createElement("button");

  var deleteButton = document.createElement("button");
                                                           //  "<li><input><lable></lable><input>Rahul<button></button><button></button>";
  label.innerText = taskString;

  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
};


  function addTask() {
  var listItem = NewStoreElement(Input_Data.value);
  Input_incompleteTask.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  Input_Data.value = "";
};

function taskIncomplete() {
    var listItem = this.parentNode;
    Input_incompleteTask.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
  };
  Input_Button.onclick = addTask;


   function deleteTask() {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
  };
  
    function taskCompleted() {
    var listItem = this.parentNode;
    Input_completedTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
  };

    function deleteTask() {
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
  };
  
    function taskCompleted() {
    var listItem = this.parentNode;
    Input_completedTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
  };
  


  function editTask() {
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
  if (containsClass) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }

  listItem.classList.toggle("editMode");
};

  function bindTaskEvents(taskListItem, checkBoxEventHandler) {
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
};


for (var i = 0; i < Input_incompleteTask.children.length; i++) {
  bindTaskEvents(Input_incompleteTask.children[i], taskCompleted);
  }

for (var i = 0; i < Input_completedTasks.children.length; i++) {
  bindTaskEvents(Input_completedTasks.children[i], taskIncomplete);
}