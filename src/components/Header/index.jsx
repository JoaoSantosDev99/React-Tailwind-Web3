import { useAccount, useNetwork, useSigner, useSwitchNetwork } from "wagmi";
import abi from "../../contracts/abi.json";
import { ethers } from "ethers";
import { useState } from "react";
import { useWeb3Modal } from "@web3modal/react";

const Header = () => {
  const [number, setNumber] = useState(0);
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();

  const contractAddress = "0x5741fc5de32497F4e69aAfd0EAA268129e3A501d";

  const contract = new ethers.Contract(contractAddress, abi, signer);

  const connectWallet = () => {
    console.log(chain?.id);

    try {
      switchNetwork?.(5);

      open();
    } catch (error) {
      console.log(error);
    }
  };

  const staticProvider = new ethers.providers.JsonRpcProvider(
    "https://rpc.ankr.com/eth_goerli"
  );

  // function calls
  const getNumber = async () => {
    const call = await contract.retrieve();
    const formatedCall = ethers.utils.formatUnits(call, 0);
    setNumber(formatedCall);
  };

  const changeNumber = async () => {
    if (signer === undefined) {
      return alert("Not connected");
    }

    try {
      const call = await contract.store(`${Number(number) + 2}`);
      await call.wait();
      alert("success!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <header className="w-full flex justify-center">
      <div className="max-w-screen-2xl shadow-2xl border-b border-[#3e4e60] w-full flex justify-between p-5">
        <h1 className="flex items-center gap-4">
          <div className="rounded-full bg-white h-12 w-12"></div>
          <span className="text-2xl text-white"> Name</span>
        </h1>

        {isConnected ? (
          <button className="bg-[#253341] text-[#e4e4e4] px-4 p-2 rounded">
            {address.slice(0, 5) + " ... " + address.slice(-5)}
          </button>
        ) : (
          <button
            onClick={connectWallet}
            className="bg-[#253341] text-[#e4e4e4] px-4 p-2 rounded"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
