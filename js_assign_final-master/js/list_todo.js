function list_todo() {
  var get_index = localStorage.getItem("unique_index");
  var data = localStorage.getItem("testJSON");
  var data_obj = JSON.parse(data);
  document.getElementById('userImage').src = data_obj[get_index].p_img;



  for (var i = 0; i < data_obj[get_index].p_todo.length; i++) {
    //table row
    var newElement_row = document.createElement('tr');
    index = i;

    //checkbox

    var newElement_checkbox = document.createElement('td');
    var input_checkbox = document.createElement('input');
    input_checkbox.setAttribute("type", "checkbox");
    input_checkbox.setAttribute("id", "input_checkbox" + i);
    newElement_checkbox.appendChild(input_checkbox);



    //name
    var newElement_name = document.createElement('td');
    var input_name = document.createElement('input');
    var disp_todoname = data_obj[get_index].p_todo[i].todo_name;
    input_name.setAttribute("value", disp_todoname);
    input_name.setAttribute("readOnly", true);
    input_name.setAttribute("id", "input_name" + i);
    newElement_name.appendChild(input_name);


    //desc
    var newElement_desc = document.createElement('td');
    var input_desc = document.createElement('input');
    var disp_tododesc = data_obj[get_index].p_todo[i].todo_desc;
    input_desc.setAttribute("value", disp_tododesc);
    input_desc.setAttribute("readOnly", true);
    input_desc.setAttribute("id", "input_desc" + i);
    newElement_desc.appendChild(input_desc);

    //type
    var newElement_type = document.createElement('td');
    var input_type = document.createElement('select');
    input_type.disabled = true;
    input_type.setAttribute("width", "200px");
    var disp_todotype = data_obj[get_index].p_todo[i].todo_type;
    var option1 = document.createElement('option');
    option1.text = "personal";
    input_type.appendChild(option1);
    var option2 = document.createElement('option');
    option2.text = "shopping";
    input_type.appendChild(option2);
    var option3 = document.createElement('option');
    option3.text = "work";
    input_type.appendChild(option3);
    var option4 = document.createElement('option');
    option4.text = "other";
    input_type.appendChild(option4);
    console.log(disp_todotype);

    input_type.setAttribute("readOnly", true);
    input_type.setAttribute("id", "input_type" + i);

    newElement_type.appendChild(input_type);
    //document.getElementById("input_type"+i).value = disp_todotype;
    // newElement_type.textContent = disp_todotype;

    //todo_date
    var newElement_date = document.createElement('td');
    var input_date = document.createElement('input');
    var disp_tododate = data_obj[get_index].p_todo[i].todo_duedate;

    input_date.setAttribute("type", "date");
    input_date.setAttribute("value", disp_tododate)
    input_date.setAttribute("readOnly", true)
    input_date.setAttribute("id", "input_date" + i);
    newElement_date.appendChild(input_date);

    //is reminder
    var newElement_isreminder = document.createElement('td');
    var input_isreminder = document.createElement('select');
    var disp_todoisreminder = data_obj[get_index].p_todo[i].todo_isreminder;
    input_isreminder.disabled = true;
    var option1 = document.createElement('option');
    option1.text = "yes";
    input_isreminder.appendChild(option1);
    var option2 = document.createElement('option');
    option2.text = "no";
    input_isreminder.appendChild(option2);

    input_isreminder.setAttribute("value", disp_todoisreminder);
    input_isreminder.setAttribute("id", "input_isreminder" + i);
    newElement_isreminder.appendChild(input_isreminder);

    //reminder date
    var newElement_reminderdate = document.createElement('td');
    var input_reminderdate = document.createElement('input');
    var disp_remindertododate = data_obj[get_index].p_todo[i].todo_reminderdate;
    input_reminderdate.setAttribute("type", "date");
    input_reminderdate.setAttribute("value", disp_remindertododate);
    input_reminderdate.setAttribute("readOnly", true)
    input_reminderdate.setAttribute("id", "input_reminderdate" + i);
    newElement_reminderdate.appendChild(input_reminderdate);

    //ispublic
    var newElement_ispublic = document.createElement('td');
    var input_ispublic = document.createElement('select');
    input_ispublic.disabled = true;
    var disp_todoispublic = data_obj[get_index].p_todo[i].todo_ispublic;
    var option1 = document.createElement('option');
    option1.text = "yes"
    input_ispublic.appendChild(option1);
    var option2 = document.createElement('option');
    option2.text = "no";
    input_ispublic.appendChild(option2);
    //input_ispublic.setAttribute("readOnly",true);
    input_ispublic.readOnly = true;
    input_ispublic.setAttribute("id", "input_ispublic" + i);
    newElement_ispublic.appendChild(input_ispublic);


    //edit button
    var newElement_editbutton = document.createElement('input');
    newElement_editbutton.setAttribute("type", "button");
    newElement_editbutton.setAttribute("value", "edit");
    newElement_editbutton.setAttribute("id", i);
    newElement_editbutton.setAttribute("onclick", "edit_todo(this.id).then((obj) => console.log(obj))");

    //save button
    var newElement_submitbutton = document.createElement('input');
    newElement_submitbutton.setAttribute("type", "button");
    newElement_submitbutton.setAttribute("value", "submit");
    newElement_submitbutton.setAttribute("id", i);
    newElement_submitbutton.setAttribute("onclick", "submit_todo(this.id).then((obj) => console.log(obj))");



    newElement_row.appendChild(newElement_checkbox);
    newElement_row.appendChild(newElement_name);
    newElement_row.appendChild(newElement_desc);
    newElement_row.appendChild(newElement_type);
    newElement_row.appendChild(newElement_date);
    newElement_row.appendChild(newElement_isreminder);
    newElement_row.appendChild(newElement_reminderdate);
    newElement_row.appendChild(newElement_ispublic);
    newElement_row.appendChild(newElement_editbutton);
    newElement_row.appendChild(newElement_submitbutton);
    var list_table = document.getElementById("list_table");


    list_table.appendChild(newElement_row);

    document.getElementById("input_type" + i).value = disp_todotype;
    document.getElementById("input_isreminder" + i).value = disp_todoisreminder;
    document.getElementById("input_ispublic" + i).value = disp_todoispublic;
    //input_type.setAttribute("value",disp_todotype);
    //input_ispublic.setAttribute("value",disp_todoispublic);


  }

}

