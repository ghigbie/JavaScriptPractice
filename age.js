var ageYears = prompt("Please enter your age to find out how long you've been alive.");

var ageDays = ageYears*365.25;
//ES6 syntax

alert(`You've been alive for roughly ${ageDays} days`);

console.log(`You've been alive for roughly ${ageDays} days`);

// javascript performs type coersion with a == but not with === (which have to be of equal type and value)