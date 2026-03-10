import React from "react";

export const TablaBasica = () => (
    <table className="table table-striped table-hover mt-3">
      <thead>
        <tr><th>ID</th><th>Usuario</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Admin</td></tr>
        <tr><td>2</td><td>User01</td></tr>
      </tbody>
    </table>
  );

export default TablaBasica;