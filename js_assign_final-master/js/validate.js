function validation(userData) {
  if (userData.email == "" || userData.email == null) {
    alert("enter your email id");
    return false;
  }
  else {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (userData.email.match(reg)) {
      
      if (userData.firstname == "" || userData.firstname == null) {
        alert("enter first name");
        return false;

      }
      
      if (userData.lastname == "" || userData.lastname == null) {
        alert("enter last name");
        return false;
      }
      
      if (userData.password == "" || userData.password == null) {
        alert("enter password");
        return false;
      }
    }
    else {
      alert("invalid email id");
      return false;
    }
    return true;
  }

}