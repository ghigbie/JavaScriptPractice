 
var answer; 
annoy();

 function annoy(){
 	answer = prompt("Are we there yet?");
 	while(answer !== "yes" || answer !== "yeah"){
 		annoy();
 	}
 }