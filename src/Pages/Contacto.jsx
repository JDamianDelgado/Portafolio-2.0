import { CardContact } from "../componentes/CardContact";
import { DatosContacto } from "../Data/DatosContacto";

export function Contacto() {
  return (
    <div className="subContenedor">
      <section className="contactHeader">
        <p className="sectionEyebrow">Contacto</p>
        <h1>Hablemos de tu proximo proyecto</h1>
        <p>
          Si buscas sumar un desarrollador para tu equipo o necesitas apoyo
          freelance, escribime por el canal que prefieras.
        </p>
      </section>

      <section className="contactLayout">
        <article className="contactSummaryCard">
          <h2>Disponibilidad actual</h2>
          <p>
            Abierto a oportunidades laborales y colaboraciones freelance en
            desarrollo web full stack.
          </p>
          <ul>
            <li>Modalidad remota</li>
            <li>Respuesta en menos de 24 horas</li>
            <li>Enfoque en resultados y comunicacion clara</li>
          </ul>
          <div className="contactActions">
            <a href="mailto:joaquinDamian.dev@gmail.com">Enviar Email</a>
            <a
              href="https://wa.me/5493875768371?text=Hola%20Joaquin,%20vi%20tu%20portfolio%20y%20quiero%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </article>

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
      </section>
    </div>
  );
}
