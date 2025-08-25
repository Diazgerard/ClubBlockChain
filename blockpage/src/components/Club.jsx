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
      title: "Blockchain Club",
      description:
        "The UNITEC Blockchain Club was created to empower students with practical knowledge in decentralized technologies like Ethereum. Participating in the club provides access to workshops, talks, collaborative projects, and networking with industry professionals.",
      content: (
        <img
          src="/imagenes/Utilities/Logo CB.png"
          alt="Blockchain Club"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Ethereum Tegucigalpa",
      description: (
        <div className="space-y-4">
          <p>
            Ethereum Tegucigalpa is a local community dedicated to promoting
            knowledge, development, and adoption of the Ethereum ecosystem in
            Honduras. We focus on education about decentralized technologies,
            smart contracts, and web3 tools.
          </p>
          <p>
            We organize talks, workshops, meetups, and collaborations with
            universities and institutions to expand blockchain opportunities
            and empower new developers and entrepreneurs in the region.
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
      title: "What is Blockchain?",
      description:
        "Blockchain is a distributed ledger technology that allows information to be stored securely, transparently, and immutably. It works as a chain of blocks containing data and is designed to prevent alteration, making each transaction verifiable and permanent.",
      content: (
        <img
          src="/imagenes/Utilities/block1.png"
          alt="Blockchain"
          className="h-full w-full object-cover"
        />
      ),
    },
    {
      title: "Why is Blockchain Important?",
      description:
        "Blockchain is revolutionizing multiple industries by providing transparency, security, and decentralization. Its importance lies in its ability to eliminate intermediaries, reduce costs, increase efficiency, and create new business models in sectors like finance, logistics, healthcare, and more.",
      content: (
        <img
          src="/imagenes/Stickers/2.png"
          alt="Blockchain Importance"
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
          UNITEC Blockchain Club
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
