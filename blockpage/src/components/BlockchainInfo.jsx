import { useState } from "react";
import { motion } from "framer-motion";

export default function BlockchainInfo() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      title: "Decentralized Finance (DeFi)",
      text: "Access loans, savings and payments without banks.",
      image: "/imagenes/BlockCh/DEFI.jpeg",
      description:
        "Decentralized Finance (DeFi) allows anyone to access financial products without traditional intermediaries. Smart contracts are used on networks like Ethereum.",
      extra: [
        "✅ Loans without banks.",
        "✅ Interest earned through staking or lending.",
        "✅ Fast and global transfers.",
        "🌍 Example: A farmer in rural areas can access credit from their mobile phone, without needing a local bank.",
      ],
    },
    {
      title: "Digital Identity",
      text: "Manage your identity securely.",
      image: "/imagenes/BlockCh/id.png",
      description:
        "Digital identity on blockchain allows users to control and validate their own personal information without depending on centralized entities.",
      extra: [
        "🔐 Full control over your data.",
        "🪪 Verification without needing to show physical documents.",
        "👤 Protect your online privacy.",
        "🌍 Example: In digital voting, your identity can be verified without risk of fraud.",
      ],
    },
    {
      title: "Supply Chain Traceability",
      text: "Track a product's journey from its origin.",
      image: "/imagenes/BlockCh/trazabilidad.jpg",
      description:
        "Blockchain allows recording every step in a product's production chain, from its origin to the final consumer, in a transparent and immutable way.",
      extra: [
        "📦 Recording the origin of each product.",
        "🔍 Prevents fraud and counterfeiting.",
        "🌿 Guarantees ethical practices (e.g., fair trade).",
        "🌍 Example: You can verify if coffee is truly organic from farm to store.",
      ],
    },
    {
      title: "Smart Contracts",
      text: "Automate agreements without needing trust.",
      image: "/imagenes/BlockCh/contracts.webp",
      description:
        "Smart contracts are programs that execute automatically when certain conditions are met, eliminating the need for intermediaries or notaries.",
      extra: [
        "⚖️ Automatic and transparent execution.",
        "💸 Reduction of legal costs.",
        "🔁 Applicable in insurance, rentals, payments, etc.",
        "🌍 Example: Housing rental where payment automatically releases the digital key.",
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
        What is Blockchain?
      </motion.h2>

      <motion.p
        className="max-w-4xl mx-auto text-gray-300 text-lg text-justify leading-relaxed"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        Blockchain is a technology that allows storing information securely, decentralized and transparently. Thanks to it, we can perform transactions or record data without depending on a single entity. Each block contains data, an identifier and is cryptographically connected to the previous one, creating an incorruptible chain.
      </motion.p>

      <div className="flex justify-center my-12">
        <motion.img
          src="/imagenes/BlockCh/blockIma.jpg"
          alt="Blockchain Illustration"
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
        Blockchain Opportunities
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
