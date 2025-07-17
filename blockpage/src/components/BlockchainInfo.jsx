import { useState } from "react";
import { motion } from "framer-motion";

export default function BlockchainInfo() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      title: "Finanzas Descentralizadas (DeFi)",
      text: "Accede a préstamos, ahorros y pagos sin bancos.",
      image: "/imagenes/BlockCh/DEFI.jpeg",
      description:
        "Las Finanzas Descentralizadas (DeFi) permiten a cualquier persona acceder a productos financieros sin intermediarios tradicionales. Se utilizan contratos inteligentes en redes como Ethereum.",
      extra: [
        "✅ Préstamos sin bancos.",
        "✅ Intereses ganados por staking o lending.",
        "✅ Transferencias rápidas y globales.",
        "🌍 Ejemplo: Un agricultor en zonas rurales puede acceder a crédito desde su teléfono móvil, sin necesidad de un banco local.",
      ],
    },
    {
      title: "Identidad Digital",
      text: "Gestiona tu identidad de forma segura.",
      image: "/imagenes/BlockCh/id.png",
      description:
        "La identidad digital en blockchain permite que los usuarios controlen y validen su propia información personal sin depender de entidades centralizadas.",
      extra: [
        "🔐 Control total sobre tus datos.",
        "🪪 Verificación sin necesidad de mostrar documentos físicos.",
        "👤 Protege tu privacidad online.",
        "🌍 Ejemplo: En votaciones digitales, tu identidad puede ser verificada sin riesgo de fraude.",
      ],
    },
    {
      title: "Trazabilidad en la Cadena de Suministro",
      text: "Sigue el recorrido de un producto desde su origen.",
      image: "/imagenes/BlockCh/trazabilidad.jpg",
      description:
        "Blockchain permite registrar cada paso en la cadena de producción de un bien, desde su origen hasta el consumidor final, de manera transparente e inmutable.",
      extra: [
        "📦 Registro del origen de cada producto.",
        "🔍 Evita fraudes y falsificaciones.",
        "🌿 Garantiza prácticas éticas (p. ej., comercio justo).",
        "🌍 Ejemplo: Puedes verificar si un café es realmente orgánico desde la finca hasta la tienda.",
      ],
    },
    {
      title: "Contratos Inteligentes",
      text: "Automatiza acuerdos sin necesidad de confianza.",
      image: "/imagenes/BlockCh/contracts.webp",
      description:
        "Los contratos inteligentes son programas que se ejecutan automáticamente cuando se cumplen ciertas condiciones, eliminando la necesidad de intermediarios o notarios.",
      extra: [
        "⚖️ Ejecución automática y transparente.",
        "💸 Reducción de costos legales.",
        "🔁 Aplicable en seguros, alquileres, pagos, etc.",
        "🌍 Ejemplo: Alquiler de vivienda donde el pago libera la llave digital automáticamente.",
      ],
    },
  ];

  return (
    <section className="p-6 md:p-10 bg-black text-white min-h-screen">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        ¿Qué es Blockchain?
      </motion.h2>

      <motion.p
        className="max-w-4xl mx-auto text-gray-300 text-lg text-justify leading-relaxed"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        Blockchain es una tecnología que permite almacenar información de forma segura, descentralizada y transparente. Gracias a ella, podemos realizar transacciones o registrar datos sin depender de una sola entidad. Cada bloque contiene datos, un identificador y está conectado criptográficamente con el anterior, creando una cadena incorruptible.
      </motion.p>

      <div className="flex justify-center my-12">
        <motion.img
          src="/imagenes/BlockCh/blockIma.jpg"
          alt="Ilustración Blockchain"
          className="w-full max-w-md rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      <motion.h3
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-white-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Oportunidades de la Blockchain
      </motion.h3>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl shadow-md p-6 cursor-pointer hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedCard(item)}
          >
            <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-white-300">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal de información detallada */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedCard(null)}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-2xl max-w-xl text-left relative overflow-y-auto max-h-[90vh]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white-400 mb-3">{selectedCard.title}</h3>
            <p className="text-gray-300 mb-4">{selectedCard.description}</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400 text-sm">
              {selectedCard.extra.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
