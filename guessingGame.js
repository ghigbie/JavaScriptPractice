var magicNumber = 20;
var enteredNumber;
runGame();

function runGame(){
	enteredNumber = Number(prompt("Guess my magic number. Please choose a number."));


	if(enteredNumber === magicNumber){
		alert(`You guessed the magic number of ${enteredNumber}!!!`);
	}
	else if(enteredNumber < magicNumber){
		alert(`Please choose a number that is greater than ${enteredNumber}`);
		runGame();
	}
	else{
		alert(`Please choose a number that is less than ${enteredNumber}`);
		runGame();
	}

}


