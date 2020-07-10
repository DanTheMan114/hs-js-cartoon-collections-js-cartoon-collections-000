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

 function longPlaneteerCalls(words) {  // number three 
   for(var i = 0; i < words.length; i++){  // goes through the whole word list 
     if(words[i].length > 4){ //if any items in the words array has more than 4 letters 
       return true; // 
     }
   }
   return false; // if non is longer the four
 }
 
 function findTheCheese (foods) {
  var cheese = ["camembert", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
		var cheeseType = cheese.indexOf(foods[i]);
		if(cheeseType !== -1) {
			return foods[i];
		}
	}
	return "no cheese!";
}


