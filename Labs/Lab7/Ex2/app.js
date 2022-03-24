//Jennifer Huang
//3/24/2022
//n220

//define ID as variable
let txtName = document.getElementById("txtName");

//function when button is clicked
function calculateTip() {
  let price = Number(txtName.value);
  let tip = price * 0.3;
  let total = price + tip;

  let tipRound = tip.toFixed(2);
  let totalRound = total.toFixed(2);

  console.log(`Tip: $${tipRound}. Total: $${totalRound}`);
  txtName.value = "";
}