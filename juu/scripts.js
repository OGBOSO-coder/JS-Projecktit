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
      <button class="äänestä">Äänestä</button>
      <button class="Ei">Ei</button>
      <button class="poista">Poista</button>
  `;

  // Lisää äänestys elementti sivulle
  document.getElementById("äänestykset").appendChild(äänestysElementti);

  // Lisää äänestys-elementin kuuntelijat (äänestys ja poisto)
  äänestysElementti.querySelector(".äänestä").addEventListener("click", function () {
      äänet++; // Päivitä äänien laskuri äänestyksen sisällä
      äänestysElementti.querySelector(".äänien-laskuri").textContent = äänet; // Päivitä näyttö
      alert(`Äänestit äänestyksessä "${nimi}"`);
  });
  äänestysElementti.querySelector(".Ei").addEventListener("click", function () {
      ei++; // Päivitä äänien laskuri äänestyksen sisällä
      äänestysElementti.querySelector(".ei-laskuri").textContent = ei; // Päivitä näyttö
      alert(`Äänestit äänestyksessä "${nimi}"`);
  });

  äänestysElementti.querySelector(".poista").addEventListener("click", function () {
      document.getElementById("äänestykset").removeChild(äänestysElementti);
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
      document.getElementById('äänestysButton').disabled = false; // Tämä poistaa "disabled" -ominaisuuden
      localStorage.setItem('kirjautunutKayttaja', JSON.stringify(user));
    } else {
      alert('Kirjautuminen onnistui!');
      localStorage.setItem('kirjautunutKayttaja', JSON.stringify(user));
    }

    // Sulje kirjautumismodal
    document.getElementById('id01').style.display = 'none';
  } else {
    //localStorage.clear();
    alert('Kirjautuminen epäonnistui. Tarkista tunnuksesi.'); // Korvaa tämä toiminnolla kirjautumisen epäonnistuessa
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
  document.getElementById('äänestysButton').disabled = true; // Tämä poistaa "disabled" -ominaisuuden
});
