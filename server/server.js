const express = require('express');
const app = express();
const cors = require("cors");

// Middleware pour traiter les requêtes JSON
app.use(express.json());
app.use(cors());

// Route pour fournir des données
app.get('/api/data', (req, res) => {
  const data = ['Donnée 1', 'Donnée 2', 'Donnée 3'];
  res.json(data);
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const variableBackend = process.env.VARIABLE_BACKEND;
console.log(variableBackend); // Cela affichera "ValeurDuBackend"


// Écoutez sur le port 5000
app.listen(5000, () => {
  console.log('Serveur en écoute sur le port 5000');
});
