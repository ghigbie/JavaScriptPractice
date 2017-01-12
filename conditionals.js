
var ageAsk = "Please enter your age."
var age = prompt(ageAsk);

if(age < 0){
	alert("You cannot possible be that young!");
	age = prompt(ageAsk);
}

if(age === 21){
	alert("Happy 21st birthday!");
}

if(age % 2 !== 0){
	alert("Your age is an odd number!");
}

if(age % Math.sqrt(age) === 0) {
	alert("Your age is a perfect square!");
}
