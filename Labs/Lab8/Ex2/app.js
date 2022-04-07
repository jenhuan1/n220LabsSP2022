//Jennifer Huang
//4/6/2022
//n220

//define IDs as variable
let dvResult = document.getElementById("dvResult");

//function that generates random number 0-10
function ranNumGenerator() {
    let randNum = Math.floor(Math.random() * 11);
    return randNum;
}

//displays random number
function numResult() {
  dvResult.innerHTML = ranNumGenerator();
}