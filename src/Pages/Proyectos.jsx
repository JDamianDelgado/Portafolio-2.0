import { proyectos } from "../Data/Proyectos";
import { CardProyectos } from "../componentes/CardProyectos";
import { motion } from "framer-motion";

export function Proyectos() {
  return (
    <div className="subContenedor">
      <motion.section
        className="projectsHeader"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <p className="sectionEyebrow">Portafolio</p>
        <h1>Proyectos destacados</h1>
        <p>
          Soluciones desarrolladas para practicar arquitectura full stack,
          experiencia de usuario y desarrollo de funcionalidades reales.
        </p>
      </motion.section>

      <motion.div
        className="proyectos"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
      >
        {proyectos.map((project, index) => (
          <motion.div
            key={project.slug}
            style={{ textDecoration: "none" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.03 }}
          >
            <CardProyectos
              titulo={project.title}
              name={project.name}
              imagen={project.images}
              description={project.description}
              slug={project.slug}
              url={project.url}
              tecnologias={project.technologies}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
