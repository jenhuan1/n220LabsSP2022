//Jennifer Huang
//3/24/2022
//n220

//define ID as variable
let txtUser = document.getElementById("txtUser");
let txtPass = document.getElementById("txtPass");
let dvResult = document.getElementById("dvResult");

//function when button is clicked
//if user's input matches username + password, success, if not, wrong information
function checkInput() {
  let username = txtUser.value;
  let password = txtPass.value;

  if (username == "Username" && (password = "Password")) {
    dvResult.innerHTML = "Success";
  } else {
    dvResult.innerHTML = "Wrong Information";
  }

  txtUser.value = "";
  txtPass.value = "";
}