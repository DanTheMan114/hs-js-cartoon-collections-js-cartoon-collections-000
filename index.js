 var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]
 var planeteerCalls = ["earth","wind","fire","water","heart"]

 function dwarfRollCall(dwarves) {  
   var list = []; 
   dwarves.forEach(function(name, i){
   list.push( i+1 +". " + name + " "); 
   });
 return list.join(""); 
 }

 function summonCaptainPlanet(planeteerCalls){ 
   var calls = [];
   planeteerCalls.forEach(function(pcs){ 
     pcs = pcs.toUpperCase() + "!"; 
     calls.push(pcs); 
   });  
   return calls; 
 }

 function longPlaneteerCalls(words) {  
 let result = false
 words.forEach(function(word){
   if(word.length > 4){ console.log(word)
     result = true;
   }
 })
 return result;

 }
 
 function findTheCheese(foods) { 
  var cheese = ["camembert", "cheddar", "gouda"]; 
  // var snacks = ["crackers, chips, gouda"]; 
	for(var i = 0; i < foods.length; i++) { 
		var cheeseType = cheese.indexOf(foods[i]); 
		if(cheeseType !== -1) { 
			return foods[i];
		}
	}
	return "no cheese!";
}


