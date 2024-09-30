
// // Post Request Code
// document.getElementById('employeeForm').addEventListener("submit", function (e) {
//     e.preventDefault();
  
//       const employee = {
//           id: document.getElementById("id").value,
//           name: document.getElementById("name").value,
//           mobile: document.getElementById("mobile").value,
//           DOB: document.getElementById("dob").value
//       };
  
//       const xhttp = new XMLHttpRequest();
  
//       xhttp.onload = function(){
//           console.log("Response Recieved:", this.responseText);
//           alert("request Complete");
//           window.location='getRequest.html'
//       }
  
//       xhttp.open("POST", "http://localhost:3000/employees", true);
//       xhttp.setRequestHeader("Content-Type", "application/json");
  
//       xhttp.send(JSON.stringify(employee));
//   });


  