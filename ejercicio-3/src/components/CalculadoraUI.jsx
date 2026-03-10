import React from "react";

export const CalculadoraUI = () => {
  return (
    <div className="card shadow mx-auto" style={{ maxWidth: '400px' }}>
      <div className="card-header bg-primary text-white text-center">
        <h4 className="mb-0">Calculadora de Suma</h4>
      </div>
      <div className="card-body p-4">
        <div className="mb-3">
          <label className="form-label fw-bold">Primer Número</label>
          <input 
            type="number" 
            className="form-control form-control-lg" 
            placeholder="Ingrese un valor" 
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Segundo Número</label>
          <input 
            type="number" 
            className="form-control form-control-lg" 
            placeholder="Ingrese otro valor" 
          />
        </div>

        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-primary btn-lg">
            Calcular Resultado
          </button>
        </div>

        <div className="mt-4 p-3 bg-light border rounded text-center">
          <span className="text-muted">El resultado aparecerá aquí</span>
          <h2 className="text-success mb-0">--</h2>
        </div>
      </div>
    </div>
  );
};

export default CalculadoraUI;