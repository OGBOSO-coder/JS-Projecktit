// Add a function to check the user's rank
function isAdminUser() {
  const kirjautunutKayttajaJSON = localStorage.getItem('kirjautunutKayttaja');
  if (kirjautunutKayttajaJSON) {
    const kirjautunutKayttaja = JSON.parse(kirjautunutKayttajaJSON);
    return kirjautunutKayttaja.rank === 'admin';
  }
  return false;
}

document.getElementById("lähetä").addEventListener("click", function (e) {
  e.preventDefault();
  const nimi = document.getElementById("nimi").value;

  // Tarkistetaan, ettei nimi ole tyhjä
  if (nimi.trim() === "") {
    alert("Syötä äänestyksen nimi");
    return;
  }

  // Luo äänestys elementti
  const äänestysElementti = document.createElement("div");
  äänestysElementti.className = "äänestys";

  let äänet = 0; // Lisää äänien laskuri äänestyksen sisälle
  let ei = 0;

  äänestysElementti.innerHTML = `
      <h2>${nimi}</h2>
      <p>Ääniä: <span class="äänien-laskuri">${äänet}</span></p>
      <p>Ei: <span class="ei-laskuri">${ei}</span></p>
      <button id = "aanesta" class="äänestä">Äänestä</button>
      <button id = "ei" class="Ei">Ei</button>
      <button id= "poi"  class="poista">Poista</button>
  `;

  // Lisää äänestys elementti sivulle
  document.getElementById("äänestykset").appendChild(äänestysElementti);

  // Lisää äänestys-elementin kuuntelijat (äänestys ja poisto)
  äänestysElementti.querySelector(".äänestä").addEventListener("click", function () {
    const kirjautunutKayttajaJSON = localStorage.getItem('kirjautunutKayttaja');
    document.getElementById('aanesta').disabled = true;
    document.getElementById('ei').disabled = true;
    if (kirjautunutKayttajaJSON) {
      const kirjautunutKayttaja = JSON.parse(kirjautunutKayttajaJSON);

      // Tarkista, onko käyttäjä jo äänestänyt tässä äänestyksessä
      if (kirjautunutKayttaja.voted) {
        alert('Olet jo äänestänyt tätä äänestystä.');
        return;
      }
      kirjautunutKayttaja.voted = true;
      localStorage.setItem('kirjautunutKayttaja', JSON.stringify(kirjautunutKayttaja));
    }

    äänet++; // Päivitä äänien laskuri äänestyksen sisällä
    äänestysElementti.querySelector(".äänien-laskuri").textContent = äänet; // Päivitä näyttö
    alert(`Äänestit äänestyksessä "${nimi}"`);
  });

  äänestysElementti.querySelector(".Ei").addEventListener("click", function () {
    const kirjautunutKayttajaJSON = localStorage.getItem('kirjautunutKayttaja');
    document.getElementById('ei').disabled = true;
    document.getElementById('aanesta').disabled = true;
    if (kirjautunutKayttajaJSON) {
      const kirjautunutKayttaja = JSON.parse(kirjautunutKayttajaJSON);

      // Tarkista, onko käyttäjä jo äänestänyt tässä äänestyksessä
      if (kirjautunutKayttaja.voted) {
        alert('Olet jo äänestänyt tässä äänestyksessä.');
        return;
      }
      kirjautunutKayttaja.voted = true;
      localStorage.setItem('kirjautunutKayttaja', JSON.stringify(kirjautunutKayttaja));
    }

    ei++; // Päivitä äänien laskuri äänestyksen sisällä
    äänestysElementti.querySelector(".ei-laskuri").textContent = ei; // Päivitä näyttö
    alert(`Äänestit äänestyksessä "${nimi}"`);
  });

  // Modify the remove vote event listener to check the user's rank
  äänestysElementti.querySelector(".poista").addEventListener("click", function () {
    if (isAdminUser()) {
      document.getElementById("äänestykset").removeChild(äänestysElementti);
    } else {
      alert("You don't have permission to remove this vote.");
    }
  });

  // Tyhjennä tekstikenttä
  document.getElementById("nimi").value = "";
});

const users = [
  { username: "1", password: "123", rank: "admin"},
  { username: "2", password: "1234", rank: "admin" },
  { username: "3", password: "12345", rank: "normi" },
  // Lisää tarvittaessa muita käyttäjiä
];

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Estä oletusarvoinen lomakkeen lähettäminen

  // Hae käyttäjän syöttämä käyttäjätunnus ja salasana
  const username = loginForm.querySelector('input[name="uname"]').value;
  const password = loginForm.querySelector('input[name="psw"]').value;

  // Tarkista, onko käyttäjätunnus ja salasana oikein
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    if (user.rank === "admin") {
      alert('Kirjautuminen onnistui admin!');
      document.getElementById('id02').style.display = 'block';
      document.getElementById('äänestysButton').disabled = false;
      document.getElementById('tyhjennaLocalStorage').disabled = false;
      localStorage.setItem('kirjautunutKayttaja', JSON.stringify(user));
      document.getElementById('kirjaudu').disabled = true;
    } else {
      alert('Kirjautuminen onnistui!');
      localStorage.setItem('kirjautunutKayttaja', JSON.stringify(user));
      document.getElementById('tyhjennaLocalStorage').disabled = false;
      document.getElementById('kirjaudu').disabled = true;
    }

    // Sulje kirjautumismodal
    document.getElementById('id01').style.display = 'none';
  } else {
    alert('Kirjautuminen epäonnistui. Tarkista tunnuksesi.');
  }
  const kirjautunutKayttajaJSON = localStorage.getItem('kirjautunutKayttaja');
  if (kirjautunutKayttajaJSON) {
    const kirjautunutKayttaja = JSON.parse(kirjautunutKayttajaJSON);
    // Voit käyttää kirjautuneen käyttäjän tietoja tarpeidesi mukaan
    console.log('Kirjautunut käyttäjä:', kirjautunutKayttaja);
  }
});

document.getElementById('tyhjennaLocalStorage').addEventListener('click', function() {
  // Poista tallennettu käyttäjätieto Local Storagesta
  localStorage.removeItem('kirjautunutKayttaja');
  console.log('kirjautunutKayttaja tyhjennetty');
  document.getElementById('äänestysButton').disabled = true;
  document.getElementById('tyhjennaLocalStorage').disabled = true;
  document.getElementById('aanesta').disabled = false;
  document.getElementById('ei').disabled = false;
  document.getElementById('kirjaudu').disabled = false;
});