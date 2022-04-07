//Jennifer Huang
//4/6/2022
//n220

//define IDs as variable
let inputNum = document.getElementById("inputNum");
let dvResult = document.getElementById("dvResult");

//is divisible by 7 or not
function divisibleSeven() {
    let number = Number(inputNum.value);
    if (number % 7 == 0){
        return true;
    }else{
        return false;
    }
}

//function when button is clicked
function divisibilityResult(){ 
    let check = divisibleSeven();
    if(check == true){   
        dvResult.innerHTML = " Is divisible by 7.";
    }else{
        dvResult.innerHTML = " Is not divisible by 7.";
    }
}