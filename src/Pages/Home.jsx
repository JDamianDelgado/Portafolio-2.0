import Footer from "../componentes/footer";
import { InfoPersonal } from "./InfoPersonal";
import { Contacto } from "./Contacto";
import { Proyectos } from "./Proyectos";
import { Bienvenida } from "./Bienvenido";
import { Navbar } from "../componentes/Navbar";
import { useState } from "react";
export default function Home() {
  const [seccion, setSeccion] = useState("yo");
  return (
    <div className="contenedorGeneral">
      <div className="navbar">
        <button onClick={() => setSeccion("yo")}>Yo</button>
        <button onClick={() => setSeccion("proyectos")}>Proyectos</button>
        <button onClick={() => setSeccion("contacto")}>Contacto</button>
      </div>
      {seccion === "yo" && <InfoPersonal />}
      {seccion === "proyectos" && <Proyectos />}
      {seccion === "contacto" && <Contacto />}
      <Footer />
    </div>
  );
}
