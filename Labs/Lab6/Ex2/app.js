//Jennifer Huang
//2/24/2022
//n220

//retrieves div with id "beep"
let beepDiv = document.getElementById("beep");

//loop that iterates through first 25 numbers
for (let i = 1; i <= 25; i++) {
    //if iterand is divisible by 3 and 5 - beepbop
    //if iterand is divisible by just 3 - beep
    //if iterand is divisible by just 5 - bop
    if (i % 3 == 0 && i % 5 == 0) {
        beepDiv.append("beepbop, ")
    } else if (i % 3 == 0) {
        beepDiv.append("beep, ");
    } else if (i % 5 == 0) {
        beepDiv.append("bop, ");
    } else {
        beepDiv.append(i + ", ");
    }
}