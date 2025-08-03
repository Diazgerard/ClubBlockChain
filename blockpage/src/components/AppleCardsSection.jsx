"use client";

import React from "react";
import {Carousel, Card} from "./UI/apple-cards-carousel";

const activities = [
    {
        title: "Blockchain Introduction",
        cover: "/imagenes/Actividades/1. BlockIntro/POAP.png",
        images: ["/imagenes/Actividades/1. BlockIntro/POAP.png"],
        description:
            "Se realizó una introducción al mundo de la tecnología blockchain, explicando sus fundamentos, cómo funciona y su impacto en distintos sectores. También se discutieron los beneficios clave como la transparencia, seguridad y descentralización. Esta actividad fue ideal para estudiantes que se estaban acercando por primera vez al concepto de blockchain.",
    },
    {
        title: "Exploring Blockchain",
        cover: "/imagenes/Actividades/2. ExploringBlock/POAP EB.png",
        images: ["/imagenes/Actividades/2. ExploringBlock/1.jpg","/imagenes/Actividades/2. ExploringBlock/img1.jpg", "/imagenes/Actividades/2. ExploringBlock/img2.jpg", "/imagenes/Actividades/2. ExploringBlock/img3.jpg"],
        description:
            "En esta sesión se profundizó en los beneficios y aplicaciones reales de la tecnología blockchain. Para hacer la actividad más dinámica y participativa, se organizó un juego interactivo tipo Kahoot, donde los asistentes pudieron poner a prueba lo aprendido. Fue una experiencia divertida y educativa que reforzó los conceptos vistos.",
    },
    {
        title: "Blockchain Club Meetup",
        cover: "/imagenes/Actividades/3. BlockMeetup/POAP.png",
        images: ["/imagenes/Actividades/3. BlockMeetup/2.png", "/imagenes/Actividades/3. BlockMeetup/img1.jpg", "/imagenes/Actividades/3. BlockMeetup/img2.jpg", "/imagenes/Actividades/3. BlockMeetup/img3.jpg"],
        description:
            "Esta fue una actividad clave para el crecimiento del club. Contamos con la presencia del equipo de Ethereum Tegucigalpa, quienes compartieron su experiencia y motivaron a los estudiantes a unirse al Club de Blockchain de UNITEC. También se conversó sobre futuras colaboraciones, eventos, y cómo integrarse activamente tanto en el club como en las iniciativas de Ethereum Tegucigalpa.",
    },
    {
        title: "Bootcamp Solidity",
        cover: "/imagenes/Actividades/4. BootcampSol/POAP.jpg",
        images: ["/imagenes/Actividades/4. BootcampSol/POAP.jpg", "/imagenes/Actividades/4. BootcampSol/img1.jpg", "/imagenes/Actividades/4. BootcampSol/img2.jpg", "/imagenes/Actividades/4. BootcampSol/img3.jpg", "/imagenes/Actividades/4. BootcampSol/img4.jpg"],
        description:
            "En colaboración con Ethereum Tegucigalpa, se llevó a cabo un bootcamp intensivo de Solidity, el lenguaje de programación de contratos inteligentes en Ethereum. Los participantes aprendieron a desarrollar smart contracts desde cero. Al final del evento, se premiaron a los asistentes más destacados, incentivando la participación activa y el aprendizaje práctico.",
    },
    {
        title: "Taller Crypto Wallets",
        cover: "/imagenes/Actividades/5. TallerCrypto/POAP.jpg",
        images: ["/imagenes/Actividades/5. TallerCrypto/POAP.jpg", "/imagenes/Actividades/5. TallerCrypto/img1.jpg", "/imagenes/Actividades/5. TallerCrypto/img2.jpg", "/imagenes/Actividades/5. TallerCrypto/img3.jpg", "/imagenes/Actividades/5. TallerCrypto/img4.jpg"],
        description:
            "En este taller práctico, se enseñó a los asistentes cómo crear y utilizar una billetera digital usando la app Rainbow. Se abordaron temas como la gestión de activos, el envío y recepción de transacciones y las ventajas de la auto custodia. Para fomentar la práctica real, se entregaron $5 en criptoactivos a cada participante, permitiéndoles experimentar de forma segura con transacciones reales.",
    },
    {
        title: "Stand Informativo Plaza Crai",
        cover: "/imagenes/Actividades/6. StandInfo/POAP.jpg",
        images: ["/imagenes/Actividades/6. StandInfo/img1.jpg", "/imagenes/Actividades/6. StandInfo/img2.jpg", "/imagenes/Actividades/6. StandInfo/img3.jpg"],
        description:
            "El club organizó un stand informativo en la Plaza del CRAI de UNITEC con el objetivo de promocionar el Club de Blockchain. Durante la actividad, se brindó información personalizada sobre la misión del club, los eventos realizados y cómo unirse. Fue una excelente oportunidad para atraer nuevos miembros y generar mayor visibilidad dentro del campus",
    },
    // Aqui se agregan más actividades
];

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">
                Actividades del Club de Blockchain
                <span className="text-neutral-400 text-base md:text-2xl font-normal"> - The Blockchain Club Activities</span>
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
                    <div key={"dummy-content" + index} className="bg-gray-500 p-8 md:p-14 rounded-3xl mb-4">
                        <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-gray-100">The first rule of Apple club is that you boast about Apple club.</span> Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every thought.
                        </p>
                        <img src="https://assets.aceternity.com/macbook.png" alt="Macbook mockup from Aceternity UI" height="500" width="500" className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
                    </div>
                );
            })}
        </>
    );
};

