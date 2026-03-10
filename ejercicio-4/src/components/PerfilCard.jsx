import React from "react";

export const PerfilCard = ({ usuario }) => {
  return (
    <div className="card shadow-sm h-100">
      <img 
        src={usuario.imagen} 
        className="card-img-top" 
        alt={usuario.nombre} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title text-primary">{usuario.nombre}</h5>
        <p className="card-text mb-1"><strong>Edad:</strong> {usuario.edad}</p>
        <p className="card-text mb-1"><strong>Profesión:</strong> {usuario.profesion}</p>
        <p className="card-text"><strong>Ciudad:</strong> {usuario.ciudad}</p>
      </div>
    </div>
  );
};

export default PerfilCard;