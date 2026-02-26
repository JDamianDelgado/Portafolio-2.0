import { proyectos } from "../Data/Proyectos";
import { CardProyectos } from "../componentes/CardProyectos";

export function Proyectos() {
  return (
    <div className="subContenedor">
      <section className="projectsHeader">
        <p className="sectionEyebrow">Portafolio</p>
        <h1>Proyectos destacados</h1>
        <p>
          Soluciones desarrolladas para practicar arquitectura full stack,
          experiencia de usuario y desarrollo de funcionalidades reales.
        </p>
      </section>

      <div className="proyectos">
        {proyectos.map((project) => (
          <div key={project.slug} style={{ textDecoration: "none" }}>
            <CardProyectos
              titulo={project.title}
              name={project.name}
              imagen={project.images}
              description={project.description}
              slug={project.slug}
              url={project.url}
              tecnologias={project.technologies}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
