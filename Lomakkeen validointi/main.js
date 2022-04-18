function vLomake() {
    var kid = document.rekisterointi.kayttajaid;
    var salasana = document.rekisterointi.salasana;
    var nimi = document.rekisterointi.nimi;
    var osoite = document.rekisterointi.osoite;
    var maa = document.rekisterointi.maa;
    var postinumero = document.rekisterointi.postinumero;
    var sahkoposti = document.rekisterointi.sahkoposti;
    var msukupuoli = document.rekisterointi.msukupuoli;
    var nsukupuoli = document.rekisterointi.nsukupuoli;

    if (kayttajaid_rekisterointi(kid, 5, 12)) {
        if (salasana_rekisterointi(salasana, 7, 12)) {
            if (kkirjaimet(nimi)) {
                if (aakkosnumeerinen(osoite)) {
                    if (maavalitus(maa)) {
                        if (knumeerinen(postinumero)) {
                            if (rekisteroisahkoposti(sahkoposti)) {
                                if (rekisteroisukupuoli(msukupuoli, nsukupuoli)) {
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}


function kayttajaid_rekisterointi(kid, mx, my) {
    var kid_len = kid.value.length;
    if (kid_len == 0 || kid_len >= my || kid_len < mx) {
        alert("Käyttäjä ID ei voi olla tyhjää / pituuden on " + mx + " - " + my);
        kid.focus();
        return false;
    }
    return true;
}

function salasana_rekisterointi(salasana, mx, my) {
    var salasana_len = salasana.value.length;
    if (salasana_len == 0 || salasana_len >= my || salasana_len < mx) {
        alert("Salasana ei voi olla tyhjää / pituuden on " + mx + " - " + my);
        salasana.focus();
        return false;
    }
    return true;
}

function kkirjaimet(nimi) {
    var letters = /^[A-Za-z]+$/;
    if (nimi.value.match(letters)) {
        return true;
    }
    else {
        alert('Nimi on vain aakkosena');
        nimi.focus();
        return false;
    }
}
function aakkosnumeerinen(osoite) {
    var kirjaimet = /^[0-9a-zA-Z]+$/;
    if (osoite.value.match(kirjaimet)) {
        return true;
    }
    else {
        alert('Osoitteen pitää olla vain aakkosnumeerinen');
        osoite.focus();
        return false;
    }
}

function maavalitus(maa) {
    if (maa.value == "Default") {
        alert('Valitse sinun maa');
        maa.focus();
        return false;
    }
    else {
        return true;
    }
}

function knumeerinen(postinumero) {
    var numerot = /^[0-9]+$/;
    if (postinumero.value.match(numerot)) {
        return true;
    }
    else {
        alert('Postinumeron pitää olla numeerinen vain');
        postinumero.focus();
        return false;
    }
}

function rekisteroisahkoposti(sahkoposti) {
    var postinformatio = /^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (sahkoposti.value.match(postinformatio)) {
        return true;
    }
    else {
        alert("Olet syöttänyt väärin sähköpostin");
        sahkoposti.focus();
        return false;
    }
}

function rekisteroisukupuoli(msukupuoli, nsukupuoli) {
    x = 0;

    if (msukupuoli.checked) {
        x++;
    } if (nsukupuoli.checked) {
        x++;
    }
    if (x == 0) {
        alert('Valitse Mies/Nainen');
        msukupuoli.focus();
        return false;
    }
    else {
        alert('Lomakkeen lähetys onnistui');
        window.location.reload()
        return true;
    }
}