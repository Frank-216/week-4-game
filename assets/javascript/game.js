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
	var characterNum; 
	var winCounter = 0; // keep track of wins 

$(document).ready(function(){
// all attributes are set
	 var hero = $('#hero');
	 var villain1 = $('#villain1');
	 var villain2 = $('#villain2');
	 var villain3 = $('#villain3');
	 hero.data('value',{ name: "Luke", healthPoints:100, attackPower: 6, counterAttackPower:6});
	 //$(".choosenCharacter").append(villain1);
	 villain1.data("value",{ name: "Deadpool" , healthPoints:100, attackPower: 4, counterAttackPower:4});
	 villain2.data("value",{ name: "Spiderman" , healthPoints:60, attackPower: 5, counterAttackPower:5});
	 villain3.data("value",{ name: 'Captain America' , healthPoints:75, attackPower: 8, counterAttackPower:8});
	 var characterArray = [hero, villain1, villain2, villain3];

	 function reset(){
	 		//Reset all var back to zero. 
	 		
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
			yourName = $(this).data('value').name;
			console.log(yourName);
			yourHealth = $(this).data('value').healthPoints;
			console.log(yourHealth + " your health")
			yourAttack = $(this).data('value').attackPower;
			console.log(yourAttack + " your attack ");
			attackMultiplier = yourAttack;
			console.log(attackMultiplier);
			tracker = false;//
			characterNum = characterArray.indexOf()
			console.log(characterNum);
			$(this).addClass('move');
			$('.choosenCharacter').append($('.move'));
			characterArray.splice
			
			// $(".choosenCharacter").append(holder);
			//$(this).removeAttr("character");
		}else{
				console.log($(this).data('value').name);
	 			villainName = $(this).data('value').name;
	 				console.log(villainName);
				villainHealth = $(this).data('value').healthPoints;
					console.log(villainHealth +" villain health");
				villainCounterAttack = $(this).data('value').counterAttackPower;
					console.log(villainCounterAttack +"villain Counter")
				$(this).addClass('defender');
				$('.defender1').append($('.defender'));		}
		});
		


		

	$('.attack').on('click',function(){
		if(yourHealth > 0 && villainHealth > 0){
			$(".textInput").html('');
			console.log(yourHealth + "your health " + villainHealth + " villain health");
			console.log(yourAttack + "your attack " + villainCounterAttack + "villainCounterAttack" );
			villainHealth = villainHealth - yourAttack;
			yourHealth = yourHealth - villainCounterAttack;
			$(".textInput").html(function(){
				var entry = "<p>" + "You attacked " + villainName + " for " + yourAttack + '</p>';
				var secondEntry = "<p>" + villainName + " Attacked you for " + villainCounterAttack + '</p>';
				return entry + secondEntry;
				})
			console.log(yourAttack);
			yourAttack = yourAttack + attackMultiplier;
			
		}else if(yourHealth < 0){
			$('.textInput').html('YOU LOST !!!');
			reset();
		}else {
			winCounter ++;//Raise Win Counter 
			//call down new villain. 
			$('.textInput').html('You won Round '+ winCounter + " your next opponent is enterintg the stage");
			// moe next available element from array into the villian box. 



		}
		
	})

	
})

