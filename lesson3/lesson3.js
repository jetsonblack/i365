/*
-=======================================-
lesson3.js
-=======================================-
*/
'use strict';

/*
class work section
=======================================
*/

/*
Practice Poblems
=======================================
*/

// PROBLEM 3.1
/** Answers if there is a discount
 * @param { number } age
 * @return { string }
 */
function checkDiscount(age = 18) {
    if (age <= 22) {
        return "you qualify!"
    }
    return "you don't qualify";
}
let check20 = checkDiscount(20);
let check45 = checkDiscount(45);
let checkNull = checkDiscount();

console.log(check20);
console.log(check45);
console.log(checkNull);

document.getElementById("age20").innerHTML = check20 + " age was 20";
document.getElementById("age45").innerHTML = check45 + " age was 45";
document.getElementById("ageNull").innerHTML = checkNull + " age was null";

// Ternary Operation
// age <= 22 ? return "you qualify" : retrun "you don't qualify";


// PROBLEM 3.2
/** "Prints" out your name a bunch of times
 * @param { string } name
 * @param { number } number
 * @return { string }
 */

function printNames(strName = "jetson", number = 3) {
    for (let i = 0; i < number; i++) {
        console.log(strName);
    }
}
printNames()
printNames("j", 10);

console.log("repeat".repeat(55));

// PROBLEM 3.3
/** Multiplies two numbers
 * @param { number } a
 * @param { number } b
 * @return { number }
 */

// function multiplyNums(a, b) {
//     return a * b;
// }
// multiplyNums(5, 7);

let functionExpression = function multiplyNums(a, b) {
    return a * b;
};
console.log(functionExpression(5, 7));
document.getElementById("funcExpression").innerHTML = functionExpression(5, 7);


let fiveTimesSeven = (a = 5, b = 7) => {
    return a * b;
};
console.log(fiveTimesSeven());
document.getElementById("arrowFunc").innerHTML = fiveTimesSeven();

// PROBLEM 3.4
/** Takes in a string and counts the number of vowels.
 * @param { string } message
 * @return { number }
 */

function countVowels(message) {
    let count = 0;
    // const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']); //
    for (let i = 0; i < message.length; i++) {
        // if (message[i] in VOWELS) {
        // if (VOWELS.includes(message[i])) { //0(n) lookup with a array iteration (includes() -> O(n))
        if (VOWELS.has(message[i])) { //Using a set and has(), this function is O(1) time Operation
            count++
        }
    }
    return count;
}
console.log(countVowels("jetson"));
