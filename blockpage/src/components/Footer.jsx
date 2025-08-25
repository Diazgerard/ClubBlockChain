import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "X",
      icon: FaXTwitter,
      url: "https://x.com/cdb_jaguares22",
      color: "hover:text-white"
    },
    {
      name: "Instagram", 
      icon: FaInstagram,
      url: "",
      color: "hover:text-pink-400"
    },
    
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Club", href: "#club" },
    { name: "Events", href: "#evento" },
    { name: "Contact", href: "#form" }
  ];

  return (
    <footer className="bg-black text-white mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y Descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/imagenes/Utilities/Logo CB.png" 
                alt="Club Blockchain" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Club Blockchain</h3>
                <p className="text-sm text-gray-400">UNITEC</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students with practical knowledge in decentralized 
              technologies and the Ethereum ecosystem in Honduras.
            </p>
          </motion.div>

          {/* Enlaces Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://x.com/cdb_jaguares22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-xl"
              >
                <FaXTwitter />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-xl"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 clubdeblockchainjaguares@gmail.com</p>
              <p>📍 UNITEC, Tegucigalpa, Honduras</p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8">
          <div className="flex justify-center items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-gray-400"
            >
              © {currentYear} Club Blockchain UNITEC. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
