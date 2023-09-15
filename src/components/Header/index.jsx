import { useAccount, useNetwork, useSigner, useSwitchNetwork } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { shortAdd } from "../../utils";

const Header = () => {
  const { open } = useWeb3Modal();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const { address, isConnected } = useAccount();

  const connectWallet = () => {
    if (chain?.id !== 1) {
      switchNetwork?.(1);
    }

    try {
      switchNetwork?.(1);
      open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="w-full flex justify-center">
      <div className="max-w-screen-2xl shadow-2xl border-b border-[#3e4e60] w-full flex justify-between p-5">
        <h1 className="flex items-center gap-4">
          <span className="text-2xl text-white"> Barkbone Lending</span>
        </h1>

        <div className="flex gap-10">
          {isConnected ? (
            <button className="bg-[#253341] text-[#e4e4e4] px-4 p-2 rounded">
              {shortAdd(address)}
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
      </div>
    </header>
  );
};

export default Header;
