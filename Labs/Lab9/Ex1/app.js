//Jennifer Huang
//4/11/2022
//n220

//define IDs as variable
let txtInput = document.getElementById("txtInput");
let dvSum = document.getElementById("dvSum");
let dvAverage = document.getElementById("dvAverage");

//calculates sum of user's input
function calcSum() {
    var stringVals = txtInput.value;
    let myArray = stringVals.split(",");
    let sum = 0;
  
    //takes array and calculates sum
    for (let i = 0; i < myArray.length; i++) {
      sum += Number(myArray[i]);
    }
  
    //displays on page
    dvSum.innerHTML = "Sum: " + sum;
}

//calculates average of user's input
function calcAvg() {
    var stringVals = txtInput.value;
    let myArray = stringVals.split(",");
    let sum = 0;
  
    for (let i = 0; i < myArray.length; i++) {
      sum += Number(myArray[i]);
    }
  
    let average = sum / myArray.length;
  
    dvAverage.innerHTML = "Average: " + average;
}

//function when button is clicked
function onClick() {
    calcSum();
    calcAvg();
    txtInput.value = "";
}