let buttonNew = document.querySelectorAll(".button");
let restartBtn = document.querySelector(".restart");
// restartBtn.addEventListener("click", )

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/// player x plays first ///
let playerX = true;
let count = 0;

/// disable all buttons ///
const disableButton = function() {
  buttonNew.forEach((element) => (element.disabled = true));
}
/// enable all buttons for new game ///
const enableBtn = function() {
  buttonNew.forEach((element) => {
    element.innerText = "";
    element.disabled = "false";
  })
}

const drawFunc = function() {
  disableButton();
  window.alert("It's a draw!");
}

/// executed when a player wins ///
const WinFunc = (letter) => {
  disableButton();
  if (letter == "X") {
    window.alert = "Player X Wins!"
  } else {
    window.alert = "Player O Wins!"
  }
};

/// win logic ///
const winCheck = function () {
  /// loop through all win patterns ///
  for (let i of winConditions) {
    let [element1, element2, element3] = [
      buttonNew[i[0]].innerText,
      buttonNew[i[1]].innerText,
      buttonNew[i[2]].innerText
    ];
    /// check if elements are filled ///
    /// if 3 wmpy elements are same and would give win ///
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        WinFunc(element1);
      }
    }
  }
};

/// display x/o on click ///
buttonNew.forEach(function (element) {
  element.addEventListener("click", function () {
    if (playerX) {
      playerX = false;
      /// display x ///
      element.innerText = "X";
      element.disabled = true;
    } else {
      playerX = true;
      /// display y ///
      element.innerText = "O";
      element.disabled = true;
    }
    /// increment count on each click ///
    count += 1;
    if (count === 9) {
      drawFunc();
    }
    winCheck();
  });
});
