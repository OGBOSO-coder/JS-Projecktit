var pisteet = 0;

var TehosteHinta = 15;
var teho = 0 ;

function ostaTehoste () {
    if (pisteet >= TehosteHinta) {
        pisteet = pisteet - TehosteHinta;
        teho = teho + 1;
        TehosteHinta = Math.round(TehosteHinta * 1,15);

        document.getElementById("pisteet").innerHTML= pisteet;
        document.getElementById("tehostehinta").innerHTML = TehosteHinta;
        document.getElementById("teho").innerHTML = teho;
    }
}



function LisaaPisteet(maara) {
    pisteet = pisteet + maara;
    document.getElementById("pisteet").innerHTML= pisteet;
}