  <!-- Ajoutez le code Firebase ci-dessous -->
  <script type="module">
    // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

    // Votre configuration Firebase ici
    const firebaseConfig = {
      apiKey: "AIzaSyDtr8bLIFL-For8dP2peeQAGVahKINNfd8",
      authDomain: "mtsango-c4a13.firebaseapp.com",
      projectId: "mtsango-c4a13",
      storageBucket: "mtsango-c4a13.appspot.com",
      messagingSenderId: "618035723810",
      appId: "1:618035723810:web:26a5f44caa680b9bfb947b",
      measurementId: "G-ZLXNZ7M7J6"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  </script>

  <!-- Votre script JavaScript existant -->
  <script>
    const participants = [
      {nom: "Participant 1", montant: 100},
      {nom: "Participant 2", montant: 100},
      {nom: "Participant 3", montant: 100},
    ];

    const transactions = [];

    function getCurrentDateTime() {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      return `${date} ${time}`;
    }

    function afficherParticipants() {
      const participantList = document.getElementById('participant-list');
      participantList.innerHTML = '';

      participants.forEach(participant => {
        const li = document.createElement('li');
        const participantImage = document.createElement('img');
        participantImage.src = 'https://mcusercontent.com/af7ccd2d5a4dcbc18080f78f7/images/215ab951-c24b-a326-e698-054ab6155de1.jpeg';
        participantImage.alt = 'Image du participant';
        participantImage.className = 'participant-image';
        li.appendChild(participantImage);
        li.innerHTML += `${participant.nom} : ${participant.montant} €`;
        participantList.appendChild(li);
      });
    }

    function afficherTransactions() {
      const transactionList = document.getElementById('transaction-list');
      transactionList.innerHTML = '';

      transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = `${transaction.nom} a effectué une transaction de ${transaction.montant} € le ${transaction.date}.`;
        transactionList.appendChild(li);
      });
    }

    function effectuerTransaction() {
      const nom = document.getElementById('nom').value;
      const montant = parseInt(document.getElementById('montant').value);

      if (nom && !isNaN(montant)) {
        const date = getCurrentDateTime();
        participants.push({nom, montant});
        transactions.push({nom, montant, date});
        afficherParticipants();
        afficherTransactions();
        document.getElementById('nom').value = '';
        document.getElementById('montant').value = '';
      } else {
        alert("Veuillez remplir correctement tous les champs.");
      }
    }

    document.getElementById('effectuer-transaction').addEventListener('click', effectuerTransaction);

    afficherParticipants();
    afficherTransactions();
  </script>

  <script>
    const showMoreButton = document.getElementById('showMore');
    const description = document.querySelector('.description');

    showMoreButton.addEventListener('click', () => {
      description.classList.toggle('show-description');
    });
  </script>
  <script>
    const aboutLink = document.getElementById('aboutLink');
    const overlay = document.getElementById('overlay');

    aboutLink.addEventListener('click', (event) => {
      event.preventDefault();
      const descriptionTransfer = document.getElementById('descriptionTransfer');
      descriptionTransfer.style.display = 'block';
      overlay.style.display = 'block';
    });

    function closeDescription() {
      const descriptionTransfer = document.getElementById('descriptionTransfer');
      descriptionTransfer.style.display = 'none';
      overlay.style.display = 'none';
    }
