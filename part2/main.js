function lisaKaveri() {

<<<<<<< HEAD
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
=======
lomake.addEventListener('submit', uusiKaveri)
itemList.addEventListener('click', iteminKlikkaus)
jarjestys.addEventListener('click', jarjesta)

const kaverit = [];

function uusiKaveri(event){

    event.preventDefault()

    let kaverinNimi = document.querySelector('#main input[type="text"]').value;
    
    if(kaverinNimi.length < 1){
        alert('Pitää antaa nimi')
        return;
    }

    kaverit.push(kaverinNimi)

    tulostaKaverit()

}

function tulostaKaverit(){
    
    document.querySelector('#itemList').innerHTML = ""

    kaverit.forEach(kaveri => {
        let uusiElementti = document.createElement('li')
        let uusiElementtiTeksti = document.createTextNode(kaveri);
        uusiElementti.appendChild(uusiElementtiTeksti)
        uusiElementti.className = 'list-item';
        document.querySelector('#itemList').appendChild(uusiElementti)
    })

    for (let i=0; i < kaverit.length; i++){
        console.log(kaverit[i])
    }


    
}

function iteminKlikkaus(event){
    console.log('Klikkasit listaa')
    console.log(event.target)
    let parentti = event.target.parentElement
    poistaItem(event.target, parentti)
}

function poistaItem(poistettava, elementinParentti){
    elementinParentti.removeChild(poistettava);
}

function jarjesta(event){
    console.log('järjestitlistan');
>>>>>>> e60a599f0577cb3de280506baaca08807939adf2
}