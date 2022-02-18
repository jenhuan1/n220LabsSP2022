//Jennifer Huang
//2/17/2022
//n220

//retrieves div with id "square"
let divSquare = document.getElementById("square");

//defines starting size of div square
let size = 100;

//increases width and height of the div by 10% when div is clicked
function increaseSize() {
    size = 1.1 * size;
    divSquare.style.width = size + "px";
    divSquare.style.height = size + "px";
}