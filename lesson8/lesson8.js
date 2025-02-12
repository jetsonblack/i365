'use strict';

// JS
const zodiac = [
    {
        animal: 'Rat',
        years: [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
        traits: 'Quick-witted, resourceful, versatile, kind',
    },
    {
        animal: 'Ox',
        years: [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
        traits: 'Diligent, dependable, strong, determined',
    },
    {
        animal: 'Tiger',
        years: [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
        traits: 'Brave, confident, competitive',
    },
    {
        animal: 'Rabbit',
        years: [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
        traits: 'Quiet, elegant, kind, responsible',
    },
    {
        animal: 'Dragon',
        years: [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
        traits: 'Confident, intelligent, enthusiastic',
    },
    {
        animal: 'Snake',
        years: [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
        traits: 'Confident, intelligent, enthusiastic',
    },
    {
        animal: 'Horse',
        years: [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
        traits: 'Animated, active, energetic',
    },
    {
        animal: 'Sheep',
        years: [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
        traits: 'Calm, gentle, sympathetic',
    },
    {
        animal: 'Monkey',
        years: [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
        traits: 'Sharp, smart, curiosity',
    },
    {
        animal: 'Rooster',
        years: [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
        traits: 'Observant, hardworking, courageous',
    },
    {
        animal: 'Dog',
        years: [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
        traits: 'Lovely, honest, prudent',
    },
    {
        animal: 'Pig',
        years: [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031],
        traits: 'Compassionate, generous, diligent',
    },
];


function makeAnimals() {
    // first step is to select HTML where we want to insert animals
    // grab data and then generate the HTMl
    // then insert the HTML into the class "animals"


    //how do we get the animal names and they need to be lowercase
    zodiac.forEach((zodiacAnimal) => {
        let currentAnimal = zodiacAnimal.animal.toLowerCase();
        // let years = zodiacAnimal.years;
        // let traits = zodiacAnimal.traits;
        let animalHTML = `<img data-name="${currentAnimal}" src="images/${currentAnimal}.png" alt="${currentAnimal}" />`;
        document.querySelector('.animals').insertAdjacentHTML('beforeend', animalHTML);
    })
}
makeAnimals();




// when a user clicks a animal (event) => show the animal details 
// in the #details

// we first select all the imgs in the animals class div, then we go through
// each element in the returned array of elements and add a click event handler
// to the element and connect it to the showDetails function in a callback manner

// user callback functions for everything, only use annon functions for single use/simple functions
function showDetails(event) {
    let clickedAnimal = event.target.dataset.name;
    console.log(clickedAnimal);
    //after grabbing the name of the clicked animal, we need to connect to the
    // datbase and then insert HTML into the page based on that.
    // zodiac.forEach((animal) => {
    //     if (clickedAnimal == animal.animal.toLowerCase()) {
    //         let html = `
    //         <h3>${animal.animal}</h3>
    //         <h4>${animal.traits}</h4>
    //         <p>Years: ${animal.years.join(", ")}</p>
    //         `;
    //         document.querySelector('#details').insertAdjacentHTML('beforeend', html);
    //     }
    // }

    let foundAnimal = zodiac.find((element) => element.animal.toLowerCase() == clickedAnimal);
    console.log(foundAnimal);
    let html = `
        <h3>${foundAnimal.animal}</h3>
        <h4>${foundAnimal.traits}</h4>
        <p>Years: ${foundAnimal.years.join(", ")}</p>
        `;
    document.querySelector('#details').insertAdjacentHTML('beforeend', html);
}

function main() {
    makeAnimals();
    document.querySelectorAll('.animals img').forEach((element) => {
        element.addEventListener('click', showDetails);
    });

}
main();




// <!-- <img data-name="rat" src="images/rat.png" alt="rat" />
// <img data-name="ox" src="images/ox.png" alt="ox" />
// <img data-name="tiger" src="images/tiger.png" alt="tiger" />
// <img data-name="rabbit" src="images/rabbit.png" alt="rabbit" />
// <img data-name="dragon" src="images/dragon.png" alt="dragon" />
// <img data-name="snake" src="images/snake.png" alt="snake" />
// <img data-name="horse" src="images/horse.png" alt="horse" />
// <img data-name="sheep" src="images/sheep.png" alt="sheep" />
// <img data-name="monkey" src="images/monkey.png" alt="monkey" />
// <img data-name="rooster" src="images/rooster.png" alt="rooster" />
// <img data-name="dog" src="images/dog.png" alt="dog" />
// <img data-name="pig" src="images/pig.png" alt="pig" /> -->