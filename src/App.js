import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import React from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "<YOUR_PROJECT_ID>" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  return (
    <React.Fragment>
      <WagmiConfig client={wagmiClient}>
        <div className="h-screen">React Web3 Template</div>
        <div className="h-screen">React Web3 Template</div>
        <div className="h-screen">React Web3 Template</div>
        <div className="h-screen">React Web3 Template</div>
        <div className="h-screen">React Web3 Template</div>
      </WagmiConfig>

      <Web3Modal
        projectId="<YOUR_PROJECT_ID>"
        ethereumClient={ethereumClient}
      />
    </React.Fragment>
  );
}

export default App;
