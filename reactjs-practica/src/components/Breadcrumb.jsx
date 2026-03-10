import React from "react";

export const Breadcrumb = () => (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#">Inicio</a></li>
        <li className="breadcrumb-item active">Perfil</li>
      </ol>
    </nav>
  );
export default Breadcrumb;