import { motion } from "framer-motion";
import { FaInstagram, FaXTwitter } from "react-icons/fa6"; 

export default function EthereumInfo() {
  return (
    <section className="p-10 bg-white text-gray-900 min-h-screen">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Ethereum Tegucigalpa
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-lg text-justify leading-relaxed mb-10"
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
        className="flex justify-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="https://www.instagram.com/ethereumtegucigalpa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800 text-3xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/ethtegucigalpa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-3xl"
        >
          <FaXTwitter />
        </a>
      </motion.div>
    </section>
  );
}
