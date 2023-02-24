import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import React from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import Header from "./components/Header";

const chains = [polygonMumbai];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "91c6a62977db67a01d779b76bc33d38f" }),
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
        <Header />
      </WagmiConfig>

      <Web3Modal
        projectId="91c6a62977db67a01d779b76bc33d38f"
        ethereumClient={ethereumClient}
      />
    </React.Fragment>
  );
}

export default App;
