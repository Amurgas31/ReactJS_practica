import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PerfilCard } from './components/PerfilCard';

function App() {
  const [count, setCount] = useState(0)

  // Definimos el arreglo de datos
  const listaUsuarios = [
    { id: 1, nombre: "Juanito Pérez", edad: 28, profesion: "Ingeniero", ciudad: "San Salvador", imagen: "https://randomuser.me/api/portraits/men/99.jpg" },
    { id: 2, nombre: "María López", edad: 25, profesion: "Diseñadora", ciudad: "Santa Tecla", imagen: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, nombre: "Carlos Ruiz", edad: 32, profesion: "Chef", ciudad: "Santa Ana", imagen: "https://randomuser.me/api/portraits/men/79.jpg" },
    { id: 4, nombre: "Ana Martínez", edad: 29, profesion: "Doctora", ciudad: "San Miguel", imagen: "https://randomuser.me/api/portraits/women/17.jpg" }
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Uso del método map() en React</h1>
      
      <div className="row g-4">
        {/* Recorremos el arreglo con .map() */}
        {listaUsuarios.map((usuario) => (
          <div className="col-12 col-md-6 col-lg-3" key={usuario.id}>
            <PerfilCard usuario={usuario} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
