const smallOutput = document.querySelector(".small-output");
const mainOutput = document.querySelector(".main-output");
const calcBtns = document.querySelectorAll(".control-btns");
const modeBtns = document.querySelectorAll(".btn-mode");

let prevKeyType;
let integerA = 0;
let integerB = 0;
let currentOperator;
let currentNum = "";

calcBtns.forEach((calcBtn) => {
  calcBtn.addEventListener("click", calculator);
});

modeBtns.forEach((modeBtn) => {
  modeBtn.addEventListener("click", changeMode);
});

function calculator(e) {
  const clickedBtn = e.target.innerText;
  const btnType = e.target.dataset.type;
  const btnKey = e.target.dataset.key;

  if (prevKeyType === "operator" && btnType === "number") {
    mainOutput.innerText = "";
    currentNum = "";
  }

  if (clickedBtn === "C") clearCalc();
  else if (btnType === "operator") operatorBtns(e.target);
  else if (btnType === "number") updateNumber(e.target);
  else if (btnType === "special") specialKeys(btnKey);

  if (btnType === "equals") {
    if (integerA) {
      console.log(currentNum);
      integerB = parseFloat(mainOutput.innerText);
      calculate(integerA, integerB, currentOperator);
    }
  }

  prevKeyType = btnType;
}

function updateNumber(btnPressed) {
  if (
    btnPressed.dataset.key === "period" &&
    mainOutput.innerText.includes(".")
  ) {
    return;
  } else {
    if (mainOutput.innerText === "0") {
      currentNum = btnPressed.innerText;
      mainOutput.innerText = currentNum;
    } else {
      currentNum += btnPressed.innerText;
      mainOutput.innerText = currentNum;
    }
  }
}

function operatorBtns(btnPressed) {
  console.log(currentNum);
  integerA = parseFloat(mainOutput.innerText);
  currentOperator = btnPressed.dataset.key;
}

function clearCalc() {
  mainOutput.innerText = "0";
  currentOperator;
  currentNum = "";
  resetCalc();
}

function specialKeys(btnPressed) {
  if (btnPressed === "backspace") {
    currentNum = currentNum.slice(0, currentNum.length - 1);
    mainOutput.innerText = currentNum;
  } else if (btnPressed === "posNeg") {
    //add remove neg
    if (currentNum.includes("-")) {
      currentNum = currentNum.substring(1);
      mainOutput.innerText = currentNum;
    } else {
      currentNum = "-" + currentNum;
      mainOutput.innerText = currentNum;
    }
  } else if (btnPressed === "percent") {
    currentNum = `${parseInt(currentNum) / 100}`;
    mainOutput.innerText = currentNum;
  }
}

function calculate(firstInt, secondInt, currentOperator) {
  if (currentOperator === "minus") {
    mainOutput.innerText = `${firstInt - secondInt}`;
    resetCalc();
  } else if (currentOperator === "plus") {
    mainOutput.innerText = `${firstInt + secondInt}`;
    resetCalc();
  } else if (currentOperator === "divide") {
    mainOutput.innerText = `${firstInt / secondInt}`;
    resetCalc();
  } else if (currentOperator === "times") {
    mainOutput.innerText = `${firstInt * secondInt}`;
    resetCalc();
  }
  currentNum = mainOutput.innerText;
}

function resetCalc() {
  integerA = integerB;
  integerB = 0;
}
