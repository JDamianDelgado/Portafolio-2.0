import { tecnologias } from "../Data/Tecnologias";
import TypingEffect from "../componentes/TyppingEffect";
import { Carrusel } from "../componentes/Carrousel";
import { motion } from "framer-motion";

export function InfoPersonal() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  };

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
        <motion.div
          className="presentacion"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
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
        </motion.div>

        <motion.section
          className="highlightSection"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {highlights.map((item) => (
            <motion.article
              className="highlightCard"
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <p className="highlightTitle">{item.title}</p>
              <p className="highlightValue">{item.value}</p>
            </motion.article>
          ))}
        </motion.section>

        <motion.div
          className="contenedor-boxText"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
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
                  href="./archivos/Joaquin-Delgado-FullStackDeveloper.pdf"
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
        </motion.div>

        <motion.section
          className="servicesSection"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2>Como puedo aportar valor</h2>
          <motion.div
            className="servicesGrid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service) => (
              <motion.article
                key={service}
                className="serviceCard"
                variants={fadeUp}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <p>{service}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.div
          className="contenedor-Herramienta"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <motion.h1 className="herramienta" whileHover={{ y: -2, scale: 1.01 }}>
            Lenguajes
          </motion.h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.lenguajes} />
          </div>
          <motion.h1 className="herramienta" whileHover={{ y: -2, scale: 1.01 }}>
            Frontend
          </motion.h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.frontend} />
          </div>
          <motion.h1 className="herramienta" whileHover={{ y: -2, scale: 1.01 }}>
            Backend
          </motion.h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.backend} />
          </div>
          <motion.h1 className="herramienta" whileHover={{ y: -2, scale: 1.01 }}>
            Base de Datos
          </motion.h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.basesDeDatos} />
          </div>
          <motion.h1 className="herramienta" whileHover={{ y: -2, scale: 1.01 }}>
            Herramientas
          </motion.h1>
          <div className="contenedorCarrousel">
            <Carrusel list={tecnologias.herramientas} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
