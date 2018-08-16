function profile() {

  document.getElementById("email").readOnly = true;
  document.getElementById("first").readOnly = true;
  document.getElementById("last").readOnly = true;
  document.getElementById("pwd").readOnly = true;
  document.getElementById("addresstxt").readOnly = true;


  var get_index = localStorage.getItem("unique_index");
  var x = localStorage.getItem("testJSON");
  var obj = JSON.parse(x);
  console.log(obj);

  //email
  var disp_email = obj[get_index].p_email;
  document.getElementById("email").value = disp_email;
  //first name
  var disp_firstname = obj[get_index].p_firstname;
  document.getElementById("first").value = disp_firstname;
  //last name
  disp_lastname = obj[get_index].p_lastname;
  document.getElementById("last").value = disp_lastname;
  //password
  disp_password = obj[get_index].p_password;
  document.getElementById("pwd").value = disp_password;
  //gender
  if (document.getElementById('m').checked) {
    var gender = document.getElementById('m').value;
  }
  else {
    var gender = document.getElementById('f').value;
  }

  disp_address = obj[get_index].p_address;
  document.getElementById("addresstxt").value = disp_address;
  //image
  disp_img = obj[get_index].p_img;
  document.getElementById("image").src = disp_img;
}


function editContent() {

  document.getElementById("first").readOnly = false;
  document.getElementById("last").readOnly = false;
  document.getElementById("pwd").readOnly = false;
  document.getElementById("addresstxt").readOnly = false;
  var get_index = localStorage.getItem("unique_index");
  var userData = localStorage.getItem("testJSON");
  var obj = JSON.parse(userData);
  console.log(userData);
  //console.log(obj);

}

function profile_edit() {
  var get_index = localStorage.getItem("unique_index");
  var userData = localStorage.getItem("testJSON");
  var obj = JSON.parse(userData);
  console.log(obj);

  //email
  var disp_email = document.getElementById("email").value;

  //first name
  var disp_firstname = document.getElementById("first").value;

  //last name
  disp_lastname = document.getElementById("last").value;

  //password
  disp_password = document.getElementById("pwd").value;

  //gender
  if (document.getElementById('m').checked) {
    var gender = document.getElementById('m').value;
  }
  else {
    var gender = document.getElementById('f').value;
  }

  disp_address = document.getElementById("addresstxt").value;


  //todo = obj[get_index].p_todo;
  //console.log(todo);
  store(disp_email, disp_firstname, disp_lastname, disp_password, gender, disp_address/*,todo*/);
}

function profile_cancel() {

  var get_index = localStorage.getItem("unique_index");
  var data = localStorage.getItem("testJSON");
  var data_obj = JSON.parse(data);

  for (var i = 0; i < data_obj[get_index].length; i++) {
    var disp_email = data_obj[get_index].p_email;
    document.getElementById(email).value = disp_email;
    document.getElementById(email).readOnly = true;


    var disp_firstname = data_obj[get_index].p_firstname;
    document.getElementById(first).value = disp_firstname;
    document.getElementById(first).readOnly = true;

    var disp_lastname = data_obj[get_index].p_lastname;
    document.getElementById(last).value = disp_lastname;
    document.getElementById(last).readOnly = true;

    var disp_password = data_obj[get_index].p_password;
    document.getElementById(pwd).value = disp_password;
    document.getElementById(pwd).readOnly = true;

    var disp_address = data_obj[get_index].p_address;
    document.getElementById(addresstxt).value = disp_address;
    document.getElementById(addresstxt).readOnly = true;

    location.reload();
  }

}