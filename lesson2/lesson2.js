/*
-=======================================-
Lesson2.js
-=======================================-
*/
'use strict';

/*
class work section
=======================================
*/

// converting strings to numbers
let num2 = '2';
let num32 = '32';
let num64 = '64';
let sumOfNums = parseInt(num2) + parseInt(num32) + parseInt(num64);
let sumOfNums2 = +num2 + num32 + num64;
// condition ? ifTrue : ifFalse


/*
Practice Poblems
=======================================
*/


/** PROBLEM 2.1
 * Returns average of two numeric values
 * @param num1
 * @param num2
 * @return {number} average
 */
function getAverage(num1, num2) {
    // Choose a method to convert strings to numbers
    let average = (parseInt(num1) + parseInt(num2)) / 2;
    // Try 3 different ways: reset the type, unary, .parseInt()
    // let average = (Integer(num1) + Integer(num2)) / 2;
    // let average = (+num1 + +num2)/2
    return average;
}

let val1 = prompt('Get the average: provide a value');
let val2 = prompt('Get the average: provide a second value');
let avgResult = `The average of ${val1} and ${val2} is ${getAverage(val1, val2)}.`;
console.log(avgResult);
document.getElementById("avgResult").innerHTML = avgResult

/** PROBLEM 2.2/2.3
 * Returns what's for dinner
 * @param {string} day
 * @return {string}
 */
function whatsForDinner(day) {
    // 'Monday' "It's meatless Monday!"
    // 'Tuesday' "It's taco Tuesday!";
    // 'Wednesday' 'Thursday' 'Leftovers!'
    // 'Friday' "It's Friday, that means pizza!"
    // 'Saturday' 'Sunday' "It's the weekend. Let's go out!"
    switch (day) {
        case 'Monday':
            return "Its Meatless Monday!";
            break;
        case 'Tuesday':
            return "It's taco Tuesday!";
            break;
        case 'Wednesday':
        case 'Thursday':
            return "Leftovers";
            break;
        case 'Friday':
            return "It's Friday, that means pizza!";
            break;
        case 'Saturday':
        case 'Sunday':
            return "It's the weekend. Lets go out!";
            break;
        default:
            return "You Starve <3";
            break;
    }
}

let dayOfTheWeek = 'Thursday';
let resultFood = whatsForDinner(dayOfTheWeek);
console.log(resultFood);
document.getElementById("food").innerHTML = resultFood;

// PROBLEM 2.4
/** Complete the function validPass()
 * @return { boolean }
 */
function validPass() {
    // condition should be a chosen password
    // for this exercise make it a terrible but easy choice
    const badPassword = 'password'
    let userInput;
    while (userInput != badPassword) {
        userInput = prompt("What is the password, dummy")
    }
    return true;
}

if (validPass()) {
    console.log('Login successful.');
}


// PROBLEM 2.5
function countToTen() {
    // log numbers 1 to 10 in the console
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

countToTen();


