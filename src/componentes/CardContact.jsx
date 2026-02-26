export function CardContact({ plataforma, direccion, imagen, visible }) {
  const isEmail = plataforma.toLowerCase() === "email";
  const link = isEmail ? `mailto:${direccion}` : direccion;
  const ctaText = isEmail ? "Enviar mensaje" : "Abrir perfil";

  return (
    <article className="dataContenedor">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="contactIconWrap">
          <img src={imagen} alt={plataforma} />
        </div>
        <p className="contactPlatform">{plataforma}</p>
        <p className="contactVisible">{visible}</p>
        <span className="contactCTA">{ctaText}</span>
      </a>
    </article>
  );
}
