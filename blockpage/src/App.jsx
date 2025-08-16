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

function App() {
    return (
        <div className="App scroll-smooth overflow-x-hidden bg-black text-white">
            {/* <HeroSection /> */}

            <FloatingNav
                navItems={[
                    {link: "#club", icon: "🏠", name: "Club"},
                    {link: "#evento", icon: "📅", name: "Evento"},
                    {link: "#blockchain", icon: "🔗", name: "Blockchain"},
                    {link: "#form", icon: "📝", name: "Formulario"},
                    {link: "#ethereum", icon: "🪙", name: "Ethereum"},
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
                    className="mt-1 text-white py-4 text-center text-4xl font-bold tracking-tight md:text-7xl"
                >
                    Welcome to <br /> The Blockchain Club
                </motion.h1>
                <motion.p
                    initial={{opacity: 0.5, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-6 text-white text-center text-lg font-medium tracking-tight md:text-xl max-w-2xl"
                >
                    Discover the future of blockchain technology and join our community of innovators
                </motion.p>
            </LampContainer>

            { <div id="club" className="scroll-mt-20">
                <Club />
            </div> }

            <div id="glowing-effect" className="scroll-mt-20">
                <GlowingEffectDemoSecond />
            </div>

            <div id="evento" className="scroll-mt-20">
                <Evento />
            </div>

            {/* <div id="blockchain" className="scroll-mt-20">
                <BlockchainInfo />
            </div> */}

            <div id="apple-cards" className="scroll-mt-20">
                <AppleCardsCarouselDemo />
            </div>

            <div id="form" className="scroll-mt-20">
                <Formulario />
            </div>

            {/*<div id="ethereum" className="scroll-mt-20">
                <EthereumInfo />
            </div>*/}
        </div>
    );
}

export default App;
