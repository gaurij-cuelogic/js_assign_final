function signup()
{
  //email
   var email= document.getElementById("email").value; 
   //first name  
   var firstname = document.getElementById("first").value;
   //last name
   var lastname = document.getElementById("last").value;
   //password
   var password = document.getElementById("pwd").value;
   //gender
   if (document.getElementById('m').checked)
   {
     var gender = document.getElementById('m').value;
   }
   else
   {
      var gender = document.getElementById('f').value;
   }
   //address
   var address = document.getElementById("addresstxt").value;
  
   //img
    //console.log(files[0]);
    var file = document.getElementById("pic").files[0];
    if(file== null)
    {
      //alert("Image is required ");
      var path= "download.png";
      localStorage.setItem("img", path);
    }
 
    else{
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function ()
    {
    var path= reader.result;
      localStorage.setItem("img", path);
    
     };
     reader.onerror = function (error)
    {
       console.log('Error: ', error);
    };
   }
  
   if(validation(email,firstname,lastname,password,address)==true)
    {
      storeindb(email,firstname,lastname,password,gender,address);
      window.location.href = "list_todo.html";
     }
    
}