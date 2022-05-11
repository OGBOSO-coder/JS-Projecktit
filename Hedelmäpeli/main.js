var Rahat = 100;
var panos = 1;


function Pelaa() {
    Rahat = Rahat-panos;

    document.getElementById("Rahat").innerHTML = Rahat;
}

function getRandomNumber() {
    return Math.floor(Math.random()* 2) + 1;
}

function pyorayta() {
    const rulla1 = getElementById('Rulla1');
    const rulla2 = getElementById('Rulla2');
    const rulla3 = getElementById('Rulla3');

    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();

    rulla1.innerHTML = '${num1}';
    rulla2.innerHTML = '${num2}';
    rulla3.innerHTML = '${num3}';

    if (num1 === num2 && num1 === num3) {
        naytaviesti();
    } else {
        piilotaviesti();
    }
}


function naytaviesti() {
    const msg = document.getElementById("voitto-viesti");
    msg.style.display = "block";
}

function piilotaviesti() {
    const msg = document.getElementById("voitto-viesti");
    msg.style.display = "none";
}