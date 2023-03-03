import "../styles/style.css";
import { DOMselectors } from "./DOM";
import { deck } from "./card.js";

const buttons = {
  createcards: function () {
    deck.forEach((card) => {
      DOMselectors.dealer.insertAdjacentHTML(
        "beforeend",
        `<div class="dealers" data-aos="slide-up">
            <img src="${card.image}" alt="Card"></img>
          </div>`
      );
    });
  },
};

// const twobuttons = {
//   createcards: function () {
//     deck.forEach((card) => {
//       DOMselectors.player.insertAdjacentHTML(
//         "beforeend",
//         `<div class="players" data-aos="slide-up">
//             <img src="${card.image}" alt="Card"></img>
//           </div>`
//       );
//     });
//   },
// };

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(13));

// if (getRandomInt(13) > 1) {
//   DOMselectors.dealer.insertAdjacentHTML(
//     "beforeend",
//     `<div class="dealers" data-aos="slide-up">
//         <img src="" alt="Card"></img>
//       </div>`
//   );
// }

if (getRandomInt(13) == 2) {
  const result = deck
    .filter((card) => card.cardNumber == 1)
    .forEach((card) => {
      DOMselectors.dealer.insertAdjacentHTML(
        "beforeend",
        `<div class="dealers" data-aos="slide-up">
      <img src="${card.image}" alt="Card"></img>
    </div>`
      );
    });
}

// console.log(twobuttons);

// twobuttons.createcards();

// console.log(buttons);

// buttons.createcards();