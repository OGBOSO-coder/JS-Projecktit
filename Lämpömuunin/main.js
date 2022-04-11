function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  }

  function temperatureConverterC(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = (valNum * 1.8) + 32;
    if (valNum > -273,15) ("error");
  }