const Activity1 = () => {
    return (
        <div className="bg-[#0a0a0a] p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-gray-100">Se realizó una introducción al mundo de la tecnología blockchain, explicando sus fundamentos, cómo funciona y su impacto en distintos sectores.</span> También se discutieron los beneficios clave como la transparencia,
                seguridad y descentralización. Esta actividad fue ideal para estudiantes que se estaban acercando por primera vez al concepto de blockchain.
            </p>
            {activities[0].images.map((image, index) => (
                <img key={index} src={image} alt={`Activity 1 image ${index + 1}`} className="w-full h-auto rounded-lg mt-4" />
            ))}
        </div>
    );
};

const Activity2 = () => {
    return (
        <div className="bg-[#0a0a0a] p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-gray-100">En esta sesión se profundizó en los beneficios y aplicaciones reales de la tecnología blockchain.</span> Para hacer la actividad más dinámica y participativa, se organizó un juego interactivo tipo Kahoot, donde los asistentes pudieron poner a prueba lo aprendido. Fue una experiencia divertida y educativa que reforzó los conceptos vistos.
            </p>
            {activities[1].images.map((image, index) => (
                <img key={index} src={image} alt={`Activity 2 image ${index + 1}`} className="w-full h-auto rounded-lg mt-4" />
            ))}
        </div>
    );
};

const Activity3 = () => {
    return (
        <div className="bg-[#0a0a0a] p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-gray-100">Esta fue una actividad clave para el crecimiento del club. Contamos con la presencia del equipo de Ethereum Tegucigalpa.</span> Quienes compartieron su experiencia y motivaron a los estudiantes a unirse al Club de Blockchain de UNITEC. También se conversó sobre futuras colaboraciones, eventos, y cómo integrarse activamente tanto en el club como en las iniciativas de Ethereum Tegucigalpa.
            </p>
            {activities[2].images.map((image, index) => (
                <img key={index} src={image} alt={`Activity 3 image ${index + 1}`} className="w-full h-auto rounded-lg mt-4" />
            ))}
        </div>
    );
};

const Activity4 = () => {
    return (
        <div className="bg-[#0a0a0a] p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-gray-100">En colaboración con Ethereum Tegucigalpa, se llevó a cabo un bootcamp intensivo de Solidity.</span> El lenguaje de programación de contratos inteligentes en Ethereum. Los participantes aprendieron a desarrollar smart contracts desde cero. Al final del evento, se premiaron a los asistentes más destacados, incentivando la participación activa y el aprendizaje práctico.
            </p>
            {activities[3].images.map((image, index) => (
                <img key={index} src={image} alt={`Activity 4 image ${index + 1}`} className="w-full h-auto rounded-lg mt-4" />
            ))}
        </div>
    );
};

const Activity5 = () => {
    return (
        <div className="bg-[#0a0a0a] p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-gray-100">En este taller práctico, se enseñó a los asistentes cómo crear y utilizar una billetera digital usando la app Rainbow.</span> Se abordaron temas como la gestión de activos, el envío y recepción de transacciones y las ventajas de la auto custodia. Para fomentar la práctica real, se entregaron $5 en criptoactivos a cada participante, permitiéndoles experimentar de forma segura con transacciones reales.
            </p>
            {activities[4].images.map((image, index) => (
                <img key={index} src={image} alt={`Activity 5 image ${index + 1}`} className="w-full h-auto rounded-lg mt-4" />
            ))}
        </div>
    );
};

const Activity6 = () => {
    return (
        <div className="bg-[#0a0a0a] p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-white text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-gray-100">El club organizó un stand informativo en la Plaza del CRAI de UNITEC con el objetivo de promocionar el Club de Blockchain.</span> Durante la actividad, se brindó información personalizada sobre la misión del club, los eventos realizados y cómo unirse. Fue una excelente oportunidad para atraer nuevos miembros y generar mayor visibilidad dentro del campus.
            </p>
            {activities[5].images.map((image, index) => (
                <img key={index} src={image} alt={`Activity 6 image ${index + 1}`} className="w-full h-auto rounded-lg mt-4" />
            ))}
        </div>
    );
};

const data = [
    {
        category: "Invitado: Juan Molina",
        title: "The Blockchain Club Introduction",
        src: "/imagenes/Actividades/1. BlockIntro/POAP.png",
        content: <Activity1 />,
    },
    {
        category: "The Blockchain Club",
        title: "Exploring Blockchain Technology",
        src: "/imagenes/Actividades/2. ExploringBlock/1.jpg",
        content: <Activity2 />,
    },
    {
        category: "The Blockchain Club",
        title: "Blockchain Club Meetup",
        src: "/imagenes/Actividades/3. BlockMeetup/POAP.png",
        content: <Activity3 />,
    },

    {
        category: "ft Eth TGU",
        title: "Bootcamp Solidity",
        src: "/imagenes/Actividades/4. BootcampSol/POAP.jpg",
        content: <Activity4 />,
    },
    {
        category: "ft Asociacion de Finanzas",
        title: "Taller Crypto Wallet",
        src: "/imagenes/Actividades/5. TallerCrypto/POAP.jpg",
        content: <Activity5 />,
    },
    {
        category: "ft Vida Estudiantil",
        title: "Stands Informativos",
        src: "/imagenes/Actividades/6. StandInfo/POAP.jpg",
        content: <Activity6 />,
    },
];
