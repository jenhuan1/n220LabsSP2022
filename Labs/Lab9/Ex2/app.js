//Jennifer Huang
//4/11/2022
//n220

//define IDs as variable
let txtInput = document.getElementById("txtInput");
let dvResults = document.getElementById("dvResults");
let badWords = ["clear", "water", "tires"];

//checks if user's input has bad words
function checkWords() {
    let words = txtInput.value;
  
    //splits user's input into individual words + makes an array
    let splitWords = words.split(" ");
    badTally = 0;
  
    //loops through user's words + checks against bad words
    for (let i = 0; i < splitWords.length; i++) {
      for (let j = 0; j < badWords.length; j++) {
        if (splitWords[i] == badWords[j]) {
          badTally++;
        }
      }
    }
  
    //displays on page
    dvResults.innerHTML = "found " + badTally + " bad words";
  
    txtInput.value = "";
}