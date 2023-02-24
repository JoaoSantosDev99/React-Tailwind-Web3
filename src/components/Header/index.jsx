import { Web3Button } from "@web3modal/react";
import { useAccount, useSigner } from "wagmi";
import abi from "../../contracts/abi.json";
import { ethers } from "ethers";
import { useState } from "react";

const Header = () => {
  const [number, setNumber] = useState(0);

  const contractAddress = "0x5741fc5de32497F4e69aAfd0EAA268129e3A501d";

  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();

  const presaleContract = new ethers.Contract(contractAddress, abi, signer);

  // function calls
  const getNumber = async () => {
    const call = await presaleContract.retrieve();
    const formatedCall = ethers.utils.formatUnits(call, 0);
    setNumber(formatedCall);
  };

  const changeNumber = async () => {
    // asks the user to connect if they're not already
    if (signer === undefined) {
      return alert("Not connected");
    }

    try {
      const call = await presaleContract.store(`${Number(number) + 2}`);
      await call.wait();
      alert("success!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <header>
      <div>
        {isConnected ? (
          <button className="bg-black text-white p-2 rounded">
            {address.slice(0, 4) + " ... " + address.slice(-4)}
          </button>
        ) : (
          <Web3Button />
        )}
      </div>

      <button onClick={getNumber} className="p-2 bg-orange-300">
        get number
      </button>
      <button onClick={changeNumber} className="p-2 bg-orange-300 ml-2">
        Number +2
      </button>

      <div>Number: {number === 0 ? "waiting" : number}</div>
    </header>
  );
};

export default Header;
