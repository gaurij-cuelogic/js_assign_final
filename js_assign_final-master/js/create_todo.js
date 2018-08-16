function create_todo()
{  
    var get_index = localStorage.getItem("unique_index");
    var data = localStorage.getItem("testJSON"); 
    var obj_data= JSON.parse(data);
    if (document.getElementById('is_public').checked)
    {
      var todo_ispublic =document.getElementById('y_public').value;
    }
    else
    {
       var todo_ispublic = document.getElementById('n_public').value;
    }
   
  /* if(document.getElementById("reminder_type").value =="no")
    {
      reminderDate= "";
    }
    else{
      reminderDate = document.getElementById("reminder_date").value;
    }*/
    

 dueDate = document.getElementById("todo_date").value; 
 reminderDate= document.getElementById("reminder_date").value;
 if(dueDate<reminderDate)
 {
   alert("due date before reminder date");
 }
 else{
    obj_todo = {
    todo_name:document.getElementById("todo_name").value,
    todo_desc:document.getElementById("todo_desc").value,
    todo_type:document.getElementById("todo_type").value,
    todo_duedate:document.getElementById("todo_date").value,
    todo_isreminder : document.getElementById("reminder_type").value,
    todo_reminderdate:reminderDate,
     todo_ispublic : todo_ispublic,
    }
    
 
  obj_data[get_index].p_todo.push(obj_todo);
  myJSON = JSON.stringify(obj_data);
  localStorage.setItem("testJSON",myJSON); 
  window.location.href = "list_todo.html";
    
}
}


function disable()
{ 
      if(document.getElementById("reminder_type").value == "no")
        { alert("in if");
          //alert("in no");
          reminderDate = null;
          document.getElementById("reminder_date").readOnly=true;
        }
       else if(document.getElementById("reminder_type").value == "yes")
        {
          alert("in yes");
          document.getElementById("reminder_date").readOnly=false;
         // document.getElementById("reminder_date").value = " ";
         reminderDate = document.getElementById("reminder_date").value;
        }
}
