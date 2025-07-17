import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const topImages = ["1", "2", "4", "5"];
const bottomImages = ["6", "10", "11", "13"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-black/70 backdrop-blur-md z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center flex-wrap">
          <img
            src="/imagenes/Utilities/unitec.png"
            alt="Logo"
            className="w-[120px] sm:w-[140px] md:w-[150px] h-auto"
          />
          <ul className="flex flex-wrap gap-4 text-white font-semibold text-sm md:text-base mt-4 md:mt-0">
            <li>
              <a href="#blockchain" className="hover:text-blue-400 transition">
                Blockchain
              </a>
            </li>
            <li>
              <a href="#ethereum" className="hover:text-blue-400 transition">
                Ethereum
              </a>
            </li>
            <li>
              <a href="#club" className="hover:text-blue-400 transition">
                Club
              </a>
            </li>
            <li>
              <a href="#evento" className="hover:text-blue-400 transition">
                Evento
              </a>
            </li>
            <li>
              <a href="#form" className="hover:text-blue-400 transition">
                Registrate
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Imágenes arriba en móvil/tablet */}
      <div className="grid grid-cols-4 gap-4 mt-24 mb-6 w-full max-w-4xl lg:hidden">
        {topImages.map((img, i) => (
          <motion.img
            key={img}
            src={`/imagenes/Stickers/${img}.png`}
            alt={`Top mobile ${i + 1}`}
            className="w-full max-w-[100px] sm:max-w-[130px] mx-auto h-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: false }}
          />
        ))}
      </div>

      {/* Título */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center relative z-20"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        Bienvenidos Estudiantes de UNITEC
      </motion.h1>

      {/* Logo central */}
      <motion.img
        src="/imagenes/Utilities/Logo CB.png"
        alt="Logo central"
        className="w-full max-w-[300px] md:max-w-[400px] h-auto mb-6 relative z-20"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
      />

      {/* Imágenes abajo en móvil/tablet */}
      <div className="grid grid-cols-4 gap-4 mb-12 w-full max-w-4xl lg:hidden">
        {bottomImages.map((img, i) => (
          <motion.img
            key={img}
            src={`/imagenes/Stickers/${img}.png`}
            alt={`Bottom mobile ${i + 1}`}
            className="w-full max-w-[100px] sm:max-w-[130px] mx-auto h-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: false }}
          />
        ))}
      </div>

      {/* Imágenes laterales para desktop */}
      <div className="hidden lg:flex absolute left-10 top-20 flex-col space-y-6 z-10">
        {["1", "4", "6", "11"].map((img, i) => (
          <motion.img
            key={img}
            src={`/imagenes/Stickers/${img}.png`}
            alt={`Izquierda desktop ${i + 1}`}
            className="w-full max-w-[200px] h-auto mt-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: false }}
          />
        ))}
      </div>

      <div className="hidden lg:flex absolute right-10 top-20 flex-col space-y-6 z-10">
        {["2", "5", "10", "13"].map((img, i) => (
          <motion.img
            key={img}
            src={`/imagenes/Stickers/${img}.png`}
            alt={`Derecha desktop ${i + 1}`}
            className="w-full max-w-[200px] h-auto mt-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: false }}
          />
        ))}
      </div>

      {/* Redes sociales */}
      <motion.div
        className="flex space-x-6 text-2xl mt-8 relative z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false }}
      >
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 text-3xl transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 text-3xl transition-transform transform hover:scale-110"
        >
          <FaXTwitter />
        </a>
      </motion.div>
    </section>
  );
}
