function signUp() {
  var userData = {
    todo : []
   };
  //email
  userData.email = document.getElementById("email").value;
  //first name  
  userData.firstname = document.getElementById("first").value;
  //last name
  userData.lastname = document.getElementById("last").value;
  //password
  userData.password = document.getElementById("pwd").value;
  //gender
  if (document.getElementById('m').checked) {
    userData.gender = document.getElementById('m').value;
  }
  else {
    userData.gender = document.getElementById('f').value;
  }
  //address
  userData.address = document.getElementById("addresstxt").value;

  //image
  var img=localStorage.getItem("img");


  userData.profilePhoto=img;

  localStorage.removeItem("img");

  console.log(userData);
  var isValide = validation(userData);
   if( isValide == true)
   {
     storeInDb(userData);
   window.location.href= "listTodo.html";
   }
  

}

var input=document.getElementById("pic");

  input.addEventListener('change',function(e){
    console.log(input.files);
    var reader=new FileReader();
    reader.onload=function()
    {
      var img=new Image();
      img.src=reader.result;
      localStorage.setItem("img",img.src);
    }
    reader.readAsDataURL(input.files[0])
  })

