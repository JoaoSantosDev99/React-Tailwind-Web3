import CopyToClipboard from "react-copy-to-clipboard";
import back from "../arrow.png";
import lock from "../padlock.png";
import copy from "../copy.png";
import checked from "../checked.png";
import refresh from "../refresh.png";
import { useState } from "react";

const Main = () => {
  const [copied, setCopied] = useState(false);

  const changeCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <section className="w-full min-h-screen text-white flex justify-center items-center">
      <div className="bg-[#1E2023] rounded-[20px] w-[576px] p-[24px]">
        {/* Back and Lock */}
        <div className="w-full flex justify-between">
          <button className="flex justify-center items-center rounded-full p-2 hover:bg-[#303030] transition-all duration-300">
            <img
              src={back}
              alt=""
              className="w-6"
            />
          </button>

          <button className="flex items-center gap-3 py-2 px-6 bg-[#55A0FD] rounded-[30px]">
            {" "}
            <img
              src={lock}
              alt=""
              className="w-5"
            />{" "}
            Lock Liquidity
          </button>
        </div>

        {/* Stats */}
        <div className="flex w-full justify-center mt-5 gap-3">
          <span>Uniswap V2 pair:</span>
          <CopyToClipboard
            text={"addressGoesHere"}
            onCopy={changeCopied}
            className="cursor-pointer flex items-center gap-2"
          >
            <span className="flex gap-2 items-center">
              0x491a...DDB42
              <img
                src={copied ? checked : copy}
                alt=""
                className="w-5"
              />
            </span>
          </CopyToClipboard>{" "}
        </div>

        {/* text */}
        <div className="flex flex-col mt-5 text-[20px]">
          <span>1 DVD = 0.0000000000000031 WETH </span>
          <span> 1 WETH = 325.17 T DVD</span>
        </div>

        {/* Graph */}
        <div className="flex flex-col mt-10">
          <span className="text-center text-[#B9B3AE]">Locked Liquidity</span>
          <span className="text-center text-[30px] font-bold">98.9%</span>

          <div className="flex items-center justify-between mt-5">
            <div className="rounded-full border-[4px] w-20 h-20 p-2"></div>

            <span className="w-[140px] h-1 border-2 border-white"></span>

            <div className="rounded-full border-[4px] w-20 h-20 p-2"></div>

            <span className="w-[140px] h-1 border-2 border-white"></span>

            <div className="rounded-full border-[4px] w-20 h-20 p-2"></div>
          </div>

          <div className="flex justify-between w-full mt-3">
            <div className="flex flex-col items-start">
              <span className="text-[28px]">Name Here</span>
              <span>352.69 T</span>
              <span>356.26 T (84.6%)</span>
              <div className="flex gap-2 mt-2">
                <span className="rounded-full w-10 h-10 bg-white"></span>
                <span className="rounded-full w-10 h-10 bg-white"></span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[28px]">Name Here</span>
              <span>352.69 T</span>
              <span>356.26 T (84.6%)</span>
              <div className="flex gap-2 mt-2">
                <span className="rounded-full w-10 h-10 bg-white"></span>
                <span className="rounded-full w-10 h-10 bg-white"></span>
              </div>
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="flex items-center justify-center py-3 border-t border-b mt-8 border-white">
          <img
            src={refresh}
            alt=""
            className="w-7 h-7 mr-3"
          />
          <button className="flex items-center gap-3 py-2 px-6 hover:bg-[#303030] transition-all duration-300 rounded-[30px]">
            Etherscan
          </button>
          <button className="flex items-center gap-3 py-2 px-6 hover:bg-[#303030] transition-all duration-300 rounded-[30px]">
            Uniswap V2
          </button>
          <button className="flex items-center gap-3 py-2 px-6 hover:bg-[#303030] transition-all duration-300 rounded-[30px]">
            Dextools
          </button>
        </div>

        {/* Reference */}
        <div className="flex flex-col text-[12px] mt-2">
          <div className="flex justify-between w-full">
            <span>Total LP tokens</span>
            <span>19,458,185.9381</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Total locked LP</span>
            <span>19,263,604.0787</span>
          </div>

          <span className="text-[#c63939] text-[16px]">
            Uniswap V2 price API is down, dollar value not determinable
          </span>
        </div>

        {/* Text */}
        <div className="mt-5">
          <h2 className="text-[20px] font-bold">Liquidity Locks</h2>
          <p>
            Please be aware only the univ2 tokens are locked. Not the actual
            dollar value. This changes as people trade. More liquidity tokens
            are also minted as people add liquidity to the pool.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10">
          <div className="flex justify-between">
            <span>Value</span>
            <span>Unlock date</span>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <span>$0</span>
              <span>19,263,604.0787 univ2</span>
            </div>

            <div className="flex flex-col items-end">
              <span className="flex gap-2">
                in a month{" "}
                <img
                  src={lock}
                  alt=""
                  className="w-5 h-5"
                />
              </span>
              <span>22/11/2023 17:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
