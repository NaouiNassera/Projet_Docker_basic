import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Récupérez les données depuis le serveur
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur:', error));
  }, []);
//console.log("hello there ",data);

const variableFrontend = process.env.REACT_APP_VARIABLE_FRONTEND;
console.log(variableFrontend); // Cela affichera "ValeurDuFrontend"

  return (
    <div className="App">
      <h1>Données depuis le serveur Node.js :</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
