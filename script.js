addEventListener('load', function(e) {
  document.querySelector('#test').innerHTML = 'jeux';
});





      const character = document.querySelector('.character');
      character.addEventListener('click', () => {
        character.style.backgroundColor = '#f00';
      });










//Fonctionnalité 1:
function showMessage() {
  alert("Bienvenue sur ma page!");
}

//Fonctionnalité 2:
function changeBackground() {
  document.body.style.backgroundColor = "lightblue";
}

//Fonctionnalité 3:
function showImage() {
  var img = document.createElement("img");
  img.src = "image.jpg";
  document.body.appendChild(img);
}

//Fonctionnalité 4:
function showText() {
  var text = document.createElement("p");
  text.innerHTML = "Ceci est un texte supplémentaire.";
  document.body.appendChild(text);
}

//Fonctionnalité 5:
function showLink() {
  var link = document.createElement("a");
  link.href = "https://www.example.com";
  link.innerHTML = "Cliquez ici pour visiter un site externe.";
  document.body.appendChild(link);
}

//Appeler les fonctionnalités
showMessage();
changeBackground();
showImage();
showText();
showLink();





  function saveParticipationNumber() {
    var phoneNumber = document.getElementById("phoneNumber").value;
    var participationNumber = document.getElementById("participationNumber").value;
    // Enregistrer le numéro de téléphone et le nombre de participation sur le serveur
    // ...
  }







// Initialize Firebase
  var config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
  };
  firebase.initializeApp(config);
