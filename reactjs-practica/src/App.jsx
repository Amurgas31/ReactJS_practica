import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Boton } from "./components/Boton";
import { Alerta } from "./components/Alerta";
import { Tarjeta } from "./components/Tarjeta";
import { InputTexto } from "./components/InputTexto";
import { InputPassword } from "./components/InputPassword";
import { SelectMenu } from "./components/SelectMenu";
import { Checkbox } from "./components/Checkbox";
import { RadioButton } from "./components/RadioButton";
import { Switch } from "./components/Switch";
import { AlertaError } from "./components/AlertaError";
import { Badge } from "./components/Badge";
import { ProgresoSimple } from "./components/ProgresoSimple";
import { ProgresoAnimado } from "./components/ProgresoAnimado";
import { Spinner } from "./components/Spinner";
import { ListaGrupo } from "./components/ListaGrupo";
import { TablaBasica } from "./components/TablaBasica";
import { Breadcrumb } from "./components/Breadcrumb";
import { Paginacion } from "./components/Paginacion";
import { BotonPeligro } from "./components/BotonPeligro";
import { FormularioSimple } from "./components/FormularioSimple";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container my-5 shadow p-4 bg-white rounded">
      <h1 className="text-center mb-5 text-primary">
        Práctica React + Bootstrap (20 Componentes)
      </h1>
      <hr />

      <div className="row">
        <div className="col-md-6 mb-4">
          <h3>Formularios e Inputs</h3>
          <InputTexto />
          <InputPassword />
          <SelectMenu />
          <Checkbox />
          <RadioButton />
          <Switch />
          <FormularioSimple />
        </div>

        <div className="col-md-6 mb-4">
          <h3>Indicadores y Feedback</h3>
          <Alerta />
          <AlertaError />
          <div className="d-flex align-items-center mb-3">
            <Badge />
            <Spinner />
          </div>
          <p>Progreso Simple:</p>
          <ProgresoSimple />
          <p>Progreso Animado:</p>
          <ProgresoAnimado />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <h3>Navegación</h3>
          <Breadcrumb />
          <Paginacion />
        </div>
        <div className="col-md-4 mb-4">
          <h3>Acciones</h3>
          <Boton />
          <BotonPeligro />
        </div>
        <div className="col-md-4 mb-4">
          <h3>Contenido</h3>
          <Tarjeta />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h3>Listas y Tablas</h3>
          <ListaGrupo />
          <TablaBasica />
        </div>
      </div>
    </div>
  );
}

export default App;
