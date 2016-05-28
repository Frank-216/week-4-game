// Create objects for Hero & 3 villains/enemies.  Will Adjust attributes later on. 

// after attack heros attack increases by base power.  Only happens after attack 
//console.log(holder);
// hero.attackPower = hero.attackPower + holder;
// console.log(hero.attackPower);
// var villainHolder = {};
  var yourName;
  var villainName;
  var yourHealth;
  var yourAttack;
  var villainHealth;
	var villainCounterAttack;
	var attackMultiplier;
	console.log(villain1);
	var tracker = true;
	var usedCharacters; 
	var winCounter = 0; // keep track of wins 
	var villainHolder; // Refers to all objects 
$(document).ready(function(){
// all attributes are set
	 var hero = $('#hero');
	 var villain1 = $('#villain1');
	 var villain2 = $('#villain2');
	 var villain3 = $('#villain3');
	 hero.data('value',{ name: "Iron Man", healthPoints:100, attackPower: 6, counterAttackPower:6});
	 //$(".choosenCharacter").append(villain1);
	 villain1.data("value",{ name: "Captain America" , healthPoints:100, attackPower: 4, counterAttackPower:4});
	 villain2.data("value",{ name: 'DeadPool' , healthPoints:60, attackPower: 5, counterAttackPower:5});
	 villain3.data("value",{ name: 'Spiderman' , healthPoints:75, attackPower: 8, counterAttackPower:8});
	 var characterArray = [hero.data("value"), villain1.data('value'), villain2.data("value"), villain3.data("value")];
	 console.log(characterArray);

	 function setVillain (villain){
	 		console.log(villain);
			villainName = villain.name;
			villainHealth = villain.healthPoints;
			villainCounterAttack = villain.counterAttackPower;

			console.log(villainHolder);
			characterNum = characterArray.indexOf(villainHolder);
				console.log(characterNum + " Villion Object");
			characterArray.splice(characterNum,1);
				console.log(characterArray + "Remaining Enemies");
				
	 }
	 
	 function reset(){
	 		//Reset all variables back to zero. 
			 yourName = '';
			 villainName = '';
			 yourHealth = 0;
			 yourAttack = 0;
			 villainHealth = 0;
			 villainCounterAttack = 0;
			 attackMultiplier = 0;
				console.log(villain1);
			 tracker = true;
	 }
	 
	// Set your character
	$('.character').on('click',function(){
		if (tracker){
			//Create a holder for this information 
			villainHolder = $(this).data('value');
			console.log(villainHolder);
			characterNum = characterArray.indexOf(villainHolder);
			console.log(characterNum + " Villion Object");
			characterArray.splice(characterNum,1);
			console.log(characterArray);

			yourName = villainHolder.name;
			console.log(yourName);
			yourHealth = $(this).data('value').healthPoints;
			console.log(yourHealth + " your health")
			yourAttack = $(this).data('value').attackPower;
			console.log(yourAttack + " your attack ");
			attackMultiplier = yourAttack;
			console.log(attackMultiplier);
			tracker = false;//
			characterNum = characterArray.indexOf()
			console.log(characterNum + " Spot in an array");
			$(this).addClass('move');
			$('.choosenCharacter').append($('.move'));
	
			
			// $(".choosenCharacter").append(holder);
			//$(this).removeAttr("character");
		}else{
			//remove object from potential array structures. 
				villainHolder = $(this).data('value');
				
				console.log(characterArray);
				setVillain(villainHolder);
				$(this).addClass('defender');
				$('.defender1').append($('.defender'));
				}
		});

	$('.attack').on('click',function(){
		// if there are still villians to fight continue 

		console.log(characterArray.length +  "Remaining opponents left");
			if(yourHealth > 0 && villainHealth > 0){
				$(".textInput").html('');
				console.log(yourHealth + "your health " + villainHealth + " villain health");
				console.log(yourAttack + "your attack " + villainCounterAttack + "villainCounterAttack" );
				villainHealth = villainHealth - yourAttack;
				yourHealth = yourHealth - villainCounterAttack;
				$(".textInput").html(function(){
					var entry = "<p><h2>" + "You attacked " + villainName + " for " + yourAttack +"points of damage" +'</h2></p>';
					var secondEntry = "<p><h2>" + villainName + " Attacked you for " + villainCounterAttack +"points of damage" +'</h2></p>';
					return entry + secondEntry;
					})
				//Increase attack every attack 
				yourAttack = yourAttack + attackMultiplier;
			
			}else if(yourHealth < 0){
				$('.textInput').html('YOU LOST !!!');
				reset();
			}else {
				if(winCounter === 3){
					alert ( "you win!");
				}else{
					winCounter ++;//Raise Win Counter 
				//call down new villain. 
				$('.textInput').html('<p><h2>You won Round '+ winCounter + "! Choose Your next Opponent</h2></p>");
				// move next available element from array into the villain box. 

				//villainHolder = characterArray[Math.floor(Math.random()* characterArray.length)];
				//characterNum = characterArray.indexOf(villainHolder);
				//console.log(characterNum);
				//setVillain(villainHolder);
				$('.defender').html('');
				}
				
			}// CLose Else statement to recall villians

		
		
		
	})

	
})

