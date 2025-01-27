/*
-=======================================-
lesson5.js
-=======================================-
*/
'use strict';

/*
class work section
=======================================
*/

// would grab, for example, <div id="main">
let main = document.getElementById('main');
// TAKES THE NAME OF AN ID



// document.querySelector() and document.querySelectorAll()
// THE PREFERRED WAY TO SELECT HTML ELEMENTS, MOST OF THE TIME.

// The querySelector options are brilliant because you can select any HTML that you can select with a CSS selector. And you know from I360, we can use CSS to select in some very specific ways.
// Returns a NODE LIST of matching elements:
let H3s = document.querySelectorAll('article > h3');
// Returns the FIRST ELEMENT that matches:
let H3 = document.querySelector('h3');
// TAKES ANY CSS SELECTOR EVEN FANCY ONES


// EXAMPLE select and change the first <h1> <a> tag
// document.querySelector("h1 a").textSelected = "NEW TEXT";


// docuemnt.querySelectorAl("img") // results in a immutable list of all the imgs o nthe site.



// insertAdjacentHTML

// There are other variants for this, and we certainly can create, modify and insert nodes through a series of functions modifying the DOM, but this is the easiest and most versatile method.

let message = document.querySelector('.message');
let html = 'This is a secret message.';
message.insertAdjacentHTML('afterbegin', html);

// The first parameter ('afterbegin') is a code word, specifying where to insert relative to the selected element ('message').

// There are four choices for where to insert the HTML:

//     beforebegin – insert html immediately before element
//     afterbegin – insert html into element, at the beginning
//     beforeend – insert html into element, at the end
//     afterend – insert html immediately after element

// This is where they insert, if we were inserting based on a DIV element:

// 'beforebegin'
//     <div>
//         'afterbegin'
//             CONTENT
//         'beforeend'
//     </div>
// 'afterend'






/*
Practice Poblems
=======================================
*/