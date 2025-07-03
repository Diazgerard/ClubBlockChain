import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter } from "react-icons/fa6"; // Asegúrate de usar `fa6`

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center">

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-black/70 backdrop-blur-md z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <ul className="flex space-x-6 text-white font-semibold text-sm md:text-base">
            <li><a href="#blockchain" className="hover:text-blue-400 transition">Blockchain</a></li>
            <li><a href="#ethereum" className="hover:text-blue-400 transition">Ethereum</a></li>
            <li><a href="#club" className="hover:text-blue-400 transition">Club</a></li>
            <li><a href="#wallet" className="hover:text-blue-400 transition">Wallet</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6 text-center mt-20"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        Bienvenidos
      </motion.h1>

      {/* Logo */}
      <motion.img
        src="/logo.png"
        alt="Logo"
        className="w-32 h-32 mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
      />

      {/* Redes sociales con íconos */}
      <motion.div
        className="flex space-x-6 text-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false }}
      >
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
          <FaInstagram />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <FaXTwitter />
        </a>
      </motion.div>
    </section>
  );
}
