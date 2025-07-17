import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    cuenta: "",
    carrera: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cuenta" && !/^\d*$/.test(value)) return;

    if (name === "telefono") {
      
      const numeros = value.replace(/\D/g, "");
      let telefonoFormateado = numeros;
      if (numeros.length > 4) {
        telefonoFormateado = numeros.slice(0, 4) + "-" + numeros.slice(4, 8);
      }
      setForm({ ...form, telefono: telefonoFormateado });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, cuenta, carrera, telefono } = form;

    
    if (!nombre || !cuenta || !carrera || !telefono) return;

    emailjs
      .send(
        "service_vrwn56n",
        "template_nuo7tn6",
        { nombre, cuenta, carrera, telefono },
        "q7rx8q4uQV9vYD2Jv"
      )
      .then(() => {
        setForm({ nombre: "", cuenta: "", carrera: "", telefono: "" });
      })
      .catch((err) => {
        console.error("Error al enviar:", err);
        alert("Hubo un problema al enviar el formulario.");
      });
  };


  return (
    <section className="p-10 bg-black text-white min-h-screen flex flex-col items-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Regístrate para ser parte del Blockchain Club
      </motion.h2>

      <motion.p
        className="text-center max-w-xl text-gray-400 mb-8 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Completa este formulario para formar parte de nuestra comunidad.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-xl space-y-6 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <label className="block mb-2 text-sm text-gray-300">Nombre Completo</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-300">Número de Cuenta</label>
          <input
            type="text"
            name="cuenta"
            value={form.cuenta}
            onChange={handleChange}
            required
            inputMode="numeric"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-300">Carrera</label>
          <input
            type="text"
            name="carrera"
            value={form.carrera}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-300">Número Telefónico</label>
          <input
            type="tel"
            name="telefono"
            placeholder="0000-0000"
            value={form.telefono}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Enviar
        </button>
      </motion.form>

      {/* Título Tienda del Club */}
      <motion.h3
        className="text-3xl font-bold mb-6 mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Tienda del Club
      </motion.h3>

      <motion.div
        className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/imagenes/Utilities/camisa1.jpeg"
          alt="Camisa 1"
          className="w-64 h-64 object-cover rounded-xl shadow-lg"
        />

        <motion.div
          className="text-white text-4xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown />
        </motion.div>

        <img
          src="/imagenes/Utilities/camisa2.jpeg"
          alt="Camisa 2"
          className="w-64 h-64 object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      <a
        href="https://tally.so/r/w4p1bo"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300"
      >
        Ir a la Tienda del Club
      </a>
    </section>
  );
}
