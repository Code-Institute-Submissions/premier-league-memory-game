const badges = document.querySelectorAll(".badge-card");

//Declaring the variables
let hasFlippedCard = false;
let isBoardLocked = true;
let cardOne, cardTwo;
let noOfMatches = 0;

//Funtion to randomize the cards
(function randomizeCards() {
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
    countMatches();
    disableCards();

  } else {
    unflipCards();
  }
}

//Funtion to count matches of cards
function countMatches() {
  noOfMatches = noOfMatches + 1;
  if (foundAllMatches()) {
    setTimeout(function(){
      alert("Congratulations you got all "     + noOfMatches + " matches");
    stopGame();
    },1000);
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

//Funtion to unflip cards at end of game
function unflipAllcards() {
  $(".flip").removeClass('flip');
}

//Timer and start game button
  let timeContainer = $('#timer-value');
  let startButton2 = $('#start-game');
  let timer = 0;
  let maxTime = 60;
  let timeout = null;

  function count() {
    timeout = setTimeout(function () {
      if (timer < maxTime) {
        timer++;
        $(timeContainer).text(timer);
        count();
      } else {
        alert("Time's up! You got " + noOfMatches + " matches");
        startButton2.show();
        stopGame();
      }
    }, 1200);
  }

  //Start game button
  function startGame() {
    badges.forEach((card) => card.addEventListener("click", flipCard));
    if (timeout) {
      clearTimeout(timeout);
    }
    timer = 0;
    $(timeContainer).text(timer);
    startButton2.hide();
    count();
    isBoardLocked = false;
  }

  //Funtion for stopping the game
  function stopGame() {
    if (timeout) {
      clearTimeout(timeout);
      startButton2.show();
    }
    timer = 0; 
    $(timeContainer).text(timer);
    isBoardLocked = true;
    unflipAllcards();
}