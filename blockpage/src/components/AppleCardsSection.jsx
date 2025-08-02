"use client";

import React from "react";
import { Carousel, Card } from "./UI/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">
        Oportunidades de la Blockchain
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p
              className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Invitado: Juan Molina",
    title: "The Blockchain Club Introduction",
    src: "/imagenes/Actividades/1. BlockIntro/POAP.png",
    content: <DummyContent />,
  },
  {
    category: "The Blockchain Club",
    title: "Exploring Blockchain Technology",
    src: "/imagenes/Actividades/2. ExploringBlock/1.jpg",
    content: <DummyContent />,
  },
  {
    category: "The Blockchain Club",
    title: "Blockchain Club Meetup",
    src: "/imagenes/Actividades/3. BlockMeetup/Untitled.png",
    content: <DummyContent />,
  },

  {
    category: "ft Eth TGU",
    title: "Bootcamp Solidity",
    src: "/imagenes/Actividades/4. BootcampSol/Untitled.png",
    content: <DummyContent />,
  },
  {
    category: "ft Asociacion de Finanzas",
    title: "Taller Crypto Wallet",
    src: "/imagenes/Actividades/5. TallerCrypto/POAP - Copy.jpg",
    content: <DummyContent />,
  },
  {
    category: "ft Vida Estudiantil",
    title: "Stands Informativos",
    src: "/imagenes/Actividades/6. StandInfo/POAP.jpg",
    content: <DummyContent />,
  },
];
