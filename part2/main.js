function lisaKaveri() {

    var ul = document.getElementById("lisaLista");
    var nimi = document.getElementById("nimi");
    var li = document.createElement("li");
    li.setAttribute('id', nimi.value);
    li.appendChild(document.createTextNode(nimi.value));
    ul.appendChild(li);
}

function poistaKaveri() {
    var ul = document.getElementById("lisaLista");
    var nimi = document.getElementById("nimi");
    var kappale = document.getElementById(nimi.value);
    ul.removeChild(kappale);
}
function jarjestaKaveri() {
    var lista, i, vaihtaminen, b, pitaaVaihtaa, suu, vaihtalaskeminen = 0;
    lista = document.getElementById("lisaLista");
    vaihtaminen = true;

    suu = "nou";

    while (vaihtaminen) {

        vaihtaminen = false;
        b = lista.getElementsByTagName("LI");

        for (i = 0; i < (b.length - 1); i++) {

            pitaaVaihtaa = false;

            if (suu == "nou") {
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {

                    pitaaVaihtaa = true;
                    break;
                }
            } else if (suu == "nou") {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {

                    pitaaVaihtaa = true;
                    break;
                }
            }
        }
        if (pitaaVaihtaa) {

            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            vaihtaminen = true;

            vaihtalaskeminen++;
        } else {

            if (vaihtalaskeminen == 0 && suu == "nou") {
                suu = "nou";
                vaihtaminen = true;
            }
        }
    }
}