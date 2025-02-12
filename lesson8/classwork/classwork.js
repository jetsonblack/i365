/*
-=======================================-
lesson8.js
-=======================================-
*/
'use strict';

/*
class work section
=======================================
*/

// document.querySelectorAll('.card').forEach( takes-a-function-to-do-something );

// OK, what do we want to do? We want listen for when a card is clicked.
// document.querySelectorAll('.card').forEach((card) => {
//     card.addEventListener('click', handle - the - card);
// });

// Got it, now how do we figure out which card we clicked?
document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', handleCard);
});

function handleCard(event) {
    let currentCard = event.target.closest('h4'); // <h4>Red Panda</h4>
    console.log(currentCard.textContent);  // Red Panda
    // do something with that info
}


/*
Practice Poblems
=======================================
*/