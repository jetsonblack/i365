/*
-=======================================-
wordle.js
-=======================================-
*/
'use strict';
import { wordleWords } from "./wordle-list.js"; // choose from this list
import { fullList } from "./full-list.js"; //valid inputs
// globals
let wordleWord = [];
let currentGuess = [];
const currentTile = {
    row: 1,
    tile: 1,
};

function chooseWord() {
    wordleWord = wordleWords[Math.ceil(Math.random() * wordleWords.length)].split('');
    console.log(wordleWord.toString());
}

function keyClicked(event) {
    let currentKey = event.currentTarget.id;

    switch (currentKey) {
        case 'Enter':
            console.log('ENTER TILE:', currentKey);
            break;

        case 'backspace':
            console.log('BACKSPACE TILE:', currentKey);
            backSpace();
            break;

        default:
            // console.log('ALPHABET TILE:', event.currentTarget.id);
            buildGuess(currentKey);
            break;
    }
}
(function () {
    createTiles();
    createKeys();
    chooseWord();
    document.querySelectorAll('.key').forEach((key) => {
        key.addEventListener('click', keyClicked);
    });

    window.addEventListener('keydown', (event) => {
        let regex = /^[a-zA-Z]+$/;
        if (event.key === 'Escape') {
            console.log('ESCAPE KEY:', event.key);
        } else if (event.key === 'Enter') {
            console.log('ENTER KEY:', event.key);
        } else if (event.key === 'Backspace') {
            console.log('BACKSPACE KEY:', event.key);
            backSpace();
        } else if (
            regex.test(event.key) &&
            event.key != 'Shift' &&
            event.key != 'Alt' &&
            event.key != 'Meta' &&
            event.key != 'Tab' &&
            event.key != 'Control' &&
            event.key != 'CapsLock' &&
            !event.key.includes('Arrow')
        ) {
            // console.log('ALPHABET KEY:', event.key);
            buildGuess(event.key);
        } else {
            console.log('not a valid key');
        }
    });
})();
function createTiles(range = 6) {
    //     // <div class="row-1">
    //     <div class="tile" data-tile="1"></div>
    //     <div class="tile" data-tile="2"></div>
    //     ...
    // </div>
    // ...
    for (let i = 1; i <= range; i++) {
        let tileHTML = `<div class="row-${i}">
        <div class="tile" data-tile="1"></div>
        <div class="tile" data-tile="2"></div>
        <div class="tile" data-tile="3"></div>
        <div class="tile" data-tile="4"></div>
        <div class="tile" data-tile="5"></div>
        </div>`;
        document.querySelector(".tiles").insertAdjacentHTML('beforeend', tileHTML);
    }

}
function createKeys() {
    //     <!-- Need three rows of keys in the keyboard -->
    // <div class="row-1" id="row-1"> 
    //     <!-- if it's the Enter key we additionally need class .enter -->
    //     <div class="key enter" id="enter">Enter</div>
    //     <!-- if it's the Backspace key we don't need an ID -->
    //     <div class="key" id="backspace">Backspace</div>
    //     <!-- if it's an alphabet key, we need an ID (or you could use data- properties here) -->
    //     <div class="key" id="q">Q</div>
    // </div>

    const qwerty = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        [
            'ENTER',
            'Z',
            'X',
            'C',
            'V',
            'B',
            'N',
            'M',
            `<span class="material-symbols-outlined">backspace</span>`,
        ],
    ];
    let keyHTML = ``;
    qwerty.forEach((row, index) => {
        keyHTML = `<div class="row-${index}" id="row-${index}">`;
        for (let i = 0; i < row.length; i++) {
            let insertHTML = ``;
            if (row[i] == 'ENTER') {
                insertHTML += '<div class="key enter" id="enter">Enter</div>';
            }
            else if (row[i] == `<span class="material-symbols-outlined">backspace</span>`) {
                insertHTML += '<div class="key" id="backspace">Backspace</div>';
            }
            else {
                insertHTML += `<div class="key" id="${row[i].toLowerCase()}">${row[i]}</div>`;
                // console.log(insertHTML);

            }
            keyHTML += insertHTML;
        }
        keyHTML += `</div>`;
        document.querySelector('.keys').insertAdjacentHTML('beforeend', keyHTML);
    })
}
function buildGuess(letter) {
    // as long as currentGuess isn't 5-letters long, add a letter to a tile
    if (currentGuess.length < 5) {
        currentGuess.push(letter.toLowerCase());
        addTile(letter.toLowerCase());
    }
    // console.log(currentGuess);
}
function addTile(letter) {
    // select the current row and tile (keep track in a global)
    // add a CAPTIAL letter as text content into the tile (interface)
    // add the .active class to the tile (interface)
    // update which tile we are on
    // let tile = document.querySelector(`.row-${currentTile.row} [data-tile='${currentTile.col}']`);
    let row = document.querySelector(`.row-${currentTile.row}`);
    let tile = row.querySelector(`[data-tile="${currentTile.tile}"]`);
    // console.log(tile);
    if (tile) {
        tile.insertAdjacentHTML('afterbegin', letter);
        tile.classList.add('active');
        currentTile.tile += 1;
        // console.log(currentTile);
    }
}
function backSpace() {
    console.log(currentGuess);
    if (currentGuess.length > 0) {
        currentGuess.pop();
        currentTile.tile -= 1;
        let row = document.querySelector(`.row-${currentTile.row}`);
        let tile = row.querySelector(`[data-tile="${currentTile.tile}"]`);
        tile.textContent = "";
        tile.classList.remove('active');

    }

}
function deleteTile() {
    // grab the row and PREVIOUS tile added
    // empty out the content of the tile, remove the active class
}