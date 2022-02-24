//Jennifer Huang
//2/24/2022
//n220

//retrieves div with id "loop"
let loopDiv = document.getElementById("loop");

//sets starting counter at 1000, getting no bigger than 5000, incrementing by 1000
for (let i = 1000; i <= 5000; i = i + 1000){
    loopDiv.append(i + ", ");
}