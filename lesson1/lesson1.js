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
let result = `Hello ${NAME}!, you are ${age} years old`;
document.getElementById("result").innerHTML = result;


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

/*
THE ABOVE SECTION IS JUST MESSING AROUND!
-=======================================-
THE BELOW CODE IS POSSIBLY A GAME
*/