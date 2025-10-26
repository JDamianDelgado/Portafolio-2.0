import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { InfoPersonal } from "./Pages/InfoPersonal";
import { Proyectos } from "./Pages/Proyectos";
import { Contacto } from "./Pages/Contacto";
import { Navbar } from "./componentes/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
