import React from "react";

export const ProgresoAnimado = () => (
    <div className="progress mb-3">
      <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{ width: '75%' }}>Cargando...</div>
    </div>
  );

export default ProgresoAnimado;