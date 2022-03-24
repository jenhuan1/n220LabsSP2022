//Jennifer Huang
//3/24/2022
//n220

//define ID as variable
let txtName = document.getElementById("txtName");

//function when button is clicked
function helloName() {
  let name = txtName.value;
  console.log("Hello " + name);
  txtName.value = "";
}