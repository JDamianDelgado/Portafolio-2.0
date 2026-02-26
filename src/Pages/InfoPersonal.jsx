import { tecnologias } from "../Data/Tecnologias";
import TypingEffect from "../componentes/TyppingEffect";
import { Carrusel } from "../componentes/Carrousel";

export function InfoPersonal() {
  const consoleLines = [
    "$ npm run build",
    "vite v7.1.12 building for production...",
    "✓ 53 modules transformed",
    "✓ built in 1.24s",
    "$ nest start --watch",
    "[Nest] API running on http://localhost:3000",
    '$ git commit -m "feat: improve ux and performance"',
    "[main] 1 file changed, 120 insertions(+)",
    "$ docker compose up -d",
    "postgres | database system is ready to accept connections",
    "$ npm run test",
    "PASS src/components/CardProyectos.test.jsx",
  ];

  const highlights = [
    { title: "Frontend + Backend", value: "Full stack real" },
    { title: "Arquitectura", value: "APIs y logica de negocio" },
    { title: "Disponibilidad", value: "Remoto y freelance" },
  ];

  const services = [
    "Desarrollo de aplicaciones web responsive",
    "Implementacion de APIs y autenticacion segura",
    "Mantenimiento, mejoras y nuevas funcionalidades",
  ];

  return (
    <div className="contenedorGeneral">
      <div className="subContenedor">
        <div className="presentacion">
          <img
            className="presentacion-imagen"
            src="/image/FotoPerfil.jpg"
            alt="Joaquin Damian Delgado"
          />
          <TypingEffect
            text={`Bienvenido a mi portafolio\nSoy Joaquin Damian Delgado\nDesarrollador Web Full Stack`}
            speed={100}
          />
          <p className="heroSubtitle">
            Construyo productos web enfocados en rendimiento, escalabilidad y
            experiencia de usuario.
          </p>
        </div>

        <section className="highlightSection">
          {highlights.map((item) => (
            <article className="highlightCard" key={item.title}>
              <p className="highlightTitle">{item.title}</p>
              <p className="highlightValue">{item.value}</p>
            </article>
          ))}
        </section>

        <div className="contenedor-boxText">
          <div className="boxText">
            <p className="boxTextEyebrow">Por que trabajar conmigo</p>
            <p>
              Soy un <strong>Desarrollador Web Full Stack</strong> con
              experiencia tanto en <strong>frontend</strong> como en{" "}
              <strong>backend</strong>, especializado en la creacion de
              aplicaciones web <strong>responsive</strong> adaptadas a las
              necesidades del usuario.
            </p>
            <p>
              Mi formacion es principalmente <strong>autodidacta</strong>,
              complementada con un <strong>bootcamp</strong> de desarrollo y
              actualmente estoy cursando estudios en la <strong>UTN</strong>{" "}
              para seguir expandiendo mis conocimientos.
            </p>
            <p>
              He trabajado en diversos proyectos, destacandome por mi{" "}
              <strong>logica en el backend</strong> y por la{" "}
              <strong>implementacion de nuevas funcionalidades</strong> que
              mejoran la experiencia del usuario y generan impacto real en el
              negocio.
            </p>
            <div className="boxTextMedia">
              <div className="codeConsole" aria-label="Consola de desarrollo">
                <div className="consoleTopBar">
                  <span></span>
                  <span></span>
                  <span></span>
                  <p>terminal - joaquin.dev</p>
                </div>
                <div className="consoleBody">
                  <div className="consoleTrack">
                    {[...consoleLines, ...consoleLines].map((line, index) => (
                      <p key={`${line}-${index}`}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="cvCard">
              <p>
                <strong>
                  Te comparto mi CV con proyectos, stack tecnico y experiencia.
                </strong>
              </p>
              <div className="cvActions">
                <a
                  href="./archivos/Joaquin-D-Delgado-FullStackDeveloper.pdf"
                  download
                  className="cvBtnPrimary"
                >
                  Descargar CV
                </a>
                <a
                  href="mailto:joaquinDamian.dev@gmail.com"
                  className="cvBtnSecondary"
                >
                  Contactar ahora
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="servicesSection">
          <h2>Como puedo aportar valor</h2>
          <div className="servicesGrid">
            {services.map((service) => (
              <article key={service} className="serviceCard">
                <p>{service}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="contenedor-Herramienta">
          <h1 className="herramienta">Lenguajes</h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.lenguajes} />
          </div>
          <h1 className="herramienta">Frontend</h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.frontend} />
          </div>
          <h1 className="herramienta">Backend</h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.backend} />
          </div>
          <h1 className="herramienta">Base de Datos</h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.basesDeDatos} />
          </div>
          <h1 className="herramienta">Herramientas</h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.herramientas} />
          </div>
        </div>
      </div>
    </div>
  );
}
