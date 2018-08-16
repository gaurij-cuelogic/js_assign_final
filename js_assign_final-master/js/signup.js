function signup() {
  //email
  var email = document.getElementById("email").value;
  //first name  
  var firstname = document.getElementById("first").value;
  //last name
  var lastname = document.getElementById("last").value;
  //password
  var password = document.getElementById("pwd").value;
  //gender
  if (document.getElementById('m').checked) {
    var gender = document.getElementById('m').value;
  }
  else {
    var gender = document.getElementById('f').value;
  }
  //address
  var address = document.getElementById("addresstxt").value;

  //img
  var file = document.getElementById("pic").files[0];
  if (file == null) {
    var path = "download.png";
    //localStorage.setItem("img", path);
  }

  else {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      var path = reader.result;
      //localStorage.setItem("img", path);

    };
    //reader.onerror = function (error) {
      //console.log('Error: ', error);
   // };
  }

  var userData ={
    email : email,
    firstName: firstname,
    lastName : lastname,
    password : password,
    gender : gender,
    address: address,
   profilePhoto : path
  };
  console.log("ashwini")
  console.log(userData);

  

}