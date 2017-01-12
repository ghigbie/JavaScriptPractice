 
var answer; 
annoy();

 function annoy(){
 	answer = prompt("Are we there yet?");
 	
 	if(answer === "yes" || answer === "yeah"){
 		alert("Yay! We finially made it!");
 	}
 	else{
 		annoy();
 	}
 	
 }