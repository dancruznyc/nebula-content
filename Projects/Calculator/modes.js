function changeMode(e) {
  const btnClicked = e.target.dataset.mode;
  modeBtns.forEach((modeBtn) => {
    modeBtn.classList.remove("btn-mode-active");
  });
  e.target.classList.add("btn-mode-active");
  if (btnClicked === "mortgage") mortgageMode();
  else if (btnClicked === "retirement") retirementMode();
  else if (btnClicked === "calculate") calculatorMode();
}
