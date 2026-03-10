import React from "react";

export const FormularioSimple = () => (
    <form className="p-3 border rounded bg-light mt-3">
      <div className="mb-3">
        <input type="email" className="form-control" placeholder="Correo electrónico" />
      </div>
      <button type="submit" className="btn btn-dark w-100">Suscribirse</button>
    </form>
  );

export default FormularioSimple;