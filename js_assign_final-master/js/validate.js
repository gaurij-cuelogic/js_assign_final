function validation(userData) {
  if (userData.email == "" || userData.email == null) {
    alert("enter your email id");
    return false;
  }
  else {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (userData.email.match(reg)) {
      //return true;
      var firstname = document.getElementById("first").value;
      if (firstname == "" || firstname == null) {
        alert("enter first name");
        return false;

      }
      var lastname = document.getElementById("last").value;
      if (lastname == "" || lastname == null) {
        alert("enter last name");
        return false;
      }
      var password = document.getElementById("pwd").value;
      if (password == "" || password == null) {
        alert("enter password");
        return false;
      }
      var address = document.getElementById("address").value;

      /*if(address==""||address==null)
      {
        alert("enter address");
        return false;
      }*/

    }
    else {
      alert("invalid email id");
      return false;
    }
    return true;
  }

}