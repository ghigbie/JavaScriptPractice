 
var answer; 
annoy2();

 function asnnoy(){
 	answer = prompt("Are we there yet?");

 	if(answer === "yes" || answer === "yeah"){
 		alert("Yay! We finially made it!");
 	}
 	else{
 		annoy();
 	}
 	
 }


 function annoy2(){
 	answer = prompt("Are wer there yet?")

 	while(answer !== "yes" && answer !== "yeah"){
 		annoy2();
 	}
 	
 	alert("Yay! We finially made it!");
 	
 }

//Version 2

function annoy3(){
	answer = prompt("Are wer there yet?")

	while(answer.indexOf("yes") === -1){
		annoy3();
	}

	alert("Yay! We finially made it!");
}
