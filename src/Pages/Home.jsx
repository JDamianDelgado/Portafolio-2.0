import { Footer } from "../componentes/Footer";
import { InfoPersonal } from "./InfoPersonal";
import { Contacto } from "./Contacto";
import { Proyectos } from "./Proyectos";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
export default function Home() {
  const [seccion, setSeccion] = useState("yo");

  const sectionVariants = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
  };

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
      <AnimatePresence mode="wait">
        {seccion === "yo" && (
          <motion.div
            key="yo"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <InfoPersonal />
          </motion.div>
        )}
        {seccion === "proyectos" && (
          <motion.div
            key="proyectos"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <Proyectos />
          </motion.div>
        )}
        {seccion === "contacto" && (
          <motion.div
            key="contacto"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <Contacto />
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
