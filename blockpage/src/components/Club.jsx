import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";
import { StickyScroll } from "./UI/sticky-scroll-reveal";
import { LinkPreview } from "./UI/link-preview";

export default function Club() {
  const [selected, setSelected] = useState(null);

  const content = [
    {
      title: "Club de Blockchain",
      description:
        "El Club de Blockchain de UNITEC fue creado para empoderar a los estudiantes con conocimiento práctico en tecnologías descentralizadas como Ethereum. Participar en el club permite acceso a talleres, charlas, proyectos colaborativos y networking con profesionales de la industria.",
      content: (
        <img
          src="/imagenes/Utilities/Logo CB.png"
          alt="Club de Blockchain"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Ethereum Tegucigalpa",
      description: (
        <div className="space-y-4">
          <p>
            Ethereum Tegucigalpa es una comunidad local dedicada a promover el
            conocimiento, desarrollo y adopción del ecosistema Ethereum en
            Honduras. Nos enfocamos en la educación sobre tecnologías
            descentralizadas, contratos inteligentes y herramientas web3.
          </p>
          <p>
            Organizamos charlas, talleres, meetups y colaboraciones con
            universidades e instituciones para expandir las oportunidades en
            blockchain y empoderar a nuevo desarrolladores y emprendedores en la
            región.
          </p>
          <div className="flex gap-4 pt-2">
            <LinkPreview 
              url="https://www.instagram.com/ethereumtgu/"
              imageSrc="/imagenes/Utilities/image1.png"
            >
              <span className="text-blue-400 hover:text-blue-500">
                Instagram: @ethereumtgu
              </span>
            </LinkPreview>
            <LinkPreview 
              url="https://x.com/ethereumTGU_"
              imageSrc="/imagenes/Utilities/image2.png"
            >
              <span className="text-blue-400 hover:text-blue-500">
                Twitter: @EthereumTGU_
              </span>
            </LinkPreview>
          </div>
        </div>
      ),
      content: (
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg">
          <img
            src="/imagenes/Utilities/LOGO ETH TGU.png"
            alt="Ethereum"
            className="w-[90%] object-contain py-8"
          />
        </div>
      ),
    },
    {
      title: "¿Qué es Blockchain?",
      description:
        "Blockchain es una tecnología de registro distribuido que permite almacenar información de manera segura, transparente e inmutable. Funciona como una cadena de bloques que contiene datos y está diseñada para evitar su alteración, haciendo que cada transacción sea verificable y permanente.",
      content: (
        <img
          src="/imagenes/Utilities/block1.png"
          alt="Blockchain"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "¿Por qué es importante Blockchain?",
      description:
        "Blockchain está revolucionando múltiples industrias al proporcionar transparencia, seguridad y descentralización. Su importancia radica en su capacidad para eliminar intermediarios, reducir costos, aumentar la eficiencia y crear nuevos modelos de negocio en sectores como finanzas, logística, salud y más.",
      content: (
        <img
          src="/imagenes/Stickers/2.png"
          alt="Importancia del Blockchain"
          className="h-full w-full object-cover"
        />
      ),
    },
  ];

  return (
    <div className="bg-black pb-16 md:pb-24">
      <section className="p-6 md:p-10 text-white">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Club de Blockchain UNITEC
        </motion.h2>

        <div className="mt-10 max-w-7xl mx-auto">
          <div className="relative">
            <StickyScroll content={content} />
          </div>
        </div>
      </section>
    </div>
  );
}
