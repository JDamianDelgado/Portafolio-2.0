import { tecnologias } from "../Data/Tecnologias";
import TypingEffect from "../componentes/TyppingEffect";
import { Carrusel } from "../componentes/Carrousel";

export function InfoPersonal() {
  return (
    <div className="contenedorGeneral">
      <div className="subContenedor">
        <div className="presentacion">
          <img
            className="presentacion-imagen"
            src="/image/FotoPerfil.jpg"
            alt="Joaquín Damian Delgado"
          />
          <TypingEffect
            text={`¡Bienvenido a mi Portafolio!\nSoy Joaquin Damian Delgado\nDesarrollador web Full Stack`}
            speed={100}
          />
        </div>
        <div className="boxText">
          <p>
            Soy un <strong>Desarrollador Web Full Stack</strong> con experiencia
            tanto en <strong>frontend</strong> como en <strong>backend</strong>,
            especializado en la creación de aplicaciones web{" "}
            <strong>responsive</strong> adaptadas a las necesidades del usuario.
          </p>
          <p>
            Mi formación es principalmente <strong>autodidacta</strong>,
            complementada con un <strong>bootcamp</strong> de desarrollo y
            actualmente estoy cursando estudios en la <strong>UTN</strong> para
            seguir expandiendo mis conocimientos.
          </p>
          <p>
            He trabajado en diversos proyectos, destacándome por mi{" "}
            <strong>lógica en el backend</strong> y por la{" "}
            <strong>implementación de nuevas funcionalidades</strong> que
            mejoran la experiencia del usuario.
          </p>
          <img src="/image/bienvenido.gif" alt="bienvenido" />
          <p>
            <strong>
              Descarga mi CV para conocer más sobre mi experiencia y
              habilidades:
            </strong>
            <br />
            <a
              href="./archivos/DelgadoJoaquin-CV.pdf"
              download
              className="text-blue-500 hover:text-blue-700"
            >
              Descargar CV
            </a>
          </p>
        </div>

        <div>
          <h1 className="herramienta">Lenguajes</h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.lenguajes} />
          </div>
          <h1 className="herramienta">FrameWorks</h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.frameworks} />
          </div>
          <h1 className="herramienta">Base De Datos</h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.basesDeDatos} />
          </div>
          <h1 className="herramienta">Herramientas </h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.herramientas} />
          </div>
        </div>
      </div>
    </div>
  );
}
