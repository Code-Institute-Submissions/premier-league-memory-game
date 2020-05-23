const badges = document.querySelectorAll(".badge-card");

//Declaring the variables
let hasFlippedCard = false;
let lockBoard = false;
let cardOne, cardTwo;

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
  if (lockBoard) return;
  if (this === cardOne) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    cardOne = this;
    return;
  }

  cardTwo = this;
  lockBoard = true;

  checkForMatch();
}

//Funtion to check for matches
function checkForMatch() {
  let isMatch = cardOne.dataset.framework === cardTwo.dataset.framework;
  isMatch ? disableCards() : unflipCards();
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
  [hasFlippedCard, lockBoard] = [false, false];
  [cardOne, cardTwo] = [null, null];
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
        alert("Time's up!");
        startButton.style.display = "inline-block";
      }
    }, 1000);
  }

  //Start and End game buttons
  function endGame() {
    clearTimeout(timeout);
    startButton.style.display = "inline-block";
    alert("You completed the game in time!");
  }
  function startGame() {
    if (timeout) {
      clearTimeout(timeout);
    }
    timer = 0;
    timeContainer.innerText = timer;
    this.style.display = "none";
    count();
  }
  document.getElementById("start-game").addEventListener("click", startGame);
  document.getElementById("end-game").addEventListener("click", endGame);
})();
