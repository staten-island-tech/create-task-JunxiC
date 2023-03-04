import "../styles/style.css";
import { DOMselectors } from "./DOM";
import { deck } from "./card.js";

function getRandomInt(minInt, maxInt) {
  minInt = Math.ceil(minInt);
  maxInt = Math.floor(maxInt);
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
}

function getCardDealer(draw) {
  if (draw == 1) {
    deck
      .filter((card) => card.cardNumber == 1)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 2) {
    deck
      .filter((card) => card.cardNumber == 2)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 3) {
    deck
      .filter((card) => card.cardNumber == 3)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 4) {
    deck
      .filter((card) => card.cardNumber == 4)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 5) {
    deck
      .filter((card) => card.cardNumber == 5)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 6) {
    deck
      .filter((card) => card.cardNumber == 6)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 7) {
    deck
      .filter((card) => card.cardNumber == 7)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 8) {
    deck
      .filter((card) => card.cardNumber == 8)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 9) {
    deck
      .filter((card) => card.cardNumber == 9)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 10) {
    deck
      .filter((card) => card.cardNumber == 10)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 11) {
    deck
      .filter((card) => card.cardNumber == 11)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 12) {
    deck
      .filter((card) => card.cardNumber == 12)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 13) {
    deck
      .filter((card) => card.cardNumber == 13)
      .forEach((card) => {
        DOMselectors.dealer.insertAdjacentHTML(
          "beforeend",
          `<div class="dealers" id="dealers" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  }
}

function getCardPlayer(draw) {
  if (draw == 1) {
    deck
      .filter((card) => card.cardNumber == 1)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 2) {
    deck
      .filter((card) => card.cardNumber == 2)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 3) {
    deck
      .filter((card) => card.cardNumber == 3)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 4) {
    deck
      .filter((card) => card.cardNumber == 4)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 5) {
    deck
      .filter((card) => card.cardNumber == 5)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 6) {
    deck
      .filter((card) => card.cardNumber == 6)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 7) {
    deck
      .filter((card) => card.cardNumber == 7)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 8) {
    deck
      .filter((card) => card.cardNumber == 8)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 9) {
    deck
      .filter((card) => card.cardNumber == 9)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 10) {
    deck
      .filter((card) => card.cardNumber == 10)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 11) {
    deck
      .filter((card) => card.cardNumber == 11)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 12) {
    deck
      .filter((card) => card.cardNumber == 12)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  } else if (draw == 13) {
    deck
      .filter((card) => card.cardNumber == 13)
      .forEach((card) => {
        DOMselectors.player.insertAdjacentHTML(
          "beforeend",
          `<div class="players" id="players" data-aos="slide-up">
        <img src="${card.image}" alt="Card"></img>
      </div>`
        );
      });
  }
}

//remove button
const remove = {
  remove: function () {
    let buttons = document.querySelectorAll(".buttonholder");
    buttons.forEach((buttons) => {
      buttons.remove();
    });
    },
  };

const bob = {
  next: function(){
  DOMselectors.btns.insertAdjacentHTML(
    "beforeend",
    `<button class="btns btn" id="Next" onClick="window.location.reload()">Play Again?</button>`
  )}
};

// run game
// draw 2 cards for dealer
var draw1 = getRandomInt(1,13);
var draw2 = getRandomInt(1,13);

getCardDealer(draw1);
getCardDealer(draw2);

console.log(draw1);
console.log(draw2);

// draw 2 cards for player 
var draw3 = getRandomInt(1,13);
var draw4 = getRandomInt(1,13);

getCardPlayer(draw3);
getCardPlayer(draw4);

console.log(draw3);
console.log(draw4);

if (draw1 > 10){
  draw1 = 10
}

if (draw2 > 10){
  draw2 = 10
}

if (draw3 > 10){
  draw3 = 10
}

if (draw4 > 10){
  draw4 = 10
}

// if player click "hit", then draw another card
let playerTot = draw3 + draw4;
DOMselectors.Hit.addEventListener("click", function () {
  if (playerTot <= 21){
    var draw5 = getRandomInt(1,13);
  getCardPlayer(draw5);
  if (draw5 > 10){
    draw5 = 10
  }
  playerTot = playerTot + draw5;
  console.log(draw5);
  console.log(playerTot);
  }
  if (playerTot > 21){
  DOMselectors.player.insertAdjacentHTML(
    "beforeend",
    `<h1 class="results">YOU LOSE</h1>`  
)
remove.remove();
bob.next();
} 
  if (playerTot == 21){
  DOMselectors.player.insertAdjacentHTML(
    "beforeend",
    `<h1 class="results">YOU WIN</h1>`
  )
  remove.remove();
  bob.next();
}
});
// if player click "stay", then dealer draw card if their total < 17
let dealerTot = draw1 + draw2;
DOMselectors.Stay.addEventListener("click", function () {
  while (dealerTot < 17){
    var draw6 = getRandomInt(1,13);
    getCardDealer(draw6);
    if (draw6 > 10){
      draw6 = 10
    }
    dealerTot = dealerTot + draw6;
    console.log(draw6);
    console.log(dealerTot);
  }
  if (dealerTot > 21){
    DOMselectors.dealer.insertAdjacentHTML(
      "beforeend",
      `<h1 class="results">YOU WIN</h1>`
  )
  remove.remove();
  bob.next();
} 
  if (playerTot > dealerTot){
    DOMselectors.player.insertAdjacentHTML(
      "beforeend",
      `<h1 class="results">YOU WIN</h1>`
 )
 remove.remove();
 bob.next();
}
 if (playerTot < dealerTot & dealerTot < 21){
  DOMselectors.dealer.insertAdjacentHTML(
    "beforeend",
    `<h1 class="results">YOU LOSE</h1>`
)
remove.remove();
bob.next();
}
if (dealerTot == 21 & dealerTot != playerTot){
  DOMselectors.player.insertAdjacentHTML(
    "beforeend",
    `<h1 class="results">YOU LOSE</h1>`
  )
  remove.remove();
  bob.next();
}
if (playerTot == dealerTot){
  DOMselectors.dealer.insertAdjacentHTML(
    "beforeend",
    `<h1 class="results">YOU TIED</h1>`
)
remove.remove();
bob.next();}
});


