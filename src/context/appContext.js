import { ethers } from "ethers";
import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const ethProvider = new ethers.providers.JsonRpcProvider(
    "https://eth.llamarpc.com"
  );

  const shibProvider = new ethers.providers.JsonRpcProvider(
    "https://www.shibrpc.com"
  );

  const ethLendContractAdd = "0xD3Fb70aD50Dc95DC6CBcdAD6e1948f685ACa4D67";
  const ethBoneAdd = "0x9813037ee2218799597d83D4a5B6F3b6778218d9";
  const ethBarkAdd = "0x7191aF14cfa2F2257fc487DD6676f079d5ed1de4";

  const shiLendContractAdd = "0xd21eEc8bA3031439B5734Ad9fACAA5558C97Ec15";
  const shibBone = "0x213c25900f365F1BE338Df478CD82beF7Fd43F85";
  const shibBark = "0x487f6F26f38Da54aB99203297b318D26639a27AD";

  return (
    <AppContext.Provider
      value={{
        ethBoneAdd,
        ethBarkAdd,
        ethProvider,
        ethLendContractAdd,
        shibProvider,
        shiLendContractAdd,
        shibBark,
        shibBone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
