import React from "react";

export const RadioButton = () => (
    <div className="mb-3">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="r1" />
        <label className="form-check-label" htmlFor="r1">Masculino</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="r2" />
        <label className="form-check-label" htmlFor="r2">Femenino</label>
      </div>
    </div>
  );

export default RadioButton;