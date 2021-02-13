var player = {
    name : null,
    isMage: false,
    attack: 15,
    health: 8,
    inventory: ["lantern", "quill"],
    takeDamage: function(damage) {
        alert(this.name + " took " + damage + " points of damage!");
        this.health -= damage;
        alert(this.name + " now has only " + this.health + " amount of health left.");
    }
};
var hasQuill = player.inventory.indexOf("quill") !== -1;

function game() {

    player.name = prompt("What is your name?");

    alert("Oh, dear, we're going to tread in GObLiN territory!");
    alert("I hope we don't get ate.");

    if (chance(1,5)) {
        battle();
    }

    else {
        alert("Huh. Kinda thought we'd fight a goblin.");
    }
}

function chance(numerator, denominator) {
    var randomNum = Math.floor(Math.random() * denominator + 1);

    return randomNum <= numerator;
}

function battle() {
    var goblins = [
        {
            name: "Grabby Goblin",
            health: 2,
            damage: 3
        },
        {
            name: "Floaty Goblin",
            health: 4,
            damage: 4
        },
        {
            name: "DEATH GOBLIN",
            health: 900,
            damage: 1000
        }
    ];

    alert("Oh, no! Goblins! Didn't see this coming!");

    var chosenGoblin = goblins[Math.floor(Math.random() * goblins.length)];
    alert(chosenGoblin.name + " is going to smack ya!");

    while(player.health > 0 && chosenGoblin.health > 0) {
      
        if(chance(3,4)) {
            chosenGoblin.health -= player.attack;
        }

        else {
            player.takeDamage(chosenGoblin.damage);
        }
    }

    if (player.health <= 0) {
        alert("Game Over");
    }

    else return alert("Success!");    
}


//
function add() {
    document.getElementById("add").innerHTML += "something to add.";
    var guineapigClassElements = document.getElementsByClassName("guineapig");

    guineapigClassElements[1].innerHTML += " is a pig";

    var add = document.querySelector(".guineapig");
    // add.innerHTML = "spaceee";
    console.log(add);
}