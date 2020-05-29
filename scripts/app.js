const badges = document.querySelectorAll(".badge-card");

//Declaring the variables
let hasFlippedCard = false;
let isBoardLocked = true;
let cardOne, cardTwo;
let noOfMatches = 0;

//Funtion to stuffle the cards
(function shuffle() {
  badges.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 16);
    card.style.order = ramdomPos;
  });
})();

badges.forEach((card) => card.addEventListener("click", flipCard));

//Funtion to flip the cards
function flipCard() {
  if (isBoardLocked) return;
  if (this === cardOne) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    cardOne = this;
    return;
  }

  cardTwo = this;
  isBoardLocked = true;

  checkForMatch();
}

//Funtion to check for matches
function checkForMatch() {
  let isMatch = cardOne.dataset.framework === cardTwo.dataset.framework;

  if (isMatch) {
    disableCards();
    countMatches();
  } else {
    unflipCards();
  }
}

//Funtion to count matches of cards
function countMatches() {
  noOfMatches = noOfMatches + 1;
  if (foundAllMatches()) {
    alert("Congratulations you got all " + noOfMatches + " matches");
    stopGame();
  }
}

//Funtion to check if user has found all matches
function foundAllMatches() {
  if (noOfMatches == badges.length / 2) {
    return true;
  } else {
    return false;
  }
}

//Funtion to disbale the cards
function disableCards() {
  cardOne.removeEventListener("click", flipCard);
  cardTwo.removeEventListener("click", flipCard);

  resetBoard();
}

//Funtion to unflip the cards
function unflipCards() {
  setTimeout(() => {
    cardOne.classList.remove("flip");
    cardTwo.classList.remove("flip");

    //time to flip card back over
    resetBoard();
  }, 900);
}

//Funtion to reset the board
function resetBoard() {
  hasFlippedCard = false;
  isBoardLocked = false;
  cardOne = null;
  cardTwo = null;
}

//Funtion for time
(function () {
  let timeContainer = document.getElementById("timer-value");
  let startButton = document.getElementById("start-game");
  let timer = 0;
  let maxTime = 60;
  let timeout = null;
  function count() {
    timeout = setTimeout(function () {
      if (timer < maxTime) {
        timer++;
        timeContainer.innerText = timer;
        count();
      } else {
        alert("Time's up! You got " + noOfMatches + " matches");
        startButton.style.display = "inline-block";
        stopGame();
      }
    }, 1000);
  }

  //Start game button
  function startGame() {
    if (timeout) {
      clearTimeout(timeout);
    }
    timer = 0;
    timeContainer.innerText = timer;
    this.style.display = "none";
    count();
    isBoardLocked = false;
    resetBoard();
  }

  //Funtion for stopping the game
  function stopGame() {
    if (timeout) {
      clearTimeout(timeout);
    }
    timer = 0;
    timeContainer.innerText = timer;
    isBoardLocked = true;
  }

  document.getElementById("start-game").addEventListener("click", startGame);
})();
