import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function CardProyectos({
  titulo,
  name,
  description,
  imagen,
  slug,
  url,
  tecnologias,
}) {
  const [view, setView] = useState(false);
  return (
    <div className="cardContenedor">
      <motion.div
        className="card"
        whileHover={{ y: -6, scale: 1.01 }}
        whileTap={{ scale: 0.995 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={imagen} alt={`Proyecto ${slug}`} />
        </a>

        <h1>{titulo}</h1>
        <h2>{name}</h2>
        <button onClick={() => setView(!view)} className="botonVerMas">
          {view ? "Ocultar descripcion" : "Ver descripcion"}
        </button>

        <AnimatePresence initial={false}>
          {view && (
            <motion.div
              className="verMas"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: "0.75rem" }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.26, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <p>{description}</p>
              <ul className="tecnologiasLista">
                {tecnologias.map((tecnologia) => (
                  <li key={tecnologia}>{tecnologia}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
