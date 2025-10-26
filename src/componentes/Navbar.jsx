import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <Link to={"/Me"}>Inicio</Link>
      <Link to={"/Proyectos"}>Proyectos</Link>
      <Link to={"/Contacto"}>Contacto</Link>
    </div>
  );
}
