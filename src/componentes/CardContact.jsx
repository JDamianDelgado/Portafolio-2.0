export function CardContact({ plataforma, direccion, imagen, visible }) {
  const isEmail = plataforma.toLowerCase() === "email";
  const link = isEmail ? `mailto:${direccion}` : direccion;

  return (
    <div className="dataContenedor">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imagen} alt={plataforma} />
        <p>{visible}</p>
      </a>
    </div>
  );
}
