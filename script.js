let date = document.querySelector("#birthday");
let luckyNumber = document.querySelector("#lucky_digit");
let checkButton = document.querySelector("#check_btn");
let result = document.querySelector("#message");
let reloadButton = document.querySelector("#resetBtn");

checkButton.addEventListener("click", luckChecker);

reloadButton.addEventListener("click", refresh);

function refresh() {
  window.location.reload();
}

function luckChecker(e) {
  e.preventDefault();
  result.textContent = "";
  let bday = date.value;
  let total = sumCalculate(bday);
  if (bday && total) {
    if (total % luckyNumber.value === 0) {
      result.textContent = "Yayyy U are luckey as Hellll";
    } else {
      result.textContent = "Well no issues, you can create your own luck";
    }
  } else {
    result.textContent = "Give both inputs...";
  }
}

function sumCalculate(dob) {
  let bdayString = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < bdayString.length; i++) {
    sum += parseInt(bdayString.charAt(i));
  }
  return sum;
}
