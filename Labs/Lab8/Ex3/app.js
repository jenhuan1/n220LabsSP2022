//Jennifer Huang
//4/7/2022
//n220

//define IDs as variable
let userString = document.getElementById("userString");
let dvResult = document.getElementById("dvResult");

//clean user input
function cleanup(x){
    let endArr = [];
    for(let i = 0; i < x.length; i++) {
        if(!(x[i].includes("#"))) {
            endArr.push(x[i]);
        }
    }
    return endArr;
}

//display cleaned up string
function cleanupResult(){
    let formatText = cleanup(userString.value);
    dvResult.innerHTML = formatText.join("");
}