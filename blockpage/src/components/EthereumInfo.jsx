import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function EthereumInfo() {
  return (
    <section className="p-4 md:p-8 bg-black text-white flex flex-col items-center text-center">
      <motion.img
        src="/imagenes/Utilities/LOGO ETH TGU.png"
        alt="Ethereum Logo"
        className="w-00 h-auto mb-6 shadow-2xl border border-gray-700"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Ethereum Tegucigalpa
      </motion.h2>

      <motion.p
        className="max-w-4xl mx-auto text-gray-300 text-lg text-justify leading-relaxed mb-5"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ethereum Tegucigalpa es una comunidad local dedicada a promover el conocimiento,
        desarrollo y adopción del ecosistema Ethereum en Honduras. Nos enfocamos en la
        educación sobre tecnologías descentralizadas, contratos inteligentes y herramientas
        web3. Organizamos charlas, talleres, meetups y colaboraciones con universidades
        e instituciones para expandir las oportunidades en blockchain y empoderar a nuevos
        desarrolladores y emprendedores en la región.


      </motion.p>

      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="https://www.instagram.com/ethereumtgu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 text-3xl transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/ethereumTGU_"
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
