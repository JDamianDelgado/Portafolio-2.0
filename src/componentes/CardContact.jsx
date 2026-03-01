import { motion } from "framer-motion";

export function CardContact({ plataforma, direccion, imagen, visible, delay = 0 }) {
  const isEmail = plataforma.toLowerCase() === "email";
  const link = isEmail ? `mailto:${direccion}` : direccion;
  const ctaText = isEmail ? "Enviar mensaje" : "Abrir perfil";

  return (
    <motion.article
      className="dataContenedor"
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5, scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.28, delay, ease: "easeOut" }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="contactIconWrap">
          <img src={imagen} alt={plataforma} />
        </div>
        <p className="contactPlatform">{plataforma}</p>

        {plataforma !== "Whatsapp" && (
          <p className="contactVisible">{visible}</p>
        )}
        <span className="contactCTA">{ctaText}</span>
      </a>
    </motion.article>
  );
}
