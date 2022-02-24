//Jennifer Huang
//2/24/2022
//n220

//retrieves div
let firstDiv = document.getElementById("first");
let secondDiv = document.getElementById("second");
let thirdDiv = document.getElementById("third");

//array that stores the times
let times = [100, 150, 200];

//displays time
firstDiv.append(times[0] + "sec");
secondDiv.append(times[1] + "sec");
thirdDiv.append(times[2] + "sec");