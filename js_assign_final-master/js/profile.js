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

  var disp_email = obj[get_index].email;
  document.getElementById("email").value = disp_email;
  //first name
  var disp_firstname = obj[get_index].firstname;
  document.getElementById("first").value = disp_firstname;
  //last name
  disp_lastname = obj[get_index].lastname;
  document.getElementById("last").value = disp_lastname;
  //password
  disp_password = obj[get_index].password;
  document.getElementById("pwd").value = disp_password;
  //gender
  if (document.getElementById('m').checked) {
    var gender = document.getElementById('m').value;
  }
  else {
    var gender = document.getElementById('f').value;
  }

  disp_address = obj[get_index].address;
  document.getElementById("addresstxt").value = disp_address;
  //image
  dispImg = obj[get_index].profilePhoto;
  document.getElementById("image").src = dispImg;
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
  


function profileEdit() {
  var getIndex = localStorage.getItem("unique_index");
  var userData = localStorage.getItem("testJSON");
  var obj = JSON.parse(userData);

//  console.log(obj[getIndex].todo);
 todo= obj[getIndex].todo;
  console.log(todo);
  //email
  var dispEmail = document.getElementById("email").value;

  //first name
  var dispFirstName = document.getElementById("first").value;

  //last name
  dispLastName = document.getElementById("last").value;

  //password
  dispPassword = document.getElementById("pwd").value;

  //gender
  if (document.getElementById('m').checked) {
    var gender = document.getElementById('m').value;
  }
  else {
    var gender = document.getElementById('f').value;
  }

  dispAddress = document.getElementById("addresstxt").value;
  
  var userData ={
    email : dispEmail,
    firstName: dispFirstName,
    lastName : dispLastName,
    password : dispPassword,
    gender : gender,
    address: dispAddress,
   profilePhoto : dispImg,
   todo:todo
  };
  

  var DataArr = ArrayCheck();
  DataArr[getIndex] = userData;
  myJSON = JSON.stringify(DataArr);
  localStorage.setItem("testJSON", myJSON);
  window.location.href = "listTodo.html"
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

function profileCancel() {

alert("in profile_cancel");

  var getIndex = localStorage.getItem("unique_index");
  var data = localStorage.getItem("testJSON");
  var dataObj = JSON.parse(data);

    
    var disp_email = dataObj[getIndex].email;
     
    document.getElementById("email").value= disp_email;
    document.getElementById("email").readOnly = true;


    var disp_firstname = dataObj[getIndex].firstName;
    
    document.getElementById("first").value = disp_firstname;
    document.getElementById("first").readOnly = true;

    var disp_lastname = dataObj[getIndex].lastName;
    document.getElementById("last").value = disp_lastname;
    document.getElementById("last").readOnly = true;

    var disp_password = dataObj[getIndex].password;
    document.getElementById("pwd").value = disp_password;
    document.getElementById("pwd").readOnly = true;

    var disp_address = dataObj[getIndex].address;
    document.getElementById("addresstxt").value = disp_address;
    document.getElementById("addresstxt").readOnly = true;

    location.reload();
  }

