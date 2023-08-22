function LämpötilaMuunninC(valNum, decimalPlaces) {
  valNum = parseFloat(valNum);
  var celsius = (valNum - 32) / 1.8;
  document.getElementById("celsius").innerHTML = celsius.toFixed(decimalPlaces);
}

function LämpötilaMuunninF(valNum, decimalPlaces) {
  valNum = parseFloat(valNum);
  if (valNum > -273.15) {
    var fahrenheit = (valNum * 1.8) + 32;
    document.getElementById("Faarit").innerHTML = fahrenheit.toFixed(decimalPlaces);
  } else {
    document.getElementById("Faarit").innerHTML = "error";
  }
}

function MuunnaFaareneiks() {
  var inputValue = document.getElementById("Lisääfarenheit").value;
  var decimalPlaces = parseInt(document.getElementById("decimalPlacesFahrenheit").value);
  LämpötilaMuunninC(inputValue, decimalPlaces);
}

function MuunnaCelssius() {
  var inputValue = document.getElementById("Sijoitacelsius").value;
  var decimalPlaces = parseInt(document.getElementById("decimalPlacesCelsius").value);
  LämpötilaMuunninF(inputValue, decimalPlaces);
}
