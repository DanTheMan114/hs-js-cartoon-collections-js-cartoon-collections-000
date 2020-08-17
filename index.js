 var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
 var planeteerCalls = ["earth","wind","fire","water","heart"]

 function dwarfRollCall(dwarves) {  // number one 
   var list = []; // empty list
   dwarves.forEach(function(name, i){
   list.push( i+1 +". " + name + " "); // addes to the list numbers in ascending order.
   });
 return list.join(""); // to give back without a comma.
 }

 function summonCaptainPlanet(planeteerCalls){ //number two 
   var calls = [];
   planeteerCalls.forEach(function(pcs){ //pcs = planteerCallas.
     pcs = pcs.toUpperCase() + "!"; // this uppercases each letter and adds exclamation point.
     calls.push(pcs); // adds to the end of the array.
   });  
   return calls; // give back the array calls
 }

 function longPlaneteerCalls(words) {  // number three.... with a forEach
 let result = false
 words.forEach(function(word){
   if(word.length > 4){ console.log(word)
     result = true;
   }
 })
 return result;

   //for(var i = 0; i < words.length; i++){  // goes through the whole word in the list 
     // if(words[i].length > 4){ //if any items in the words array has more than 4 letters 
       //return true; // 
    // }
   // }
   // return false; // if non is longer the four
 }
 
 function findTheCheese(foods) { // number four
  var cheese = ["camembert", "cheddar", "gouda"]; // list of cheeses 
  // var snacks = ["crackers, chips, gouda"]; 
	for(var i = 0; i < foods.length; i++) { // this loop
		var cheeseType = cheese.indexOf(foods[i]); // we wan
		if(cheeseType !== -1) { // we say -1 to include the zero 
			return foods[i];
		}
	}
	return "no cheese!";
}


