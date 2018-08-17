function store() {
  //console.log(todo);
  var get_index = localStorage.getItem("unique_index");
  var data = localStorage.getItem("testJSON");
  var data_obj = JSON.parse(data);
  todo = data_obj[get_index].todo;
  console.log(todo);


  var DataArr = ArrayCheck();
  DataArr[get_index] = person;
  myJSON = JSON.stringify(DataArr);
  localStorage.setItem("testJSON", myJSON);
  window.location.href = "list_todo.html"
}

function ArrayCheck() {
  text = localStorage.getItem("testJSON");
  obj = JSON.parse(text);
  if (obj == undefined) {
    var data = new Array();
    return data;
  }
  else {
    return obj;
  }
}