function edit_todo(id) {
  //console.log(newElement_row);
  document.getElementById("input_name" + id).readOnly = false;
  document.getElementById("input_desc" + id).readOnly = false;
  document.getElementById("input_type" + id).disabled = false;
  document.getElementById("input_date" + id).readOnly = false;
  document.getElementById("input_isreminder" + id).disabled = false;
  document.getElementById("input_reminderdate" + id).readOnly = false;
  document.getElementById("input_ispublic" + id).disabled = false;
}


function submit_todo(id) {
  var get_index = localStorage.getItem("unique_index");
  var data = localStorage.getItem("testJSON");
  var obj_data = JSON.parse(data);



  obj_todo = {
    todo_name: document.getElementById("input_name" + id).value,
    todo_desc: document.getElementById("input_desc" + id).value,
    todo_type: document.getElementById("input_type" + id).value,
    todo_duedate: document.getElementById("input_date" + id).value,
    todo_isreminder: document.getElementById("input_isreminder" + id).value,
    todo_reminderdate: document.getElementById("input_reminderdate" + id).value,
    todo_ispublic: document.getElementById("input_ispublic" + id).value
    //todo_attatchments : file 
  }

  obj_data[get_index].p_todo[id] = obj_todo;
  myJSON = JSON.stringify(obj_data);
  localStorage.setItem("testJSON", myJSON);
  window.location.href = "list_todo.html";


}


function delete_todo() {
  var get_index = localStorage.getItem("unique_index");
  var data = localStorage.getItem("testJSON");
  var data_obj = JSON.parse(data);
  var arrLength = data_obj[get_index].p_todo.length
  var delArray = [];
  if (document.getElementById("all").checked) {

    for (var i = 0; i < arrLength; i++) {
      delArray.push(i);
    }
  }

  else {
    for (var i = 0; i < arrLength; i++) {
      if (document.getElementById("input_checkbox" + i).checked) {

        delArray.push(i);

      }

    }

  }
  for (i = delArray.length - 1; i >= 0; i--) {
    var data = localStorage.getItem("testJSON");
    var data_obj = JSON.parse(data);

    //document.getElementById("list_table").deleteRow(delArray[i]);

    data_obj[get_index].p_todo.splice(delArray[i], 1);

    myJSON = JSON.stringify(data_obj);
    localStorage.setItem("testJSON", myJSON);

    location.reload();
  }
}

function cancel_todo() {
  var get_index = localStorage.getItem("unique_index");
  var data = localStorage.getItem("testJSON");
  var data_obj = JSON.parse(data);

  for (var i = 0; i < data_obj[get_index].p_todo.length; i++) {
    var disp_todoname = data_obj[get_index].p_todo[i].todo_name;
    document.getElementById("input_name" + i).value = disp_todoname;
    document.getElementById("input_name" + i).readOnly = true;

    var disp_tododesc = data_obj[get_index].p_todo[i].todo_desc;
    document.getElementById("input_desc" + i).value = disp_tododesc;
    document.getElementById("input_desc" + i).readOnly = true;

    var disp_todotype = data_obj[get_index].p_todo[i].todo_type;
    document.getElementById("input_type" + i).value = disp_todotype;
    document.getElementById("input_type" + i).readOnly = true;

    var disp_tododate = data_obj[get_index].p_todo[i].todo_duedate;
    document.getElementById("input_date" + i).value = disp_tododate;
    document.getElementById("input_date" + i).readOnly = true;

    var disp_todoisreminder = data_obj[get_index].p_todo[i].todo_isreminder;
    document.getElementById("input_isreminder" + i).value = disp_todoisreminder;
    document.getElementById("input_isreminder" + i).readOnly = true;

    var disp_remindertododate = data_obj[get_index].p_todo[i].todo_reminderdate;
    document.getElementById("input_reminderdate" + i).value = disp_remindertododate;
    document.getElementById("input_reminderdate" + i).readOnly = true;

    var disp_todoispublic = data_obj[get_index].p_todo[i].todo_ispublic;
    document.getElementById("input_ispublic" + i).value = disp_remindertododate;
    document.getElementById("input_ispublic" + i).readOnly = true;

  }
}