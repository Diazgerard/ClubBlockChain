import HeroSection from './components/HeroSection';
import BlockchainInfo from './components/BlockchainInfo';
import EthereumInfo from './components/EthereumInfo';
import Formulario from './components/Formulario';
import Club from './components/Club';
import Evento from './components/Evento';
import { Vortex } from './components/UI/Vortex';
import { TracingBeam } from './components/UI/TracingBeam';

function App() {
  return (      
      <div className="App scroll-smooth overflow-x-hidden bg-black text-white">
        <HeroSection />

        <div id="club" className="scroll-mt-20">
          <Club />
        </div>
        
          <div id="evento" className="scroll-mt-20">
            <Evento />
          </div>

          <div id="blockchain" className="scroll-mt-20">
            <BlockchainInfo />
          </div>

          <div id="form" className="scroll-mt-20">
            <Formulario />
          </div>

          <div id="ethereum" className="scroll-mt-20">
            <EthereumInfo />
          </div>
      </div>
  );
}

export default App;
