"use strict";
// alert("Hello World");
// clg is the the shortcut for console.log();
// console.log("This is a Console Log Statement");

function sayHello() {
    alert("Hello World");
}
// sayHello();

const NAME = "Jetson";
let age = calcAge(prompt('give me your birth year'));
let result = `based on my calculations you are ${age} years old! (this might be wrong lmao)`;
document.getElementById("basic-age").innerHTML = result;


function calcAge(byear) {
    var currentTime = new Date()
    var year = currentTime.getFullYear()
    let returnAge = year - byear;
    return returnAge;
}

console.log(1 / 0); // infinity
console.log('somestring' / 2); //NaN
console.log(NaN + 3); // NaN - is sticky (Tyler the Creator)


// PROBLEM 1.1
// Declare two variables, assigning the value of one to the other
// Show value of copied variable in the console.log()
function showValue() {
    let v1 = 'value1'
    let v2 = 'value2'
    v1 = v2
    console.log(v1, v2);
}

showValue();

// PROBLEM 1.2
// Create well-named variables to hold the name of a student,
// the student's GPA in their major,
// and the student's favorite course this semester.
// -   Display as one long string in the console USING CONCATENATION (+).
// -   Example output: "Erika Lee, 3.7, I365 JS"

function showStudent() {
    let sname = 'JETSON';
    let gpa = 3.9;
}

let studentInfo = showStudent();
console.log(studentInfo);

// PROBLEM 1.3
// Rewrite the function and make sure it uses:
// -   Prompts for the three variables
// -   Template literal for the string

function showStudent2() {
    let username = prompt("What is the student's name?");
    let s_age = prompt("What is the student's age?");
    let smajor = prompt("what is the students major?");
    return `${username} is a ${s_age} year old ${smajor} student`;
}
let showStudent2Result = showStudent2();
console.log(showStudent2Result);
document.getElementById("result").innerHTML = showStudent2Result;

// PROBLEM 1.4
// Use variables to set two values.
// -   Try first setting them yourself.
// -   Then try using a prompt. (Does it still work?)
// Display the average of the two values as a string.
// -   Example output: "The average of 2 and 4 is 3."

function getAverage(val1, val2) {
    return ((parseFloat(val1) + parseFloat(val2)) / 2).toString();
}

let avgResult = getAverage(prompt("Give Value 1"), prompt("Give Value 2"))
console.log(avgResult);
document.getElementById("average").innerHTML = avgResult;

// PROBLEM 1.5
// Write a function that takes a temperature in Farenheit (number)
// Returns the temperature converted to Celcius (number)
// -   Example output: "32°F = 0°C"
// PONDER: the prompt returns a string.. you shouldn't need to convert the string
// to a number for your program to work. In JS, can we do math with strings?!?

function calculateCelcius(degF) {
    const cel = (degF - 32) * 5 / 9;
    return `Farenheit: ${degF}, Celcius: ${cel}`;
}

let currentTemp = prompt('What is the current temperature in Farenheit?');
let tempResult = calculateCelcius(currentTemp);
console.log(tempResult);
document.getElementById("temp").innerHTML = tempResult;
/*
THE ABOVE SECTION IS JUST MESSING AROUND!
-=======================================-
THE BELOW CODE IS POSSIBLY A GAME
*/