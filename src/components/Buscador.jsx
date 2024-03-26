import React, { useState, useEffect } from 'react';

const Buscador = ({ feriados }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFeriados, setFilteredFeriados] = useState([]);
  const [selectedFeriado, setSelectedFeriado] = useState(null);

  useEffect(() => {
    if (feriados) {
      const filteredResults = feriados.filter(feriado =>
        feriado.title.toLowerCase().includes(searchTerm.toLowerCase())
      ).sort((a, b) => a.title.localeCompare(b.title));
      setFilteredFeriados(filteredResults);
    } else {
      setFilteredFeriados([]);
    }
  }, [feriados, searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleVerDetalleClick = feriado => {
    setSelectedFeriado(feriado);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <h2 className="mb-4">Feriados en Chile 2024</h2>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Ingresa el feriado buscado..."
            value={searchTerm}
            onChange={handleChange}
          />
          <ul className="list-group">
            {filteredFeriados.map(feriado => (
              <li key={feriado.date} className="list-group-item d-flex justify-content-between align-items-center bg-light">
                <span>{feriado.title}</span>
                <button className="btn btn-info btn-sm" onClick={() => handleVerDetalleClick(feriado)}>Ver detalle</button>
              </li>
            ))}
          </ul>
        </div>
        {selectedFeriado && (
          <div className="col">
            <div className="card mt-3" style={{ backgroundColor: '#F7F0F0' }}>
              <div className="card-body">
                <h5 className="card-title">Detalles del feriado</h5>
                <p className="card-text"><strong>Fecha:</strong> {selectedFeriado.date}</p>
                <p className="card-text"><strong>Tipo:</strong> {selectedFeriado.type}</p>
                <p className="card-text"><strong>Inalienable:</strong> {selectedFeriado.inalienable ? 'Sí' : 'No'}</p>
                <p className="card-text"><strong>Extra:</strong> {selectedFeriado.extra}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buscador;







