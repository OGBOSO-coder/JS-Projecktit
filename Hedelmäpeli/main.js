var panos=1;
var rahaa=50;

var lukitseminen=false;

var lock1=false;
var lock2=false;
var lock3=false;
var lock4=false;


var modal = document.getElementById('myModal');

// When the user clicks on <span> (x), close the modal
//modal.onclick = function() {
    //modal.style.display = "none";
//}


function play() {
  if (panos>rahaa) {
    modal.style.display = "block";
    document.getElementById("modalkuva").src = "Kuvat/no-money-color-icon-free-charge-sign-cash-vector-27855581.jpg";
    document.getElementById("image_container").disabled = true;
  }
  rahaa = rahaa - panos
  document.getElementById("rahat").innerHTML = rahaa;

  if (lock1 == true || lock2 == true || lock3 == true || lock4 == true){
    lukitseminen = true;
  } else {
    lukitseminen = false;
}
  if (lock1==false) {
    changeImage("slot1");
  }
  if (lock2==false) {
    changeImage("slot2");
  }
  if (lock3==false) {
    changeImage("slot3");
  }
  if (lock4==false) {
    changeImage("slot4");
  }



  tarkista_voitto();

  lock1=false;
  lock2=false;
  lock3=false;
  lock4=false;

  if (lukitseminen==false) {
    document.getElementById("lukitus1").src = "Kuvat/Padlock-15.png";
    document.getElementById("lukitus1").disabled = false;
    document.getElementById("lukitus2").src = "Kuvat/Padlock-15.png";
    document.getElementById("lukitus2").disabled = false;
    document.getElementById("lukitus3").src = "Kuvat/Padlock-15.png";
    document.getElementById("lukitus3").disabled = false;
    document.getElementById("lukitus4").src = "Kuvat/Padlock-15.png";
    document.getElementById("lukitus4").disabled = false;
  }
  else {
    document.getElementById("lukitus1").src = "Kuvat/lock-icon-11.png";
    document.getElementById("lukitus1").disabled = true;
    document.getElementById("lukitus2").src = "Kuvat/lock-icon-11.png";
    document.getElementById("lukitus2").disabled = true;
    document.getElementById("lukitus3").src = "Kuvat/lock-icon-11.png";
    document.getElementById("lukitus3").disabled = true;
    document.getElementById("lukitus4").src = "Kuvat/lock-icon-11.png";
    document.getElementById("lukitus4").disabled = true;
  }
}
function lukitus(slot_nro) {

  switch(slot_nro) {
    case 1 :
      if (lock1==true) {
        lock1=false;
        document.getElementById("lukitus1").src = "kuvat/Padlock-15.png";
      }
      else {
        lock1=true;
        document.getElementById("lukitus1").src = "Kuvat/lock-icon-11.png";
      }
      break;

    case 2 :
      if (lock2==true) {
        lock2=false;
        document.getElementById("lukitus2").src = "kuvat/Padlock-15.png";
      }
      else {
        lock2=true;
        document.getElementById("lukitus2").src = "Kuvat/lock-icon-11.png";
      }
      break;

    case 3 :
      if (lock3==true) {
        lock3=false;
        document.getElementById("lukitus3").src = "kuvat/Padlock-15.png";
      }
      else {
        lock3=true;
        document.getElementById("lukitus3").src = "Kuvat/lock-icon-11.png";
      }
      break;

    case 4 :
      if (lock4==true) {
        lock4=false;
        document.getElementById("lukitus4").src = "kuvat/Padlock-15.png";
      }
      else {
        lock4=true;
        document.getElementById("lukitus4").src = "Kuvat/lock-icon-11.png";
      }
      break;
    }
  }

  function changeImage(slot) {
    var image = "";
    randInt = Math.floor((Math.random() * 5) + 1);
    console.log(randInt);
  
    switch(randInt) {
        case 1 :
          image = "Kuvat/appelsiini.png";
          break;
        case 2 :
          image = "Kuvat/Kiiwi.png";
          break;
        case 3:
          image = "Kuvat/Omena.png";
          break;
        case 4:
          image = "Kuvat/Meloni.png";
          break;
        case 5:
          image = "Kuvat/Mansikka.png";
          break;
        }
  
    document.getElementById(slot).src = image;
  
  }


function naytaviesti() {
    const msg = document.getElementById("voitto-viesti");
    msg.style.display = "block";
}

function piilotaviesti() {
    const msg = document.getElementById("voitto-viesti");
    msg.style.display = "none";
}

function tarkista_voitto() {
    var kuva1 = document.getElementById("slot1").src;
    var kuva2 = document.getElementById("slot2").src;
    var kuva3 = document.getElementById("slot3").src;
    var kuva4 = document.getElementById("slot4").src;

    if (kuva1 == kuva2 && kuva2 == kuva3 && kuva3 == kuva4) {
        var file_name = kuva1.split('/').pop();
          switch  (file_name) {
            case "Kiiwi.png" :
                  if (panos==1) {
                    rahaa = rahaa + 2;
                  }
                  else if (panos==2) {
                    rahaa = rahaa + 4;
                  }
                  else {
                    rahaa = rahaa + 6;
                  }
              break;

            case "Omena.png" :
                  if (panos==1) {
                    rahaa = rahaa + 6;
                  }
                  else if (panos==2) {
                    rahaa = rahaa + 8;
                  }
                  else {
                    rahaa = rahaa + 10;
                  }
              break;

            case "Meloni.png" :
                  if (panos==1) {
                    rahaa = rahaa + 4;
                  }
                  else if (panos==2) {
                    rahaa = rahaa + 6;
                  }
                  else {
                    rahaa = rahaa + 8;
                  }
              break;

            case "Mansikka.png" :
                if (panos==1) {
                  rahaa = rahaa + 8;
                }
                else if (panos==2) {
                  rahaa = rahaa + 10;
                }
                else {
                  rahaa = rahaa + 12;
                }
              break;

            case "appelsiini.png" :
                if (panos==1) {
                  rahaa = rahaa + 10;
                }
                else if (panos==2) {
                  rahaa = rahaa + 12;
                }
                else {
                  rahaa = rahaa + 14;
                }
              break;
            }

            document.getElementById("rahat").innerHTML = rahaa;
           }
      }
      function aseta_panos(x) {
        document.getElementById("panos_teksti").innerHTML = x; // panos-teksti muuttuu
        panos = x; // panos-muuttujan uusi arvo
        //document.getElementById("taulukko1").src = "kuvat/voittotaulukko" + x + ".png";  // voittotaulukkokuva vaihtuu
      }
      