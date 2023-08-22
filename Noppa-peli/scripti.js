var noppa1
var yhteensä


function rollDice(){
    var noppa1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1;
    die1.innerHTML = d1;

    yhteensä = yhteensä + d1;
    yhteensä.innerHTML= yhteensä;
    var yhteensä = document.getElementById("yhteensä");
} 