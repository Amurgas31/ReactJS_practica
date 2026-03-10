import React from "react";

export const Tarjeta = () => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Título de la Card</h5>
          <p className="card-text">Ejemplo de contenido para una tarjeta de Bootstrap.</p>
          <a href="#" className="btn btn-secondary">Ir a algún lugar</a>
        </div>
      </div>
    );
  };

export default Tarjeta;