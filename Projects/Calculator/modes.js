const retirementForm = document.querySelector(".retirement-form");
const mortgageForm = document.querySelector(".mortgage-form");
const mortgageOutput = document.querySelector(".mortgage-output");
const retirementOutput = document.querySelector(".retirement-output");

function changeMode(e) {
  const btnClicked = e.target.dataset.mode;
  modeBtns.forEach((modeBtn) => {
    modeBtn.classList.remove("btn-mode-active");
  });
  e.target.classList.add("btn-mode-active");
  if (btnClicked === "mortgage") mortgageMode();
  else if (btnClicked === "retirement") retirementMode();
  else if (btnClicked === "calculator") calculatorMode();
}

function mortgageMode() {
  displays.forEach((display) => {
    display.classList.remove("display-active");
  });
  document.querySelector(".mortgage-display").classList.add("display-active");
}

function retirementMode() {
  displays.forEach((display) => {
    display.classList.remove("display-active");
  });
  document.querySelector(".retirement-display").classList.add("display-active");
}

function calculatorMode() {
  displays.forEach((display) => {
    display.classList.remove("display-active");
  });
  document.querySelector(".basic--display").classList.add("display-active");
}

retirementForm.addEventListener("submit", calcRetirement);
mortgageForm.addEventListener("submit", calcMortgage);

//  c = ((p*r)) * Math.pow((1+r), n) / (Math.pow((1+r), n) - 1)
// https://en.wikipedia.org/wiki/Mortgage_calculator
// P = Principle (Loan Amount)
// r = monthly interest rate ex. 6% = 0.06 / 12
// N = number of monthly payments 30 year loan = 30 * 12

function calcMortgage(e) {
  e.preventDefault();
  const loanAmount = parseFloat(e.target[0].value);
  const monthlyRate = parseFloat(e.target[1].value) / 100 / 12;
  const loanTerm = parseFloat(e.target[2].value) * 12;
  const c =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
    (Math.pow(1 + monthlyRate, loanTerm) - 1);
  const monthlyPayment = c.toFixed(2);
  mortgageOutput.innerText = `${monthlyPayment}`;
}

// Accrued Interest Formula
//https://www.calculatorsoup.com/calculators/financial/compound-interest-calculator.php
//https://www.bizskinny.com/Finance/Compound-Interest/compound-interest-with-monthly-contributions.php

// A = p * Math.pow((1 + (r/n)), (n * t)));
// p = initial principal
// r = expected interest / 100
// n = 12 months
// contributions are calculated
// contributions = (pmt * Math.pow((1 + (r/n)), (n * t))) - 1) / (r/n);

function calcRetirement(e) {
  e.preventDefault();
  const age = parseFloat(e.target[0].value);
  const retirementAge = parseFloat(e.target[1].value);
  const currentSavings = parseFloat(e.target[2].value);
  const monthlySavings = parseFloat(e.target[3].value);
  const expectedInterest = parseFloat(e.target[4].value) / 100;
  const yearsOfSaving = retirementAge - age;
  // console.log(currentSavings, monthlySavings, expectedInterest, yearsOfSaving);
  const startingPrinciple =
    currentSavings * Math.pow(1 + expectedInterest / 12, 12 * yearsOfSaving);
  const contributions =
    (monthlySavings * Math.pow(1 + expectedInterest / 12, 12 * yearsOfSaving) -
      1) /
    (expectedInterest / 12);

  const totalSavings =
    parseFloat(startingPrinciple.toFixed(2)) +
    parseFloat(contributions.toFixed(2));

  retirementOutput.innerText = `${totalSavings}`;
}
