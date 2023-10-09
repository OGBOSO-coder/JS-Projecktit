














function iteminKlikkaus(event){
    console.log('Klikkasit listaa')
    console.log(event.target)
    let parentti = event.target.parentElement
    poistaItem(event.target, parentti)
}

function poistaItem(poistettava, elementinParentti){
    elementinParentti.removeChild(poistettava);
}