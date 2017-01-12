 
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


 function annoy2(){

 	while(answer !== "yes"){
 		answer = prompt("Are we there yet?");
 		annoy2();
 	}
 	
 	alert("Yay! We finially made it!");
 	
 }


