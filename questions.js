
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("What is your age?");

var nameSentence = "Your full name is " + firstName + " " + lastName + ".";
var ageSentence = "You are " + age + " " + "years old.";

console.log(nameSentence);
console.log(ageSentence);

//ES6 sytax
console.log("//////////////////////")

console.log(`Your full name is ${firstName} ${lastName}`);
console.log(`Your are ${age} years old.`);