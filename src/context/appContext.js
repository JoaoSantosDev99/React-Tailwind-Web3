import { ethers } from "ethers";
import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const contractAddress = "";
  const contractABI = "";

  const staticProvider = new ethers.providers.JsonRpcProvider(
    "https://rpc.ankr.com/eth_goerli"
  );

  return (
    <AppContext.Provider
      value={{
        contractAddress,
        contractABI,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
