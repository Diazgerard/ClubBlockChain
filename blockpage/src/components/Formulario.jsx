import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { CometCard } from "./UI/comet-card"; 
import { Label } from "./UI/label"; 
import { Input } from "./UI/input";
import {cn} from "../lib/utils.ts";
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
        className="w-full max-w-md  p-8 rounded-2xl shadow-xl space-y-6 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <Label htmlFor="nombre">Nombre</Label>
          <Input
            id="nombre"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            inputmode="text"
            className={cn("focus:shadow-__shadow-input")}
          />
        </div>

        <div>
          <Label htmlFor="cuenta">Numero de Cuenta</Label>
          <Input
            id="cuenta"
            name="cuenta"
            value={form.cuenta}
            onChange={handleChange}
            placeholder="12219412"
            inputmode="numeric"
            className={cn("focus:shadow-__shadow-input")}
          />
        </div>

        <div>
          <Label htmlFor="cuenta">Carrera</Label>
          <Input
            id="carrera"
            name="carrera"
            value={form.carrera}
            onChange={handleChange}
            placeholder="Carrera de Pregrado"
            inputmode="text"
            className={cn("focus:shadow-__shadow-input")}
          />
        </div>

        <div>
          <Label htmlFor="cuenta">Numero Telefónico</Label>
          <Input
            id="telefono"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="0000-0000"
            inputmode="numeric"
            className={cn("focus:shadow-__shadow-input")}
          />
        </div>

        <button
          type="submit"
          className="relative inline-flex h-12 w-full overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-semibold text-white backdrop-blur-3xl">
            Enviar
          </span>
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
        <CometCard className="w-64 h-64 p-2">
          <img
            src="/imagenes/Utilities/camisa1.jpeg"
            alt="Camisa 1"
            className="w-full h-full object-cover rounded-xl"
            draggable={false}
          />
        </CometCard>

        <motion.div
          className="text-white text-4xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown />
        </motion.div>

        <CometCard className="w-64 h-64 p-2">
          <img
            src="/imagenes/Utilities/camisa2.jpeg"
            alt="Camisa 2"
            className="w-full h-full object-cover rounded-xl"
            draggable={false}
          />
        </CometCard>
      </motion.div>

      <a
      href="https://tally.so/r/w4p1bo"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-semibold text-white backdrop-blur-3xl">
        Ir a la Tienda del Club
      </span>
    </a>

    </section>
  );
}
