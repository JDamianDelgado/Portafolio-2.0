import { CardContact } from "../componentes/CardContact";
import { DatosContacto } from "../Data/DatosContacto";
export function Contacto() {
  return (
    <div className="subContenedor">
      <div className="contenedorContacto">
        {DatosContacto.map((datos) => (
          <CardContact
            key={datos.direccion}
            plataforma={datos.plataforma}
            direccion={datos.direccion}
            imagen={datos.imagen}
            visible={datos.visible}
          />
        ))}
      </div>
    </div>
  );
}
