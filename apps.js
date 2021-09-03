const btnCalculate = document.querySelector(".btn-calculate");
const dateOfBirth = document.querySelector(".date-of-birth");
const luckyNumber = document.querySelector(".lucky-number");
const output = document.querySelector(".output");
function checkLuck(sum, luckyNumber){
  if(sum%luckyNumber === 0){
    showMessage("Your birthday is lucky");
  } else {
    showMessage("Your birthday is not lucky");
  }
}

function showMessage(msg){
  output.innerText = msg;
}
function luckCalculate(){
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if(luckyNumber.value > 0){
    checkLuck(sum, luckyNumber.value);
  } else{
    showMessage("Enter Positive value.")
  }
  
}

function calculateSum(dob){
  dob = dob.replace(/-/g, "");
  let sum = 0;
  for(let i = 0; i < dob.length; i++){
    sum = sum +  Number(dob.charAt(i));
  }
  return sum;
}

btnCalculate.addEventListener('click', luckCalculate);