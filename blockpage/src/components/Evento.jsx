import { motion } from "framer-motion";

export default function Evento() {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-12 bg-black text-white flex flex-col items-center justify-center">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Próximo Evento del Club
      </motion.h2>

      {/* Imágenes superiores */}
      <div className="flex flex-row flex-wrap gap-4 justify-center items-center mb-8">
        {["12", "14", "3"].map((img, i) => (
          <motion.img
            key={i}
            src={`/imagenes/Stickers/${img}.jpg`}
            alt={`Imagen ${i + 1}`}
            className="w-24 sm:w-28 md:w-32 h-auto object-cover rounded-lg rotate-45"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

      {/* Texto y evento */}
      <div className="text-center mb-10 max-w-lg px-2">
        <p className="text-xl sm:text-2xl font-semibold mb-4 text-gray-300">¡Muy pronto!</p>
        <img
          src=""
          alt="Próximo Evento!!"
          className="w-150 max-w-md h-auto object-cover rounded-xl mx-auto border-2 border-gray-700"
        />
        <a
          href="#form"
          className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Regístrate
        </a>
      </div>

      {/* Imágenes inferiores */}
      <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
        {["7", "8", "9"].map((img, i) => (
          <motion.img
            key={i}
            src={`/imagenes/Stickers/${img}.jpg`}
            alt={`Imagen ${i + 4}`}
            className="w-24 sm:w-28 md:w-32 h-auto object-cover rounded-lg -rotate-45"
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>
    </section>
  );
}
