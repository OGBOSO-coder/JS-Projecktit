const lomake = document.forms['formNewItem'];
const itemList = document.getElementById('itemList');
const jarjestys = document.getElementById('btnJarjesta');

lomake.addEventListener('submit', uusiListaElementti)
itemList.addEventListener('click', iteminKlikkaus)
jarjestys.addEventListener('click', jarjesta)

function uusiListaElementti(event){

    event.preventDefault()

    let elementinNimi = document.querySelector('#main input[type="text"]').value;
    
    if(elementinNimi.length < 1){
        alert('Pitää antaa nimi')
        return;
    }

    //array tähän
    let uusiElementti = document.createElement('li')
    let uusiElementtiTeksti = document.createTextNode(elementinNimi);
    uusiElementti.appendChild(uusiElementtiTeksti)
    uusiElementti.className = 'list-item';
    document.querySelector('#itemList').appendChild(uusiElementti)
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