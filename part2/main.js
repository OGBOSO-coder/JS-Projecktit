const lomake = document.forms['formNewItem'];
const itemList = document.getElementById('itemList');
const jarjestys = document.getElementById('btnJarjesta');

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
}