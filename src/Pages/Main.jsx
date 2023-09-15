import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/appContext";
import { ethers } from "ethers";
import abi from "../contracts/barkbone.json";
import depositAbi from "../contracts/deposit.json";

import { useAccount, useNetwork, useSigner, useSwitchNetwork } from "wagmi";

const Main = () => {
  const {
    ethBoneAdd,
    ethBarkAdd,
    ethProvider,
    ethLendContractAdd,
    shibProvider,
    shibBone,
    shibBark,
    shiLendContractAdd,
  } = useContext(AppContext);

  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();

  const [onEth, setonEth] = useState(true);

  const [depositInputAmount, setdepositInputAmount] = useState(0);
  const [withdrawInputAmount, setwithdrawInputAmount] = useState(0);

  const [boneBalance, setBoneBalance] = useState(0);
  const [barkBoneBalance, setbarkBoneBalance] = useState(0);
  const [boneDeposited, setBoneDeposited] = useState(0);

  const [shibboneBalance, setshibBoneBalance] = useState(0);
  const [shibbarkBoneBalance, setshibbarkBoneBalance] = useState(0);
  const [shibboneDeposited, setshibBoneDeposited] = useState(0);

  const ethBoneContract = new ethers.Contract(ethBoneAdd, abi, ethProvider);
  const ethBarkBoneContract = new ethers.Contract(ethBarkAdd, abi, ethProvider);

  const shibBoneContract = new ethers.Contract(shibBone, abi, shibProvider);
  const shibBarkBoneContract = new ethers.Contract(shibBark, abi, shibProvider);

  const ethLendContract = new ethers.Contract(
    ethLendContractAdd,
    depositAbi,
    ethProvider
  );

  const shibLendContract = new ethers.Contract(
    shiLendContractAdd,
    depositAbi,
    shibProvider
  );

  const getData = async () => {
    // Eth
    const boneBal = await ethBoneContract.balanceOf(address);
    const barkBal = await ethBarkBoneContract.balanceOf(address);
    const coll = await ethLendContract.collateral(address);

    setBoneBalance(Number(ethers.utils.formatUnits(boneBal, 18)).toFixed(2));
    setbarkBoneBalance(
      Number(ethers.utils.formatUnits(barkBal, 18)).toFixed(2)
    );
    setBoneDeposited(ethers.utils.formatEther(coll));

    // Shib
    const shibBoneBal = await shibBoneContract.balanceOf(address);
    const shibBarkBal = await shibBarkBoneContract.balanceOf(address);
    const shibCollateral = await shibLendContract.collateral(address);

    setshibBoneBalance(
      Number(ethers.utils.formatUnits(shibBoneBal, 18)).toFixed(2)
    );
    setshibbarkBoneBalance(
      Number(ethers.utils.formatUnits(shibBarkBal, 18)).toFixed(2)
    );
    setshibBoneDeposited(ethers.utils.formatEther(shibCollateral));
  };

  useEffect(() => {
    if (!isConnected) return;
    getData();
  }, []);

  const changeInputAmount = (e) => {
    setdepositInputAmount(e.target.value);
  };

  const changeDepositInputAmount = (e) => {
    setwithdrawInputAmount(e.target.value);
  };

  const depositBoneEth = async () => {
    console.log("eth");
    if (!isConnected) return;

    if (chain?.id !== 1) {
      switchNetwork?.(1);
    }

    const ethBoneContract = new ethers.Contract(ethBoneAdd, abi, signer);
    const ethDepositContract = new ethers.Contract(
      ethLendContractAdd,
      depositAbi,
      signer
    );

    try {
      const approve = await ethBoneContract.approve(
        ethLendContractAdd,
        ethers.utils.parseEther(depositInputAmount)
      );

      await approve.wait();

      const deposit = await ethDepositContract.deposit(
        ethers.utils.parseEther(depositInputAmount)
      );

      await deposit.wait();
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const depositBoneShib = async () => {
    console.log("shib");

    if (!isConnected) return;

    if (chain?.id !== 109) {
      switchNetwork?.(109);
    }

    // ethBoneAdd,
    // ethBarkAdd,
    // ethProvider,
    // ethLendContractAdd,
    // shibProvider,
    // shibBone,
    // shibBark,
    // shiLendContractAdd,

    const shibaBoneContract = new ethers.Contract(shibBone, abi, signer);
    const shiLendContract = new ethers.Contract(
      ethLendContractAdd,
      depositAbi,
      signer
    );

    try {
      const approve = await shibaBoneContract.approve(
        shiLendContractAdd,
        ethers.utils.parseEther(depositInputAmount)
      );

      await approve.wait();

      const deposit = await shiLendContract.deposit(
        ethers.utils.parseEther(depositInputAmount)
      );

      await deposit.wait();
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const withdrawBoneEth = async () => {
    console.log("Eth");

    if (!isConnected) return;

    if (chain?.id !== 1) {
      switchNetwork?.(1);
    }

    const ethBarkBoneContract = new ethers.Contract(ethBarkAdd, abi, signer);

    const ethDepositContract = new ethers.Contract(
      ethLendContractAdd,
      depositAbi,
      signer
    );

    try {
      const approve = await ethBarkBoneContract.approve(
        ethLendContractAdd,
        ethers.utils.parseEther(withdrawInputAmount)
      );

      await approve.wait();

      const withdraw = await ethDepositContract.withdraw(
        ethers.utils.parseEther(withdrawInputAmount)
      );

      await withdraw.wait();
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const withdrawBoneShib = async () => {
    console.log("shib");

    if (!isConnected) return;

    if (chain?.id !== 109) {
      switchNetwork?.(109);
    }

    // ethBoneAdd,
    // ethBarkAdd,
    // ethProvider,
    // ethLendContractAdd,
    // shibProvider,
    // shibBone,
    // shibBark,
    // shiLendContractAdd,

    const ethBarkBoneContract = new ethers.Contract(ethBarkAdd, abi, signer);

    const ethDepositContract = new ethers.Contract(
      ethLendContractAdd,
      depositAbi,
      signer
    );

    try {
      const approve = await ethBarkBoneContract.approve(
        ethLendContractAdd,
        ethers.utils.parseEther(withdrawInputAmount)
      );

      await approve.wait();

      const withdraw = await ethDepositContract.withdraw(
        ethers.utils.parseEther(withdrawInputAmount)
      );

      await withdraw.wait();
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full flex justify-center">
      <div className="h-screen w-full flex-col text-[50px] text-white items-center max-w-screen-xl flex justify-center">
        <h2>Get BarkBone Here</h2>

        <div className="text-lg flex gap-5 items-center">
          {onEth ? "Ethereum" : "Shibarium"}
          <button
            onClick={() => {
              setonEth((prev) => !prev);
            }}
            className=" border-2 p-1 px-3"
          >
            swicth network
          </button>
        </div>

        <div className="flex mt-10 gap-10 text-lg">
          <div className="flex flex-col items-center">
            <p>
              {onEth ? "Bone" : "Wraped Bone"} Balance:{" "}
              {onEth ? boneBalance : shibboneBalance}
            </p>
            <button
              onClick={onEth ? depositBoneEth : depositBoneShib}
              className="bg-[#253341] text text-[#e4e4e4] px-4 p-2 rounded"
            >
              Deposit Bone
            </button>
            <input
              onChange={changeInputAmount}
              value={depositInputAmount}
              type="number"
              min={0}
              className="px-3 mt-4 w-full max-w-[200px] outline-none flex items-center text-xl justify-center gap-2 bg-[#192530] text-gray-200 h-[60px] rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <p>
              BarkBone Balance: {onEth ? barkBoneBalance : shibbarkBoneBalance}
            </p>
            <button
              onClick={onEth ? withdrawBoneEth : withdrawBoneShib}
              className="bg-[#253341] text text-[#e4e4e4] px-4 p-2 rounded"
            >
              Withdraw Bone
            </button>
            <input
              onChange={changeDepositInputAmount}
              value={withdrawInputAmount}
              type="number"
              min={0}
              className="px-3 mt-4 w-full max-w-[200px] outline-none flex items-center text-xl justify-center gap-2 bg-[#192530] text-gray-200 h-[60px] rounded-lg"
            />
          </div>
        </div>

        <p className="text-xl mt-10">
          Bone Available to Withdraw:{" "}
          {onEth ? boneDeposited : shibboneDeposited}
        </p>
      </div>
    </section>
  );
};

export default Main;
