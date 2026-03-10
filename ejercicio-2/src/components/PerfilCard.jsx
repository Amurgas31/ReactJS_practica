import React from "react";

export const PerfilCard = ({ nombre, edad, profesion, ciudad, imagen }) => {
  return (
    <div className="card shadow-sm" style={{ width: '18rem', margin: 'auto' }}>
      <img 
        src={imagen || "https://via.placeholder.com/150"} 
        className="card-img-top" 
        alt={nombre} 
      />
      <div className="card-body text-center">
        <h5 className="card-title text-primary">{nombre}</h5>
        <p className="card-text"><strong>Edad:</strong> {edad} años</p>
        <p className="card-text"><strong>Profesión:</strong> {profesion}</p>
        <p className="card-text"><strong>Ciudad:</strong> {ciudad}</p>
        <button className="btn btn-outline-primary btn-sm">Contactar</button>
      </div>
    </div>
  );
};

export default PerfilCard;