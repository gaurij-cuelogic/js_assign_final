function storeInDb(userData) {
  //console.log(userData);
  var get_index = localStorage.getItem("unique_index");  
 var DataArr = ArrayCheck();

 DataArr.push(userData);
 console.log(DataArr);
 myJSON = JSON.stringify(DataArr);
 //console.log(myJSON);
 localStorage.setItem("testJSON", myJSON);
  x = localStorage.getItem("testJSON");
  obj = JSON.parse(x);
  var index = 0;
  for (var i = 0; i < obj.length; i++) {
     index = i;
      }
      localStorage.setItem("unique_index", index);
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
