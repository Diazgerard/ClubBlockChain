"use client";

import React from "react";
import {Carousel, Card} from "./UI/apple-cards-carousel";

const activities = [
    {
        title: "Blockchain Introduction",
        cover: "/imagenes/Actividades/1. BlockIntro/POAP.png",
        images: ["/imagenes/Actividades/1. BlockIntro/POAP.png"],
        description:
            "An introduction to the world of blockchain technology was conducted, explaining its fundamentals, how it works and its impact on different sectors. Key benefits such as transparency, security and decentralization were also discussed. This activity was ideal for students who were approaching the concept of blockchain for the first time.",
    },
    {
        title: "Exploring Blockchain",
        cover: "/imagenes/Actividades/2. ExploringBlock/POAP EB.png",
        images: ["/imagenes/Actividades/2. ExploringBlock/1.jpg","/imagenes/Actividades/2. ExploringBlock/img1.jpg", "/imagenes/Actividades/2. ExploringBlock/img2.jpg", "/imagenes/Actividades/2. ExploringBlock/img3.jpg"],
        description:
            "In this session, we delved deeper into the benefits and real applications of blockchain technology. To make the activity more dynamic and participatory, an interactive Kahoot-style game was organized, where attendees could test what they learned. It was a fun and educational experience that reinforced the concepts covered.",
    },
    {
        title: "Blockchain Club Meetup",
        cover: "/imagenes/Actividades/3. BlockMeetup/POAP.png",
        images: ["/imagenes/Actividades/3. BlockMeetup/2.png", "/imagenes/Actividades/3. BlockMeetup/img1.jpg", "/imagenes/Actividades/3. BlockMeetup/img2.jpg", "/imagenes/Actividades/3. BlockMeetup/img3.jpg"],
        description:
            "This was a key activity for the growth of the club. We had the presence of the Ethereum Tegucigalpa team, who shared their experience and motivated students to join the UNITEC Blockchain Club. We also discussed future collaborations, events, and how to actively integrate into both the club and Ethereum Tegucigalpa initiatives.",
    },
    {
        title: "Bootcamp Solidity",
        cover: "/imagenes/Actividades/4. BootcampSol/POAP.jpg",
        images: ["/imagenes/Actividades/4. BootcampSol/POAP.jpg", "/imagenes/Actividades/4. BootcampSol/img1.jpg", "/imagenes/Actividades/4. BootcampSol/img2.jpg", "/imagenes/Actividades/4. BootcampSol/img3.jpg", "/imagenes/Actividades/4. BootcampSol/img4.jpg"],
        description:
            "In collaboration with Ethereum Tegucigalpa, an intensive Solidity bootcamp was held, the smart contract programming language on Ethereum. Participants learned to develop smart contracts from scratch. At the end of the event, the most outstanding attendees were awarded, encouraging active participation and practical learning.",
    },
    {
        title: "Crypto Wallets Workshop",
        cover: "/imagenes/Actividades/5. TallerCrypto/POAP.jpg",
        images: ["/imagenes/Actividades/5. TallerCrypto/POAP.jpg", "/imagenes/Actividades/5. TallerCrypto/img1.jpg", "/imagenes/Actividades/5. TallerCrypto/img2.jpg", "/imagenes/Actividades/5. TallerCrypto/img3.jpg", "/imagenes/Actividades/5. TallerCrypto/img4.jpg"],
        description:
            "In this practical workshop, attendees were taught how to create and use a digital wallet using the Rainbow app. Topics such as asset management, sending and receiving transactions, and the advantages of self-custody were covered. To encourage real practice, $5 in crypto assets were given to each participant, allowing them to safely experiment with real transactions.",
    },
    {
        title: "Informative Stand Plaza Crai",
        cover: "/imagenes/Actividades/6. StandInfo/POAP.jpg",
        images: ["/imagenes/Actividades/6. StandInfo/img1.jpg", "/imagenes/Actividades/6. StandInfo/img2.jpg", "/imagenes/Actividades/6. StandInfo/img3.jpg"],
        description:
            "The club organized an informative stand at UNITEC's CRAI Plaza with the goal of promoting the Blockchain Club. During the activity, personalized information was provided about the club's mission, events held, and how to join. It was an excellent opportunity to attract new members and generate greater visibility within the campus.",
    },
    // Here more activities are added
];

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />);

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">
                Blockchain Club Activities
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
                <span className="font-bold text-gray-100">An introduction to the world of blockchain technology was conducted, explaining its fundamentals, how it works and its impact on different sectors.</span> Key benefits such as transparency,
                security and decentralization were also discussed. This activity was ideal for students who were approaching the concept of blockchain for the first time.
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
                <span className="font-bold text-gray-100">In this session, we delved deeper into the benefits and real applications of blockchain technology.</span> To make the activity more dynamic and participatory, an interactive Kahoot-style game was organized, where attendees could test what they learned. It was a fun and educational experience that reinforced the concepts covered.
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
                <span className="font-bold text-gray-100">This was a key activity for the growth of the club. We had the presence of the Ethereum Tegucigalpa team.</span> Who shared their experience and motivated students to join the UNITEC Blockchain Club. We also discussed future collaborations, events, and how to actively integrate into both the club and Ethereum Tegucigalpa initiatives.
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
                <span className="font-bold text-gray-100">In collaboration with Ethereum Tegucigalpa, an intensive Solidity bootcamp was held.</span> The smart contract programming language on Ethereum. Participants learned to develop smart contracts from scratch. At the end of the event, the most outstanding attendees were awarded, encouraging active participation and practical learning.
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
                <span className="font-bold text-gray-100">In this practical workshop, attendees were taught how to create and use a digital wallet using the Rainbow app.</span> Topics such as asset management, sending and receiving transactions, and the advantages of self-custody were covered. To encourage real practice, $5 in crypto assets were given to each participant, allowing them to safely experiment with real transactions.
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
                <span className="font-bold text-gray-100">The club organized an informative stand at UNITEC's CRAI Plaza with the goal of promoting the Blockchain Club.</span> During the activity, personalized information was provided about the club's mission, events held, and how to join. It was an excellent opportunity to attract new members and generate greater visibility within the campus.
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
        category: "ft Finance Association",
        title: "Crypto Wallets Workshop",
        src: "/imagenes/Actividades/5. TallerCrypto/POAP.jpg",
        content: <Activity5 />,
    },
    {
        category: "ft Student Life",
        title: "Informative Stands",
        src: "/imagenes/Actividades/6. StandInfo/POAP.jpg",
        content: <Activity6 />,
    },
];
