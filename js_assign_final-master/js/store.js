function storeindb(email, firstname, lastname, password, gender, address) {
  var get_index = localStorage.getItem("unique_index");
  image = localStorage.getItem("img");
  console.log(image);
  var person = {
    p_email: email,
    p_firstname: firstname,
    p_lastname: lastname,
    p_password: password,
    p_gender: gender,
    p_address: address,
    p_img: image,
    p_todo: []
  };

  console.log(person.p_img);
  var DataArr = ArrayCheck();
  DataArr.push(person);


  myJSON = JSON.stringify(DataArr);
  localStorage.setItem("testJSON", myJSON);
  x = localStorage.getItem("testJSON");
  obj = JSON.parse(x);
  var index = 0;
  for (var i = 0; i < obj.length; i++) {
    if (email == obj[i].p_email && password == obj[i].p_password) {

      index = i;
      localStorage.setItem("unique_index", index);
      window.location.href = "list_todo.html";
    }

  }
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
