function createTodo() {
  var getIndex = localStorage.getItem("unique_index");
  var data = localStorage.getItem("testJSON");
  var objData = JSON.parse(data);
  if (document.getElementById('is_public').checked) {
    var todoIsPublic = document.getElementById('y_public').value;
  }
  else {
    var todoIsPublic = document.getElementById('n_public').value;
  }

   if(document.getElementById("todo_date").value.length == 0)
  {
    alert("due date of reminder is required");
    return;
  }
  
  dueDate = document.getElementById("todo_date").value;
  reminderDate = document.getElementById("reminder_date").value;
  if (dueDate < reminderDate) {
    alert("due date before reminder date");
  }
  else {
    objTodo = {
      todoName: document.getElementById("todo_name").value,
      todoDesc: document.getElementById("todo_desc").value,
      todoType: document.getElementById("todo_type").value,
      todoDueDate: document.getElementById("todo_date").value,
      todoIsReminder: document.getElementById("reminder_type").value,
      todoReminderDate: reminderDate,
      todoIsPublic: todoIsPublic,
    }

     objData[getIndex].todo.push(objTodo);
    myJSON = JSON.stringify(objData);
    localStorage.setItem("testJSON", myJSON);
    window.location.href = "listTodo.html";
  }
}


function disable() {
  if (document.getElementById("reminder_type").value == "no") {
    document.getElementById("reminder_date").readOnly = true;
    document.getElementById("reminder_date").value ="";
  }
  else {
    document.getElementById("reminder_date").readOnly = false;
    reminderDate = document.getElementById("reminder_date").value;
  }
}
