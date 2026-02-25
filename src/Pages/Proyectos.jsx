import { proyectos } from "../Data/Proyectos";
import { CardProyectos } from "../componentes/CardProyectos";

export function Proyectos() {
  return (
    <div className="subContenedor">
      <h1>Mis Proyectos</h1>
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
