import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';

function App() {
  const [feriados, setFeriados] = useState([]);

  useEffect(() => {
    fetch('https://api.victorsanmartin.com/feriados/en.json')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setFeriados(data);
        } else {
          console.error('El resultado de la API no es un array:', data);
        }
      })
      .catch(error => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <MiApi setFeriados={setFeriados} /> 
      <Buscador feriados={feriados} /> 
    </div>
  );
}

export default App;



