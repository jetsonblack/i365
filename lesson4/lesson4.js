/*
-=======================================-
lesson4.js
-=======================================-
*/
'use strict';

/*
class work section
=======================================
*/

let num = 255;
// alert(num.toString(16)); // ff base 16 = HEXADECIMAL
// alert(num.toString(2)); // 11111111

// Can write directly with a number using either syntax:
// alert((123456).toString(36));
// alert((123456).toString(36));

console.log('This is a test'.length);
let str = 'JavaScript';
console.log(str[0]);// J
console.log(str[str.length - 1]); // t
console.log(str.at(-1)); // t

'Uppercase'.toUpperCase(); // UPPERCASE
'Lowercase'.toLowerCase(); // lowercase
let strs = 'beads on a string';

// string.split(delimiter, limit)
console.log(str.split(' ')); // [ "beads", "on", "a", "string" ]
console.log(str.split(' ', 3)); // [ "beads", "on", "a" ]

Math.random(); // 0.???? a generated number between 0 and up to but not including 1
Math.max(1, 4, -2, 0, 7); // 7
Math.min(1, 4, -2, 0, 7); // -2

Math.floor(3.5); // 3
Math.ceil(3.5); // 4
Math.round(3.5); // 4
Math.trunc(3.5); // 3

// toFixed is useful when dealing with money
(0.866).toFixed(2) + // "0.87" {string}
    (0.866).toFixed(2); // 0.87 {number}

let emptyList = [];
let flowers = ['peony', 'rose', 'lily'];
flowers[2]; // lily
flowers.at(-1); // lily


// Pop / Push / Shift / Unshift

// Ways to add and remove elements from an array:

//     Pop removes an item from the end
//     Push adds an item to the end
//     Shift removes an item from the start
//     Unshift adds and item to the start

// Because of the way arrays work, Pop and Push are faster interactions than Shift and Unshift.

let gems = ['jade', 'onyx', 'ruby'];

// prints "jade", "onyx", "ruby"
for (let gem of gems) {
    console.log(gem);
}

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"


/*
Practice Poblems
=======================================
*/


// PROBLEM 4.1
let superHeroes = [
    'Super-Man',
    'Wonder Woman',
    'Bat-Man',
    'Iron Man',
    'Captain Marvel',
];
superHeroes.push("Middle School Teacher");
superHeroes[2] = "Spider-Man";
superHeroes.shift();
console.log(superHeroes);
document.getElementById('41').innerHTML = superHeroes;

// PROBLEM 4.2
/** Takes in a letter and returns how many times it appears in a message.
 * @param { string } letter
 * @param { string } string
 * @return { number }
 */

let message =
    'If I cannot do great things, I can do small things in a great way';

function countLetter(letter, string) {
    let count = 0;
    letter = letter.toLowerCase();
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            count++
        }
    }
    return count;
}

let numI = countLetter('i', message);
console.log(numI);
document.getElementById('42').innerHTML = `The amount of I's in the message is ${numI}`;


// PROBLEM 4.3
/** Takes in an array of ingredients and returns as a written list.
 * @param { array } items
 * @return { string }
 */
function makeTacos(items) {
    let itemString = "";
    for (const item of items) {
        if (item == items.at(-1)) {
            itemString += ' and ' + item;
        } else {
            itemString += ', ' + item;
        }
    }
    return itemString;
}

let ingredients = ['lettuce', 'tomatoes', 'ground beef', 'cheese', 'salsa'];
console.log(`For these tacos, we will need ${makeTacos(ingredients)}.`);
document.getElementById('43').innerHTML = `For these tacos, we will need ${makeTacos(ingredients)}.`;


/** Takes in an array of snack and returns a randomly selected snack.
 * @param { array } items
 * @return { string }
 */
function selectSnack(snacks) {
    let randomIndex = Math.floor(Math.random() * snacks.length);
    return snacks[randomIndex];
}

let allSnacks = ['chips', 'cookies', 'popcorn', 'candy', 'pretzels'];
console.log(selectSnack(allSnacks));
document.getElementById('44').innerHTML = selectSnack(allSnacks);


