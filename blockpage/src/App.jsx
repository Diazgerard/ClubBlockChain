import HeroSection from "./components/HeroSection";
import BlockchainInfo from "./components/BlockchainInfo";
import EthereumInfo from "./components/EthereumInfo";
import Formulario from "./components/Formulario";
import Club from "./components/Club";
import Evento from "./components/Evento";
import {Vortex} from "./components/UI/Vortex";
import {TracingBeam} from "./components/UI/TracingBeam";
import {LampContainer, LampDemo} from "./components/UI/lamp";
import {motion} from "motion/react";
import {FloatingNav} from "./components/UI/floating-navbar";
import {AppleCardsCarouselDemo} from "./components/AppleCardsSection";
import {GlowingEffectDemoSecond} from "./components/GlowingEffectDemoSecond";
import Footer from "./components/Footer";

function App() {
    return (
        <div id="home"className="App scroll-smooth overflow-x-hidden bg-black text-white">
            {/* <HeroSection /> */}

            <FloatingNav
                navItems={[
                    {link: "#club", icon: "🏠", name: "Club"},
                    {link: "#blockchain", icon: "🔗", name: "Blockchain"},
                    {link: "#evento", icon: "📅", name: "Events"},
                    {link: "#actividades", icon: "🎉", name: "Activities"},
                    {link: "#form", icon: "📝", name: "Form"},
                    // {link: "#ethereum", icon: "🪙", name: "Ethereum"},
                ]}
            />
            <LampContainer>
                <motion.h1
                    initial={{opacity: 0.5, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mb-1 text-white py-4 text-center text-4xl font-bold tracking-tight md:text-7xl"
                >
                    <img
                        src="/imagenes/Logo CB.png"
                        alt="The Blockchain Club logo"
                        className="mx-auto w-200 md:w-72 lg:w-96"
                    />
                </motion.h1>
                <motion.p
                    initial={{opacity: 0.5, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mb-[6rem] text-white text-center text-lg font-medium tracking-tight md:text-xl max-w-2xl"
                >
                    Discover the future of blockchain technology and join our community of innovators
                </motion.p>
            </LampContainer>

            { <div id="club" className="scroll-mt-20 my-16">
                <Club />
            </div> }

            <div id="blockchain" className="scroll-mt-20 my-16 px-6 md:px-16">
                <GlowingEffectDemoSecond />
            </div>

            <div id="evento" className="scroll-mt-20 my-16">
                <Evento />
            </div>

            {/* <div id="blockchain" className="scroll-mt-20">
                <BlockchainInfo />
            </div> */}

            <div id="actividades" className="scroll-mt-20 my-16">
                <AppleCardsCarouselDemo />
            </div>

            <div id="form" className="scroll-mt-20 my-16">
                <Formulario />
            </div>

            <Footer />

            {/*<div id="ethereum" className="scroll-mt-20">
                <EthereumInfo />
            </div>*/}
        </div>
    );
}

export default App;
