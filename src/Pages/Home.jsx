import { Footer } from "../componentes/Footer";
import { InfoPersonal } from "./InfoPersonal";
import { Contacto } from "./Contacto";
import { Proyectos } from "./Proyectos";

import { useState } from "react";
export default function Home() {
  const [seccion, setSeccion] = useState("yo");
  return (
    <div className="contenedorGeneral">
      <div className="navbar">
        <button
          onClick={() => setSeccion("yo")}
          className={seccion === "yo" ? "active" : ""}
        >
          Sobre mi
        </button>
        <button
          onClick={() => setSeccion("proyectos")}
          className={seccion === "proyectos" ? "active" : ""}
        >
          Proyectos
        </button>
        <button
          onClick={() => setSeccion("contacto")}
          className={seccion === "contacto" ? "active" : ""}
        >
          Contacto
        </button>
      </div>
      {seccion === "yo" && <InfoPersonal />}
      {seccion === "proyectos" && <Proyectos />}
      {seccion === "contacto" && <Contacto />}
      <Footer />
    </div>
  );
}
