export function CardProyectos({ titulo, name, description, imagen, slug }) {
  return (
    <div className="cardContenedor">
      <div className="card">
        <img src={imagen} alt={slug} />
        <h1>{titulo}</h1>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
