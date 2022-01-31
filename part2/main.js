let lomake = document.forms['formNewItem'];
lomake.addEventListener('submit', uusiListaElementti)


















function uusiListaElementti(event){

    event.preventDefault()

    let elementinNimi = document.querySelector('#main input[type="text"]').value;
    
    if(elementinNimi.length < 1){
        alert('Pitää antaa nimi')
        return;
    }

    let uusiElementti = document.createElement('li')
    let uusiElementtiTeksti = document.createTextNode(elementinNimi);
    uusiElementti.appendChild(uusiElementtiTeksti)
    uusiElementti.className = 'list-item';

    document.querySelector('#itemList').appendChild(uusiElementti)
}

