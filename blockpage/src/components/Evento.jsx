import { motion } from "framer-motion";
import { BackgroundGradient } from "./UI/background-gradient";

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
          <BackgroundGradient 
            key={i} 
            className="w-fit"
            containerClassName="p-[1px] rounded-lg inline-block"
          >
            <img
              src={`/imagenes/Stickers/${img}.jpg`}
              alt={`Imagen ${i + 1}`}
              className="w-24 sm:w-32 md:w-36 object-cover rounded-lg"
            />
          </BackgroundGradient>
        ))}
      </div>

      {/* Texto y evento */}
      <div className="text-center mb-10 max-w-lg px-2">
        <p className="text-xl sm:text-2xl font-semibold mb-4 text-gray-300">¡Muy pronto!</p>
        <BackgroundGradient className="w-full max-w-md mx-auto">
          <img
            src="/imagenes/Utilities/Logo CB.png"
            alt="Próximo Evento!!"
            className="w-full h-auto object-cover rounded-xl"
          />
        </BackgroundGradient>
        <a
          href="#form"
          className="mt-6 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-semibold text-white backdrop-blur-3xl">
            Regístrate
          </span>
        </a>
      </div>

      {/* Imágenes inferiores */}
      <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
        {["7", "8", "9"].map((img, i) => (
          <BackgroundGradient 
            key={i} 
            className="w-fit"
            containerClassName="p-[1px] rounded-lg inline-block"
          >
            <img
              src={`/imagenes/Stickers/${img}.jpg`}
              alt={`Imagen ${i + 4}`}
              className="w-24 sm:w-32 md:w-36 object-cover rounded-lg"
            />
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
}
