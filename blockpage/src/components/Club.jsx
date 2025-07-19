import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";

const activities = [
  {
    title: "Blockchain Introduction",
    cover: "/imagenes/Actividades/1. BlockIntro/POAP.png",
    images: [
      "/imagenes/Actividades/1. BlockIntro/POAP.png",
      "/imagenes/Actividades/1. BlockIntro/img1.png",
      "/imagenes/Actividades/1. BlockIntro/img2.png",
      "/imagenes/Actividades/1. BlockIntro/img3.png",
    ],
    description:
      "Se realizó una introducción al mundo de la tecnología blockchain, explicando sus fundamentos, cómo funciona y su impacto en distintos sectores. También se discutieron los beneficios clave como la transparencia, seguridad y descentralización. Esta actividad fue ideal para estudiantes que se estaban acercando por primera vez al concepto de blockchain.",
  },
  {
    title: "Exploring Blockchain",
    cover: "/imagenes/Actividades/2. ExploringBlock/POAP EB.png",
    images: [
      "/imagenes/Actividades/2. ExploringBlock/POAP EB.png",
      "/imagenes/Actividades/2. ExploringBlock/img1.jpg", 
      "/imagenes/Actividades/2. ExploringBlock/img2.jpg",
      "/imagenes/Actividades/2. ExploringBlock/img3.jpg",
    ],
    description:
      "En esta sesión se profundizó en los beneficios y aplicaciones reales de la tecnología blockchain. Para hacer la actividad más dinámica y participativa, se organizó un juego interactivo tipo Kahoot, donde los asistentes pudieron poner a prueba lo aprendido. Fue una experiencia divertida y educativa que reforzó los conceptos vistos.",
  },
  {
    title: "Blockchain Club Meetup",
    cover: "/imagenes/Actividades/3. BlockMeetup/POAP.png",
    images: [
      "/imagenes/Actividades/3. BlockMeetup/POAP.png",
      "/imagenes/Actividades/3. BlockMeetup/img1.jpg", 
      "/imagenes/Actividades/3. BlockMeetup/img2.jpg",
      "/imagenes/Actividades/3. BlockMeetup/img3.jpg",
    ],
    description:
      "Esta fue una actividad clave para el crecimiento del club. Contamos con la presencia del equipo de Ethereum Tegucigalpa, quienes compartieron su experiencia y motivaron a los estudiantes a unirse al Club de Blockchain de UNITEC. También se conversó sobre futuras colaboraciones, eventos, y cómo integrarse activamente tanto en el club como en las iniciativas de Ethereum Tegucigalpa.",
  },
  {
    title: "Bootcamp Solidity",
    cover: "/imagenes/Actividades/4. BootcampSol/POAP.jpg",
    images: [
      "/imagenes/Actividades/4. BootcampSol/POAP.jpg",
      "/imagenes/Actividades/4. BootcampSol/img1.jpg", 
      "/imagenes/Actividades/4. BootcampSol/img2.jpg",
      "/imagenes/Actividades/4. BootcampSol/img3.jpg",
      "/imagenes/Actividades/4. BootcampSol/img4.jpg",
    ],
    description:
      "En colaboración con Ethereum Tegucigalpa, se llevó a cabo un bootcamp intensivo de Solidity, el lenguaje de programación de contratos inteligentes en Ethereum. Los participantes aprendieron a desarrollar smart contracts desde cero. Al final del evento, se premiaron a los asistentes más destacados, incentivando la participación activa y el aprendizaje práctico.",
  },
  {
    title: "Taller Crypto Wallets",
    cover: "/imagenes/Actividades/5. TallerCrypto/POAP.jpg",
    images: [
      "/imagenes/Actividades/5. TallerCrypto/POAP.jpg",
      "/imagenes/Actividades/5. TallerCrypto/img1.jpg", 
      "/imagenes/Actividades/5. TallerCrypto/img2.jpg",
      "/imagenes/Actividades/5. TallerCrypto/img3.jpg",
      "/imagenes/Actividades/5. TallerCrypto/img4.jpg",
    ],
    description:
      "En este taller práctico, se enseñó a los asistentes cómo crear y utilizar una billetera digital usando la app Rainbow. Se abordaron temas como la gestión de activos, el envío y recepción de transacciones y las ventajas de la auto custodia. Para fomentar la práctica real, se entregaron $5 en criptoactivos a cada participante, permitiéndoles experimentar de forma segura con transacciones reales.",
  },
  {
    title: "Stand Informativo Plaza Crai",
    cover: "/imagenes/Actividades/6. StandInfo/POAP.jpg",
    images: [
      "/imagenes/Actividades/6. StandInfo/POAP.jpg",
      "/imagenes/Actividades/6. StandInfo/img1.jpg", 
      "/imagenes/Actividades/6. StandInfo/img2.jpg",
      "/imagenes/Actividades/6. StandInfo/img3.jpg",
    ],
    description:
      "El club organizó un stand informativo en la Plaza del CRAI de UNITEC con el objetivo de promocionar el Club de Blockchain. Durante la actividad, se brindó información personalizada sobre la misión del club, los eventos realizados y cómo unirse. Fue una excelente oportunidad para atraer nuevos miembros y generar mayor visibilidad dentro del campus",
  },
  // Aqui se agregan más actividades
];

export default function Club() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="p-10 bg-black text-white min-h-screen">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Club de Blockchain UNITEC
      </motion.h2>

      <motion.p
        className="max-w-4xl mx-auto text-lg text-justify text-gray-300 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        El Club de Blockchain de UNITEC fue creado para empoderar a los estudiantes con
        conocimiento práctico en tecnologías descentralizadas como Ethereum. Participar
        en el club permite acceso a talleres, charlas, proyectos colaborativos y networking
        con profesionales de la industria.
      </motion.p>

      
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {activities.map((activity, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelected(activity)}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={activity.cover}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{activity.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      

      {/* Modal */}
      <Dialog open={!!selected} onClose={() => setSelected(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-black text-white rounded-xl max-w-2xl w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-white text-xl"
              onClick={() => setSelected(null)}
            >
              <FaTimes />
            </button>
            {selected && (
              <>
                <h2 className="text-2xl font-bold mb-4">{selected.title}</h2>
                <div className="flex overflow-x-auto gap-4 mb-4">
                  {selected.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${selected.title} ${i + 1}`}
                      className="h-48 rounded-lg object-cover"
                    />
                  ))}
                </div>
                <p className="text-white-800">{selected.description}</p>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
