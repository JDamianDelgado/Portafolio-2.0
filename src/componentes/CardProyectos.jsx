import { useState } from "react";

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
      <div className="card">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={imagen} alt={`Proyecto ${slug}`} />
        </a>

        <h1>{titulo}</h1>
        <h2>{name}</h2>
        <button onClick={() => setView(!view)} className="botonVerMas">
          Descripcion
        </button>

        {view && (
          <div className="verMas">
            <p>{description}</p>
            <li>
              {tecnologias.map((tecnologia) => (
                <li key={tecnologia}>{tecnologia}</li>
              ))}
            </li>
          </div>
        )}
      </div>
    </div>
  );
}
