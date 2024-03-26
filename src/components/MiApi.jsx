import React, { useEffect } from 'react';

const MiApi = ({ setFeriados }) => {
  useEffect(() => {
    fetch('https://api.victorsanmartin.com/feriados/en.json')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') { 
          setFeriados(data.data); 
        } else {
          console.error('Error en la solicitud de la API:', data.error);
        }
      })
      .catch(error => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, [setFeriados]);

  return null; 
};

export default MiApi;





