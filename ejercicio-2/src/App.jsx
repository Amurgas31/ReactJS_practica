import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PerfilCard } from "./components/PerfilCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Información Personal</h1>
      <p className="text-center text-muted mb-5">
        Uso de <strong>Props</strong> en React.
      </p>

      <div className="row justify-content-center">
        <div className="col-md">
          <PerfilCard
            nombre="Astrid Murgas"
            edad={17}
            profesion="Estudiante"
            ciudad="San Salvador"
            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY54IHYyPLzsQBQGrxcvZu30ltb5UhPoBFIg&s"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
