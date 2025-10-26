import TypingEffect from "../componentes/TyppingEffect";

export function Bienvenida() {
  return (
    <div className="Presentacion">
      <TypingEffect
        text="¡Bienvenido a mi Portafolio! Soy un Desarrollador Web Full Stack."
        speed={100}
      />
      <img
        src="/image/bienvenido.gif"
        alt="bienvendios"
        className="fotoPresentacion"
      />
    </div>
  );
}
