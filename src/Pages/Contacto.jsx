import { CardContact } from "../componentes/CardContact";
import { DatosContacto } from "../Data/DatosContacto";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Contacto() {
  return (
    <div className="subContenedor">
      <motion.section
        className="contactHeader"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <p className="sectionEyebrow">Contacto</p>
        <h1>Hablemos de tu proximo proyecto</h1>
        <p>
          Si buscas sumar un desarrollador para tu equipo o necesitas apoyo
          freelance, escribime por el canal que prefieras.
        </p>
      </motion.section>

      <section className="contactLayout">
        <motion.article
          className="contactSummaryCard"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
        >
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
        </motion.article>

        <motion.div
          className="contenedorContacto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
        >
          {DatosContacto.map((datos, index) => (
            <CardContact
              key={datos.direccion}
              plataforma={datos.plataforma}
              direccion={datos.direccion}
              imagen={datos.imagen}
              visible={datos.visible}
              delay={index * 0.04}
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
