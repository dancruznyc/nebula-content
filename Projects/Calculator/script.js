const smallOutput = document.querySelector(".small-output");
const mainOutput = document.querySelector(".main-output");
const calcBtns = document.querySelectorAll(".control-btns");

calcBtns.forEach((calcBtn) => {
  calcBtn.addEventListener("click", updateDisplay);
});

function updateDisplay(e) {
  const clickedBtn = e.target.innerText;
  const operators = ["X", "+", "-", "&divide;"];
  let displayNum = "";
  let firstNum = 0;
  let secondNum = 0;
  if (clickedBtn === "&divide;") {
    console.log("It works");
  }
  if (clickedBtn === "C") {
    clearCalc();
    return;
  }
  displayNum += e.target.innerText;
  if (mainOutput.innerText === "0") {
    mainOutput.innerText = displayNum;
  } else {
    mainOutput.innerText += displayNum;
  }
}

function clearCalc() {
  mainOutput.innerText = "0";
}
