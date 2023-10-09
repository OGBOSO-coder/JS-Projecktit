var slider = document.getElementById("myRange");
var output = document.getElementById("sliderValue");
var coefficient = 3; // Kertoimen arvo

function updatePrice() {
    var value = parseInt(slider.value);
    var price = value * coefficient;
    output.innerHTML = value + " x " + coefficient + " = " + price;
}

// Asetetaan alkuperäinen arvo ja lasketaan hinta
slider.value = 50; // Voit vaihtaa alkuperäisen arvon tarpeidesi mukaan
updatePrice();

slider.oninput = function() {
    updatePrice();
}
