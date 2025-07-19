import { motion } from "framer-motion";

export function CardHoverEffect({ items, onClick }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 w-full">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="group relative h-60 w-full cursor-pointer overflow-hidden rounded-xl border border-white/[0.1] bg-black transition duration-300 hover:shadow-xl"
          whileHover={{ scale: 1.03 }}
          onClick={() => onClick(item)}
        >
          <img
            src={item.cover}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
