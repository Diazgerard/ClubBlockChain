import HeroSection from './components/HeroSection';
import BlockchainInfo from './components/BlockchainInfo';
import EthereumInfo from './components/EthereumInfo';

function App() {
  return (
    <div className="App scroll-smooth">
      <HeroSection />
      <BlockchainInfo />
      <EthereumInfo />
    </div>
  );
}

export default App;