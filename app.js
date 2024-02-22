let buttons = document.querySelectorAll(".button");
let winnerMsg = document.querySelectorAll(".winner-msg");
let winnerMsgText = document.querySelector(".winnerMsgText");
let resetButton = document.querySelector(".resetButton");
let newGameButton = document.querySelector(".newGameButton");
let turnO = true;
//---------------------------------------------------------------
//winning patterns
let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// checkWinner()
let checkWinner = () => {
  for (let pattern of winningPatterns) {
    let val1 = buttons[pattern[0]].innerText;
    let val2 = buttons[pattern[1]].innerText;
    let val3 = buttons[pattern[2]].innerText;
    if (
      val1 != "" &&
      val2 != "" &&
      val3 != "" &&
      val1 === val2 &&
      val2 === val3
    ) {
      return val1;
    }
  }
};
let disableAllButtons = () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });
};
let enableAllButtons = () => {
  buttons.forEach((button) => {
    button.disabled = false;
  });
};
let clearAllButtons = () => {
  buttons.forEach((button) => {
    button.innerText = "";
  });
};

// let checkDraw = () => {
//   for (let i = 0; i < 9; i++) {
//     if (buttons[i].innerText === "") {
//       return true;
//     }
//   }
//   return false;
// };
let checkGridFull = () => {
  let isFull = true;
  buttons.forEach((button) => {
    if (button.innerText === "") {
      isFull = false;
    }
  });
  return isFull;
};
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (turnO) {
      button.innerText = "O";
      turnO = false;
    } else {
      button.innerText = "X";
      turnO = true;
    }
    button.disabled = true;
    if (checkWinner()) {
      disableAllButtons();
      winnerMsg[0].classList.remove("hide");
      // newGameButton.classList.remove("hide");
      let winner = checkWinner();
      winnerMsgText.innerText = `${winnerMsgText.innerText} ${winner}`;
    } else {
      if (checkGridFull()) {
        console.log("draw");
        winnerMsg[0].classList.remove("hide");
        winnerMsgText.innerText = `Game Draw..`;
      }
    }
  });
});
resetGame = () => {
  turnO = true;
  winnerMsg[0].classList.add("hide");
  enableAllButtons();
  clearAllButtons();
  winnerMsgText.innerText = "Winner is";
};
resetButton.addEventListener("click", resetGame);

newGameButton.addEventListener("click", resetGame);
