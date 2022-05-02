var pisteet = 0;

var Tehostehinta = 15;
var teho = 0 ;

function ostaTehoste () {
    if (pisteet >= Tehostehinta) {
        pisteet = pisteet - Tehostehinta;
        teho = teho + 1;
        Tehostehinta = Math.round(Tehostehinta * 1,15);

        document.getElementById("pisteet").innerHTML= pisteet;
        document.getElementById("tehostehinta").innerHTML = Tehostehinta;
        document.getElementById("teho").innerHTML = teho;
    }
}



function LisaaPisteet(maara) {
    pisteet = pisteet + maara;
    document.getElementById("pisteet").innerHTML= pisteet;
}