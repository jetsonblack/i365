/*
-=======================================-
lesson7.js
-=======================================-
*/
'use strict';

// /*
// class work section
// =======================================
// */
// function stopThat(event) {
//     console.log("EVENT", event);
//     console.log("EVENT TARGET", event.target); // <button class="function">
//     console.log("THIS", this); // <button class="function">
//     alert("owww stop that")
// }
// let buttonFunction = document.querySelector('button.function');
// buttonFunction.addEventListener('click', stopThat); // connects the javascript to the event and HTML
// // using a callback event function
// // the thing clicked on was event.target



// // Action = an arrow function
// // connecting javascript to event handler 
// // whilst creating the function annonomously 
// // meaning that we can't change the event attributes.
// document.querySelector('button.arrow').addEventListener('click', (event) => {
//     console.log("EVENT", event);
//     console.log("EVENT TARGET", event.target); // <button class="function">
//     console.log("THIS", this); // <button class="function">
//     alert('Ouch!');
// });

// // callback functions allow js to skip over execution of a defined function
// // it is only executed when the event is called.



/*
Practice Poblems
=======================================
*/
let buttonNum = document.querySelector("#num");
buttonNum.addEventListener('click', (event) => {
    console.log(Math.ceil(Math.random() * 100));
})


document.querySelector("#go").addEventListener('click', (event) => {
    let formName = document.querySelector('input').value;
    document.querySelector(".nameh2").innerHTML = `Hello ${formName}!`;
    document.querySelector('input').value = "";
})
