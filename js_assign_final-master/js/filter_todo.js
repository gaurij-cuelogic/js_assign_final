function filter_todo() {


    var tb = document.getElementById('list_table');
    while (tb.rows.length > 1) {
        tb.deleteRow(1);
    }
    var type = document.getElementById("type_todo").value;
    var get_index = localStorage.getItem("unique_index");
    var data = localStorage.getItem("testJSON");
    var data_obj = JSON.parse(data);


    for (var i = 0; i < data_obj[get_index].p_todo.length; i++) {

        if (data_obj[get_index].p_todo[i].todo_type == type) {
            //table row
            var newElement_row = document.createElement('tr');
            index = i;



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
            var input_type = document.createElement('input');
            var disp_todotype = data_obj[get_index].p_todo[i].todo_type;
            input_type.setAttribute("value", disp_todotype);
            input_type.setAttribute("readOnly", true);
            input_type.setAttribute("id", "input_type" + i);
            newElement_type.appendChild(input_type);
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
            var input_isreminder = document.createElement('input');
            var disp_todoisreminder = data_obj[get_index].p_todo[i].todo_isreminder;
            input_isreminder.setAttribute("value", disp_todoisreminder);
            input_isreminder.setAttribute("readOnly", true);
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
            var input_ispublic = document.createElement('input');
            var disp_todoispublic = data_obj[get_index].p_todo[i].todo_ispublic;
            input_ispublic.setAttribute("value", disp_todoispublic);
            input_ispublic.setAttribute("readOnly", true);
            input_ispublic.setAttribute("id", "input_ispublic" + i);
            newElement_ispublic.appendChild(input_ispublic);

            newElement_row.appendChild(newElement_name);
            newElement_row.appendChild(newElement_desc);
            newElement_row.appendChild(newElement_type);
            newElement_row.appendChild(newElement_date);
            newElement_row.appendChild(newElement_isreminder);
            newElement_row.appendChild(newElement_reminderdate);
            newElement_row.appendChild(newElement_ispublic);
            var list_table = document.getElementById("list_table");
            list_table.appendChild(newElement_row);



        }
    }


}