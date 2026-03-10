import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CalculadoraUI } from './components/CalculadoraUI';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="text-secondary">Ejercicio 3: Diseño de Interfaz</h2>
          <p className="text-muted">Maquetación de formulario para cálculos</p>
        </div>
        
        <CalculadoraUI />
        
        <footer className="text-center mt-5 text-muted">
          <small>&copy; 2024 - Práctica de Introducción a React JS</small>
        </footer>
      </div>
    </div>
  );
}

export default App
