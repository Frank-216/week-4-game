// Create objects for Hero & 3 villians/enemies.  Will Adjust attributes later on. 

// after attack heros attack increases by base power.  Only happens after attack 
//console.log(holder);
// hero.attackPower = hero.attackPower + holder;
// console.log(hero.attackPower);
// var villianHolder = {};
  var yourCharacter = [];
  var villian = [];
  var yourHealth;
  var yourAttack;
  var villianHealth;
	var villianCounterAttack;
	var attackMultiplier;
	console.log(villian1);
	var tracker = true;

$(document).ready(function(){
// all attributes are set
	 var hero = $('#hero');
	 var villian1 = $('#villian1');
	 var villian2 = $('#villian2');
	 var villian3 = $('#villian3');
	 hero.data('value',{healthPoints:100, attackPower: 6, counterAttackPower:6});
	 //$(".choosenCharacter").append(villian1);
	 villian1.data("value",{healthPoints:100, attackPower: 4, counterAttackPower:4});
	 villian2.data("value",{healthPoints:60, attackPower: 5, counterAttackPower:5});
	 villian3.data("value",{healthPoints:75, attackPower: 8, counterAttackPower:8});

	// Set your character
	$('.character').on('click',function(){
		if (tracker){
			yourHealth = $(this).data('value').healthPoints;
			console.log(yourHealth + " your health")
			yourAttack = $(this).data('value').attackPower;
			console.log(yourAttack + " your attack ");
			attackMultiplier = yourAttack;
			console.log(attackMultiplier);
			tracker = false;
			$(this).addClass('move');
			$('.choosenCharacter').append($('.move'));
			// $(".choosenCharacter").append(holder);
			//$(this).removeAttr("character");
		}else{
			villianHealth = $(this).data('value').healthPoints;
			console.log(villianHealth +" Villian health");
			villianCounterAttack = $(this).data('value').counterAttackPower;
			console.log(villianCounterAttack +"villian Counter")
		}
		})
		


		// Select Villian
		

	$('.attack').on('click',function(){
		console.log(yourHealth + "your health " + villianHealth + " villian health");
		console.log(yourAttack + "your attack " + villianCounterAttack + "villianCounterAttack" );
		
		villianHealth = villianHealth - yourAttack;
		console.log(villianHealth);
		yourHealth = yourHealth - villianCounterAttack;
		console.log(yourAttack);
		yourAttack = yourAttack + attackMultiplier;
		$(".textInput").html('');
		$(".textInput").html('you attacked ')
	})

	
})

