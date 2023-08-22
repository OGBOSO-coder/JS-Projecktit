var pisteet = 0;

var TehosteHinta = 15;
var teho = 1 ;

var boomerit = 0;
var boomerhinta = 20;

var voitto = 300;




function ostaTehoste () {
    if (pisteet >= TehosteHinta) {
        pisteet = pisteet - TehosteHinta;
        teho = teho + 1;
        TehosteHinta = Math.round(TehosteHinta * 1.5);

        document.getElementById("pisteet").innerHTML= pisteet;
        document.getElementById("tehostehinta").innerHTML = TehosteHinta;
        document.getElementById("teho").innerHTML = teho;
    }   else { 
		alert("Ei ole tarpeeksi pisteitä!") 
	}
}


function ostaboomer() {
    if (pisteet >= boomerhinta) {
        pisteet = pisteet - boomerhinta;
        boomerit = boomerit + 1;
        boomerhinta = Math.round(boomerhinta * 1.5);

        document.getElementById("pisteet").innerHTML= pisteet;
        document.getElementById("boomerhinta").innerHTML = boomerhinta;
        document.getElementById("boomerit").innerHTML = teho;
    }   else { 
		alert("Ei ole tarpeeksi pisteitä!") 
	}
}



function LisaaPisteet(maara) {
    pisteet = pisteet + maara * teho;
    document.getElementById("pisteet").innerHTML= pisteet;
    if (pisteet >= voitto) 
	{
		document.getElementById("Voitit pelin").innerText = "Voitit"
	}
}

setInterval(function() {
	pisteet = pisteet + teho;
	pisteet = pisteet + boomerit * 3;
	document.getElementById("pisteet").innerHTML= pisteet;
} , 3000);

function increment() {
	if (pisteet >= voitto) 
	{
		document.getElementById("Voitit pelin").innerText = "Voitit"
	}
}