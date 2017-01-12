
var ageAsk = "Please enter your age."
var age = prompt(ageAsk);

if(age < 0){
	alert("You cannot possible be that young!");
	age = prompt(ageAsk);
}
else if(age === 21){
	alert("Happy 21st birthday!");
}
else if(age % 2 !== 0){
	alert("Your age is an odd number!");
}
