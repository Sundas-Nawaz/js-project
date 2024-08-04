"use strict"; //treat all js code as a newer version
//alert ("hi"); // we are using node js not browser so its not working
let number = null;

console.log(typeof number);
console.log(typeof null); //object
console.log(typeof undefined);

const arraysOfNames = ["sundas", "sana","zara"];

console.log(typeof arraysOfNames); //object

const myFunction = function hiTo() {

    console.log("i am inside a function");
    
}

console.log(typeof myFunction); //function

let myObj = {
    name: "sundas",
    age: 30
}

console.log(typeof myObj); //object


const yourName = new String(' sundas.  nawaz')
// console.log(yourName.toUpperCase());
// console.log(yourName.trim());
// console.log(yourName.charAt(2));
// console.log(yourName.indexOf('s'));
// console.log(yourName.substring(0,3));
// console.log(yourName.trimStart());
//substring even if we use - value it will ignore and start with 0
//replace
//slice we can use - values

// const url = "https://sundas.com%20nawaz"
// console.log(url);
// console.log(url.replace('%20','-'))
// console.log(url.includes('sun'));

const strgtoarry = "sun-das-na-waz"

console.log(strgtoarry.split('-'))
