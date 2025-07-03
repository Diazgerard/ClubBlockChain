import { motion } from "framer-motion";

export default function BlockchainInfo() {
  const cards = [
    {
      title: "Finanzas Descentralizadas",
      text: "Acceso global a servicios financieros sin bancos.",
      image: "/imagenes/DEFI.jpeg",
    },
    {
      title: "Identidad Digital",
      text: "Controla tu identidad y protege tu información.",
      image: "/imagenes/id.png",
    },
    {
      title: "Trazabilidad",
      text: "Transparencia total en cadenas de suministro.",
      image: "/imagenes/trazabilidad.jpg",
    },
    {
      title: "Contratos Inteligentes",
      text: "Acuerdos automatizados sin intermediarios.",
      image: "/imagenes/contracts.webp",
    },
  ];

  return (
    <section className="p-10 bg-gradient-to-b from-white to-gray-100 text-gray-900 min-h-screen">
      {/* Título principal */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        ¿Qué es Blockchain?
      </motion.h2>

      {/* Definición y descripción */}
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-gray-700 text-justify text-lg leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          La tecnología Blockchain, o cadena de bloques, es una estructura de datos en la que la información se agrupa en conjuntos (bloques),
          que luego se encadenan entre sí de forma segura y cronológica. Lo más destacado de la Blockchain es su capacidad para promover la transparencia, 
          la seguridad y la descentralización en el manejo de datos.
          <br /><br />
          En su esencia, Blockchain es una tecnología de registro distribuido que permite a las partes realizar transacciones de manera segura y sin la necesidad de un intermediario.
          Piénsalo como un libro de contabilidad digital, compartido y consensuado, donde cada participante en la red tiene acceso a una copia exacta del historial de transacciones.
          Esto no solo asegura la integridad y la inmutabilidad de los datos, sino que también garantiza una transparencia sin precedentes.
          <br /><br />
        </motion.p>

        {/* Imagen decorativa más pequeña y centrada */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <img
            src="/imagenes/blockIma.jpg"
            alt="Ilustración Blockchain"
            className="w-350 rounded-xl shadow-md border border-gray-200"
          />
        </motion.div>

      </div>

      {/* Oportunidades */}
      <div className="mt-20">
        <motion.h3
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Oportunidades de la Blockchain
        </motion.h3>

        {/* Cards: 2 por fila */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Contenedor fijo para imagen con tamaño uniforme */}
              <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
