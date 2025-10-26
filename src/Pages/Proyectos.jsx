import { proyectos } from "../Data/Proyectos";
import { CardProyectos } from "../componentes/CardProyectos";

export function Proyectos() {
  return (
    <div className="subContenedor">
      <h1>Mis Proyectos</h1>
      <div className="proyectos">
        {proyectos.map((project) => (
          <a
            href={project.url}
            key={project.slug}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <CardProyectos
              titulo={project.title}
              name={project.name}
              imagen={project.images}
              description={project.description}
              slug={project.slug}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
